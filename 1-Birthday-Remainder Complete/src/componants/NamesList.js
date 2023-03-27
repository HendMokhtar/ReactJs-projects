import React from 'react'
export default function birthdayList(props) {
    return (
              <article className="person">
               <img alt="personImg" src={props.item.image} />
               <div className='peronInfo'>
                 <h4>{props.item.name}</h4>
                 <p>{props.item.age}</p>
               </div>
              </article>
    )
}