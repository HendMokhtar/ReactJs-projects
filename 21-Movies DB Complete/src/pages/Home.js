import React from 'react'
import SearchForm from '../components/SearchForm'
import Movies from '../components/Movies'

export default function Home() {
  return (
   <main className='container'>
    <SearchForm />
    <Movies/> 
   </main>
  )
}
