import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCocktailById } from "../store/cocktailSlice";
import { useParams, useNavigate } from "react-router-dom";

const Details = () => {
  const { cocktail } = useSelector((state) => state.cocktail);

  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktailById(id));
  }, []);

  return (
    <section className="mx-auto max-w-7xl p-5 lg:pt-20 ">
      <div className="flex flex-col lg:flex-row">
        <img src={cocktail.strDrinkThumb} alt="" />
        <div className="relative bg-Tacao text-2xl px-5 py-20 space-y-5">
          <div className="flex space-x-5">
            <span className="bg-Nutmeg text-Merino px-2 py-1">Name</span>
            <h1 className="text-4xl text-Nutmeg">{cocktail.strDrink}</h1>
          </div>
          <div className="flex space-x-5">
            <span className="bg-Nutmeg text-Merino px-2 py-1">Catagory</span>
            <h1 className="text-4xl text-Nutmeg">{cocktail.strCategory}</h1>
          </div>
          <div className="flex space-x-5">
            <span className="bg-Nutmeg text-Merino px-2 py-1">Glass</span>
            <h1 className="text-4xl text-Nutmeg">{cocktail.strGlass}</h1>
          </div>
          <div className=" space-y-5">
            <span className="bg-Nutmeg text-Merino px-2 py-1">
              Instructions
            </span>
            <h1 className="text-4xl text-Nutmeg">{cocktail.strInstructions}</h1>
          </div>
          <button
            className="bg-Nutmeg  text-Tacao w-20 h-12 absolute  bottom-5 right-1/2"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Details;
