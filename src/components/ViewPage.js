import { useEffect, useState } from "react";
import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addCart } from "../Redux/action/index";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ViewPage = () => {
  const { ProductID } = useParams();
  const [pro, setPro] = useState([]);

  const dispatch = useDispatch();
  const addProduct = (pro) => {
    dispatch(addCart(pro));

    Swal.fire({
      title: "You added A New Item To Cart",
      icon: "success",
    });
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${ProductID}`)
      .then((res) => res.json())
      .then((data) => setPro(data));
  }, []);

  return (
    <div className="viewPage">
      <div className="container">
        <div className="row">
          <div key={pro.id} className="col-lg-6">
            <div className="image-side">
              <img src={pro.image} alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <h5>{pro.category}</h5>
            <h1>{pro.title}</h1>
            <div>
              <span className="rate">{pro.rating && pro.rating.rate}</span>
              <FontAwesomeIcon icon={faStar} />
            </div>

            <h5>{pro.price}</h5>
            <p>{pro.description}</p>
            <button
              className="btn btn-outline-danger px-4 py-2"
              onClick={() => addProduct(pro)}
            >
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-dark px-4 py-2 ms-2">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewPage;
