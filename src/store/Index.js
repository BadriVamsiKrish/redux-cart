import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./Ui-slice";
import CartSlice from "./Cart-slice";
const store=configureStore({
  reducer:{
    ui:UiSlice,cart:CartSlice
  }
});
export default store;