import { useQuery } from "@tanstack/react-query";
import Products from "./Products";
import { ClimbingBoxLoader } from "react-spinners";
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
  const [search, setSearched] = useState(false);
  const {
    data: products,
    isLoading,
    //error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Kunde inte hämta användare" + res.status);
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="loading">
        <ClimbingBoxLoader size={100} color="red">
          Laddar användare...
        </ClimbingBoxLoader>
        <p>Laddar användare..</p>
      </div>
    );
  }

  // if (error) {
  //   return <p>Ett fel uppstod</p>;
  // }

  const filterProducts = () => {
    const expensiveProducts = products.filter((p) => p.price > 50);
    setXproducts(expensiveProducts);
    setSearched(false);
  };
  const removeFilter = () => {
    setXproducts(products);
    setSearched(false);
  };

  let pickProducts = [];

  if (xproducts.length > 1) {
    pickProducts = xproducts;
  } else {
    pickProducts = products;
  }

  if (search) {
    pickProducts = xproducts;
  }

  const searchProducts = (e) => {
    let string = e.target.value;
    const resArr = products.filter((p) => p.title.startsWith(string));
    setXproducts(resArr);
    setSearched(true);
  };

  return (
    <>
      <div className="productfunc">
        <button onClick={filterProducts}> FILTRERA</button>
        <button onClick={removeFilter} id="remove">
          X
        </button>
        <div>
          <input onChange={searchProducts}></input>
        </div>
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
