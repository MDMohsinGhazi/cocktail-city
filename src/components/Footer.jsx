import Logo from "../assets/logo.png";
const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-Nutmeg text-Merino p-5">
      <div className="flex items-center">
        <img className="h-8" src={Logo} alt="" />
        <h1 className="text-md md:text-xl font-semibold">Cocktail's City</h1>
      </div>
    </section>
  );
};

export default Footer;
