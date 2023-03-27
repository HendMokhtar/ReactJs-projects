import React from "react"

export default function MenuItem(props) {
 return (
   <div className="menu-item">
   <img className="photo" alt={props.item.title} src={props.item.img}/>
    <div className="item-info">
     <header>
     <h4>{props.item.title}</h4>
     <h4 className="price">{props.item.price}</h4>
      </header>
    <p className="item-text">{props.item.desc}</p>
    </div>
   </div>
 )
}