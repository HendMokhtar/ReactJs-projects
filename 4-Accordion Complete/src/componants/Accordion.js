import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


export default function Accordion(props) {
 const [isAnswer, setIsAnswer] = React.useState(false)
 return (
 <div>
    <article className="question">
     <header>
     <h4>{props.item.title}</h4>
    <button className="btn" onClick={()=> setIsAnswer(prev=> !prev)}>
    {!isAnswer ?  <AiOutlinePlus/> : <AiOutlineMinus />}
    </button>
     </header>
     {isAnswer &&  <p>{props.item.info}</p>}
   </article>
 </div>
 )
}