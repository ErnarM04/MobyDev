import React from "react";
import ProductItem from "./ProductItem";

function Cart({ products, removeFromCart, isInCart }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "8px",
      }}
    >
      {products &&
        products.map((product) => (
          <ProductItem
            isInCart={isInCart}
            removeFromCart={removeFromCart}
            data={product}
            key={product.id}
          />
        ))}
    </div>
  );
}

export default Cart;
