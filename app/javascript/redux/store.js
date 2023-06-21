import { configureStore } from "@reduxjs/toolkit";
import greetingsReducer from "./GreetingSlice/greetingSlice";
export const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});
