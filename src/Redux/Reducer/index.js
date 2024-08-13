import { combineReducers } from "redux";
import HandleCart from "./handleCart";


const rooReducer = combineReducers({
    handleCart : HandleCart
})

export default rooReducer;