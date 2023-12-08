const redux = require('redux')

//Action Types
const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"

function orderCake(){
    return {
        type : CAKE_ORDERED,
        quantity : 1
    }
}

function restockCakes(quantity){
    return {
        type : CAKE_RESTOCKED,
        quantity 
    }
}

const initialState = {
    numberOfCakes : 10

}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numberOfCakes : state.numberOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes : state.numberOfCakes + action.quantity
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
const unsubscribe = store.subscribe(() => {
    console.log("UpdateState : " + JSON.stringify(store.getState()))
})
console.log(`initialState : ${JSON.stringify(store.getState())}`)
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCakes(5))

unsubscribe()