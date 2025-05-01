import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const submitHandler = async (e) => {
  //     e.preventDefault();
  //     const response = await fetch("https://api.escuelajs.co/api/v1/products");
  //     const data = await response.json();
  //     const filtered = data.filter((product) =>
  //       product.title.toLowerCase().includes(inputData.toLowerCase())
  //     );
  //     setMealData(filtered);
  //     setInputData("");
  //   };
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-dark" to="/">
          Shopping
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {["all", "clothess", "electronics", "furniture", "shoes"].map(
              (cat) => (
                <li className="nav-item" key={cat}>
                  <Link
                    className="nav-link"
                    to={`/${cat}`}
                    onClick={() => setArea(cat)}
                  >
                    {cat}
                  </Link>
                </li>
              )
            )}
          </ul>

          <ul className="navbar-nav d-flex align-items-center ms-3">
            <li className="nav-item me-3 text-muted d-none d-lg-inline">
              userintheapp@test.com
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                My Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AuthForm">
                My Account
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                {/* <FaShoppingCart /> */}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
