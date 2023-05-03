import React from "react";
import { Container } from "react-bootstrap";

const Faq = () => {
  return (
    <Container style={{fontFamily: 'sans-serif', fontStyle: 'italic'}}>
      <h3 className="mt-3 pt-2 text-center">
        Frequently Asked Questions Section
      </h3>
      <div className="mt-4 mb-5 d-flex flex-column align-items-center flex-lg-row-reverse justify-content-between gap-3">
        <div>
          <div style={{backgroundColor: 'whitesmoke'}} className=" p-2 rounded-2">
            <h3>What we Serve?</h3>
            <p>
              We serve Everything you want. Starting from food and Food
              ingredients we can serve chef as well. We have no boundaries world
              wide. We have merchendize worldwide.
            </p>
          </div>
          <div style={{backgroundColor: 'whitesmoke'}} className=" p-2 rounded-2 mt-2">
            <h3>What our Motive is?</h3>
            <p>
              Our motive is simple. "Food For Life". We are here to entertain people with food as well. 
            </p>
          </div>
          <div style={{backgroundColor: 'whitesmoke'}} className=" p-2 rounded-2 mt-2">
            <h3>What is our passion</h3>
            <p>
              To Spread Love
            </p>
          </div>
        </div>
        {/* big cover image section */}
        <div>
          <img
            className="rounded-4"
            src="https://img.freepik.com/free-vector/fast-food-frame_1284-32810.jpg?w=360&t=st=1683104160~exp=1683104760~hmac=288e4e592208a816eb9b33169d2a34e7d36e230893c531903340a0db3eef449c"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Faq;
