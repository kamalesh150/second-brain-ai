# 🧠 Second Brain AI

A Full-Stack AI-Powered Knowledge Management System built using Next.js, Supabase, and OpenAI.

Live Demo:  
👉 https://second-brain-666ughjzu-kamalesh-gaddams-projects.vercel.app/

---

## 🚀 Features

- Create notes
- Edit notes
- Delete notes
- Search notes
- AI-style summaries (basic auto-summary logic)
- REST API backend
- Supabase PostgreSQL database integration
- Production deployment on Vercel

---

## 🏗 Tech Stack

Frontend:
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS

Backend:
- Next.js API Routes
- Supabase (PostgreSQL)

Deployment:
- Vercel

---

## 📡 API Endpoints

GET `/api/notes`  
Fetch all notes

GET `/api/notes?q=searchTerm`  
Search notes by content

POST `/api/notes`  
Create a new note

PUT `/api/notes`  
Update a note

DELETE `/api/notes`  
Delete a note

---

## 🗄 Database Schema

Table: `knowledge_items`

Columns:
- id (uuid, primary key)
- title (text)
- content (text)
- summary (text)
- type (text)
- tags (text[])
- created_at (timestamp)

---

## ⚙️ How to Run Locally

1. Clone the repository

