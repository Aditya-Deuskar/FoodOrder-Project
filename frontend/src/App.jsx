import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Cart from "./components/cart/Cart"
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes> //this route container will contain all the different different routes... and everywhere we'll use them
            <Route path="/" element={<Home />} />
            <Route path="/eats/stores/:id/menus" element={<Menu />} />

          </Routes>
          <Home />
          <Menu />
          <Cart />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
