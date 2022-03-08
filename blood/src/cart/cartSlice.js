import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const itemStatus = state.cartItems.findIndex(
                (item)=> item._id === action.payload._id
            );
            if (itemStatus >=0 ){
                state.cartItems[itemStatus].cartQuantity+=1
            } else {
                const tempGood = {...action.payload,cartQuantity:1};
                state.cartItems.push(tempGood);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
              (item) => item._id === action.payload._id
            );
      
            if (state.cartItems[itemIndex].cartQuantity > 1) {
              state.cartItems[itemIndex].cartQuantity -= 1;}

            else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                  (item) => item._id !== action.payload._id
                );
             state.cartItems = nextCartItems;

            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            
        },
        removeFromCart(state, action) {
            state.cartItems.map((cartItem) => {
              if (cartItem._id === action.payload._id) {
                const nextCartItems = state.cartItems.filter(
                  (item) => item._id !== cartItem._id
                );
      
                state.cartItems = nextCartItems;
              }
              localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
              return state;
            });
        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
              (cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;
      
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
      
                return cartTotal;
              },
              {
                total: 0,
                quantity: 0,
              }
            );
            
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }

    }  
           
})

export const {addToCart,decreaseCart,clearCart,removeFromCart,getTotals}=cartSlice.actions;
export default cartSlice.reducer;