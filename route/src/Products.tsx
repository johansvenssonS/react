import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch {
        console.log("error");
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <h2>Produkts komponent</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card"
          >
            <img src={product.image} alt={product.title} />
            <p className="product-title">{product.title}</p>
            <p className="product-price">{product.price} $</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
