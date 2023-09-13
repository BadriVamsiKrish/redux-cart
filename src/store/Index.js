import { configureStore } from "@reduxjs/toolkit";
import uislice from './Ui';
const store=configureStore({
  reducer:{
    ui:uislice
  }
})
export default store;