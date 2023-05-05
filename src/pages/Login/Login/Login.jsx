import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // sign in with google
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        navigate(from);
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  // sign in with github
  const handleGithubLogIn = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        navigate(from);
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setSuccess("");
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User entered successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="">
      <Form
        onSubmit={handleSubmit}
        className="w-50 border rounded p-2 mx-auto mt-2 mt-lg-4 pt-1 pt-lg-3 pb-1 pb-lg-3 mb-4"
      >
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
            placeholder="Enter Password"
            required
          />
        </Form.Group>
        <Button
          style={{ backgroundColor: "#D54215" }}
          className="border mt-1 mt-lg-3"
          type="submit"
        >
          Submit
        </Button>
        <div className="mt-3 mb-1">
          <Link>
            <Button
              onClick={handleGoogleSignIn}
              className="w-100 w-lg-50"
              variant="outline-primary"
            >
              <FcGoogle /> Continue With Google
            </Button>
          </Link>
          <Button
            onClick={handleGithubLogIn}
            className="mt-1 mt-lg-4 w-100 w-lg-50"
            variant="outline-secondary"
          >
            <FaGithub /> Continue With Github
          </Button>
        </div>
        <p className="text-success">{success}</p>
        <p className="text-danger">{error}</p>
        <p>
          New here
          <Link to="/register" className="text-decoration-none">
            Register!
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
