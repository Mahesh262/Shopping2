import { createStore } from "redux";
import { reducers } from "./ShopReducers";

 export var ShopStore =createStore(reducers)

//  export default ShopStore