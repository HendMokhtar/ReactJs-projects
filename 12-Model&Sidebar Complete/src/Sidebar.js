import React from 'react'
import logo from './logo.svg'
import { AiOutlineClose } from 'react-icons/ai';
import {links, social } from './data'

export default function Sidebar(props) {
 return (
  <aside className='sidebar show-sidebar'>
   <div className='sidebar-header'>
    <img className='logo' src={logo} alt="sidebarLogo" />
    <button class="close-btn" onClick={() => props.setSidebarShow(false)}>
     <AiOutlineClose/>
    </button>
   </div>
   <ul className='links p-0'>
    {links.map(link => {
     return <li key={link.id}>
      <a href={link.url}>
       {link.symbol}
       {link.text}
      </a>
     </li>
    })}
   </ul>
   <div className='social-icons'>
    {social.map(link => {
     return <a key={link.id} href={link.url}>
       {link.icon}
     </a>
    })}
   </div>
   
  </aside>
 )
}