import React, { createContext, useContext, useState } from "react";

const context = createContext();

const Contexst = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");

  // Add data
  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
    setIsModalOpen(false);
  };

  const handleDeleteRecipe = (recipeId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  };

  const filteredRecipes = recipes.filter((recipe) => {
    if (searchCategory === "name") {
      return recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (searchCategory === "ingredient") {
      return recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (searchCategory === "cuisine") {
      return recipe.cuisineType
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    }
    return false;
  });

  const handleSearchCategoryChange = (event) => {
    setSearchCategory(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <context.Provider
      value={{
        handleAddRecipe,
        handleDeleteRecipe,
        isModalOpen,
        setIsModalOpen,
        recipes,
        setRecipes,
        handleSearchCategoryChange,
        filteredRecipes,
        searchQuery,
        setSearchQuery,
        searchCategory,
        setSearchCategory,
        handleSearchQueryChange,
      }}
    >
      {children}
    </context.Provider>
  );
};

// Global hook
const useGlobalHook = () => {
  return useContext(context);
};

export default Contexst;
export { useGlobalHook };
