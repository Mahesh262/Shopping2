import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Login/UserSlice'
export default configureStore({
reducer:{
user:userReducer,

}
})
