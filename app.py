import os
import asyncio
from fastapi import FastAPI
from pydantic import BaseModel

from google.adk.agents import Agent
from google.adk.sessions import InMemorySessionService
from google.adk.runners import Runner
from google.genai import types
from google.adk.tools import google_search

from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware



# --- Setup ---
os.environ["GOOGLE_API_KEY"] = "AIzaSyCLnW9hSvWqmYj4i659G3MJhGUZkn-gYKM"
os.environ["GOOGLE_GENAI_USE_VERTEXAI"] = "False"

MODEL_GEMINI_2_0_FLASH = "gemini-2.0-flash"
AGENT_MODEL = MODEL_GEMINI_2_0_FLASH

programming_agent = Agent(
    name="programmingProblems_agent_v1",
    model=AGENT_MODEL,
    description="Provides programming problems.",
    instruction=(
        "You are a programming questions generator. "
        "When getting a difficulty level, create a problem fitting that difficulty level. "
        "You should only answer with the problem statement. "
        "Answer should be in text format. "
        "Do not include any explanations or additional text."
    ),
    tools=[google_search],
)

grading_agent = Agent(
    name="grading_agent_v1",
    model=AGENT_MODEL,
    description="Grades programming problems.",
    instruction=(
        "You are an assistant that grades programming problems. "
        "You will get the question under 'question:'. "
        "You will get answer under 'answer:'. "
        "You must grade it by saying 'pass' or 'fail'. "
        "Do not include any explanations or additional text."
    ),
    tools=[google_search],
)

APP_NAME = "Code Practice"
USER_ID = "user1234"
SESSION_ID = "1234"

# --- FastAPI App ---
app = FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # or ["*"] for all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return HTMLResponse("<h1>Hello! Your backend is running</h1>")


async def setup_session_and_runner():
    session_service = InMemorySessionService()
    session = await session_service.create_session(
        app_name=APP_NAME, user_id=USER_ID, session_id=SESSION_ID
    )
    runner = Runner(agent=programming_agent, app_name=APP_NAME, session_service=session_service)
    return session, runner




class ProblemRequest(BaseModel):
    difficulty: str

class GradeRequest(BaseModel):
    question: str
    answer: str


@app.post("/grade-problem")
async def generate_problem(req: GradeRequest):
    """Endpoint React will call."""
    content = types.Content(role='user', parts=[types.Part(text= "question:\n" + req.question + "\nanswer:\n" + req.answer)])
    session, runner = await setup_session_and_runner()

    final_response = None
    async for event in runner.run_async(
        user_id=USER_ID,
        session_id=SESSION_ID,
        new_message=content
    ):
        if event.is_final_response() and event.content and event.content.parts:
            final_response = event.content.parts[0].text

    return {"grade": final_response}


@app.post("/generate-problem")
async def generate_problem(req: ProblemRequest):
    """Endpoint React will call."""
    content = types.Content(role='user', parts=[types.Part(text=req.difficulty)])
    session, runner = await setup_session_and_runner()

    final_response = None
    async for event in runner.run_async(
        user_id=USER_ID,
        session_id=SESSION_ID,
        new_message=content
    ):
        if event.is_final_response() and event.content and event.content.parts:
            final_response = event.content.parts[0].text

    return {"problem": final_response}



'''
var difficultyChoice = "Beginner Short Answer"; // Example difficulty level

var generateProblemRequest = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ difficulty: difficultyChoice })
};

const response = await fetch('http://localhost:8000/generate-problem', generateProblemRequest)


var gradeProblemRequest = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question: response, answer: userAnswer }) // get userAnswer from user input, somehow
};

const gradeResponse = await fetch('http://localhost:8000/grade-problem', gradeProblemRequest)

if (gradeResponse.grade.trim().toLowerCase() === "pass") {
    // User passed the problem
    increase progress bar
} else {
    // User failed the problem
}


'''