import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numberOfCakes : 10
}


const CakeSlice = createSlice({
name : "CakeSlice",
initialState ,
reducers : {
    ordered : (state, action) => {
        state.numberOfCakes -= action.payload
    }
,
    restocked : (state, action) => {
        state.numberOfCakes += action.payload
    }
}
})

export default CakeSlice.reducer

export const cakeActions = CakeSlice.actions