const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../Features/Cake/CakeSlice')
const iceCreamReducer = require('../Features/Icecream/IcecreamSlice')
const userReducer = require('../Features/User/UserSlice')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const store = configureStore({
    reducer : {
        cake : cakeReducer,
        iceCream : iceCreamReducer,
        user : userReducer
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger)
    }
})

module.exports = store