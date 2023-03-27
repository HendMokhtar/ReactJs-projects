import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function Loading() {
 return (
  <div className='spinner'>
    <Spinner animation="border" variant="info" />
  </div>
  )
}
