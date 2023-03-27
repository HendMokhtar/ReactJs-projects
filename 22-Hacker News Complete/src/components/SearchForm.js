import React from 'react'
import { useGlobalContext } from '../context'
export default function SearchForm() {
 const { searchTerm, setSearchTerm, error} = useGlobalContext()
 function handleSubmit(e) {
  e.preventDefault()
 }
 function searchMovie(e) {
  setSearchTerm(e.target.value)
 }
  return (
   <form className='search-form my-5' onSubmit={handleSubmit}>
    <h2>Search Hacker News</h2>
    <input type='text'
     className="form-input"
     value={searchTerm}
     onChange ={searchMovie}
    />
    {error.show && <div className='error'>{error.msg}</div>}
    </form>
    )
}
