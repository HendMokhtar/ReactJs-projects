import React from 'react'
import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}

function AppProvider ({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  function clearCart() {
    dispatch({type: 'CLEAR_CART'})
  }
  function removeItem(id) {
    dispatch({type: 'REMOVE_ITEM', payload: id})
  }
  function increase(id) {
    dispatch({type: 'INCREASE', payload: id})
  }
  function decrease(id) {
    dispatch({type: 'DECREASE', payload: id})
  }
  function toggleAmount(id, type) {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type }})
  }

  React.useEffect(() => {
    dispatch({ type: 'LOADING' })
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch({ type: 'DISPLAY_DATA', payload: data }))
   }, []) 
  React.useEffect(() => {
    dispatch({ type: 'TOLTAL' })
   }, [state.cart]) 


  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        toggleAmount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return React.useContext(AppContext)
}

export { AppContext, AppProvider }