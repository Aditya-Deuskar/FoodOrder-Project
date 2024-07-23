import React from 'react'

export default function Restaurant() {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
                <img src="https://b.zmtcdn.com/data/pictures/chains/6/10506/ad13cee41f089a32fa0d854e658a2b9a.jpg?fit=around|960:500&crop=960:500;*,*" alt="Dominos" />

                {/* div for heading and address */}
                <div className="card-body d-flex flex-column">
                    <h5 className="card-tittle">Dominos Pizza</h5>
                    <p className="rest_address">123 stree, Place, city, 411069, state

                    </p>

                    {/* div for reviews and ratings */}
                    <div className="rating-outer">
                        <div className="rating-inner"></div>
                        <span id="no_of_reviews">[140 reviews]
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
