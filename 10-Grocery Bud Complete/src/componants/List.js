import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function List(props) {

 return (
  <article className='grocery-item'>
   <p className='title'>{props.title}</p>
   <div className='btn-container'>
    <button className='edit-btn' onClick={()=>props.updateItem(props.id)}>
     <FaEdit />
    </button>
    <button className='delete-btn' onClick={()=>props.deleteItem(props.id)}>
     <FaTrash />
    </button>
   </div>
  </article>
 )
}