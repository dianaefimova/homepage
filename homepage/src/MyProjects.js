import React from 'react';
import Fade from "react-reveal/Reveal";
import './App.css';
import './clouds.css';
import index5 from './pictures/index5.png';
import index4 from './pictures/index4.png';
import project1 from './pictures/project1.mp4';

function MyProjects()  {

      return (
        
        <div>
     
      
<div className="shape">
  <h1>Complited</h1>
  <Fade bottom >
 <div className="text-block">
      <p>
         This page was written on React in order to develope and demonstarte my skills. 
     </p>  
     <a href ="https://github.com/dianaefimova/homepage/tree/main/homepage">GitHub My Page</a>
     </div>
     </Fade>
     </div>
     <img  style={{ width: 300, height: 150, marginTop: 20}} src={index5} alt="Pic5" />

     <Fade bottom >
     <div className="text-block">
       <p>
         Weather application written on JS with the connection to university weather database. 
     </p>  
     <a href=" https://github.com/dianaefimova/Weather-app">GitHub Weather App</a> 
     </div>
     </Fade>
     <video controls width = "800px" height ="420px">
          <source src={project1} type="video/mp4"/>
          Sorry your browser doesn't support videos.
         </video>
   
       
<h1>In Progress</h1>
<Fade bottom >
<div className="text-block">
       <p>
        Application DITTO.
       It analyses your daily life and calculates the carbon footprint. 
       The application is planned to help a user in making life more sustainable, 
       with custom notification it will guide them through the day to "greener" life.​
       The application was started as a project for AWS Hakathon and planned to use some AWS services as EC2 (Elastic Compute Cloud),​
       LEX, S3 (Simple Storage Service) and ​RDS (Relational Database Service).
     </p>  
     </div>
     </Fade>
     <p>Shout out to my amazing team: Tomas Glavina, Innokentii Kozlov, Ozan Topcu, Thong Hoang</p>
     <img  style={{ width:800, height: 520}} src={index4} alt="Pic7"  />
  
          </div>
      );

  }

export default MyProjects;