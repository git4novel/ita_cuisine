import { rankings } from "match-sorter";
import React from "react";
import { FcLike } from "react-icons/fc";

const ChefDetails = ({ chef }) => {
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
    likes,
    bio,
  } = chef;
  return (
    <div className="border rounded-3 m-1  mx-auto">
      <div className=" border-secondary">
        <img
          className="rounded-4"
          style={{ height: '300px', width: "300px" }}
          src={chef_picture}
          alt=""
        />
        <h5>{chef_name}</h5>
        <p>
          <FcLike></FcLike> {likes}
        </p>
        <p className="text-danger">Years of Experience: {years_of_experience}</p>
        <p>Number of Recipes: {number_of_recipes}</p>
      </div>
      <div className="p-2 border rounded-3 m-1 text-success">
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default ChefDetails;
