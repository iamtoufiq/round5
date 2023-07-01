import React from "react";
import RecipeModal from "./RecipeModal";
import { useGlobalHook } from "./Contexst";
const RecipeOrganizer = () => {
  const { handleAddRecipe, isModalOpen, setIsModalOpen } = useGlobalHook();

  return (
    <div>
      <h1>Recipe Organizer</h1>
      <button onClick={() => setIsModalOpen(true)}>Add Recipe</button>
      {isModalOpen && (
        <RecipeModal
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddRecipe}
        />
      )}
    </div>
  );
};

export default RecipeOrganizer;
