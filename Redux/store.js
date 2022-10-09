import { configureStore } from "@reduxjs/toolkit";
import coins from "./Slices/coins/getCoinsSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      coins: coins,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
