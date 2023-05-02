import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcLike } from 'react-icons/fc'

const ChefCard = ({ chef }) => {
    const {_id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes} = chef;
  return (
    <div className="col-6 col-lg-4 mt-2">
      <Card className="w-100 p-3" style={{height: ''}}>
        <Card.Img className="rounded-xl" style={{height: '300px'}} variant="top" src={chef_picture} />
        <Card.Body>
          <Card.Title>{chef_name}</Card.Title>
          <div>
            <p className="mt-lg-5 mt-2 mb-0">Years of Experience: {years_of_experience} years</p>
            <p>Number of Recipes: {number_of_recipes}</p>
            <p><FcLike/> Like Count: {likes}</p>
          </div>
          <Link ><Button  style={{backgroundColor:"#D54215"}}  className="text-white border" >
            View Recipes
          </Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChefCard;
