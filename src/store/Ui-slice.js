import { createSlice } from "@reduxjs/toolkit";
const uiSlice=createSlice({
  name:'ui',
  initialState:{
    showcart:false,
    notification:null
  },
  reducers:{
    toggleShowcart(state){
      state.showcart=!(state.showcart)
    },
    setnotification(state,action){
      state.notification={
        status:action.payload.status,
        message:action.payload.message,
        title:action.payload.title
      };
    }
  }
});
export const uiActions=uiSlice.actions;
export default uiSlice.reducer;
