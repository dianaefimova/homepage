import React from 'react';
import './App.css';
import Fade from "react-reveal/Reveal";
import './clouds.css';
import index3 from './pictures/index3.jpeg';
function About() {
  const showAlert = () => {
    alert(`But I have the best cat in the world!`);
    
  }
  return(
    <div>
        <h1>Hey there!</h1>

<div className="shape">
 <Fade bottom >
<div className="text-block">
      <p>
        I'm Software engineering student from Tamk. I came to coding for practical reasons but ended up finding my life passion. 
        At the moment I'm focusing on web development. I'm looking for opportunity to expand my knowladge on prcatice in a good team.
        I love sport. I've been playing volleyball for ages! If you'd like to play, hit me up, I can show some good volley fields!
        I'm a <button style={{backgroundColor: 'white'}}onClick={showAlert}>dog person</button> and I have to hold myself not to flood this website with my pets pictures.
      </p>

    </div>
    </Fade>
    <img  style={{ width: 600, height: 400, marginLeft: 5}} src={index3} alt="Pic3" />
    </div>
    
    </div>
  )
}

export default About;