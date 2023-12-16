import { IcecreamActions } from "./Features/Icecream/IcecreamSlice";
import { fetchUsers } from "./Features/User/UserSlice";
import { getState, subscribe, dispatch } from "./app/Store";
import { cakeActions } from "./Features/Cake/CakeSlice";
console.log("Initial state : " + JSON.stringify(getState()));
const unsubscribe = subscribe(() => {});

dispatch(cakeActions.ordered(3));
dispatch(cakeActions.restocked(3));
dispatch(cakeActions.ordered(2));
dispatch(cakeActions.restocked(5));
dispatch(IcecreamActions.ordered(2));
dispatch(IcecreamActions.restocked(2));
dispatch(IcecreamActions.ordered(7));
dispatch(IcecreamActions.restocked(12));
dispatch(fetchUsers());

unsubscribe();
