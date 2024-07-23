import React from 'react'
import CountRestaurant from './CountRestaurant'
import Restaurant from './Restaurant'

export default function Home() {
    return <>
        <CountRestaurant />
        {/* Section tag is just like a div tag */}
        <section>
            <div className="sort">
                <button className="sort_veg p-3">Pure Veg</button>
                <button className="sort_veg p-3">sort by review</button>
                <button className="sort_veg p-3">sort by rating</button>

            </div>
            <div className="row mt-4">
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />

            </div>
        </section>

    </>
}
