import React, { useState, useEffect } from 'react';
import projectsData from './data/projects.json'; 
import { FaReact, FaJava, FaPython, FaJsSquare, FaLaptopCode } from "react-icons/fa";
import { PiDroneBold, PiStudent } from "react-icons/pi";
import { DiAndroid } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { Rectangle } from 'react-shapes';
import './styles/responsive.css';
import './styles.module.css';

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData.projects); 
  }, []);

  const iconMapping = {
    FaReact: FaReact,
    FaJava: FaJava,
    FaPython: FaPython,
    FaJsSquare: FaJsSquare,
    PiDroneBold: PiDroneBold,
    PiStudent: PiStudent,
    DiAndroid: DiAndroid,
    SiPostgresql: SiPostgresql,
    FaLaptopCode : FaLaptopCode 
  };

  return (
    <div className="projects">
     <section id="home" className="text-center my-5">
        <h1 className="fw-bold">Projects</h1>
      </section>
      <br />
      <div className="projects-container">
        {projects.map((project) => {
          const IconComponent = iconMapping[project.icon] || FaLaptopCode; 

          return (
            <div key={project.id} className="project-card">
 
 <div className="rectangle">
                <IconComponent className="icon" />
                <div className="project-text">
                <b>
                  <u>{project.title}</u>
                </b>
                <br />
                {project.description}
                <br />
                <b>Key Features:</b>
                <ul>
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer">
                    GitHub Repository
                  </a>
                )}
                {project.links.live && (
                  <span>
                    {' '}
                    |{' '}
                    <a href={project.links.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  </span>
                )}
                      {project.links.demo && (
                  <span>
                    {' '}
                    |{' '}
                    <a href={project.links.demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  </span>
                )}
               {project.links.example && (
                  <span>
                    {' '}
                    |{' '}
                    <a href={project.links.example} target="_blank" rel="noreferrer">
                      Example
                    </a>
                  </span>
                )}
             
            </div>
            </div>
            </div>
          );
        })}
      </div>
    </div>

  );
};

export default MyProjects;