import React from "react";
import "./allRecipe.css";
import SingleRecipe from "./SingleRecipe";
import { useGlobalHook } from "../../Contexst";

const AllRecipe = () => {
  const { recipes } = useGlobalHook();
  return (
    <div className="allRecipe">
      {recipes.map((recipe, ind) => {
        return <SingleRecipe recipe={recipe} key={recipe.id} />;
      })}
      {/* <SingleRecipe />
      <SingleRecipe /> */}
    </div>
  );
};

export default AllRecipe;
