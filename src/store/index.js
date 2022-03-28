import { combineReducers, configureStore } from "@reduxjs/toolkit"
import valuteSlice from "./reducers/valuteSlice"


const rootReducer = combineReducers({
    valute: valuteSlice
}) 

export const store = configureStore({
    reducer: rootReducer,
})

