import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import MyProjects from './MyProjects';
import './App.css';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const App = () => {

    const ScrollToSection = () => {
        const { hash } = useLocation(); // Get current hash from URL
      
        useEffect(() => {
          if (hash) {
            const element = document.querySelector(hash); 
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' }); 
            }
          }
        }, [hash]); 
      
        return null; 
      };

  return (
 <>
      <HashRouter>
        <div className="Menu">
        <nav>
          <Link to="/#home" className="link">Home</Link>{' '}
          <Link to="/#contacts" className="link">Contact me</Link>{' '}
          <Link to="/MyProjects" className="link">My Projects</Link>{' '}
          <Link to="/#certificates" className="link">Certifications</Link>{' '}
          <Link to="https://github.com/dianaefimova"
          target="_blank" rel="noreferrer">
          <FaGithub style={{width: 20, height: 20,  color: 'white', marginLeft: 20 }} />
          </Link>
          <Link to="https://www.linkedin.com/in/diana-efimova-34b5711b4"
          target="_blank" rel="noreferrer">
          <FaLinkedin style={{width: 20, height: 20,  color: 'white', marginLeft: 20 }} />
          </Link>

          <div style={{marginLeft: '65%'}}>
             <a href="https://drive.google.com/file/d/1rrskNxUJl9ALjSq1dXOpXWyH5_Y48ryT/view?usp=sharing" target="_blank" rel="noreferrer">
           <button style={{backgroundColor: '#ede8f5', padding: '4px 20px', borderRadius: '7px'}}>
            CV
           </button>
            </a>
          </div>

        </nav>
        <ScrollToSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyProjects" element={<MyProjects />} />
        </Routes>
        </div>
      </HashRouter>

      <section id="contacts">
  <div class="contacts">
   <table>
    <tr>
      <th>CONTACT</th>
      <th>FOLLOW</th>
      <th>PORTFOLIO</th>
    </tr>
       <tr>
          <td>diana.v.efimova@gmail.com</td>
          <td><a href="https://www.linkedin.com/in/diana-efimova-34b5711b4/" target="_blank" rel="noreferrer" style={{color: '#ede8f5', textDecoration:'none'}}>LinkedIn</a></td>
          <td><td><a href="https://github.com/dianaefimova" target="_blank" rel="noreferrer" style={{color: '#ede8f5', textDecoration:'none'}}>GitHub</a></td></td>
        </tr>

   </table>
    </div>
</section>
      </>
  );
};

export default App;
