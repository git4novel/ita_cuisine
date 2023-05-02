/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Offcanvas, Form, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBeer, FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <Navbar style={{fontFamily: 'sans-serif', fontWeight: 'bold', marginTop: ''}} fixed='top' bg="light" expand="lg" className='mx-4 '>
        <Container fluid>
          <Link to='/'><Navbar.Brand className='fs-4' style={{fontFamily: 'cursive'}}>ITa_<span className='text-danger'>Cuisine</span></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link className='me-2 fs-5 text-dark' to='/'>Home</Link>
              <Link  className='me-2 fs-5 text-dark' to='/Blog'>Blog</Link>
            </Nav>
            <Form className="d-flex">
              <FaUserCircle style={{width:'30px', height: '30px'}} className='align-items-center me-2'/>
              <Link to='/login'><Button variant="outline-success">Login</Button></Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;