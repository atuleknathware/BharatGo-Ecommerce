import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Components/Product";
import AuthForm from "./Components/AuthForm";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {["all", "clothess", "electronics", "furniture", "shoes"].map(
            (cat) => (
              <Route key={cat} path={`/${cat}`} element={<Product />} />
            )
          )}
          {/* <Route path="/" element={<Product />} /> */}
          <Route path="/login" element={<AuthForm />} />
        </Routes>
      </BrowserRouter>
      <div className="cart-modal">Hello There </div>
    </>
  );
};

export default App;
