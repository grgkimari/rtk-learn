const redux = require('redux')

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
            return{
                ...state,
                numberOfCakes : state.numberOfCakes - action.payload.quantity
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes : state.numberOfCakes + action.payload.quantity
            }

       
        default:
            return state
    }
}
const icecreamReducer = (state = initialIcecreamState, action) =>{
    switch (action.type){

        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfIceCreams : state.numberOfIceCreams - action.payload.quantity
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIceCreams : state.numberOfIceCreams + action.payload.quantity
            }
        default:
            return state
    }
}
const rootReducer = combineReducers({
    cake : cakeReducer,
    icecream : icecreamReducer
})
const store = redux.createStore(rootReducer)
const unsubscribe = store.subscribe(() => {
    console.log("UpdateState : " + JSON.stringify(store.getState()))
})
console.log(`initialState : ${JSON.stringify(store.getState())}`)
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