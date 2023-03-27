import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

export default function Movies() {
 const {movies, loading} = useGlobalContext()

  if (loading) {
    return <Spinner animation="border" variant="info"  />
  }
  return (
    <section className='my-5'>
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
     {movies.map(item => {
      return (
       <Col key={item.imdbID}>
       <Link to={`/Movie/${item.imdbID}`}>
        <Card>
          <Card.Img variant="top" src={item.Poster} alt={item.Title} />
            <Card.ImgOverlay>
              <Card.Title>{item.Title}</Card.Title>
              <Card.Text>{item.Year}</Card.Text>
          </Card.ImgOverlay>
          </Card>
       </Link>
      </Col>
      )
     })}  
    </Row>
    </section>
  )
}
