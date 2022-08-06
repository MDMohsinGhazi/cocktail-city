import { useSelector } from "react-redux";
import Card from "./Card";

const List = () => {
  const { cocktails } = useSelector((state) => state.cocktail);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {cocktails?.map((cocktail, index) => (
        <Card cocktail={cocktail} key={index} />
      ))}
    </section>
  );
};

export default List;
