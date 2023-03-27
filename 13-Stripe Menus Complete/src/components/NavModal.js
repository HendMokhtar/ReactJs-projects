import React from 'react'
import sublinks from '../data'

export default function NavModal() {
 return (
  <>
  {sublinks.map((navLink,index) => {
   return (
    <div key={index} className='sidebar-links mb-4'>
     <article>
      <h4>{navLink.page}</h4>
      <section className='row'>
      {navLink.links.map((subItem,index)=> {
       return (
        <div className='sidebar-sublinks col-6' key={index}>
         <a href={subItem.url}>
          {subItem.icon}
          {subItem.label}
         </a>
        </div>
        )
       })}
      </section>
     </article>
    </div>
   )
  })}

  </>
 )
}