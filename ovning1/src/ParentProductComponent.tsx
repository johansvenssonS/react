import { useQuery } from "@tanstack/react-query";
import Products from "./Products";

import { useState } from "react";

interface ProductDate {
  id: number;
  category: string;
  description: string;
  price: number;
  title: string;
}

const ParentProductComponent = () => {
  const [xproducts, setXproducts] = useState([]);
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Kunde inte hämta användare" + res.status);
      return res.json();
    },
  });

  if (isLoading) {
    return <p>Laddar användare...</p>;
  }

  if (error) {
    return <p>Ett fel uppstod</p>;
  }
  console.log(products);

  const filterProducts = () => {
    const expensiveProducts = products.filter((p) => p.price > 50);
    setXproducts(expensiveProducts);
    console.log(expensiveProducts);
  };

  return (
    <>
      <ul>
        {(xproducts || products).map((p: ProductDate) => (
          <Products
            id={p.id}
            category={p.category}
            description={p.description}
            price={p.price}
            title={p.title}
          ></Products>
        ))}
      </ul>

      <button onClick={filterProducts}> FILTRERA</button>
    </>
  );
};
export default ParentProductComponent;
