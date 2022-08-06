import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-Nutmeg text-Merino p-5">
      <Link to="/" reloadDocument className="flex items-center">
        <img className="h-8" src={Logo} alt="" />
        <h1 className="text-md md:text-xl font-semibold">Cocktail's City</h1>
      </Link>
      <h1 className="text-Merino text-sm  md:text-lg font-semibold">
        Find Your favourit cocktail
      </h1>
    </nav>
  );
};

export default Navbar;
