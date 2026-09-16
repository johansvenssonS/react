import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Navbar from "./Navbar";
import Product from "./Product";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
      </Routes>
    </>
  );
}

export default App;
