import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalQuantity: 0,
    total:0 // Corrected the typo in the property name
  },
  reducers: {
    addtoitems(state, action) {
      const newItem = action.payload;
      if(state.cart===undefined){
        state.cart=[];
        state.cart.push({
            title: newItem.title,
            price: newItem.price,
            description: newItem.description,
            quantity: 1,
            totalprice: newItem.price,
            id:newItem.id,
          });
          state.totalQuantity++;
          state.total=newItem.price;
        return;
      }
      const existItem=state.cart.find((item) => item.title === newItem.title); // Corrected the find function
      if (!existItem) {
        state.cart.push({
          title: newItem.title,
          price: newItem.price,
          description: newItem.description,
          quantity: 1,
          totalprice: newItem.price,
          id:newItem.id,
        });
        state.totalQuantity+=1;
        state.total+=newItem.price;
      } else {
        existItem.quantity++;
        existItem.totalprice += newItem.price;
        state.total+=newItem.price;
      }
    },
    //removeitem(state,action){
      removeitem(state, action) {
        const newItem = action.payload;
        const existItem = state.cart.find((item) => item.title === newItem.title);
      
        if (existItem.quantity === 1) {
          state.cart = state.cart.filter((item) => item.title!== newItem.title);
          state.totalQuantity -= 1;
          state.total-=newItem.price;
        } else {
          existItem.quantity--;
          existItem.totalprice -= newItem.price;
          state.total-=newItem.price;
        }
      } ,
      adddatafromdb(state,action){
        state.cart=action.payload.cart;
        state.totalQuantity=action.payload.totalQuantity;
        state.total=action.payload.total;

      }
    }
  },
  
);
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
