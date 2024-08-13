import { createStore } from "redux";
import rooReducer from "./Reducer";


const store = createStore(rooReducer)

export default store;