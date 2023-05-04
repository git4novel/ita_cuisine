import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import 'bootstrap/dist/css/bootstrap.min.css';


const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email?.value;
    const name = form.name.value;
    const password = form.password.value;
    const photoUrl = form.photo.value;
    // console.log(email, password, photoUrl, name);

    // this is here for validation
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
      setError("Use Two Upper Case on password")
      return;
    }
    else if(!/(?=.*[!@#$&*])/.test(password)){
      setError('Use one special Character')
      return;
    }
    else if (!/.{8}/.test(password)){
      setError("password not valid need 8 char ");
      return;
    }

    setSuccess('')

    createUser(email, password)
    .then(result =>{
      const createdUser = result.user;
      // console.log(createdUser);
      setError('');
      setSuccess('user has created successfully')
      form.reset();
    })
    .catch(error=>{
      console.log(error.message);
      setError(error.message)
      setSuccess('')
    })
  };

  return (
    <Container className="w-75 w-lg-50 mt-3">
      <h3>Please Register here!</h3>
      <Form
        onSubmit={handleRegister}
        className="border rounded p-2 mx-auto mt-2 mt-lg-4 pt-2 pt-lg-4 pb-5 mb-4"
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Your Name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label>Your Photo URL</Form.Label>
          <Form.Control name="photo" type="text" placeholder="Your Photo URL"  required/>
        </Form.Group>

        <Button
          style={{ backgroundColor: "#D54215" }}
          className="border mt-4 btn-custom"
          type="submit"
        >
          Submit
        </Button>
        <p className="mt-2 mb-2 text-danger">{error}</p>
        <p className="mt-2 mb-2 text-success">{success}</p>
        <p>
          Already Have an Account? Go
          <Link to="/login" className="text-decoration-none">
            Login!
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
