import { configureStore }  from "@reduxjs/toolkit";
import modeToggleSlice from "./modeToggleSlice";





const store = configureStore({
    reducer:{
        modeToggle:modeToggleSlice
    }
})


export default store