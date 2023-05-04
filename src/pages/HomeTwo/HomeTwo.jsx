import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
import ChefDetails from "./ChefDetails";
import ChefDishCard from "./ChefDishCard";
import { useLoaderData } from "react-router-dom";
import NavigationBar from "../../shared/NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const HomeTwo = () => {
  const chef = useLoaderData();
  const {_id, chef_id} = chef;
  return (
    <>
    <NavigationBar></NavigationBar>
      <div className="row mx-4">
        <div className="col-12 text-center col-lg-6">
          <ChefDetails chef={chef} key={chef._id}></ChefDetails>
        </div>
        <div className="col-12 col-lg-6">
          <ChefDishCard chef_id={chef_id} ></ChefDishCard>
        </div>
      </div>
    <Footer></Footer>
    </>
  );
};

export default HomeTwo;
