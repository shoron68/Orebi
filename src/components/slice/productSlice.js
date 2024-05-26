import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'Product',
  initialState: {
    cartItem: [],
  },
  reducers: {
    addToCart: (state,action) => {
      let findProduct = state.cartItem.findIndex((items)=>items.id)
      if(findProduct !== -1){
        state.cartItem[findProduct] .qun +=1
      }else{
        state.cartItem = [...state.cartItem,action.payload]
      }
    },
    
  },
})

export const { addToCart } = productSlice.actions

export default productSlice.reducer