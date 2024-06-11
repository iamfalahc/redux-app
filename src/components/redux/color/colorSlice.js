import { createSlice } from "@reduxjs/toolkit";
 
const colorSlice=createSlice({
    name:"color",
    initialState:{
        value:"blue"
    },reducers:{
        change_color:(state,action)=>{
            state.value=action.payload.color
        }
    }
})
const {change_color}=colorSlice.actions
export{colorSlice,change_color}
export default colorSlice.reducer