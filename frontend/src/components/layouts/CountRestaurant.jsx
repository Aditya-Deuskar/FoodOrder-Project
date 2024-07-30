import React, { useEffect } from 'react'
import { getRestaurants } from '../../actions/restaurantAction'
import { useDispatch, useSelector } from 'react-redux'

export default function CountRestaurant() {
  const dispatch = useDispatch();

  const { loading, error, count, showVegOnly, pureVegRestaurantsCount } = useSelector(
    (state) => state.restaurants
  );



  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading Restaurant Count ...</p>
      ) : error ? (<p> Error: {error}</p>
      ) : (
        <p className="NumOfRestro">
          {showVegOnly ? pureVegRestaurantsCount : count}{" "}
          <span className="Restro">{ // here we will write the code to display "Restaurant" if there's just single restaurant and "Restaurants" when there are multiple restaurants
            showVegOnly ? pureVegRestaurantsCount === 1 ? "Restaurant" 
            : "Restaurants" 
            : count === 1 ? "Restaurant" 
            : "Restaurants"}</span>
        </p>
      )}

      <hr />
    </div >
  );
}
