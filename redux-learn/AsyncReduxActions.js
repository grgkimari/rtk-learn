const produce = require("immer").produce;
const redux = require("redux");
const thunkMiddleware = require('redux-thunk').default;
const axios = require("axios");
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()
console.log(`Before applying.\nThunk-middleware : ${JSON.stringify(thunkMiddleware)}\nLogger : ${JSON.stringify(logger)}`)

const initialState = {
  loading: false,
  error: "",
  data: [],
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequested = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  }; 
};

const fetchUsersSucceeded = (data) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_FAILED:
      return produce(state, (draft) => {
        draft.error = action.payload;
        draft.loading = false;
      });
    case FETCH_USERS_REQUESTED:
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case FETCH_USERS_SUCCEEDED:
      return produce(state, (draft) => {
        draft.data = action.payload;
      });

    default:
      return state;
  }
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequested());
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => dispatch(fetchUsersSucceeded(response.data))).catch((error) => dispatch(fetchUsersFailed(error)))
  };
};



const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

const unsubscribe = store.subscribe(() => console.log(`InitialState : ${store.getState()}`))

store.dispatch(fetchUsers())
