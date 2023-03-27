const reducer = (state, action) => {
 if (action.type === 'CLEAR_CART') {
  return {...state, cart: []}
 }
 if (action.type === 'REMOVE_ITEM') {
  return {
   ...state,
   cart: state.cart.filter(item => item.id !== action.payload)
  }
 }
 if (action.type === 'INCREASE') {
  let incAmount = state.cart.map(item => {
   if (item.id === action.payload) {
    return { ...item, amount: item.amount + 1 }
   }
   return item
  })
  return {
   ...state,
   cart:incAmount
  }
 }
 if (action.type === 'DECREASE') {
  let decAmount = state.cart.map(item => {
   if (item.id === action.payload) {
    return { ...item, amount: item.amount - 1 }
   }
   return item
  })
   .filter(item => item.amount !== 0) 
  return {
   ...state,
   cart: decAmount 
  }
  }
  if (action.type === 'TOGGLE_AMOUNT') { 
    let toggleAmount = state.cart.map(item => { 
      if (item.id === action.payload.id) {
        if (action.payload.type === 'inc') {
          return { ...item, amount: item.amount + 1 }
        } else if (action.payload.type === 'dec') {
          return { ...item, amount: item.amount - 1 }
        }
      }
      return item
    })
    .filter(item => item.amount !== 0) 
    return {
      ...state,
      cart: toggleAmount
     }
  }
 if (action.type === 'LOADING') {
  return {...state, loading: true}
 }
 if (action.type === 'DISPLAY_DATA') {
  return {...state, cart: action.payload, loading: false}
 }
 
 if (action.type === 'TOLTAL') {
  let {totalItems, cartTotal} = state.cart.reduce((total,cartItem) => {
   const { amount, price } = cartItem
   //count items
   total.totalItems += amount
   //count sum
   total.cartTotal += amount * price
   return total
 }, {
   totalItems: 0,
   cartTotal: 0
  })
   cartTotal = parseFloat(cartTotal.toFixed(2))

  return {...state, total: cartTotal, amount: totalItems}
 }
 
 throw new Error ('no matching action type')
}
export default reducer;