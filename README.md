**INFR3120-Fall25-Project**
SkillSwap - Peer-to-Peer Micro-Tutoring Platform
PART 1 – First Release
Project Overview

SkillSwap is a web application designed to help students share knowledge through peer-to-peer micro-tutoring sessions. This project was developed as part of INFR3120 – Web and Scripting (Fall 2025), Group 48.

The platform allows users to:

Create skill sessions with details such as title, description, duration, offered by, and availability

View active tutoring sessions in a dashboard table

Manage sessions with basic Create and Delete functionality

Prepare the project structure for future backend CRUD integration

Team Member Roles – Part 1
1. Dhivyarackshana Sridharan – Frontend Developer

Responsibilities:
Created landing page with project title and team logo
Added tagline: “Peer-to-peer micro-tutoring for students”
Added “Create Skill Session” hero button and linked it to form toggle logic
Designed session form (title, description, duration, offeredBy, availability
Implemented input validation and confirmation popup
Reset form after form submission
Added comments explaining frontend logic
Documented frontend structure in README
Presented frontend code in demo video

2. Isimbi Rehema – Backend Developer

Responsibilities:
Designed JSON/MongoDB-ready data model for skill sessions
Implemented Create, Read, Update, Delete routes (Node.js + Express)
Connected backend to frontend through RESTful API endpoints
Tested data flow using Postman
Added backend comments and endpoint documentation
Presented backend portion during demo

3. Richie Bazuaye – Deployment Lead

Responsibilities:
Tested all CRUD operations end-to-end
Helped identify and resolve bugs
Prepared the application for deployment (Render, Netlify, Vercel)
Recorded and edited team demo video
Presented dashboard and deployment process
Documented deployment steps and project testing

Part 1 File Structure
Basic Version
INFR3120-Fall25-Project/
  index.html
  style.css
  script.js
  assets/
  README.md
React Version
INFR3120-Fall25-Project/
  frontend/
    src/
      App.js
      SessionForm.jsx
      SessionTable.jsx
      SkillSwap.css
      index.js
    public/
      index.html
  assets/
  README.md

Tools and Technologies (Part 1)
HTML5
CSS3
JavaScript (ES6)
React.js
GitHub
Learning Resources
W3Schools — HTML, CSS, JS
YouTube tutorials — form validation, CRUD basics
Developer blogs — UI + table design
SkillUp Course: Angular Basics (Simplilearn, 3 Hours)

PART 2 – Authentication Release
Backend + Frontend Integration + Deployment

Overview of Part 2
Part 2 includes full authentication, backend-frontend connection, protected routes, and deployment.
This includes:
User registration and login
JWT-based authentication
Protected routes (Create + Delete session)
MongoDB Atlas integration
Updated React frontend with authentication state
Deployment of both backend and frontend


**Team Member Roles – Part 2**

1. Dhivyarackshana – Full-Stack Lead

Frontend:
Built Login and Register pages
Added authentication state and protected pages
Updated navigation bar (Login/Logout toggle)
Connected React frontend to backend using Axios
Configured .env.production for Netlify

Backend:
Created /register and /login routes
Added password hashing (bcrypt)
Added JWT token creation
Implemented authentication middleware
Connected backend to MongoDB Atlas
Implemented protected CRUD operations

Integration:
Ensured smooth frontend-backend communication
Tested full login → create → delete workflow

**2. Isimbi Rehema – Backend Developer**
Built Mongoose User and Session models
Implemented session CRUD routes
Assisted with authentication middleware
Tested endpoints using Postman
Documented backend route flow

3. Richie Bazuaye – Deployment and Documentation Lead
Deployed backend on Render and configured environment variables
Deployed frontend on Netlify and connected it to backend API
Organized GitHub repository structure
Created slide deck for Part 2
Wrote documentation for deployment setup


**Backend Features**
Authentication:
Register user
Login user
Password hashing (bcrypt)
JWT token generation
Auth middleware

**Session Management:**
Create session (protected)
View sessions
Delete session (protected)

**Database:**
MongoDB Atlas
Mongoose models

**Frontend Features**

Authentication UI:
Login page
Register page
Error messages + validation

Protected Features:
Create session only when logged in
Delete session only when authenticated

Navigation Logic:
Shows Login when logged out
Shows Logout when logged in

**Deployment Links**

Frontend (Netlify):
[https://skillswapfrontend.netlify.app](https://skillswapfrontend.netlify.app/#/)

Backend (Render):
[https://skillswap-backend-esp6.onrender.com](https://skillswap-backend-esp6.onrender.com/)

Updated Project Structure (Part 2)
INFR3120-Fall25-Project/

  SkillSwap-Backend/
    server.js
    routes/
    controllers/
    models/
    middleware/
    package.json

  SkillSwap-Frontend/
    src/
    public/
    build/
    .env.production
    package.json

How to Run the Project Locally
Backend
cd SkillSwap-Backend
npm install
create .env file
node server.js

**Frontend**
cd SkillSwap-Frontend
npm install
npm start

**References**
W3Schools – JavaScript Validation
W3Schools – HTML & CSS Layout
MDN Web Docs – Fetch API, Promises, Express.js
React Login + Registration Tutorials (YouTube, Traversy Media)
Node.js + Express + MongoDB CRUD Tutorials

MongoDB Mongoose Documentation

Netlify Documentation – Deploying React Apps
