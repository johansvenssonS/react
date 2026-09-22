import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

const SingleProductComponent = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`,
        );
        const data = await response.json();
        setProduct(data);
      } catch {
        console.log("error");
      }
    };
    fetchdata();
  }, [productId]);

  if (!product) return <div>Laddar...</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width={150} />
      <p>{product.category}</p>
      <p>{product.price} $</p>
      <p>{product.description}</p>
    </div>
  );
};

export default SingleProductComponent;
