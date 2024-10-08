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
import OrderSuccess from "./components/cart/OrderSuccess";
import ListOrders from "./components/order/ListOrders"
import OrderDetails from "./components/order/OrderDetails"
//import { useDispatch } from "react-redux";
//import { fetchCartItems } from "./actions/cartAction";

export default function App() {
  // dispatch exactly once when the component is first rendered, and check if the user is authenticated or not
  console.log(store);
  //this will check if the user is logged in when we refresh the page
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  //this will fetch the cartitems when we log in into the account, and if we log out, this will make the cartItems as 0, cause when logged out... the cart items should be zero
  //const dispatch = useDispatch();

  // const { user } = useSelector((state) => state.auth);
  // if (user) {
  //   dispatch(fetchCartItems());
  // }

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
            <Route path="/cart" element={<Cart />} />

            <Route path="/success" element={<OrderSuccess />} />
            <Route path="/eats/orders/me/myOrders" element={<ListOrders />} />
            <Route path="/eats/orders/:id" element={<OrderDetails />} />
            <Route path="*" element={<h1>The page does not exist</h1>}/>

          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
