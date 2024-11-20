import React, { useState } from 'react';
import Fade from "react-reveal/Reveal";
import project1 from './pictures/project1.mp4';
import { FaReact, FaJava, FaPython, FaJsSquare } from "react-icons/fa";
import { PiDroneBold, PiStudent } from "react-icons/pi";
import {Rectangle} from 'react-shapes';
import { DiAndroid} from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import DroneExample from './pictures/DroneExample.png';




const MyProjects = () =>  {
  const [showVideo, setShowVideo] = useState(false);
  const toggleVideo = () => {
    setShowVideo(!showVideo);
  }
  const [showPicture, setShowPicture] = useState(false);
  const togglePicture = () => {
    setShowPicture(!showPicture);
  };

      return (
     
<div className="projects">

  <h1>Projects</h1>
  <br></br>
    
<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', textAlign: 'center', margin: '0'}}>
<Fade bottom>
<div style={{ position: 'relative', width: 600, height: 210, marginRight: 40, marginLeft: 20, marginBottom: 20 }}> 
  <Rectangle
    width={600}
    height={210}
    fill={{ color: '#ede8f5' }}
    stroke={{ color: '#3d52a0' }}
    strokeWidth={2}
    rx={10}
    ry={10}
  />
  <PiDroneBold 
    style={{
      position: 'absolute',  
      top: '55%',             
      left: '30px',           
      transform: 'translateY(-50%)',  
      width: 60,
      height: 60,
      color: 'black'
    }}
  />
  <span
    style={{
      position: 'absolute',
      top: '50%', 
      left: '100px', 
      transform: 'translateY(-50%)', 
      lineHeight: '1.5', 
      width: '500px', 
    }}
  >
   <b><u>Echo Trails</u></b> <br></br>
Developed using <em>React</em> and <em>Firebase</em>.  <b>Available at <a href="https://echo-trails.web.app/" target="_blank" rel="noreferrer">Echo-trails.web.app</a></b> <br></br>
<b>Objective:</b> Create an interactive platform to explore Nordic countries, featuring cities, landmarks, and historical information. <br></br>
<b>Key Features:</b><br></br>
- Integration with <em>Firebase NoSQL real-time database</em> to manage and synchronize user-generated and static content. <br></br>
- Utilized a local <em>JSON database</em> for fallback and offline capabilities. <br></br>
- <em>Firebase Authentication</em> implemented for secure user login and registration. <br></br>

    <a href="https://github.com/dianaefimova/Echo-trails" target="_blank" rel="noreferrer">GitHub Echo Trails</a>
  </span>
 </div>
  {/* project 1 */}
 <div style={{ position: 'relative', width: 600, height: 210, marginRight: 40, marginLeft: 20, marginBottom: 20 }}>
  <Rectangle
    width={600}
    height={210}
    fill={{ color: '#ede8f5' }}
    stroke={{ color: '#3d52a0' }}
    strokeWidth={2}
    rx={10}
    ry={10}
  />
    <DiAndroid
    style={{
      position: 'absolute',  
      top: '55%',             
      left: '30px',           
      transform: 'translateY(-50%)',  
      width: 60,
      height: 60,
      color: 'black'
    }}
  />
  <span
    style={{
      position: 'absolute',
      top: '50%', 
      left: '100px', 
      transform: 'translateY(-50%)', 
      lineHeight: '1.5', 
      width: '500px', 
    }}
  >
    <b><u>Android Application "Jokes On You"</u></b> <br></br>
    Developed using <em>Java</em> in Android Studio. <br></br>
    <b>Objective:</b> Create an Android app using a RESTful API for daily casual use.<br></br>
    <b>Key Features:</b><br></br>
    - Connection to "Jokes" RESTful API <br></br>
    - 7 activities <br></br>
    - Callbacks: onSaveInstanceState() ; onRestoreInstanceState() <br></br>
    - All strings are translated to two languages (Spanish, Finnish)
    <br></br>
    <a href="https://github.com/dianaefimova/Android-App-JokesOnYou" target="_blank" rel="noreferrer">GitHub Android Application</a>   
  </span>
 </div>
{/* project 2 */}
 <div style={{ position: 'relative', width: 600, height: 210, marginRight: 40, marginLeft: 20, marginBottom: 20 }}>
  <Rectangle
    width={600}
    height={210}
    fill={{ color: '#ede8f5' }}
    stroke={{ color: '#3d52a0' }}
    strokeWidth={2}
    rx={10}
    ry={10}
  />
  <FaPython
    style={{
      position: 'absolute',  
      top: '55%',             
      left: '30px',           
      transform: 'translateY(-50%)',  
      width: 60,
      height: 60,
      color: 'black'
    }}
  />
  <span
    style={{
      position: 'absolute',
      top: '50%', 
      left: '100px', 
      transform: 'translateY(-50%)', 
      lineHeight: '1.5', 
      width: '500px', 
    }}
  >
    <b><u>Neural Networks Training</u></b> <br></br>
    Developed using <em>Python</em>. <br></br>
    <b>Objective:</b> Train a multiclass ANN to accurately predict raisin classes using raisin data. <br></br>
    <b>Key Methods:</b><br></br>
    - Data scaling<br></br>- Neural network training and testing<br></br>- Confusion matrix and accuracy score
    <br></br>
    <a href="https://github.com/dianaefimova/Neural-networks-training" target="_blank" rel="noreferrer">GitHub Neural Network</a>
  </span>
 </div>
{/* project 3 */}
 <div style={{ position: 'relative', width: 600, height: 210, marginRight: 40, marginLeft: 20, marginBottom: 20 }}>
    <Rectangle
      width={600}
      height={210}
      fill={{ color: '#ede8f5' }}
      stroke={{ color: '#3d52a0' }}
      strokeWidth={2}
      rx={10}
      ry={10}
    />
  <FaJava
    style={{
      position: 'absolute',  
      top: '50%',             
      left: '30px',           
      transform: 'translateY(-50%)',  
      width: 60,
      height: 60,
      color: 'black'
    }}
  />
    <span
      style={{
        position: 'absolute',
        top: '50%',
        left: '100px',
        transform: 'translateY(-50%)',
        lineHeight: '1.5',
        width: '450px',
      }}
    >
    <b><u>Sorting and Searching Program</u></b> <br></br>
    Developed using <em>Java</em>. <br></br>
    <b>Objective:</b>Implement a program that focuses on efficient sorting and searching algorithms. <br></br>
    <b>Key Features:</b><br></br>
    - Emphasis on sorting and searching algorithms<br></br>- Optimized with time complexities of O(n²) and O(nlog(n))
    <br></br>
    <a href="https://github.com/dianaefimova/JavaSorting_SearchingProject" target="_blank" rel="noreferrer">GitHub Sorting&Searching Program</a>
    </span>
 </div>
{/* badge 4 */}
 <div style={{ position: 'relative', width: 600, height: 210, marginRight: 40, marginLeft: 20, marginBottom: 20 }}>
  <Rectangle
    width={600}
    height={210}
    fill={{ color: '#ede8f5' }}
    stroke={{ color: '#3d52a0' }}
    strokeWidth={2}
    rx={10}
    ry={10}
  />
    <FaReact
    style={{
      position: 'absolute',  
      top: '55%',             
      left: '30px',           
      transform: 'translateY(-50%)',  
      width: 60,
      height: 60,
      color: 'black'
    }}
  />
  <span
    style={{
      position: 'absolute',
      top: '50%', 
      left: '100px', 
      transform: 'translateY(-50%)', 
      lineHeight: '1.5', 
      width: '500px', 
    }}
  >
    <b><u>Forecast Application</u></b> <br></br>
    Developed using <em>JavaScript, HTML</em> and <em>CSS</em>. <br></br>
    <b>Objective:</b> Develop a forecast application that fetches and displays reacent weather data from TAMK API.<br></br>
    <b>Key Features:</b><br></br>
    - Connection to TAMK weather database API <br></br>
    - Fetching and displays data in tables sorted by dates and weather types <br></br>
    - Visualization data with Gantt charts and graphs   <br></br>
    <a href="https://github.com/dianaefimova/Weather-app" target="_blank" rel="noreferrer">GitHub Weather Application</a> 
     <button onClick={toggleVideo} >
      {showVideo ? 'Hide Presentation Video' : 'Show Presentation Video'}
     </button>
  </span>
 </div>
 </Fade>
</div>

 {showVideo && (
  <video controls style={{ position: 'relative', width: 800, height: 450, marginBottom: 20, marginLeft: '29%'}}>
    <source src={project1} type="video/mp4"/>
      Sorry your browser doesn't support videos.
  </video>
 )}

<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', textAlign: 'center', margin: '0'}}>
<Fade bottom>

  {/* project 1 */}
 <div style={{ position: 'relative', width: 600, height: 210, marginRight: 40, marginLeft: 20, marginBottom: 20 }}> 
  <Rectangle
    width={600}
    height={210}
    fill={{ color: '#ede8f5' }}
    stroke={{ color: '#3d52a0' }}
    strokeWidth={2}
    rx={10}
    ry={10}
  />
  <PiDroneBold 
    style={{
      position: 'absolute',  
      top: '55%',             
      left: '30px',           
      transform: 'translateY(-50%)',  
      width: 60,
      height: 60,
      color: 'black'
    }}
  />
  <span
    style={{
      position: 'absolute',
      top: '50%', 
      left: '100px', 
      transform: 'translateY(-50%)', 
      lineHeight: '1.5', 
      width: '500px', 
    }}
  >
    <b><u>Drone Fleet Management System</u></b> <br></br>
    Developed using <em>Java</em>. <br></br>
    <b>Objective:</b> Manage a fleet of drones for operations, with a focus on food delivery services. <br></br>
    <b>Key Methods:</b><br></br>
    - Drone Management (add, update, delete, and view drones in the fleet)<br></br>- In-memory Data Storage<br></br>- Usage of Spring Boot library
    <br></br>
    <a href="https://github.com/dianaefimova/Drones-transportation" target="_blank" rel="noreferrer">GitHub Drones System</a>
    <button onClick={togglePicture} >
      {showPicture ? 'Hide Example' : 'Show Example'}
    </button>
  </span>
 </div>
{/* project 2 */}
 <div style={{ position: 'relative', width: 600, height: 210, marginRight: 40, marginLeft: 20, marginBottom: 20 }}>
  <Rectangle
    width={600}
    height={210}
    fill={{ color: '#ede8f5' }}
    stroke={{ color: '#3d52a0' }}
    strokeWidth={2}
    rx={10}
    ry={10}
  />
    <FaReact
    style={{
      position: 'absolute',  
      top: '55%',             
      left: '30px',           
      transform: 'translateY(-50%)',  
      width: 60,
      height: 60,
      color: 'black'
    }}
  />
  <span
    style={{
      position: 'absolute',
      top: '50%', 
      left: '100px', 
      transform: 'translateY(-50%)', 
      lineHeight: '1.5', 
      width: '500px', 
    }}
  >
    <b><u>Profile Website</u></b> <br></br>
    Developed using <em>JavaScript, HTML</em> and <em>CSS</em>. <br></br>
    <b>Objective:</b>  Build a responsive website using React, focused on delivering a seamless user experience.<br></br>
    <b>Key Features:</b><br></br>
    - Utilizes React libraries for enhanced functionality <br></br>
    - Fully responsive design for smooth user experience <br></br>
    <a href="https://github.com/dianaefimova/homepage" target="_blank" rel="noreferrer">GitHub Homepage</a>   
  </span>
 </div>
 </Fade>
</div>

  {showPicture && (
   <>
   <img style={{ width: 1300, height: 300, marginLeft: '15%'}} src={DroneExample} alt="DroneExample" />
  </>
  )}

<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', textAlign: 'center', margin: '0'}}>
<Fade bottom>
{/* project 3 */}
 <div style={{ position: 'relative', width: 600, height: 210, marginRight: 40, marginLeft: 20, marginBottom: 20 }}>
    <Rectangle
      width={600}
      height={210}
      fill={{ color: '#ede8f5' }}
      stroke={{ color: '#3d52a0' }}
      strokeWidth={2}
      rx={10}
      ry={10}
    />
  <PiStudent
    style={{
      position: 'absolute',  
      top: '50%',             
      left: '30px',           
      transform: 'translateY(-50%)',  
      width: 60,
      height: 60,
      color: 'black'
    }}
  />
    <span
      style={{
        position: 'absolute',
        top: '50%',
        left: '100px',
        transform: 'translateY(-50%)',
        lineHeight: '1.5',
        width: '500px',
      }}
    >
    <b><u>Grading Program</u></b> <br></br>
    Developed using <em>C++</em>. <br></br>
    <b>Objective:</b> Create a program to evaluate students, collect their information, calculate final grades, and allow sorting of student lists. <br></br>
    <b>Key Features:</b><br></br>
    - Calculates final grades based on a weighted formula<br></br>- Provides sorting options by final grade or name using bubble sort algorithm
    <br></br>
    - Displays filled forms with students' details and calculated grades<br></br>
    <a href="https://github.com/dianaefimova/Grading-program" target="_blank" rel="noreferrer">GitHub Grading Program</a>
    </span>
 </div>
{/* badge 4 */}
 <div style={{ position: 'relative', width: 600, height: 210, marginRight: 40, marginLeft: 20, marginBottom: 20 }}>
  <Rectangle
    width={600}
    height={210}
    fill={{ color: '#ede8f5' }}
    stroke={{ color: '#3d52a0' }}
    strokeWidth={2}
    rx={10}
    ry={10}
  />
    <SiPostgresql
    style={{
      position: 'absolute',  
      top: '50%',             
      left: '30px',           
      transform: 'translateY(-50%)',  
      width: 60,
      height: 60,
      color: 'black'
    }}
    />
  <span
    style={{
      position: 'absolute',
      top: '50%', 
      left: '100px', 
      transform: 'translateY(-50%)', 
      lineHeight: '1.5', 
      width: '500px', 
    }}
  >
    <b><u>Java Backend Registration Page (IN PROGRESS)</u></b> <br></br>
    Developed using <em>Java</em>. <br></br>
    <b>Objective:</b> Implement email-based user registration for a webpage.<br></br>
    <b>Key Features:</b><br></br>
    - Development with Spring Boot <br></br>
    - Focus on security for user registration <br></br>
    - PostgreSQL used for database management   <br></br>
    - Email-based registration system for user authentication and verification   <br></br>
    <a href="https://github.com/dianaefimova/Java-backend-registrationPage" target="_blank" rel="noreferrer">GitHub Registration Page</a> <br></br>
  </span>
 </div>
 <div style={{ position: 'relative', width: 600, height: 210, marginRight: 40, marginLeft: 20, marginBottom: 20 }}>
  <Rectangle
    width={600}
    height={210}
    fill={{ color: '#ede8f5' }}
    stroke={{ color: '#3d52a0' }}
    strokeWidth={2}
    rx={10}
    ry={10}
  />
  <FaJava
    style={{
      position: 'absolute',  
      top: '50%',             
      left: '30px',           
      transform: 'translateY(-50%)',  
      width: 60,
      height: 60,
      color: 'black'
    }}
  />
  <span
    style={{
      position: 'absolute',
      top: '50%', 
      left: '100px', 
      transform: 'translateY(-50%)', 
      lineHeight: '1.5', 
      width: '500px', 
    }}
  >
    <b><u>Educational Management System (IN PROGRESS)</u></b> <br></br>
    Developed using <em>Java Spring Boot</em> and <em>React</em>. <br></br>
    <b>Objective:</b> Build a centralized system to track university data. <br></br>
<b>Key Features:</b><br></br>
- Backend developed with <em>Java Spring Boot</em>, providing secure API endpoints. <br></br>
- Local <em>JSON database</em> used for lightweight data storage and testing. <br></br>
- RESTful APIs for real-time communication with the frontend. <br></br>
- Collaborative group project: backend development (my role), frontend developer (Tomas Glavina), UI designer (Prithviraj Kalburgi). <br></br>
    <a href="https://github.com/dianaefimova/Edu-hub" target="_blank" rel="noreferrer">GitHub Edu Hub</a> <br></br>
  </span>
 </div>
 </Fade>
</div>

          </div>    
      );

  }

export default MyProjects;