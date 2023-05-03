import React from "react";
import { Carousel } from "react-bootstrap";

const BannerRedone = () => {
  return (
    <div className="border rounded-4 mt-3 mb-3 w-100">
      <Carousel>
        <Carousel.Item>
          <img
            style={{ maxHeight: "700px" }}
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1683101471~exp=1683102071~hmac=f2fc69b852eb71cf61c164649d3386a28aadb4dcbeaeecc7d86aebe3982f1e0c"
            alt="First slide"
          />
          <Carousel.Caption className="text-white mb-5">
            <h1
              style={{ fontFamily: "serif", fontWeight: "800" }}
              className=" fs-1 "
            >
              First slide labelf fdf ddfsfds
            </h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "700px" }}
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/full-table-italian-meals-plates-black-background_259258-16.jpg?w=740"
            alt="Second slide"
          />

          <Carousel.Caption className="text-white mb-5">
            <h1
              style={{ fontFamily: "serif", fontWeight: "800" }}
              className=" fs-1 "
            >
              First slide labelf fdf ddfsfds
            </h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "700px" }}
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/table-full-food-top-view-set-dishes-table-meat-salad-dessert-table-top-view_229797-371.jpg?w=740"
            alt="Third slide"
          />

          <Carousel.Caption className="text-white mb-5">
            <h1
              style={{ fontFamily: "serif", fontWeight: "800" }}
              className="text-white "
            >
              First slide labelf fdf ddfsfds
            </h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/*  */}
    </div>
  );
};

export default BannerRedone;
