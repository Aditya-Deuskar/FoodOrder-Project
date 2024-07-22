import React from 'react'
import Search from './Search';

export default function Header() {
    return <nav className="navbar row sticky-top">
        {/* logo */}
        <div className="col-12 col-md-3">
            <img src="/images/logo.webp" alt="logo" className="logo" />
        </div>
        {/* search bar and search icon */}
        <div className="col-12 col-md-6 mt-2 mt-md-6">
            <Search />
        </div>
        {/* cart 0 likha hota hai header pe vo hai yae */}
        <div className="col-12 col-md-3 mt-4 mt-md-0">
            <span className="ml-3" id="cart">
                Cart
            </span>
            <span className="ml-l" id="cart_count">
                0
            </span>

            {/* yae wale part mein vo side mein upar Aditya deuskar naam aya hai */}
            {10 > 5 ? (
                <>
                    <div className="ml-4 dropdown d-inline">
                        <figure className="avatar avatar-nav">
                            <img src="/images/images.png" alt="avatar" className="rounded-circle" />
                        </figure>
                        <span style={{ color: 'white', fontWeight: "bolder" }}>Aditya Deuskar</span>
                    </div>
                </>
            ) : (
                <div className="btn ml-4" id="login_btn">
                    Login
                </div>
            )}

        </div>

    </nav>;
}
