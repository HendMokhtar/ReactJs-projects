import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
export default function Navbar() {
 return (
  <nav className='navbar'>
     <div className='nav-center'>
         <Link to='/'>
           <img src={logo} alt='cocktail db logo' className='logo'/>
         </Link>
       <ul className='nav-links'>
         <li>
          <Link to='/'>Home</Link>
         </li>
         <li>
          <Link to='/about'>About</Link>
         </li>
       </ul>
  </div>
</nav>
 )
}