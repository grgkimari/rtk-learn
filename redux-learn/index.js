const redux = require('redux')
const CAKE_ORDERED = "CAKE_ORDERED"

function orderCake(){
    return {
        type : CAKE_ORDERED,
        quantity : 1
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
        default:
            return state
    }
}

const store = redux.createStore(reducer)
console.log(`initialState : ${JSON.stringify(store.getState())}`)