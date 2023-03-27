import React from 'react'
import { useGlobalContext } from '../context'

export default function SearchForm() {
 const{setSearchTerm} = useGlobalContext()
 const refContainer = React.useRef(null)
 React.useEffect(() => {
  refContainer.current.focus()
 },[])
 function handleSubmit(e) {
  e.preventDefault()
 }
 function searchCocktail() {
  setSearchTerm(refContainer.current.value)
 }
 return (
   <section className="section search">
   <form className='form search-form' onSubmit={handleSubmit}>
    <label htmlFor='searchForm'>Search Your Favorite Cocktail</label>
    <input type ='text' id='searchForm' ref={refContainer} onChange={searchCocktail}></input>
   </form>
   </section>
  )
}
