import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./ShoppingCart/Products";
import CartView from "./ShoppingCart/CartView";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/CartView/:id" element={<CartView />} />
      </Routes>
    </>
  );
};

export default App;
