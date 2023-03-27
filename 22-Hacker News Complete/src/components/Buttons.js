import React from 'react'
import { useGlobalContext } from '../context'
export default function Buttons() {
 const { page, setPage, nbPages } = useGlobalContext()
 function incPages() {
   console.log(nbPages)
  setPage(prev => prev + 1)
  if (page > nbPages - 2) {
   setPage(0)
  }
 }
 function decPages() {
  setPage(prev => prev - 1)
  if (page <= 0) {
   setPage(nbPages - 2)
  }
 }
 return (
  <section className='paginationBtns'>
   <button className='dec' onClick={decPages}>Prev</button>
   <span> {page + 1} of {nbPages}</span>
   <button className='inc' onClick={incPages}>Next</button>
   </section>
  )
}
