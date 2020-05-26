import React from "react";
import { v4 as uuidv4 } from "uuid";

const RecipeDetails = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return <li key={uuidv4()}>・{ingredient.text}</li>;
  });
};

export default RecipeDetails;
