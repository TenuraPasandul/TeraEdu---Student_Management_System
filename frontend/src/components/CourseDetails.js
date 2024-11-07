import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../css/style.css';
import NavbarCompo from './NavbarCompo';
import Collapsed from './Collapsed'; 
import PageFooter from './PageFooter';

export default function CourseDetails() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Collapsed /> 
      <div style={{ marginLeft: '240px', width: '100%' }}> 
        <NavbarCompo />
        <br /><br />
        
        
        <ProgressBar 
          now={scrollProgress} 
          variant="info"
          style={{
            position: 'fixed',
            top: 65,
            left: 0,
            width: '100%',
            height: '5px',
            zIndex: 100,
          }}
        />
        
        <h2 className="courseDetails-heading">
          Introduction To Software Engineering <br />
          <Badge bg="secondary" style={{ fontSize: '15px' }}>Information Technology</Badge>
        </h2>

        
        <div style={{ height: '8vh' }}></div>
        <div className="container">
          <p className="courseDetails-Para">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
        </div>
      </div>
      
    </div>
  );
}
