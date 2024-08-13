import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";
const Header = () => {
  const state = useSelector((state) => state.handleCart);
  

  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-light bg-white py-3 shadow">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4 text-primary" to="/">
            Leverage Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link className="btn btn-outline-dark" to="/login">
                <i className="fa fa-sign-in me-2"></i>
                Login
              </Link>
              <Link className="btn btn-outline-success ms-2" to="/register">
                <i className="fa fa-user-plus me-2"></i>
                Register
              </Link>
              <Link className="btn btn-outline-danger ms-2" to="/cart">
                <i className="fa fa-shopping-cart me-2"></i>
                Cart - {state.length}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
