import React from "react";
import "./singleRecipe.css";
import { useGlobalHook } from "../../Contexst";
const SingleRecipe = ({ recipe }) => {
  const { handleDeleteRecipe: onDelete } = useGlobalHook();
  return (
    <div className="main-card">
      <div className="card" key={recipe.id}>
        <img src={recipe.image} alt="" />
        <div className="btn">
          <button onClick={() => onDelete(recipe.id)}>Delete</button>
          <button>Edit</button>
        </div>
        <h2>{recipe.name}</h2>
        <div className="footer">
          <div className="left">
            <h5>Cusisine Type</h5>
            <h5>Ingrediaents :{recipe?.ingredients[0]}</h5>
            <h5>Instructions:{recipe.instructions}</h5>
          </div>
          <div className="right">
            <p>Italian</p>
            <p>See recipe&#x2192;</p>
            <p>See recipe&#x2192;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
