import React from 'react'
import ReactReadMoreReadLess from "react-read-more-read-less";
export default function Tour(props) {
 
    return (
       <div className="single-tour">
      <img alt={props.item.name} src={props.item.image}/>
       <div className="tour-info">
       <h4>{props.item.name}</h4>
       <span className='tour-price'>{props.item.price}</span>
      </div>
      <p className='info'>
      <ReactReadMoreReadLess
      charLimit={400}
      readMoreText={"Read More"}
      readLessText={"Show Less"}
      readMoreClassName="read-more-less--more"
      readLessClassName="read-more-less--less"
    >
      {props.item.info}
    </ReactReadMoreReadLess>
      </p>
      <footer>
      <button className="delete-btn"
              onClick={() => props.deleteTour(props.item.id)}>
        Not Interested
       </button>
      </footer>
       </div>
    )
}