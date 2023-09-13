import { createSlice } from "@reduxjs/toolkit";
const cartslice=createSlice({
  name:'cart',
  initialState:{
    items:[],
    totalquantity:0,
    totalprice:0,
  },
  reducers:{
    additem(state,action){
      const newitem=action.payload;
      const existingitem=state.items.find(item=>item.itemid===newitem.id);
      if(!existingitem){
       state.items.push({
        itemid:newitem.id,
        price:newitem.price,
        quantity:1,
        total:newitem.price,
        title:newitem.title
      });
    }
      else{
        existingitem.quantity++;
        existingitem.total=existingitem.total+newitem.price;
        

      }
    
      },
      removeitem(state,action){
        const newitem=action.payload;
        const existingitem=state.items.find(item=>item.itemid===newitem.id);
        if(existingitem.quantity===1){
        state.items=state.items.filter((item)=>item.title!==newitem.title);
      }
        else{
          existingitem.quantity--;
          existingitem.total=existingitem.total-newitem.price;

        }

      }
    }
  }
);
export const cartActions=cartslice.actions;
export default cartslice.reducer;