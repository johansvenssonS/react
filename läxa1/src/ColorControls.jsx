const ColorControls = (props) => {
  const changeColor = (color) => {
    props.setColor(color);
  };

  return (
    <>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => changeColor("red")}
      >
        röd
      </button>
      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => changeColor("blue")}
      >
        blå
      </button>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => changeColor("green")}
      >
        grön
      </button>
    </>
  );
};
export default ColorControls;
