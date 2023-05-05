/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container className="mx-auto p-5">
      <section className="flex mx-6 p-5 items-center h-screen p-16 bg-gray-100 text-gray-900">
        <div className="container d-flex align-items-center justify-content-center mx-auto my-8">
          <img className="" style={{width: '300px', height: '300px' }} src="https://i.ibb.co/qCXwQ83/Screenshot-2023-05-05-180711.png"></img>
        </div>
      </section>
      <p className="
       fs-g fs-lg-3 m-3 text-white bg-danger text-center px-2 px-lg-5 py-2 py-lg-3">
            Error : false route
          </p>
      <div className="max-w-md text-center mt-5">

            <Link
              to="/"
              className=" text-white fs-3 px-lg-4 px-2 text-decoration-none border border-success bg-warning py-3 font-semibold rounded primary-linear-grad-color"
            >
              Back to homepage
            </Link>
          </div>
    </Container>
  );
};

export default ErrorPage;
