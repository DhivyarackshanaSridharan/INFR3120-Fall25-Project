<<<<<<< HEAD
# INFR3120-Fall25-Project
# SkillSwap – Peer-to-Peer Micro-Tutoring Platform
# **README.md **  
## **Overview**
SkillSwap is a full‑stack web application that allows users to register, log in, and browse available skill‑sharing sessions.  
The system includes:

- A cloud‑hosted backend (Node.js + Express)  
- A cloud‑hosted NoSQL database (MongoDB Atlas)  
- A deployed frontend  
- Fully functional authentication  
- Live API integration  
- Clean UI and responsive design  

This submission represents our **final release**, including deployment, testing, and a full demonstration video.


# ## **Live Deployment Links**

### **Frontend:**  
https://skillswapfrontend-1oc2.onrender.com/

### **Backend:**  
https://skillswapbackend-f83q.onrender.com/ 


# ## **Group Members & Contributions**

### ### **Dhivyarackshana (Frontend Developer)**
**Responsibilities:**
- Designed and implemented the entire frontend UI  
- Built Login, Register, and Dashboard pages  
- Implemented form validation and error handling  
- Integrated frontend with backend REST APIs  
- Tested all API calls using browser dev tools  
- Deployed the frontend to cloud hosting  
- Ensured UI consistency, navigation flow, and responsiveness  

**Key Files:**
- `/frontend/index.html`  
- `/frontend/login.js`  
- `/frontend/register.js`  
- `/frontend/dashboard.js`  
- `/frontend/styles.css`  



### ### **Isimbi – Backend Developer**
**Responsibilities:**
- Built Node.js + Express backend  
- Implemented authentication (register + login)  
- Connected backend to MongoDB Atlas  
- Created sessions API endpoint  
- Added validation, hashing, and error handling  
- Configured CORS for cross‑domain communication  
- Deployed backend to cloud provider  

**Key Files:**
- `/backend/server.js`  
- `/backend/routes/auth.js`  
- `/backend/routes/sessions.js`  
- `/backend/models/User.js`  
- `/backend/models/Session.js`  



### ### ** Richie – Testing, Debugging & Deployment Integration**
**Responsibilities:**
- Tested all frontend–backend interactions  
- Used Postman + browser network tab for API testing  
- Debugged CORS issues, URL mismatches, and validation errors  
- Verified deployment logs and database connectivity  
- Performed final system testing on live URLs  
- Ensured the entire workflow (register → login → dashboard) worked smoothly  

**Key Tasks:**
- API testing  
- Deployment verification  
- Error tracing  
- Final QA  



# ## **Technologies Used**

### **Frontend**
- HTML5  
- CSS3  
- JavaScript  
- Fetch API / Axios  
- Responsive design principles  

### **Backend**
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- bcrypt (password hashing)  
- CORS middleware  

### **Deployment**
- Render 
- MongoDB Atlas  
- GitHub for version control  



# ## **How to Run the Project Locally**

### **1. Clone the repository**

git clone https://github.com/DhivyarackshanaSridharan/INFR3120-Fall25-Project.git


### **2. Install backend dependencies**

cd backend
npm install
npm start


### **3. Run frontend**
Open the frontend folder and launch:

npm start

(or use Live Server extension)

### **4. Environment Variables**
Backend requires:

MONGO_URI=mongodb+srv://skillswap_user:abc%40123@cluster0.yavuc3s.mongodb.net/skillswapDB?retryWrites=true&w=majority
JWT_SECRET=jwt2025skillswapsecret




# ## **External Code & References (Required for Academic Integrity)**  
Below are the resources we used for learning, syntax clarification, and small code snippets (less than 10% of total code):

### **Documentation & Tutorials**
1. **W3Schools – JavaScript Fetch API**  
   https://www.w3schools.com/js/js_api_fetch.asp  

2. **W3Schools – HTML Forms & Validation**  
   https://www.w3schools.com/html/html_forms.asp  

3. **MDN Web Docs – Express.js Guide**  
   https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs  

4. **MDN – CORS Explained**  
   https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS  

5. **MongoDB Atlas Documentation**  
   https://www.mongodb.com/docs/atlas/  

6. **YouTube – Node.js + Express Authentication Tutorial**  
   Traversy Media  
   https://www.youtube.com/watch?v=Ud5xKCYQTjM  

7. **YouTube – REST API Crash Course**  
   Programming with Mosh  
   https://www.youtube.com/watch?v=fgTGADljAeg  

8. **bcrypt Documentation**  
   https://www.npmjs.com/package/bcrypt  

9. **SkillUpCourse Identification**

   Name of Course: Angular Basics Free Course with Certification
   Host Institution: Simplilearn (SkillUp platform)
   Link: Simplilearn Angular Basics Free Course
   Length/Time: 3 hours of self-paced video lessons
   Note: Completed as part of Tutorial Activity 3 to earn the certificate. This course also provided guidance during project development.

### **External Code Snippets Used (Under 10%)**
- Basic Express server setup (from MDN example)  
- Sample fetch() usage pattern (from W3Schools)  
- Password hashing example (from bcrypt documentation)  

All external code has been modified and documented within the project.


The video includes:
- Group introduction  
- Individual contributions  
- Code walkthrough  
- Live demo of the deployed system  
- Final summary  

# ## **Project Structure**

INFR3120-Fall25-Project/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── login.js
│   ├── register.js
│   ├── dashboard.js
│   └── styles.css
│
└── README.md


# ## **Conclusion**
This final release demonstrates our ability to build, deploy, and test a full‑stack web application using modern web technologies.  
Each team member contributed equally, and the system is fully functional, deployed, and ready for evaluation.

Readme.md
7 KB
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
