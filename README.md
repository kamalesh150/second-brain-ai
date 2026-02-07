# 🧠 Second Brain AI

A full-stack AI-powered knowledge management system built using **Next.js (App Router)**, **Supabase (PostgreSQL)**, and deployed on **Vercel**.

🔗 **Live Demo**  
https://second-brain-666ughjzu-kamalesh-gaddams-projects.vercel.app/

---

## 📌 Project Overview

Second Brain AI is a production-ready full-stack web application that allows users to:

- Store structured notes
- Automatically generate summaries
- Search notes efficiently
- Edit and delete notes
- Interact with a RESTful backend API

This project demonstrates end-to-end full-stack engineering including:

- Frontend architecture
- Backend API design
- Database schema design
- Environment configuration
- Production deployment
- Clean documentation

---

## 🚀 Features

### Core Functionality

- Create notes
- Auto-generate summaries
- Edit notes
- Delete notes
- Search notes (case-insensitive filtering)
- Real-time UI updates after CRUD operations
- RESTful API backend
- Supabase PostgreSQL integration
- Production deployment

### Engineering Highlights

- Next.js 16 (App Router architecture)
- TypeScript implementation
- Tailwind CSS styling
- Modular backend structure
- Clean REST API design
- Secure environment configuration
- Cloud deployment via Vercel

---

## 🏗 Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Hooks for state management

### Backend
- Next.js API Routes
- Supabase (PostgreSQL)
- REST-based CRUD operations

### Deployment
- Vercel (Production hosting)

---

## 📡 API Endpoints

### GET `/api/notes`
Fetch all notes ordered by creation date (descending)

### GET `/api/notes?q=searchTerm`
Search notes by content using case-insensitive filtering

### POST `/api/notes`
Create a new note

Request Body:
```json
{
  "title": "string",
  "content": "string",
  "type": "note"
}
