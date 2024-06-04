import { createSlice } from '@reduxjs/toolkit'



export const productSlice = createSlice({
  name: 'Product',
  initialState: {
    cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },


  reducers: {
    addToCart: (state,action) => {
      let findProduct = state.cartItem.findIndex((items)=>items.id == action.payload.id)
      if(findProduct !== -1){
        state.cartItem[findProduct] .qun +=1
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }else{
        state.cartItem = [...state.cartItem,action.payload]
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }
    },

    productIncrement:(state,action)=>{
      if(state.cartItem[action.payload].qun < 10){
        state.cartItem[action.payload].qun += 1
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }
     
  },
    productDecrement:(state,action)=>{
      if(state.cartItem[action.payload].qun > 1){
        state.cartItem[action.payload].qun -= 1
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }
      
  },

  productClear:(state,action)=>{
    state.cartItem.splice(action.payload, 1)
    localStorage.setItem("cart", JSON.stringify(state.cartItem))
  }
    
  },
})

export const { addToCart,productIncrement,productDecrement,productClear } = productSlice.actions

export default productSlice.reducer