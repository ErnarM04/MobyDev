import React from "react";
import ProductItem from "./ProductItem";

function CategoryFilter({
  category,
  products,
  addToCart,
  removeFromCart,
  isInCart,
}) {
  const filtered = products.filter((product) => product.category == category);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "8px",
      }}
    >
      {filtered &&
        filtered.map((product) => (
          <ProductItem
            data={product}
            addToCart={addToCart}
            isInCart={isInCart}
            removeFromCart={removeFromCart}
            key={product.id}
          />
        ))}
    </div>
  );
}

export default CategoryFilter;
