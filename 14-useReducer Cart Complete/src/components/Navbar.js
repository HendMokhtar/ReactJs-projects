import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { useGlobalContext } from '../context';
export default function Navbar() {
  const {amount} = useGlobalContext()
 return (
  <nav>
  <div className='nav-center'>
    <h3>UseReducer</h3>
    <div className='nav-container'>
       <FaShoppingBag/>
      <div className='amount-container'>
           <p className='total-amount'>{amount}</p>
      </div>
    </div>
  </div>
</nav>
 )
}