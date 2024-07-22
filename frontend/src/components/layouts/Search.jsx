import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function Search() {
    return <form>
        <div className="input-group">
            <input type='text' placeholder='search your favourite resturaunt' className="form-control" id="search_field" />
            <div className="input-group-append">
                <button id="search_btn" className="btn"><FaSearch className='fa fa-search' /></button>
            </div>
        </div>
    </form>
}
