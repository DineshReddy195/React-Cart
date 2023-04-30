import React from "react";
import './Cart.css'
const Cart = ({ cart, setCart }) => {
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    alert("item removed");
  };

  return (
    <div className="cart-text">
      <h1 style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
        Add To Cart Component
      </h1>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div className="cart_box" key={item.id}>
              <div className="cart">
                <img src={item.image} height={200} width={300} alt="Image"  className="pic"/>
                <p>{item.title}</p>
                <span className="price">Price: ${item.price}</span>
                <button
                  className="remove"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
                </div>
            </div>
          ))
        ) : (
          <h1 style={{ textAlign: "center", color: "blue" }}> No cart Added</h1>
        )}
    </div>
  );
};

export default Cart;
