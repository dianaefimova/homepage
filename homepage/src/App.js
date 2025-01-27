import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import MyProjects from './MyProjects';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import './styles/responsive.css';
import './styles.module.css';
import './styles/App.css';


const App = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  };
    const ScrollToSection = () => {
        const { hash } = useLocation(); 
      
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
        <nav className="navbar" style={{ margin: 0, padding: 0 }}>
        <div className="navbar justify-content-between" style={{ marginLeft: 10, padding: 0, marginTop: 5}}>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <CiMenuBurger />
        </div>
        
        <div className={`nav-elements ${showNavbar && 'active'}`}>
                <Link to="/#home" className="link">Home</Link>
                <Link to="/#contacts" className="link">Contact me</Link>
                <Link to="/MyProjects" className="link">My Projects</Link>
                <Link to="/#certificates" className="link">Certifications</Link>
                <Link to="https://github.com/dianaefimova" target="_blank" rel="noreferrer" className="link">
                  <FaGithub style={{ width: 20, height: 20, color: 'white' }} />
                </Link>
                <Link to="https://www.linkedin.com/in/diana-efimova-34b5711b4" target="_blank" rel="noreferrer" className="link-last">
                  <FaLinkedin style={{ width: 20, height: 20, color: 'white' }} />
                </Link>
        </div>
              <div className="form-inline" style={{ marginRight: 10, padding: 0 }}>
                <Link to="https://drive.google.com/file/d/1rrskNxUJl9ALjSq1dXOpXWyH5_Y48ryT/view?usp=sharing" target="_blank" rel="noreferrer">
                  <button style={{ backgroundColor: '#ede8f5', padding: '4px 20px', borderRadius: '7px' }}>
                    CV
                  </button>
                </Link>
              </div>
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
   <div className="contacts justify-content-between">
    <table>
    <tr>
      <th>CONTACT</th>
      <th className='footer'>FOLLOW</th>
      <th className='footer'>PORTFOLIO</th>
    </tr>
       <tr>
          <td>diana.v.efimova@gmail.com</td>
          <td className='footer'><a href="https://www.linkedin.com/in/diana-efimova-34b5711b4/" target="_blank" rel="noreferrer" style={{color: '#ede8f5', textDecoration:'none'}}>LinkedIn</a></td>
          <td className='footer'><a href="https://github.com/dianaefimova" target="_blank" rel="noreferrer" style={{color: '#ede8f5', textDecoration:'none'}}>GitHub</a></td>
        </tr>

   </table>
    </div>
</section>
      </>
  );
};

export default App;
