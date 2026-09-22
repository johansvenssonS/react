interface ProductDate {
  id: number;
  category: string;
  description: string;
  price: number;
  title: string;
}

const Products = (p: ProductDate) => {
  return (
    <li key={p.id}>
      <h3>
        {p.title} {p.price} kr
      </h3>
      <p>
        - {p.category}-- {p.description}
      </p>
    </li>
  );
};

export default Products;
