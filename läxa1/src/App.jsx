import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import DisplayCounter from "./DisplayCounter";
import HandleCounter from "./HandleCounter";
import DisplayBox from "./DisplayBox";
import ColorControls from "./ColorControls";
import ProductDisplay from "./ProductDisplay";
import QuantityControls from "./QuantityControls";

function App() {
  const [count, setCount] = useState(0);
  const [valid, setIsValid] = useState(true);
  const [color, setColor] = useState("red");
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(150);

  return (
    <>
      <h1>Uppgift 1</h1>
      <DisplayCounter count={count} valid={valid}></DisplayCounter>
      <HandleCounter
        count={count}
        setCount={setCount}
        setIsValid={setIsValid}
      ></HandleCounter>
      <h1>Uppgift 2</h1>
      <DisplayBox color={color}></DisplayBox>
      <ColorControls setColor={setColor}></ColorControls>

      <h1>Uppgift 3</h1>
      <ProductDisplay price={price} amount={amount}></ProductDisplay>
      <QuantityControls
        amount={amount}
        setAmount={setAmount}
      ></QuantityControls>
    </>
  );
}

export default App;
