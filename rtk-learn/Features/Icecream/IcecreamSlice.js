import { cakeActions } from '../Cake/CakeSlice'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numberOfIcecreams : 20
}

const IcecreamSlice = createSlice({
    name : "IceCreamSlice",
    initialState,
    reducers : {
        ordered : (state, action) => {
            state.numberOfIcecreams -= action.payload
        }
    ,
        restocked : (state, action) => {
            state.numberOfIcecreams+= action.payload
        }
    },
    extraReducers : (builder) => {
        builder.addCase(cakeActions.ordered,(state, action) => {
            state.numberOfIcecreams -= action.payload
        })
        
        }
    
})

export default IcecreamSlice.reducer

export const IcecreamActions = IcecreamSlice.actions