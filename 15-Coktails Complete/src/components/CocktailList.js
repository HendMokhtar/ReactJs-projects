import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading';
import CocktailItem from './CocktailItem'

export default function CocktailList() {
 const {cocktails, loading } = useGlobalContext()
 if (loading) {
  return <Loading/>
 }
 if (cocktails.length < 1) {
  return (
   <section className='section card-section container'>
    <h2 className='section-title mt-3'>
       no cocktails matched your search criteria
     </h2>
    </section>
  )
 }
 return (
  <section className='section card-section container'>
   <h2 className='section-title'>cocktails</h2>
      <CocktailItem />
  </section>
  )
}



    


