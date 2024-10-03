import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import Fade from "react-reveal/Reveal";
import index2 from './pictures/index2.jpeg';
import index from './pictures/index.jpeg';
import styles from './styles.module.css';
import {Rectangle} from 'react-shapes';
import azure1 from './pictures/azure-fundamentals.png';
import azure2 from './pictures/azure-data-fundamentals.png';
import azure3 from './pictures/azure-ai-fundamentals.png';
import aws from './pictures/aws-academy.png';
import atlassian from './pictures/atlassian.png';


const Home = () => {
  const ref = useRef([]); 

  const [items, set] = useState(new Set());
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#45a29e',
    },
    enter: [
      { opacity: 1, height: 40, innerHeight: 40 },
      { transform: 'perspective(600px) rotateX(60deg)', color: '#e43d12' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { transform: 'perspective(600px) rotateX(0deg)', color: '#3d52a0' },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set(new Set());
    ref.current.push(setTimeout(() => set(new Set(['Software Engineer'])), 2000));
    ref.current.push(setTimeout(() => set(new Set(['Cloud Networking'])), 4000));
    ref.current.push(setTimeout(() => set(new Set(['Full Stack Developer'])), 6000));
    ref.current.push(setTimeout(() => set(new Set(['Software Engineer'])), 8000));
  }, []);
    
  useEffect(() => {
    reset();

  const intervalId = setInterval(reset, 20000);
    return () =>
  ref.current.forEach(clearTimeout);


  }, [reset]);

  return ( 
    <div className={styles.homeContent}>
      <section id="home">
        <div style={{ position: 'relative', width: '100%', height: 'auto', textAlign: 'center', marginBottom: 20 }}>
          <h1 style={{ display: 'inline-block', margin: 0 }}>Diana Efimova</h1>
          <Fade right>
            <div style={{ position: 'absolute', top: '0', right: '0', width: '500px', height: '30px' }}>
    <Rectangle
      width={500}
      height={30}
      fill={{ color: '#3d52a0' }}
      stroke={{ color: '#3d52a0' }}
      strokeWidth={2}
    />
    
    <div style={{
      position: 'absolute',
      top: '50%', 
      left: '20px', 
      transform: 'translateY(-40%)', 
      width: '50px',
    }}>
      <a href="https://drive.google.com/file/d/1rrskNxUJl9ALjSq1dXOpXWyH5_Y48ryT/view?usp=sharing" target="_blank" rel="noreferrer">
        <button style={{ backgroundColor: '#ede8f5', padding: '4px 20px', borderRadius: '7px' }}>
          CV
        </button>
      </a>
    </div>
  </div>
  </Fade>
</div>
      <header>
        <div className={styles.container}>
          <div className={styles.main}>
            {transitions(({ innerHeight, ...rest }, item) => (
              <animated.div
                className={styles.transitionsItem}
                style={rest}
                onClick={reset}
              >
                <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
                  {item}
                </animated.div>
              </animated.div>
            ))}
          </div>
        </div>
        </header>
        </section>
        <items>
      <div className="Pics">
      <img style={{ width: 320, height: 400, marginRight: 50}}  src={index2} alt="Pic2" />
      <img style={{ width: 320, height: 400}} src={index} alt="Pic"  />
      </div>
      
      <Fade bottom>    
  <div className="text-block" style={{textAlign:'center'}}>
      <em>
     <h3> Welcome to my portfolio! I'm a Software Engineering student at TAMK, I came to coding for practical reasons but ended up finding my life passion.</h3><p>
      I love the creativity and problem-solving in full stack development,
      especially when working with React to build dynamic, user-friendly applications. Lately, I've been diving deep into Java projects,
      really getting into backend development. <br></br>
      I'm also interested in working with cloud technology and have been gaining hands-on experience with both AWS and Azure services, exploring the endless possibilities they offer for scalable, 
      modern solutions.
      I’m always eager to connect with fellow developers and am open to exciting work opportunities that allow me to grow and contribute to impactful projects.
      </p></em>
  </div>
 
  <section id="certificates">

    <h1>Certifications</h1>

    <div style={{ display: 'flex', marginLeft: 100, flexWrap: 'wrap', textAlign:'center' }}>
    {/* badge 1 */}
   <div style={{ position: 'relative', width: 500, height: 110, marginRight: 40, marginLeft: 20, marginBottom: 40 }}>
  <Rectangle
    width={500}
    height={130}
    fill={{ color: '#ede8f5' }}
    stroke={{ color: '#3d52a0' }}
    strokeWidth={2}
    rx={10}
    ry={10}
  />
  <a href="https://www.credly.com/badges/e814c352-0393-4ac4-a43e-48771a5abdf5/linked_in?t=segics"
  target="_blank" rel="noreferrer"
  >
  <img
    style={{
      width: 105,
      height: 100,
      position: 'absolute',
      top: 10,    
      left: 5,   
    }}
    src={azure1}
    alt="azure1"
    
  />
  </a>
  <span
    style={{
      position: 'absolute',
      top: '60%', 
      left: '120px', 
      transform: 'translateY(-50%)', 
      lineHeight: '1.5', 
      width: '350px', 
    }}
  >
    Certification validates foundational knowledge of Azure, including cloud data, networking,
    security, storage, and services, along with core skills in virtualization and cloud management.
    
  </span>
 </div>
{/* badge 2 */}
 <div style={{ position: 'relative', width: 500, height: 110, marginRight: 40, marginLeft: 20, marginBottom: 40 }}>
  <Rectangle
    width={500}
    height={130}
    fill={{ color: '#ede8f5' }}
    stroke={{ color: '#3d52a0' }}
    strokeWidth={2}
    rx={10}
    ry={10}
  />
  <a href="https://www.credly.com/badges/3e602b74-932b-46d1-a765-6fc05a51a90a/public_url"
  target="_blank" rel="noreferrer"
  >
  <img
    style={{
      width: 105,
      height: 100,
      position: 'absolute',
      top: 10,    
      left: 5,   
    }}
    src={azure3}
    alt="azure3"
    
  />
  </a>
  <span
    style={{
      position: 'absolute',
      top: '60%', 
      left: '120px', 
      transform: 'translateY(-50%)', 
      lineHeight: '1.5', 
      width: '350px', 
    }}
  >
    Certification demonstrates foundational skills in developing applications on the AWS cloud platform, including expertise in AWS services, cloud computing,
    and cloud-native application development.
  </span>
 </div>
{/* badge 3 */}
 <div style={{ position: 'relative', width: 500, height: 110, marginRight: 40, marginLeft: 20, marginBottom: 40 }}>
    <Rectangle
      width={500}
      height={130}
      fill={{ color: '#ede8f5' }}
      stroke={{ color: '#3d52a0' }}
      strokeWidth={2}
      rx={10}
      ry={10}
    />
    <a
      href="https://www.credly.com/badges/75b7776f-6b92-4295-8587-cb66267a2d99/linked_in?t=seghur"
      target="_blank" rel="noopener noreferrer"
    >
      <img
        style={{
          width: 105,
          height: 100,
          position: 'absolute',
          top: 10,
          left: 5,
        }}
        src={aws}
        alt="aws"
      />
    </a>
    <span
      style={{
        position: 'absolute',
        top: '60%',
        left: '120px',
        transform: 'translateY(-50%)',
        lineHeight: '1.5',
        width: '350px',
      }}
    >
      Certification confirms foundational knowledge of Azure data services, including Azure SQL Database,
      Synapse Analytics, Cosmos DB, and Power BI. It demonstrates skills in data analytics, processing, visualization, and management across cloud environments.
    </span>
 </div>
{/* badge 4 */}
 <div style={{ position: 'relative', width: 500, height: 110, marginRight: 40, marginLeft: 20, marginBottom: 40 }}>
  <Rectangle
    width={500}
    height={130}
    fill={{ color: '#ede8f5' }}
    stroke={{ color: '#3d52a0' }}
    strokeWidth={2}
    rx={10}
    ry={10}
  />
    <a href="https://www.credly.com/badges/3eba6c2d-cc80-4459-968d-a0dd22aaafdc/linked_in?t=segj3z"
  target="_blank" rel="noreferrer"
  >
  <img
    style={{
      width: 105,
      height: 100,
      position: 'absolute',
      top: 10,    
      left: 5,   
    }}
    src={azure2}
    alt="azure2"
  />
  </a>
  <span
    style={{
      position: 'absolute',
      top: '60%', 
      left: '120px', 
      transform: 'translateY(-50%)', 
      lineHeight: '1.5', 
      width: '350px', 
    }}
  >
     Certification confirms foundational knowledge of Azure data services, including Azure SQL Database, Synapse Analytics, Cosmos DB, and Power BI.
     It demonstrates skills in data analytics, processing, visualization, and management across cloud environments.   
  </span>
 </div>
{/* badge 5 */}
 <div style={{ position: 'relative', width: 500, height: 110, marginRight: 40, marginLeft: 20, marginBottom: 40 }}>
  <Rectangle
    width={500}
    height={130}
    fill={{ color: '#ede8f5' }}
    stroke={{ color: '#3d52a0' }}
    strokeWidth={2}
    rx={10}
    ry={10}
  />
    <a href="https://university.atlassian.com/student/award/dbRcD5LCP2WYsBPLrCKw3tp7"
  target="_blank" rel="noreferrer"
  >
  <img
    style={{
      width: 105,
      height: 100,
      position: 'absolute',
      top: 10,    
      left: 5,   
    }}
    src={atlassian}
    alt="atlassian"
  />
  </a>
  <span
    style={{
      position: 'absolute',
      top: '60%', 
      left: '120px', 
      transform: 'translateY(-50%)', 
      lineHeight: '1.5', 
      width: '350px', 
    }}
  >
    Credential validates essential knowledge of atlassian, including skills in creating,
    managing, and organizing content, collaborating effectively, and utilizing key features for team productivity and knowledge management.  
  </span>
 </div>
{/* badge 6 */}
 <div style={{ position: 'relative', width: 500, height: 110, marginRight: 40, marginLeft: 20, marginBottom: 40 }}>
  <Rectangle
    width={500}
    height={130}
    fill={{ color: '#ede8f5' }}
    stroke={{ color: '#3d52a0' }}
    strokeWidth={2}
    rx={10}
    ry={10}
  />
    <a href="https://university.atlassian.com/student/award/DjKiZa1w1oMeYjwjqXjiiCtFk"
  target="_blank" rel="noreferrer"
  >
  <img
    style={{
      width: 105,
      height: 100,
      position: 'absolute',
      top: 10,    
      left: 5,   
    }}
    src={atlassian}
    alt="atlassian"
  />
  </a>
  <span
    style={{
      position: 'absolute',
      top: '60%', 
      left: '120px', 
      transform: 'translateY(-50%)', 
      lineHeight: '1.5', 
      width: '350px', 
    }}
  >
     Credential demonstrates foundational knowledge of Jira, including skills in creating and managing projects,
     tracking issues, and utilizing workflows and agile practices for effective project management and team collaboration.
  </span>
 </div>
</div>
</section>
    </Fade>
      </items>
</div>
    
  );
};

export default Home;

