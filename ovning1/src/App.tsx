import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import ParentUserComponent from "./ParentUserComponent";
import ParentProductComponent from "./ParentProductComponent";
import SingleProductComponent from "./SingleProductComponent";
import SingleUserComponent from "./SingleUserComponent";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
    return (
      <div role="alert">
        <h2>Något gick fel</h2>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Försök igen</button>
      </div>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <ErrorBoundary FallbackComponent={ErrorFallback}>
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
            <Route
              path="/products/:productId"
              element={<SingleProductComponent></SingleProductComponent>}
            ></Route>
            <Route
              path="/users/:userId"
              element={<SingleUserComponent></SingleUserComponent>}
            ></Route>
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
};

export default App;
