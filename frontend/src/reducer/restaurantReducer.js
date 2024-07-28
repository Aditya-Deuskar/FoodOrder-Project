 //the store in redux is called state here... its nothing but a data storing place... just name is state

import { ALL_RESTAURANTS_REQUEST, ALL_RESTAURANTS_SUCCESS } from "../constants/restaurantConstant";

const initialState = {
    restaurants: [],  //fetch karneke baad... restaurants ka data iss array mein collect hoga...
};

export const restaurantReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ALL_RESTAURANTS_REQUEST:
            return{
                ...state,
                loading: true,
                error: null,
            }; 

        case ALL_RESTAURANTS_SUCCESS:
            return{
                ...state,
                loading: false,
                count: action.payload.count,
                restaurants: action.payload,
            }
        
        default:
            return state;
            
    }
}