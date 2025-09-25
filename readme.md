# 🐳 learndocker

A tiny **two-microservice** demo to learn Docker and docker-compose.  
The project runs a **FastAPI backend** and a **React frontend**, each in its own container.

> 📂 GitHub Repo: [martalexaa/learndocker](https://github.com/martalexaa/learndocker)

---

## ✨ Overview

- **Backend – notes-api**  
  A FastAPI service exposing a single endpoint `/notes` that returns a static JSON list.

- **Frontend – notes-ui**  
  A React (Vite) app that fetches the notes from the API and displays them.

- **docker-compose**  
  Spins up both services with one command, automatically creating a shared network.

---

## 🚀 Quick Start

Clone the repo and launch the stack:

```bash
git clone https://github.com/martalexaa/learndocker.git
cd learndocker
docker-compose up --build

Access the services:

Frontend: http://localhost:5173
API: http://localhost:8000/notes

Docker will build both images on first run and reuse them next time.

---

📖 FastAPI Documentation

FastAPI provides built-in interactive docs:

Swagger UI (interactive): http://localhost:8000/docs
ReDoc (alternative view): http://localhost:8000/redoc

Open either URL in a browser while the stack is running to explore endpoints and send test requests directly.

---

🗂 Project Structure

learndocker/
├─ notes-api/           # FastAPI backend
│  ├─ app.py
│  ├─ requirements.txt
│  └─ Dockerfile
├─ notes-ui/            # React frontend (Vite)
│  ├─ src/
│  │   ├─ App.jsx
│  │   └─ main.jsx
│  ├─ package.json
│  └─ Dockerfile
└─ docker-compose.yml

🛠 Development Tips

Backend hot-reload:
Run locally without Docker:

cd notes-api
uvicorn app:app --reload

Frontend dev mode:

cd notes-ui
npm install
npm run dev

If you modify code while containers are running, rebuild with:

docker-compose up --build

🌱 Next Steps

This starter is intentionally simple. Possible enhancements:

Add a database (e.g., PostgreSQL or SQLite) for persistent notes.

Implement full CRUD (create, update, delete) API endpoints.

Use environment variables for configurable API URLs.

