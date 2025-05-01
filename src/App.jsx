import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./Components/Product";
import AuthForm from "./Components/AuthForm";

const App = () => {
  return (
    <Routes>
      {["all", "clothess", "electronics", "furniture", "shoes"].map((cat) => (
        <Route key={cat} path={`/${cat}`} element={<Product />} />
      ))}
      {/* <Route path="/" element={<Product />} /> */}
      <Route path="/login" element={<AuthForm />} />
    </Routes>
  );
};

export default App;
