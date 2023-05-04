import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { FcLike } from "react-icons/fc";
const FavDishes = () => {
  const [favDishes, setFavDishes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/favdishes")
      .then(response => response.json())
      .then(data=> setFavDishes(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="row mt-5 mb-5">
      <h3 className="text-center mt-4">Most Liked Dishes From Us</h3>
      {favDishes.map((favDish) => (
        <div className="col-6 col-lg-4 mt-2">
          <Card className="w-100 p-3" style={{ height: "" }}>
            <Card.Img
              className="rounded-3"
              style={{ height: "300px" }}
              variant="top"
              src={favDish.dish_image}
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: "700" }}>
                {favDish.dish_name}
              </Card.Title>
              <p className=" mt-0 fs-5 text-black">
                <FcLike></FcLike> : {favDish.likes}
              </p>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default FavDishes;
