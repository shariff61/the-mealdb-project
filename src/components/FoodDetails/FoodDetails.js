import React from "react";
import "./FoodDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const FoodDetails = ({ handleMealBtn, food }) => {
  const { strMeal, strMealThumb, strInstructions } = food;
  return (
    <div className="food">
      <h3>Name: {strMeal}</h3>
      <img style={{ width: "200px" }} src={strMealThumb} alt="" />
      <p>{strInstructions.slice(0, 250)}</p>
      <button onClick={() => handleMealBtn(food)} className="btn-meal">
        Meal <FontAwesomeIcon icon={faCoffee} />
      </button>
    </div>
  );
};

export default FoodDetails;
