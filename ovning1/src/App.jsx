import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Users from "./Users";
import ParentUserComponent from "./ParentUserComponent";
import ParentProductComponent from "./ParentProductComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/users"
            element={<ParentUserComponent></ParentUserComponent>}
          ></Route>
          <Route
            path="/products"
            element={<ParentProductComponent></ParentProductComponent>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
