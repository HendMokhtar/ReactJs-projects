import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from '../context'

export default function CartContainer() {
 const { cart, total, clearCart} = useGlobalContext()
 return (
  <section className='cart'>
   {!cart.length ?
    <header>
    <h2>your bag</h2>
    <h4 className='empty-cart'>is currently empty</h4>
    </header> 
    :
    <>
    <header>
    <h2>your bag</h2>
    </header>
   <div>
   {cart.map(item => {
    return <CartItem key={item.id} {...item}/>
   })}
   </div>

   <footer>
    <hr />
    <div className='cart-total'>
     <h4>total <span>$ {total} </span></h4>
    </div>
    <button className='btn clear-btn' onClick={clearCart}>clear cart</button>
     </footer>
     </>
   }
   
  </section>
 )
}