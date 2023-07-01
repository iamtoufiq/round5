import React, { useState } from "react";
import { useGlobalHook } from "./Contexst";

const RecipeModal = ({ onClose }) => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [imageURL, setImageURL] = useState("");
  const { handleAddRecipe: onAdd } = useGlobalHook();
  const handleAdd = () => {
    if (!imageURL.startsWith("https://")) {
      return alert("Please fill the image URL starting with 'https://'");
    }
    const recipe = {
      id: Date.now(), // Generate a unique ID for the recipe
      name: recipeName,
      ingredients: ingredients
        .split(",")
        .map((ingredient) => ingredient.trim()),
      instructions,
      cuisineType,
      image: imageURL,
    };

    onAdd(recipe);
    onClose();
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Name"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      <textarea
        placeholder="Ingredients (comma-separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      ></textarea>
      <textarea
        placeholder="Cooking Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Cuisine Type"
        value={cuisineType}
        onChange={(e) => setCuisineType(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default RecipeModal;
