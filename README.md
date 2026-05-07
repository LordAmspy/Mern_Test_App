
# MERN Backend Day 1-9

## Topics Covered

- Express Server
- MongoDB + Mongoose
- CRUD APIs
- Middleware
- JWT Authentication
- Password Hashing
- Protected Routes
- Role-Based Access Control

## Run Project

npm install
npm run dev

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
