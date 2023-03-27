import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
   <section className='section error-section m-auto'>
    <h1 className='fw-bold text-center'>Oops! It's A Dead End</h1>
    <Link to='/' className='btn btn-primary'>Back Home</Link>
   </section>
  )
}
