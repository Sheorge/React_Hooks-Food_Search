import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);

  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a
        className="more-info"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        More Details
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && (
        <ul className="ingredient-list py-3">
          <RecipeDetails ingredients={ingredients} />
        </ul>
      )}
    </div>
  );
};

export default Recipe;
