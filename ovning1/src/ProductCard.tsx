const ProductCard = (props) => {
  return (
    <div className="productCard">
      <p>{props.title}</p>
      <img src={props.image} className="productimg"></img>
      <p>{props.price} kr</p>
    </div>
  );
};

export default ProductCard;
