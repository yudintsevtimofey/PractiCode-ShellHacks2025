import os
import asyncio
from fastapi import FastAPI
from pydantic import BaseModel

from google.adk.agents import Agent
from google.adk.sessions import InMemorySessionService
from google.adk.runners import Runner
from google.genai import types
from google.adk.tools import google_search

# --- Setup ---
os.environ["GOOGLE_API_KEY"] = os.getenv("GOOGLE_API_KEY", "YOUR_KEY")
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

APP_NAME = "Code Practice"
USER_ID = "user1234"
SESSION_ID = "1234"

async def setup_session_and_runner():
    session_service = InMemorySessionService()
    session = await session_service.create_session(
        app_name=APP_NAME, user_id=USER_ID, session_id=SESSION_ID
    )
    runner = Runner(agent=programming_agent, app_name=APP_NAME, session_service=session_service)
    return session, runner


# --- FastAPI App ---
app = FastAPI()

class ProblemRequest(BaseModel):
    difficulty: str


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