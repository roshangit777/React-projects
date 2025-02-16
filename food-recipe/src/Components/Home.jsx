import React from "react";
import RecipeList from "./RecipeList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recipeSliceAction } from "../store/recipeSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log();

    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => res.json())
      .then((data) => {
        if (data?.meals) {
          dispatch(recipeSliceAction.addRecipe(data));
        } else {
          console.warn("No meals found in the response.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const recipeItems = useSelector((store) => store.recipe);
  let myItems =
    recipeItems.length > 0 && recipeItems[0]?.meals ? recipeItems[0].meals : [];

  return (
    <div className="newContainer">
      {myItems.map((item, index) => {
        return <RecipeList key={Math.random()} item={item} index={index} />;
      })}
    </div>
  );
};

export default Home;
