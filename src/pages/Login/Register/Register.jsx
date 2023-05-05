import React, {  useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

const Register = () => {
  
  // setting error and success message on condition.
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // directing to path where user wanted to go
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email?.value;
    const name = form.name.value;
    const password = form.password.value;
    const photoUrl = form.photo.value;
  
    if (!/.{6}/.test(password)) {
      setError("password not valid need 6 character ");
      return;
    }

    setSuccess("");

    createUserWithEmailAndPassword(auth,email, password)
      .then((result) => {
        updateProfile(result.user,{
          displayName: name,
          photoURL: photoUrl
        }).then(() =>{
          setSuccess("Register successfully")
          navigate(from)

        })
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setSuccess("");
      });
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
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
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
          <Form.Control
            name="photo"
            type="text"
            placeholder="Your Photo URL"
          />
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
