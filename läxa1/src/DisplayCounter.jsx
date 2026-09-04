const DisplayCounter = (props) => {
  return (
    <>
      <h3>{props.count}</h3>
      <h2>{props.valid ? "" : "Siffra utanför 0-10"}</h2>
    </>
  );
};

export default DisplayCounter;
