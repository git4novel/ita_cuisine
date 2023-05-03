import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="">
      <Form className="w-75 w-lg-50 border rounded p-2 mx-auto mt-2 mt-lg-4 pt-1 pt-lg-3 pb-1 pb-lg-3 mb-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Button style={{backgroundColor:"#D54215"}} className="border mt-1 mt-lg-3" type="submit">
          Submit
        </Button>
        <p>New here <Link to='/register' className="text-decoration-none">Register!</Link></p>
      </Form>
    </div>
  );
};

export default Login;
