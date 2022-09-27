import React, { useEffect, useState } from "react";
import FoodDetails from "../FoodDetails/FoodDetails";
import "./MealDB.css";

const MealDB = () => {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setFoods(data.meals);
      });
  }, []);

  const handleMealBtn = (food) => {
    setCart(food);
  };
  return (
    <div className="main-container">
      <div className="food-container">
        {foods.map((food) => (
          <FoodDetails
            key={food.idMeal}
            food={food}
            handleMealBtn={handleMealBtn}
          />
        ))}
      </div>
      <div className="cart-container">
        <h1>cart: {cart.length}</h1>
        <h3>idMeal: {cart.idMeal}</h3>
        <h4>Name: {cart.strMeal}</h4>
      </div>
    </div>
  );
};

export default MealDB;
