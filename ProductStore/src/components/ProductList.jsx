import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, addToCart, removeFromCart, isInCart }) {
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
            data={product}
            isInCart={isInCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            key={product.id}
          />
        ))}
    </div>
  );
}

export default ProductList;
