import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "./reducers/amountReducer";
// import reducers from "./reducers/reducers";

export const store = configureStore({
  reducer: {
    amount: amountReducer,
  },
});
