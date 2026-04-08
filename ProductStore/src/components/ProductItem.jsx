import React, { useState } from "react";

function ProductItem({ data, addToCart, removeFromCart, isInCart }) {
  const [inCart, setInCart] = useState(isInCart(data));

  return (
    <div
      style={{
        width: "200px",
        textAlign: "center",
        border: "1px black solid",
        borderRadius: "8px",
        padding: "8px 16px",
      }}
    >
      <p style={{ fontSize: "21px", fontWeight: "600" }}>{data.name}</p>
      <p style={{ fontSize: "18px" }}>{data.price}</p>
      <p style={{ fontSize: "18px" }}>{data.category}</p>
      {inCart ? (
        <button
          onClick={() => {
            removeFromCart(data);
            setInCart(false);
          }}
        >
          Убрать
        </button>
      ) : (
        <button
          onClick={() => {
            addToCart(data);
            setInCart(true);
          }}
        >
          В корзину
        </button>
      )}
    </div>
  );
}

export default ProductItem;
