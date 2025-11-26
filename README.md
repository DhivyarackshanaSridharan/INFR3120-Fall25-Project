# INFR3120-Fall25-Project
# SkillSwap – Peer-to-Peer Micro-Tutoring Platform

## Credits
- Frontend Developer: Dhivyarackshana (Landing page, form UI, validation, dashboard)

## Project Overview
SkillSwap is a web application designed to help students share knowledge through peer-to-peer micro-tutoring sessions.  
This project was developed as part of (INFR3120 – Web and Scripting - Fall 2025), Group 48.

The platform allows users to:
- Create skill sessions with details such as title, description, duration, offered by, and availability.
- View active sessions in a dashboard table.
- Manage sessions with basic Create and Delete functionality (Edit placeholder included).
- Prepare for backend integration to enable full CRUD operations.

## Frontend Contribution (Dhivyarackshana)
As the "frontend developer", my responsibilities included:

  Landing Page (Step 5.1):
  - Added site name "SkillSwap" and team logo.
  - Included tagline: *Peer-to-peer micro-tutoring for students*.

  Hero Button + Form UI (Step 5.2):
  - Implemented a hero button labeled *Create Skill Session*.
  - Built a form with required fields: Title, Description, Duration, Offered By, Availability.

  Frontend Logic + Validation (Step 5.3):
  - Added JavaScript to toggle form visibility.
  - Implemented input validation to ensure all fields are filled.
  - Added confirmation popup (“Are you sure you want to submit this session?”).
  - Reset and hide form after submission.

  Dashboard/Table View (Step 5.4):
  - Created a table to display active skill sessions.
  - Added "Delete" functionality (frontend only).
  - Added "Edit" placeholder (to be connected to backend later).

## File Structure

#### This was created just for a practice the below one is the one is the actual file format for the project ####
INFR3120-Fall25-Project/ 
index.html # Landing page, hero button, form, dashboard 
style.css # Styling for layout, form, table, and buttons 
script.js # Frontend logic: validation, confirmation, table CRUD 
README.md # Documentation of project and contributions 
assets/ # Logo and other static files

#### The actual file structure ####
INFR3120-Fall25-Project/  

 frontend/  
   src/  
        App.js              # Main React entry point  
        SessionForm.jsx     # Form component  
        SessionTable.jsx    # Table component  
        SkillSwap.css       # Styling for layout, form, table, and buttons  
        index.js            # React DOM rendering  
   public/  
        index.html          # React root HTML  

  assets/                   # Logo and other static files  
  README.md                 # Documentation of project and contributions  

## Tools & Technologies
- HTML5 – Structure of the web pages
- CSS3 – Styling and layout
- JavaScript (ES6) – Interactivity, validation, and dashboard logic
- GitHub – Version control and collaboration

## Learning Resources
During development, I referred to:
- [W3Schools](https://www.w3schools.com/) – for HTML, CSS, and JavaScript syntax examples
- YouTube tutorials – for practical demonstrations of form validation and CRUD logic
- Various developer blogs and websites – for best practices in frontend design and table management

---

## SkillUpCourse Identification (for submission)
- **Name of Course:** Angular Basics Free Course with Certification  
- **Host Institution:** Simplilearn (SkillUp platform)  
- **Link:** [Simplilearn Angular Basics Free Course](https://www.simplilearn.com/skillup-free-online-courses)  
- **Length/Time:** 3 hours of self-paced video lessons  
- **Note:** Completed as part of Tutorial Activity 3 to earn the certificate. This course also provided guidance during project development.

---

## DEMO Video Link:
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 946e9de (Final SkillSwap frontend)
