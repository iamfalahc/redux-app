import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../redux/color/colorSlice"

export default configureStore({
    reducer:{
        color:colorReducer
    }
})