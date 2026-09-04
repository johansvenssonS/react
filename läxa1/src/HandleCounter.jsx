const HandleCounter = (props) => {
  const addCount = () => {
    if (props.count < 10) {
      props.setCount(props.count + 1);
      props.setIsValid(true);
    } else {
      props.setIsValid(false);
    }
  };
  const removeCount = () => {
    if (props.count > 0) {
      props.setCount(props.count - 1);
      props.setIsValid(true);
    } else {
      props.setIsValid(false);
    }
  };

  return (
    <>
      <button onClick={addCount}>Öka</button>
      <button onClick={removeCount}>Sänk</button>
    </>
  );
};
export default HandleCounter;
