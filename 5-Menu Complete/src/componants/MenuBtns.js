import React from "react";
export default function MenuBtns(props) {

return(
<div className="btn-container">    
      {props.categories.map((category,index) => {
        return (
          <button type = "button"
                  className ="filter-btn"
                  key ={index}
                  onClick={()=>props.selectCategory(category)}
      >
      {category}
      </button>
        )
      })}
</div>
  )
}
