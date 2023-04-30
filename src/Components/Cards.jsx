import React from "react";
// import "./Cards.css";
import './Products.css'

const Cards = ({ item, handleClick }) => {
  const { price, category, image } = item;
  return (
    <div className="cards">
        <div className="data">
        <img src={image} height={200} width={300} alt="Image" />
        <p style={{ textAlign: "center" }}> {category}</p>
        <p style={{textAlign:'center'}}>Price - $ {price}</p>
        <button onClick={() => handleClick(item)} className="btn">Add to Cart</button>
        </div>
    </div>
  );
};

export default Cards;
