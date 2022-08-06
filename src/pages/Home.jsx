import React from "react";
import List from "../components/List";
import Search from "../components/Search";

const Home = () => {
  return (
    <main className="mx-auto bg-Merino px-5 pb-10 lg:px-20">
      <Search />
      <List />
    </main>
  );
};

export default Home;
