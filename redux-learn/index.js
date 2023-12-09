const redux = require('redux')
const produce = require('immer').produce
const reduxLogger = require('redux-logger')

const applyMiddleWare = redux.applyMiddleware
const logger = reduxLogger.createLogger()
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

//Action Types
const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"
const ICECREAM_ORDERED = "ICECREAM_ORDERED"
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED"

function orderIcecream(quantity = 1){
    return {
        type : ICECREAM_ORDERED,
        payload : {
            quantity
        }
    }
}

function restockIcecream(quantity = 1){
    return {
        type : ICECREAM_RESTOCKED,
        payload : {
            quantity
        }
    }
}

function orderCake(quantity = 1){
    return {
        type : CAKE_ORDERED,
        payload : {
            quantity
        }
    }
}

function restockCakes(quantity = 1){
    return {
        type : CAKE_RESTOCKED,
        payload : {
            quantity
        }
    }
}

const initialCakeState = {
    numberOfCakes : 10
}

const initialIcecreamState = {
    numberOfIceCreams : 20
}
const cakeReducer = (state = initialCakeState, action) =>{
    switch (action.type){
        case CAKE_ORDERED:
            return produce(state, (draft) => {
                draft.numberOfCakes -= action.payload.quantity
            })
        case CAKE_RESTOCKED:
            return produce(state, (draft) => {
                draft.numberOfCakes += action.payload.quantity
            })

       
        default:
            return state
    }
}
const icecreamReducer = (state = initialIcecreamState, action) =>{
    switch (action.type){

        case ICECREAM_ORDERED:
            return produce(state, (draft) => {
                draft.numberOfIceCreams -= action.payload.quantity
            })
        case ICECREAM_RESTOCKED:
            return produce(state, (draft) => {
                draft.numberOfIceCreams += action.payload.quantity
            })
        default:
            return state
    }
}
const rootReducer = combineReducers({
    cake : cakeReducer,
    icecream : icecreamReducer
})
const store = redux.createStore(rootReducer, applyMiddleWare(logger))
const unsubscribe = store.subscribe(() => {
    // console.log("UpdateState : " + JSON.stringify(store.getState()))
})
// console.log(`initialState : ${JSON.stringify(store.getState())}`)
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCakes(5))
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCakes(7))

const actions = bindActionCreators({ orderCake, restockCakes, orderIcecream, restockIcecream}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCakes(5)
actions.orderIcecream(2)
actions.orderIcecream(2)
actions.orderIcecream(2)
actions.restockIcecream(7)

unsubscribe()