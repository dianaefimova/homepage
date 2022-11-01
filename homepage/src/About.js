import React from 'react';
import Fade from "react-reveal/Reveal";
import './clouds.css';
import './App.css';
import index2 from './pictures/index2.jpeg';
import index from './pictures/index.jpeg';
function Home() {
  return( 
    <div>
     
     <h1>Diana Efimova</h1>
     <header>Full-stack developer</header>
     
    <div className="Pics">
      <img  style={{ width: 320, height: 400, marginRight: 50}} src={index2} alt="Pic2" />
      <img style={{ width: 320, height: 400}} src={index} alt="Pic"  />
      </div>
     
     
    <Fade bottom >
     <header>Contact me:</header>
     <p>Email: diana.efimova.110202@gmail.com</p>
 
     <a href="https://www.linkedin.com/in/diana-efimova-34b5711b4">
     <b>Linkedin</b>
      </a>
    
     </Fade>
     


    </div>
  )
}

export default Home;