import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increase_count:(state)=>{
            state.value+=1
        },
        decrease_count:(state)=>{
            state.value-=1
        }
    }
})
export const {increase_count,decrease_count}=counterSlice.actions
export default counterSlice.reducer