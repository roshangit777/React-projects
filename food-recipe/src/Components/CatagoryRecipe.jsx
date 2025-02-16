import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatagoryRecipeList from "./CatagoryRecipeList";
import { catagoryRecipeSliceAction } from "../store/catagoryRecipeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const myCat = useSelector((store) => store.catagory);

  useEffect(() => {
    // Only make the API call if myCat is not empty
    if (myCat) {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${myCat}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.meals) {
            dispatch(catagoryRecipeSliceAction.addCatagoryRecipe(data));
          } else {
            console.warn("No meals found in the response.");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [myCat]); // Add `myCat` as a dependency to re-trigger the effect when it changes

  const { recipe } = useSelector((store) => store.catagoryRecipe);
  const myItems = recipe && recipe.meals ? recipe.meals : [];

  return (
    <div className="newContainer">
      {myItems.map((item) => (
        <CatagoryRecipeList key={Math.random()} item={item} />
      ))}
    </div>
  );
};

export default Home;
