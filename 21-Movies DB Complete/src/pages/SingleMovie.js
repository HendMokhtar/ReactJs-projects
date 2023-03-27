import React from 'react'
import {Link, useParams} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';

export default function SingleMovie() {
  const { id } = useParams()
  const url = `https://www.omdbapi.com/?apikey=185979a5&i=${id}`
  const [error, setError] = React.useState({ show: false, msg: '' })
  const [loading, setLoading] = React.useState(false)
  const [movie, setMovie] = React.useState([])
  React.useEffect(() => {
  const fetchingData = async () => {
    setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      if (data) {
        setMovie(data)
        setError({show: false, msg: ''})
      } else {
        setMovie([])
        setError({show: true, msg: data.Error})
      }
      setLoading(false)
  }
 fetchingData()
  }, [url])
  console.log(movie)
  if (loading) {
    return <Spinner animation="border" variant="info"  />
  }
  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    )
  }
  return (
    <section className='singleMovie container flex-md-row'>
    <div className='poster'>
    <img src={movie.Poster} alt={movie.Title}/>
    </div>
    <div className='posterInfo'>
        <h1>{movie.Title}</h1>
        <p>{movie.Plot}</p>
      <h4>{movie.Year}</h4>
      <Link to='/' className='btn'>Back To Movies</Link>
    </div>
    </section>
  )
}