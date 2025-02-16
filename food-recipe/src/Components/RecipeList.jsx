import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectedRecipeSliceAction } from "../store/selectedRecipe";
import foodImages from "../images/Images";

const RecipeList = ({ item, index }) => {
  const recipeItems = useSelector((store) => store.recipe);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let myItems =
    recipeItems.length > 0 && recipeItems[0]?.meals ? recipeItems[0].meals : [];

  const getRecepi = (id, img) => {
    const oneItem = myItems.find((recipeItem) => recipeItem.idMeal == id);
    sessionStorage.setItem("selectedRecipe", JSON.stringify([oneItem, img]));
    dispatch(selectedRecipeSliceAction.filterItem([oneItem, img]));
    navigate("/recipe");
  };

  return (
    <div className="food-container">
      <img src={foodImages[index]} alt="Pancake" />
      <div className="container__text">
        <h1>{item.strMeal}</h1>
        <div className="container__text__star">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        <div className="container__text__timing">
          <div className="container__text__timing_time">
            <h2>Cusin</h2>
            <p>{item.strArea}</p>
          </div>
        </div>
        <button
          className="btn"
          onClick={() => getRecepi(item.idMeal, foodImages[index])}
        >
          view recipe <i className="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
