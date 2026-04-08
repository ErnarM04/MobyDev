import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ProductList from "./components/ProductList";
import CategoryFilter from "./components/CategoryFilter";
import Cart from "./components/Cart";

function App() {
  const productsData = [
    { id: 1, name: "Книга", price: 500, category: "Книги" },
    { id: 2, name: "Футболка", price: 1500, category: "Одежда" },
    { id: 3, name: "Наушники", price: 3000, category: "Электроника" },
    { id: 4, name: "Штаны", price: 2000, category: "Одежда" },
    { id: 5, name: "Телефон", price: 25000, category: "Электроника" },
  ];
  const categories = ["Все", "Книги", "Одежда", "Электроника", "Корзина"];
  const [category, setCategory] = useState("Все");
  const [cartData, setCartData] = useState([]);

  function addToCart(product) {
    cartData.push(product);
  }
  function removeFromCart(data) {
    setCartData(cartData.filter((product) => data != product));
  }
  function isInCart(product) {
    return cartData.includes(product);
  }

  return (
    <div
      style={{
        padding: "16px 140px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize: "21px",
          fontWeight: 600,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        {categories.map((category) => (
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCategory(category);
            }}
          >
            {category}
          </p>
        ))}
      </div>
      {category === "Все" ? (
        <ProductList
          products={productsData}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isInCart={isInCart}
        />
      ) : category === "Корзина" ? (
        <Cart
          products={cartData}
          isInCart={isInCart}
          removeFromCart={removeFromCart}
        />
      ) : (
        <CategoryFilter
          category={category}
          products={productsData}
          addToCart={addToCart}
          isInCart={isInCart}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;
