import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import ProductCard from "./ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch {
        console.log("error");
      }
    };
    fetchData();
  }, []);

  console.log(products);
  return (
    <>
      {products.map((product) => (
        <ProductCard product={product}></ProductCard>
      ))}
    </>
  );
}

export default App;
