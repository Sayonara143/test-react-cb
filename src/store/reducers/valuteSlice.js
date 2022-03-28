import { createSlice } from "@reduxjs/toolkit";

const valuteSlise = createSlice({
    name: 'valute',
    initialState: {
        list: {}
    },
    reducers: {
        addListValute(state,action){
            state.list ={
                ...action.payload
            }
        }
    }
})
export default valuteSlise.reducer
export const {addListValute} = valuteSlise.actions