const QuantityControls = (props) => {
  const addQty = () => {
    props.setAmount(props.amount + 1);
  };
  const removeQty = () => {
    if (props.amount > 0) {
      props.setAmount(props.amount - 1);
    }
  };

  return (
    <>
      <button onClick={() => addQty()}>+</button>
      <button onClick={() => removeQty()}>-</button>
    </>
  );
};
export default QuantityControls;
