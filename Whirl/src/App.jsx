import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Benefits from "./components/Benefits";
import Functionality from "./components/Functionality";
import Whats from "./components/Whats";
import Book from "./components/Book";
import Idk from "./components/Idk";
import Posts from "./components/Posts";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Partners />
      <Benefits />
      <Functionality />
      <Whats />
      <Book />
      <Idk />
      <Posts />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
