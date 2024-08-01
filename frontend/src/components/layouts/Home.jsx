import React, { useEffect } from "react";
import CountRestaurant from "./CountRestaurant";
import Restaurant from "./Restaurant";
import {
  getRestaurants,
  sortByRatings,
  sortByReviews,
  toggleVegOnly,
} from "../../actions/restaurantAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const handleSortByReview = () => {
    dispatch(sortByReviews());
  };

  const handleSortByRatings = () => {
    dispatch(sortByRatings());
  };
  const handleToggleVegOnly = () => {
    dispatch(toggleVegOnly());
  };

  const {
    loading: restaurantsLoading,
    error: restaurantsError,
    restaurants,
    showVegOnly,
  } = useSelector((state) => state.restaurants);

  return (
    <>
      <CountRestaurant />
      {restaurantsLoading ? (
        <Loader />
      ) : restaurantsError ? (
        <Message variant="danger">{restaurantsError}</Message>
      ) : (
        <>
          {/* Section tag is just like a div tag */}
          <section>
            <div className="sort">
              <button className="sort_veg p-3" onClick={handleToggleVegOnly}>
                {showVegOnly ? "Show All" : "Pure Veg"}
              </button>
              <button className="sort_veg p-3" onClick={handleSortByReview}>
                sort by review
              </button>
              <button className="sort_veg p-3" onClick={handleSortByRatings}>
                sort by rating
              </button>
            </div>
            <div className="row mt-4">
              {restaurants ? (
                restaurants.map((restaurant) =>
                  !showVegOnly || (showVegOnly && restaurant.isVeg) ? (
                    <Restaurant key={restaurant._id} restaurant={restaurant} />
                  ) : null
                )
              ) : (
                <Message variant="info">No Restaurant Found</Message>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
}
