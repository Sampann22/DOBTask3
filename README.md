# MLM Dashboard (Frontend)

## Tech Stack
- React (Vite)
- Tailwind CSS
- React Router
- Recharts
- Axios

## Features
- User Dashboard with earnings charts
- 3-level referral downline tree
- Admin dashboard with user management
- Backend integration using JWT

## Backend
Connected to Node.js + Express + MongoDB API  
(see backend repo)

## Setup
```bash
npm install
npm run dev

## API Integration
- Frontend integrates with backend using Axios
- JWT authentication is implemented
- Unauthorized (401) responses are handled and logged

## Scope Notes
- Charts currently use sample data
- Authentication UI can be added as a next step
- Focus was on architecture, integration, and correctness