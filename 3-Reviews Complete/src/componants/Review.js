import React from 'react'
import reviews from '../data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export default function Review() {
 const reviewData = reviews
 const [count, setCount] = React.useState(0)
 function nextReview(id) {
  if (id < reviewData.length) {
    setCount(prev => prev+1)
  }else 
  setCount(0)
 }
 function prevReview(id) {
  setCount(prev => prev - 1) 
  if (id === 1) {
   setCount(reviewData.length-1)
  }
 }
 function randomReview() {
  const random = Math.floor(Math.random() * reviewData.length)
  setCount(random)
 }
 return (
  <article className='review'>
   <div className='img-container'>
        <img className='person-img' alt='profile-img' src={reviewData[count].image} />
        <span className='quote-icon'>
        <FaQuoteRight />
        </span>
    </div>
   <h4 className='author'>{reviewData[count].name}</h4>
   <span className='job d-block'>{reviewData[count].job}</span>
   <p className='info'>{reviewData[count].text}</p>
   <div className ="btnsContainer">
    <button className='prev-btn'
            onClick = {()=>prevReview(reviewData[count].id)}
    >
    <FaChevronLeft />
    </button>
    <button className='next-btn'
            onClick = {()=>nextReview(reviewData[count].id)}
    >
    <FaChevronRight />
    </button>
   </div>
   <button className='random-btn' onClick={randomReview}>Surprise Me</button>
  </article>
 )
}