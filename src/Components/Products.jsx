import React, { useState, useEffect } from "react";

import Cards from "./Cards";
import './Products.css'
import store from "../Redux/Store";

const Product = ({ handleClick }) => {
  const [Data, SetData] = useState([]);
  store.dispatch({
    type: "api",
    payload: Data
  });
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => SetData(result));
  }, []);
  //   dispatch(item)

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px ", color: "red" }}>
        Product Component
      </h1>
      <section className="product">
        {Data.length > 0 ? (
          Data.map((item) => (
            <Cards item={item} key={item.id} handleClick={handleClick} />
          ))
        ) : (
          <h1 style={{ textAlign: "center", color: "red" }}>
            Wait Products are Loading.....
          </h1>
        )}
      </section>
    </>
  );
};

export default Product;
