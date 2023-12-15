const configureStore = require('@reduxjs/toolkit').configureStore

const cakeReducer = require('../Features/Cake/CakeSlice')





const iceCreamReducer = require('../Features/Icecream/IcecreamSlice')

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        iceCream : iceCreamReducer
    }
})

module.exports = store