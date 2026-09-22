import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/users"}>Användare</Link>
      <Link to={"/products"}>Produkter</Link>
    </>
  );
};

export default Navbar;
