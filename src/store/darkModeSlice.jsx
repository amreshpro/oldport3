import { createSlice } from "@reduxjs/toolkit";



const darkModeSlice = createSlice({
    name:"darkMode",
    initialState:false,
    reducers:{

        isDarkModeEnabled:(state)=>{
            state = state ? false : true
            return state

        },


    }
})


export const {isDarkModeEnabled}  = darkModeSlice.actions
export default darkModeSlice.reducer
