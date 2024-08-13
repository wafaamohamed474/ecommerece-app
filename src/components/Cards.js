import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Cards = () => {
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState(product);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setFilter(data);
      });
  }, []);

  const filterProduct = (cat) => {
    const updataList = product.filter((x) => x.category === cat);

    setFilter(updataList);
  };

  const Buttons = () => {
    return (
      <div className="main-buttons">
        <button className="btn" onClick={() => setFilter(product)}>
          ALL
        </button>
        <button
          className="btn  "
          onClick={() =>filterProduct("men's clothing")}
        >
          Men's Clothing
        </button>
        <button className="btn  " onClick={() => filterProduct("jewelery")}>
          Jewelery
        </button>
        <button className="btn  " onClick={() =>filterProduct("electronics")}>
          Electronics
        </button>
        <button
          className="btn  "
          onClick={() =>filterProduct("women's clothing")}
        >
          Women's Clothing
        </button>
      </div>
    );
  };

  return (
    <div className="products">
      <h1>Latest Products</h1>
      <hr></hr>
      <Buttons />
      <div className="container">
        <div className="row">
          {filter.map((e) => {
            return (
              <div key={e.id} className="col-lg-3 col-md-4 mb-5">
                <div className="card">
                  <div className="image-card">
                    <img src={e.image} alt="logo" />
                  </div>
                  <h5>{e.title.slice(0, 12)}...</h5>
                  <h5>${e.price}</h5>
                  
                  <Link to={`/products/${e.id}`} className="buy-now">
                    Buy Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
