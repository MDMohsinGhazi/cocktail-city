import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { fetchCocktail } from "../store/cocktailSlice";

const Search = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = setTimeout(() => {
      dispatch(fetchCocktail(search));
    }, 1000);
    return () => clearTimeout(getData);
  }, [search]);

  return (
    <section className="flex justify-center items-center py-10">
      <input
        className="text-neutral-600
          font-semibold text-lg
          placeholder:font-semibold px-2 py-1 outline-none w-full md:w-1/2 lg:w-1/3"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(evt) => setSearch(evt.target.value)}
      />
    </section>
  );
};

export default Search;
