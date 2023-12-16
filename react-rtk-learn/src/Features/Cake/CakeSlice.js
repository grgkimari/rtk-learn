const createSlice = require('@reduxjs/toolkit').createSlice

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

module.exports = CakeSlice.reducer

module.exports.cakeActions = CakeSlice.actions