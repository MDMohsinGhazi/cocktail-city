import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cocktail }) => {
  return (
    <figure className="bg-Tacao">
      <img src={cocktail.strDrinkThumb} alt="" />
      <div className="text-neutral-600 font-semibold p-5 text-xl">
        <h1 className="text-Nutmeg font-bold ">{cocktail.strDrink}</h1>
        <p>{cocktail.strAlcoholic}</p>
        <p className="pb-4">{cocktail.strGlass}</p>
        <Link
          className="px-2 py-1 text-Tacao  bg-Nutmeg "
          to={`cocktail/${cocktail.idDrink}`}
        >
          Details
        </Link>
      </div>
    </figure>
  );
};

export default Card;
