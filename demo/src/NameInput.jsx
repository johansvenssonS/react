import { useState } from "react";

const NameInput = () => {
  const [text, setText] = useState("");

  const reverseText = (str) => {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  };

  const reReverseText = (str) => {
    let strSplit = str.split("");
    let arr = strSplit.reverse();
    let reversedString = arr.join("");
    return reversedString;
  };

  return (
    <>
      <h3>{text}</h3>
      <input
        placeholder="skriv namn"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <h2>{reverseText(text)}</h2>
      <h2>{reReverseText(reverseText(text))}</h2>
    </>
  );
};

export default NameInput;
