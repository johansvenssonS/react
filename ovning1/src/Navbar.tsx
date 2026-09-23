import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/users"}>Användare</Link>
      <Link to={"/products"}>Produkter</Link>
    </div>
  );
};

export default Navbar;
