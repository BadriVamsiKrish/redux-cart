import { createSlice } from "@reduxjs/toolkit";
const initstate={showcart:false};
const uislice=createSlice({
  name:'ui',
  initialState:initstate,
  reducers:{
    setshowcart(state){
      state.showcart=!state.showcart;
    },
  }
})
export const uiActions=uislice.actions;
export default uislice.reducer;