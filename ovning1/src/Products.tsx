import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
interface ProductDate {
  id: number;
  category: string;
  description: string;
  price: number;
  title: string;
  image: string;
}

const Products = (p: ProductDate) => {
  return (
    <div>
      <Link to={`/products/${p.id}`} key={p.id} className="product-card">
        <ProductCard
          id={p.id}
          title={p.title}
          price={p.price}
          category={p.category}
          description={p.description}
          image={p.image}
        ></ProductCard>
      </Link>
    </div>
  );
};

export default Products;
