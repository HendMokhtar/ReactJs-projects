import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import {useGlobalContext} from './context'

export default function App() {
  const{loading} = useGlobalContext()
  if (loading) {
    return <h1 className='loading'>Loading...</h1>
  }
    return (
      <main>
        <Navbar />
        <CartContainer />
      </main>
    
    )
    
}
