import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Form, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const NavigationBar = () => {
  const {user} = useContext(AuthContext)


    return (
        <Navbar style={{fontFamily: 'sans-serif', fontWeight: 'bold', marginTop: '0px'}}  bg="light" expand="lg" className='mx-auto '>
        <Container fluid>
          <Link to='/' className='text-decoration-none'><Navbar.Brand className='fs-4  text-decoration-none' style={{fontFamily: 'cursive'}}>ITa_<span className='text-danger'>Cuisine</span></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link className='me-2 fs-5 text-dark text-decoration-none' to='/'>Home</Link>
              <Link  className='me-2 fs-5 text-dark  text-decoration-none' to='/Blog'>Blog</Link>
            </Nav>
            <Form className="d-flex">
              <FaUserCircle style={{width:'30px', height: '30px'}} className='align-items-center me-2'/>
              {
                user ? 
                <Link to='/login'><Button className='border'  style={{ backgroundColor: "#D54215" }}>Login</Button></Link>
                :
                <Button className='border'  style={{ backgroundColor: "#D54215" }}>LogOut</Button>
              }
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavigationBar;