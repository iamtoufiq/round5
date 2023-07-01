import React from "react";
import "./navbar.css";
import { useGlobalHook } from "../../Contexst";
const Navbar = () => {
  const {
    handleSearchCategoryChange,
    searchQuery,
    searchCategory,

    handleSearchQueryChange,
  } = useGlobalHook();
  return (
    <div className="header">
      <input
        type="text"
        placeholder="search the item you want.."
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <span>Filters</span>
      <label htmlFor="option1">
        <input
          type="radio"
          id="option1"
          name="radioOptions"
          value="name"
          checked={searchCategory === "name"}
          onChange={handleSearchCategoryChange}
        />
        Name
      </label>
      <label htmlFor="option2">
        <input
          type="radio"
          id="option2"
          name="radioOptions"
          value="ingredient"
          checked={searchCategory === "ingredient"}
          onChange={handleSearchCategoryChange}
        />
        Ingrediant
      </label>

      <label htmlFor="option3">
        <input
          type="radio"
          id="option3"
          name="radioOptions"
          value="cuisine"
          checked={searchCategory === "cuisine"}
          onChange={handleSearchCategoryChange}
        />
        Cuisine
      </label>
    </div>
  );
};

export default Navbar;
