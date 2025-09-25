# Notes App – Two-Microservice Demo

A minimal example to learn **Docker** and **microservices**.  
This app has **two containers**:

- **notes-api**: FastAPI backend serving a static list of notes.
- **notes-ui**: React frontend displaying those notes.

---

## Quick Start

### 1. Clone & Build
```bash
git clone <your-repo-url> notes-app
cd notes-app
docker-compose up --build
2. Access the Services
Frontend (React): http://localhost:5173

API (FastAPI): http://localhost:8000/notes

Project Structure

notes-app/
├─ notes-api/        # FastAPI backend
│  ├─ app.py
│  ├─ requirements.txt
│  └─ Dockerfile
├─ notes-ui/         # React frontend (built with Vite)
│  ├─ src/App.jsx
│  ├─ package.json
│  └─ Dockerfile
└─ docker-compose.yml

🧩 How It Works

notes-api returns a hard-coded JSON array of notes at /notes.

notes-ui fetches that endpoint and renders the notes.

docker-compose creates a shared network so the frontend can reach the backend
using the hostname notes-api.

🛠 Development Tips

To add new endpoints, edit notes-api/app.py.

For frontend changes, edit files in notes-ui/src/ and rebuild.

🛠 Next Steps

This starter is intentionally simple.
Ideas to expand:

Add a database (PostgreSQL, SQLite, etc.).

Create POST/PUT/DELETE endpoints for full CRUD.

Add environment variables for configurable API URLs.