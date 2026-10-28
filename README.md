# iMovies — MERN Movie Ticket Booking

A full-stack movie booking starter built with React + Vite, Express, MongoDB, and JWT authentication.

## Features
- Responsive movie discovery/search and movie detail views
- Register/login with hashed passwords and JWT
- Movie/showtime API and demo seed data
- Seat selection UI and booking API with server-side duplicate-seat protection
- User booking history
- Admin-only movie creation endpoint
- `.env.example`, health endpoint, and setup instructions

## Requirements
- Node.js 18+
- MongoDB local instance or MongoDB Atlas connection string

## Run locally
### Backend
```bash
cd server
cp .env.example .env
npm install
npm run seed
npm run dev
```
Edit `server/.env` and set `MONGO_URI` and a long random `JWT_SECRET`.

### Frontend (second terminal)
```bash
cd client
npm install
npm run dev
```
Open the Vite URL printed in the terminal (normally http://localhost:5173).

## Demo admin
After registering a user, set that user's `role` to `admin` in MongoDB to access the admin-only create-movie API. Do not use demo credentials or a weak JWT secret in production.

## Notes
This is an educational foundation. Payment processing is not connected; booking confirmation is created without charging money.