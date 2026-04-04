import { useState } from "react";
import "./App.css";
import "./styles/Link.scss";
import "./styles/Buttons.scss";
import "./styles/Shadow.scss";
import "./styles/Color.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
