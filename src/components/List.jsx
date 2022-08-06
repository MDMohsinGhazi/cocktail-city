import { useSelector } from "react-redux";
import Card from "./Card";
import NotFound from "../assets/notFound.gif";

const List = () => {
  const { cocktails } = useSelector((state) => state.cocktail);

  if (!cocktails) {
    return (
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-Nutmeg text-2xl lg:text-4xl">No Result Found</h1>
        <img src={NotFound} alt="" />
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {cocktails?.map((cocktail, index) => (
        <Card cocktail={cocktail} key={index} />
      ))}
    </section>
  );
};

export default List;
