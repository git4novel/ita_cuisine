import React from "react";
// import BannerDesign from './Banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Banner = () => {
  return (
    <div className="banner position-relative">
      <img
        className="w-full"
        style={{ width: "100%", opacity: '0.7' }}
        src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-assortment_23-2149141339.jpg?w=740&t=st=1683019990~exp=1683020590~hmac=b9b4e78b63ada5d770abb634dfc8cafd0f03d5a4aa0fbb1f2d91695b07f4de93"
      ></img>
      <div className="pt-4 mt-lg-5 position-absolute top-0">
        <h2
          className="text-white text-center mx-auto fs-md-1 pt-1 pt-lg-4 mt-lg-5"
          style={{
            filter: "drop-shadow(10px 15px 5px #000)",
            color: "white",
          }}
        >
          Italian Cuisine Hunter
        </h2>
        <p style={{
            filter: "drop-shadow(5px 8px 2px #000)",
            color: "white"
          }} className="text-white fs-md-6 fs-lg-4 mx-auto text-center opacity-1 w-75 mt-sm-1 mt-lg-3">
          Get Your all Required Cuisine from Our collected best chef out there.
          We offer you all kind of cuisine related to out culture. We prefer to show how italian cuisine on of the Greatest
        </p>
      </div>
    </div>
  );
};

export default Banner;
