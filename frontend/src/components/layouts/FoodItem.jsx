import React from 'react'
import { FaRupeeSign } from "react-icons/fa";


export default function FoodItem() {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
                <img src="https://b.zmtcdn.com/data/pictures/chains/3/19056943/9285d69aad40b91f043583010893d7f9.jpg?fit=around|300:273&crop=300:273;*,*" alt="pizza" className="card-img-top mx-auto" />

                {/* heading and description */}
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Veg loaded pizza</h5>
                    <p className="fooditem_des">
                        Crunchy, cheesy, accha hai khaneko taste bhi ekdum italian wala, kharidlo jaldi
                    </p>
                    <p className="card-text">
                        <FaRupeeSign /> 180
                        <br />
                    </p>
                    <button type="button" id='cart_btn' className="btn btn-primary d-inline ml-4">
                        Add to Cart
                    </button>
                    <br />
                    <p>
                        Status:{" "} <span id='stock_status' className='{10>5 ? "greenColor" : "RedColor"}'>{10 > 5 ? "In Stock" : "Out of Stock"}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
