import { ALL_RESTAURANTS_REQUEST, ALL_RESTAURANTS_SUCCESS } from "../constants/restaurantConstant"
import axios from "axios";
// this content has the logic to take data from backend and store it inside the store.

export const getRestaurants = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ALL_RESTAURANTS_REQUEST });
            let link = `/api/v1/eats/stores`; //this is a link to our database
            const { data } = await axios.get(link);
            console.log(data);

            const { restaurants, count } = data;
            dispatch({
                type: ALL_RESTAURANTS_SUCCESS,
                payload: { restaurants, count },
            });
        } catch (err) {
            console.log(err);
        }
    };
};