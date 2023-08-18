import { createSlice } from "@reduxjs/toolkit";


const modeToggleSlice = createSlice({
name:"modeToggle",
initialState:false,
reducers:{
    isDarkModeEnabled:(state)=>{

        state = state ? false : true
        return state
        
    }
}

})

export default modeToggleSlice.reducer
export const {isDarkModeEnabled} = modeToggleSlice.actions