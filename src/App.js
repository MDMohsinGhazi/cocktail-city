import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="cocktail/:id" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
