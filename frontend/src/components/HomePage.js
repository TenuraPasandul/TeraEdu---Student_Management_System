import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarCompo from './NavbarCompo';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../assets/back6.jpeg';
import img2 from '../assets/back5.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../css/style.css';
import PageFooter from './PageFooter';

function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [course, setCourse] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState(9); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      setScrollProgress(scrolled);
    };

    fetchData();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/course');         
      setCourse(response.data.existingPosts);
    } catch (error) {
      console.error('Error fetching courses:', error.message);
    }
  };

  const loadMoreCourses = () => {
    setVisibleCourses((prev) => prev + 9); 
  };

  return (
    <div>
      <NavbarCompo />
      <br/><br/>
      
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
      
      <Carousel data-bs-theme="dark" style={{ height: '80vh' }}>
        <Carousel.Item style={{ height: '80vh' }}>
          <img
            className="d-block w-100 h-100"
            src={img1}
            alt="First slide"
            style={{ objectFit: 'cover' }}
          />
          <Carousel.Caption className="home-slide-caption">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item style={{ height: '80vh' }}>
          <img
            className="d-block w-100 h-100"
            src={img2}
            alt="Second slide"
            style={{ objectFit: 'cover' }}
          />
          <Carousel.Caption className="home-slide-caption">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item style={{ height: '80vh' }}>
          <img
            className="d-block w-100 h-100"
            src="https://via.placeholder.com/800x400?text=Third+slide"
            alt="Third slide"
            style={{ objectFit: 'cover' }}
          />
          <Carousel.Caption className="home-slide-caption">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div style={{height:'30px'}}></div>
      <Form inline style={{width:'30%', paddingBottom:'30px'}}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>

      <div style={{alignItems:'center',justifyContent:'center'}}>
      <Row style={{width:'100%'}}>
        {course.slice(0, visibleCourses).map((item, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>{item.coursename || "Course Title"}</Card.Title>
                <Card.Text>
                  {item.description || " "}
                </Card.Text>
                <Button variant="primary">Enroll Course</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>

      {visibleCourses < course.length && (
        <div className="text-center my-4">
          <Button onClick={loadMoreCourses}>Load More</Button>
        </div>
      )}

      <PageFooter />
    </div>
  );
}

export default HomePage;
