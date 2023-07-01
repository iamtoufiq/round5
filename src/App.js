import React from "react";

import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import AllRecipe from "./components/Recipe/AllRecipe";
import RecipeOrganizer from "./RecipeOrganizer";
const App = () => {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <RecipeOrganizer />
      <AllRecipe />

      <Footer />
    </div>
  );
};

export default App;
