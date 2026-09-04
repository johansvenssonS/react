import tshirt from "./assets/tshirt.jpg";

const ProductDisplay = (props) => {
  const calcTotal = (x, y) => {
    return x * z;
  };
  return (
    <>
      <img src={tshirt} height={300} width={200}></img>
      <p>
        {" "}
        {props.amount}X t-shirt {props.price}kr
      </p>
      <p>{props.amount * props.price}kr tot</p>
    </>
  );
};

export default ProductDisplay;
