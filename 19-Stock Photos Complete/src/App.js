import React from 'react'
import Photo from './components/Photo';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
const clientId = `?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`

export default function App() {
const [loading, setLoading] = React.useState(false)
const [photos, setPhotos] = React.useState([])
const [query, setQuery] = React.useState('')
const [page, setPage] = React.useState(1)
const [newImages, setNewImages] = React.useState(false)
  

const fetchingData = React.useCallback(async () => {
  setLoading(true)
  let url;
  const urlPage = `&page=${page}`
  const urlQuery = `&query=${query}`
  if (query) {
    url = `${searchUrl}${clientId}${urlPage}${urlQuery}`
  } else {
    url = `${mainUrl}${clientId}${urlPage}`
  }
  const response = await fetch(url)
  const data = await response.json()
    setPhotos(oldPhotos => {
      if (query && page === 1) {
        return data.results
      } else if (query) {
        return [...oldPhotos, ...data.results];
      } else {
        return [...oldPhotos, ...data];
      }
    })
    setNewImages(false)
    setLoading(false)
  },[page,query])
  React.useEffect(() => {
   fetchingData()
  }, [page, fetchingData])

  // setup two useEffects
  // don't run second on initial render
  React.useEffect(() => {
    if (!newImages) return
    if (loading) return
    setPage(oldPage => oldPage + 1)
  },[newImages,loading])

  function event() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setNewImages(true)
    }
  }
  React.useEffect(() => {
    window.addEventListener('scroll', event)
    return () => window.removeEventListener('scroll', event)
  }, [])
  
  function handleSubmit(e) {
    e.preventDefault()
    if(!query) return
    if (page === 1) {
      fetchingData()
    }
    setPage(1)
  }
  return (
    <main>
      <div className='container'>
        <section className='searchSection mt-5'>
          <Form className="d-flex" onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="Search"
            className="me-2"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
          />
          <Button>
            <FaSearch/>
          </Button>
          </Form>
        </section>
        <section className='stockPhotosSection my-5'>
          <Photo photos={photos} />
          {loading && <h2 className='loading text-center'>Loading...</h2>}
        </section> 
      </div>
    </main>
  )
    
}
