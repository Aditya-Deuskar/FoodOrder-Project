import React, { useEffect } from 'react'
import CountRestaurant from './CountRestaurant'
import Restaurant from './Restaurant'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from '../../actions/restaurantAction'
import Loader from './Loader'
import Message from './Message'

export default function Home() { 
    const dispatch = useDispatch();
    
    const {loading: restaurantsLoading, error: restaurantsError, restaurants} = useSelector(
        (state) => state.restaurants
    );

    useEffect(() =>{
        dispatch(getRestaurants());
    }, [dispatch]);




    return(
         <>
        <CountRestaurant />
        {restaurantsLoading ? (<Loader />) : restaurantsError ? (<Message variant = "danger">{restaurantsError}</Message>):(
            <>
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
        )};
    </>
    )
}
