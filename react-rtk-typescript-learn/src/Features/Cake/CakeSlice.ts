import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CakeSliceType } from './CakeSlice.types'

const initialState : CakeSliceType = {
    numberOfCakes : 10
}


const CakeSlice = createSlice({
name : "CakeSlice",
initialState ,
reducers : {
    ordered : (state, action : PayloadAction<number>) => {
        state.numberOfCakes -= action.payload
    }
,
    restocked : (state, action : PayloadAction<number>) => {
        state.numberOfCakes += action.payload
    }
}
})

export default CakeSlice.reducer

export const cakeActions = CakeSlice.actions