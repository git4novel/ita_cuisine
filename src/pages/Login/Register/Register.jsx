import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const Register = () => {
  return (
    <Container className="">
      <Form className="w-50 border rounded p-2 mx-auto mt-5 pt-4 pb-5 mb-4">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label>Your Photo URL</Form.Label>
          <Form.Control type="text" placeholder="Your Photo URL" />
        </Form.Group>
        
        <Button
          style={{ backgroundColor: "#D54215" }}
          className="border mt-4"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
