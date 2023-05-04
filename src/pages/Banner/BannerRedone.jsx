import React from "react";
import { Carousel } from "react-bootstrap";
import LazyLoad from 'react-lazy-load';


const BannerRedone = () => {
  return (
    <div className="border rounded-4 mt-3 mb-3 w-100">
      <Carousel>
        <Carousel.Item>
          <LazyLoad>
          <img
            style={{ maxHeight: "700px" }}
            className="d-block w-100 rounded-4"
            src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1683101471~exp=1683102071~hmac=f2fc69b852eb71cf61c164649d3386a28aadb4dcbeaeecc7d86aebe3982f1e0c"
            alt="First slide"
          />
          </LazyLoad>
          <Carousel.Caption className="text-white mb-1 mb-lg-5">
            <h1
              style={{ fontFamily: "serif", fontWeight: "800" }}
              className="fs-3 fs-lg-1 "
            >
              Italian Cuisine Hunt
            </h1>
            <p className="fs-6 fs-lg-3">Get Authentic Food From Authentic place <br />We are here to provide italian cuisine  from best of the best chef <br />out there. .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "700px" }}
            className="d-block w-100 rounded-4"
            src="https://img.freepik.com/premium-photo/full-table-italian-meals-plates-black-background_259258-16.jpg?w=740"
            alt="Second slide"
          />

          <Carousel.Caption className="text-white  mb-1 mb-lg-5">
            <h1
              style={{ fontFamily: "serif", fontWeight: "800" }}
              className="fs-3 fs-lg-1 "
            >
              Benefit of Our Cuisine
            </h1>
            <p  className="fs-6 fs-lg-3">Our Cuisine is made with organic food supplement which is why we  <br />prefer to show how important authenticity is!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "700px" }}
            className="d-block w-100 rounded-4"
            src="https://img.freepik.com/premium-photo/table-full-food-top-view-set-dishes-table-meat-salad-dessert-table-top-view_229797-371.jpg?w=740"
            alt="Third slide"
          />

          <Carousel.Caption className="text-white mb-1 mb-lg-5">
            <h1
              style={{ fontFamily: "serif", fontWeight: "800" }}
              className="text-white fs-3 fs-lg-1"
            >
              Loved Throughout The World
            </h1>
            <p  className="fs-6 fs-lg-3">Our cuisine is known by everybody. Starting from Chez like Permigiano or Mozzorella we are famous for dairy industry..</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/*  */}
    </div>
  );
};

export default BannerRedone;
