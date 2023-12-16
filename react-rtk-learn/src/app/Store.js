import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../Features/Cake/CakeSlice";
import iceCreamReducer from "../Features/Icecream/IcecreamSlice";
import userReducer from "../Features/User/UserSlice";
import { createLogger } from "redux-logger";
const logger = createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
  },
});

export default store;
