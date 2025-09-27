import os
import asyncio
from fastapi import FastAPI
from pydantic import BaseModel

from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware

