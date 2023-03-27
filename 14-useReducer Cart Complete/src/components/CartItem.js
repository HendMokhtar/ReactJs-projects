import React from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useGlobalContext } from '../context';

export default function CartItem({ id, title, price, img, amount }) {
 const{removeItem, increase, decrease, toggleAmount} = useGlobalContext()
 return (
  <article className='cart-item'>
  <img src={img} alt="Samsung Galaxy S8" />
  <div>
   <h4>{title}</h4>
    <h4 className='item-price'>{price}</h4>
    <button className='remove-btn' onClick={() => removeItem(id)}>
     remove
    </button>
  </div>
  <div>
    <button className='amount-btn' onClick={()=>toggleAmount(id,'inc')}>
     <FaAngleUp />
    </button>
    <p className='amount'>{amount}</p>
    <button className='amount-btn' onClick={()=>toggleAmount(id,'dec')}>
     <FaAngleDown />
    </button>
  </div>
 </article>
 )
}