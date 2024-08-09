import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";

export default function Header() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart); //this will be used to display the number of cart items on the header in a dynamic way.

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged Out Successfully");
  };

  return (
    <nav className="navbar row sticky-top">
      {/* logo */}
      <div className="col-12 col-md-3">
        <Link to="/">
          <img src="/images/logo.webp" alt="logo" className="logo" />
        </Link>
      </div>
      {/* search bar and search icon */}
      <div className="col-12 col-md-6 mt-2 mt-md-6">
        <Search />
      </div>
      {/* cart 0 likha hota hai header pe vo hai yae */}
      <div className="col-12 col-md-3 mt-4 mt-md-0">
        <Link to={"/cart"} style={{ textDecoration: "none" }}>
          <span className="ml-3" id="cart">
            Cart
          </span>
          <span className="ml-l" id="cart_count">
            {cartItems.length}
          </span>
        </Link>

        {/* this is the login/ username wala part in the right corner of the header */}
        {user ? (
          <>
            <div className="ml-4 dropdown d-inline">
              <Link
                to="/"
                className="btn dropdown-toggle text-white mr-4"
                type="button"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-hasexpanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar.url}
                    alt="avatar"
                    className="rounded-circle"
                  />
                </figure>
                <span>{user && user.name}</span>
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                <Link className="dropdown-item" to="/eats/orders/me/myOrders">
                  Orders
                </Link>
                <Link className="dropdown-item" to="/users/me">
                  Profile
                </Link>
                <Link className="dropdown-item" to="/" onClick={logoutHandler}>
                  Logout
                </Link>
              </div>
            </div>
          </>
        ) : (
          !loading && (
            <Link to="/users/login" className="btn ml-4" id="login_btn">
              Login
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
