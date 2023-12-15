const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../Features/Cake/CakeSlice')
const iceCreamReducer = require('../Features/Icecream/IcecreamSlice')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const store = configureStore({
    reducer : {
        cake : cakeReducer,
        iceCream : iceCreamReducer
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger)
    }
})

module.exports = store