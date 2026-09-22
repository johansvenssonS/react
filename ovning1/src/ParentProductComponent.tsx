import { useQuery } from "@tanstack/react-query";
import Products from "./Products";

import { useState } from "react";

interface ProductDate {
  id: number;
  category: string;
  description: string;
  price: number;
  title: string;
  image: string;
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
  const removeFilter = () => {
    setXproducts(products);
  };

  let pickProducts = [];

  if (xproducts.length > 1) {
    pickProducts = xproducts;
  } else {
    pickProducts = products;
  }

  return (
    <>
      <div>
        <button onClick={filterProducts}> FILTRERA</button>
        <button onClick={removeFilter} id="remove">
          X
        </button>
      </div>
      <div className="productgrid">
        {pickProducts.map((p: ProductDate) => (
          <Products
            key={p.id}
            id={p.id}
            category={p.category}
            description={p.description}
            price={p.price}
            title={p.title}
            image={p.image}
          ></Products>
        ))}
      </div>
    </>
  );
};
export default ParentProductComponent;
