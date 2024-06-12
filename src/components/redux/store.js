import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../redux/color/colorSlice"
import countReducer from "../redux/counter/counterSlice"

export default configureStore({
    reducer:{
        color:colorReducer,
        count:countReducer
    }
})