from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

notes = [{"id": 1, "text": "Hello from FastAPI!"}]

@app.get("/notes")
def get_notes():
    return notes