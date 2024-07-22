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

    </nav>;
}
