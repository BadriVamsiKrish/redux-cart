import { configureStore } from "@reduxjs/toolkit";
import uislice from './Ui';
import cartslice from './Cart';
const store=configureStore({
  reducer:{
    ui:uislice,
    cart:cartslice
  }
})
export default store;