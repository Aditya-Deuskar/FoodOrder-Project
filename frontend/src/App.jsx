import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import store from "./store";
import { loadUser } from "./actions/userAction";
import Profile from "./components/users/Profile";
import UpdateProfile from "./components/users/UpdateProfile";
import ForgotPassword from "./components/users/ForgotPassword";
import NewPassword from "./components/users/NewPassword";

export default function App() {
  // dispatch exactly once when the component is first rendered, and check if the user is authenticated or not
  console.log(store);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            {/* this route container will contain all the different different
            routes... and everywhere we'll use them */}
            <Route path="/" element={<Home />} />
            <Route path="/eats/stores/:id/menus" element={<Menu />} />
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/signup" element={<Register />} />
            <Route path="/users/me" element={<Profile />} />
            <Route path="/users/me/update" element={<UpdateProfile />} />
            <Route path="/users/forgotPassword" element={<ForgotPassword />} />
            <Route
              path="/users/resetPassword/:token"
              element={<NewPassword />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
