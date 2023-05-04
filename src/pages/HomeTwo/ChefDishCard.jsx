import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {  } from "react-icons/fa";
import { FcRating, FcRatings } from 'react-icons/fc';

const ChefDishCard = ({chef_id}) => {
    const [id, setId] = useState(chef_id);

    const [datas, setDatas] = useState([])

    useEffect(() => {
      setId(chef_id);
    }, [chef_id]);

    useEffect(() => {
      fetch(`https://italian-chef-server-git4novel.vercel.app/chefDishes/${id}`)
        .then((response) => response.json())
        .then((data) => {
          // Handle the fetched data
          setDatas(data);
        })
        .catch((error) => {
          // Handle any errors that may occur
          console.log(error);
        });
    }, [id]);

    // console.log(datas)
    return (
        <div className='row'>
            <h3 className='text-black fs-3'>Recipes Provided By the Chef</h3>
           {
            datas.map(data => 
                <div style={{backgroundColor:'wheat'}} className='col-6 border border-secondary p-2 g-2 rounded-3'>
                   <p style={{fontWeight: '600'}} className='fs-4 text-black'>{data.recipe_name}</p>
                   <p className='text-danger'>Ingredients</p>
                   <ul className='text-success mt-0 mb-0'>
                    <li>{data.Ingredients[0]}</li>
                    <li>{data.Ingredients[1]}</li>
                    <li>{data.Ingredients[2]}</li>
                    <li>{data.Ingredients[3]}</li>
                    <li>{data.Ingredients[4]}</li>
                    </ul>
                    <p>Cooking Method: {data.cooking_method}</p>
                    <p className='text-warning'>Ratings: {data.rating} <FcRating></FcRating> </p>
                    <Button className='border'  style={{ backgroundColor: "#D54215" }}>Add Favorite</Button>
                </div>
                )
           }
        </div>
    );
};

export default ChefDishCard;