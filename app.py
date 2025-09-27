import os
import asyncio
from google.adk.agents import Agent
from google.adk.models.lite_llm import LiteLlm # For multi-model support
from google.adk.sessions import InMemorySessionService
from google.adk.runners import Runner
from google.genai import types # For creating message Content/Parts
from google.adk.tools import google_search

import warnings
# Ignore all warnings
warnings.filterwarnings("ignore")

import logging
logging.basicConfig(level=logging.ERROR)

print("Libraries imported.")


os.environ["GOOGLE_API_KEY"] = "AIzaSyCLnW9hSvWqmYj4i659G3MJhGUZkn-gYKM"

print("API Keys Set:")
print(f"Google API Key set: {'Yes' if os.environ.get('GOOGLE_API_KEY') and os.environ['GOOGLE_API_KEY'] != 'YOUR_GOOGLE_API_KEY' else 'No (REPLACE PLACEHOLDER!)'}")

os.environ["GOOGLE_GENAI_USE_VERTEXAI"] = "False"

MODEL_GEMINI_2_0_FLASH = "gemini-2.0-flash"

AGENT_MODEL = MODEL_GEMINI_2_0_FLASH


programming_agent = Agent(
    name="programmingProblems_agent_v1",
    model=AGENT_MODEL, # Can be a string for Gemini or a LiteLlm object
    description="Provides programming problems.",
    instruction="You are a programming questions generator. "
                "When getting a difficulty level, "
                "create a problem fitting that difficulty level. "
                "You should only answer with the problem statement. "
                "Answer should be in text format. "
                "Do not include any explanations or additional text.",
    tools=[google_search], # Pass the function directly
)




APP_NAME="Code Practice"
USER_ID="user1234"
SESSION_ID="1234"


# Session and Runner
async def setup_session_and_runner():
    session_service = InMemorySessionService()
    session = await session_service.create_session(app_name=APP_NAME, user_id=USER_ID, session_id=SESSION_ID)
    runner = Runner(agent=programming_agent, app_name=APP_NAME, session_service=session_service)
    return session, runner

# Agent Interaction
async def call_agent_async(query):
    content = types.Content(role='user', parts=[types.Part(text=query)])
    session, runner = await setup_session_and_runner()
    async for event in runner.run_async(user_id=USER_ID,session_id=SESSION_ID,new_message=content):
        if event.is_final_response():
            if event.content and event.content.parts:
                final_response = event.content.parts[0].text
                print("Agent Response:", final_response)

# Note: In Colab, you can directly use 'await' at the top level.
# If running this code as a standalone Python script, you'll need to use asyncio.run() or manage the event loop.
asyncio.run(call_agent_async("Beginner short answer problem"))
