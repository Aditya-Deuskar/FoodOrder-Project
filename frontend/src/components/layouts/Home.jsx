import React from 'react'
import CountResturant from './CountResturant'

export default function Home() {
  return <>
  <CountResturant />
  {/* Section tag is just like a div tag */}
  <section> 
    <div className="sort">
        <button className="sort_veg p-3">Pure Veg</button>
        <button className="sort_veg p-3">sort by review</button>
        <button className="sort_veg p-3">sort by rating</button>

    </div>
  </section>
  </>
}
