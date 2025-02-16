import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Recipe = () => {
  const navigate = useNavigate();
  const selectedRecipe = useSelector((store) => store.selectedRecipe);

  if (!selectedRecipe) {
    // Redirect if no recipe is selected
    navigate("/");
    return null;
  }

  return (
    <div className="newContainer">
      <div className="food-container">
        <img src={selectedRecipe[1]} alt={selectedRecipe.strMeal} />
        <div className="container__text">
          <h1>{selectedRecipe[0].strMeal}</h1>
          <div className="container__text__star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <p>{selectedRecipe[0].strInstructions}</p>
          <div className="container__text__timing">
            <div className="container__text__timing_time">
              <h2>Cuisine</h2>
              <p>{selectedRecipe[0].strArea}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
