
# MERN Fullstack Day 1-14

## Topics Covered
- React + Vite
- Tailwind CSS
- React Router
- Layout System
- Navigation

## Run Project

cd frontend

npm install

npm run dev

## Features
- Login/Register UI
- JWT Authentication
- Protected Dashboard
- React Router
- LocalStorage Session

## Run Backend

## Create .env

PORT=5000
MONGO_URI=your_connection_string
JWT_SECRET=your_secret_key

## Authentication Routes

POST /api/auth/register
POST /api/auth/login

## Protected Routes

GET /api/users
PUT /api/users/:id
DELETE /api/users/:id