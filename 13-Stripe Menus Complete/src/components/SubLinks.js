import React from 'react'
import sublinks from '../data'
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function SubLinks() {
 return (
  <>
  {sublinks.map((navLink,index) => {
   return (
    <NavDropdown key={index} title={navLink.page} id="collasible-nav-dropdown"  renderMenuOnMount={true}>
     <aside className='submenu'>
     <h4>{navLink.page}</h4>
      <section className='d-flex'>
      {navLink.links.map((subItem,index)=> {
       return (
        <div className='submenu-center' key={index}>
         <NavDropdown.Item href={subItem.url}>
          {subItem.icon}
          {subItem.label}
         </NavDropdown.Item>
        </div>
        )
       })}
      </section>
     </aside>
    </NavDropdown>
   )
  })}

  </>
 )
}