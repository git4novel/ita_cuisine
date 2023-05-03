import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import ChefCard from "./ChefCard";

const Chef = () => {

    const [chefs, setChefs] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/')
        .then(res=>res.json())
        .then(data=>setChefs(data))
    },[])

  return (
    <div className="row mt-3">
      {
         
           chefs.map(chef=> <ChefCard key={chef._id} chef={chef}></ChefCard> )
        
      }
    </div>
  );
};

export default Chef;
