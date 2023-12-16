const { cakeActions } = require('../Cake/CakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

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

module.exports = IcecreamSlice.reducer

module.exports.IcecreamActions = IcecreamSlice.actions