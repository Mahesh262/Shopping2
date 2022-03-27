import { configureStore } from "@reduxjs/toolkit";
import ShpReducers from './ShpReducers';
export default configureStore({
    reducer :{
        counter: ShpReducers
    }
})