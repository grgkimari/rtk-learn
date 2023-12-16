const { IcecreamActions } = require('./Features/Icecream/IcecreamSlice')
const {fetchUsers} = require('./Features/User/UserSlice')
const store = require('./app/Store')
const cakeActions = require('./Features/Cake/CakeSlice').cakeActions
console.log("Initial state : " + JSON.stringify(store.getState()))
const unsubscribe = store.subscribe(() => {})

store.dispatch(cakeActions.ordered(3))
store.dispatch(cakeActions.restocked(3))
store.dispatch(cakeActions.ordered(2))
store.dispatch(cakeActions.restocked(5))
store.dispatch(IcecreamActions.ordered(2))
store.dispatch(IcecreamActions.restocked(2))
store.dispatch(IcecreamActions.ordered(7))
store.dispatch(IcecreamActions.restocked(12))
store.dispatch(fetchUsers())

unsubscribe()