// this is the store file..... restaurantReducer.js mein ka logic will work on this folder... vaha ka logic honeke baad data saab aake isme add hoga... this is the actual storage area or logical place to store the data fetched.

import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { restaurantReducer } from "./reducer/restaurantReducer";


const reducer = combineReducers({
    restaurants: restaurantReducer,
});

const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(reducer, composeenhancers(applyMiddleware(...middleware)));

export default store;