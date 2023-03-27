import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

export default function CocktailItem() {
 const { cocktails } = useGlobalContext()
  return (
   <Row xs={1} md={2} lg={3} className="g-4 cocktails-center">
   {cocktails.map(item => {
    return(
       <Col key={item.idDrink}>
      <Card className='p-0'>
      <Card.Img variant="top" src={item.strDrinkThumb} alt={item.strDrink}/>
      <Card.Body>
        <Card.Title className='fw-bold'>{item.strDrink}</Card.Title>
        <Card.Text className='fw-bold'> {item.strGlass} </Card.Text>
        <small className="text-muted">{item.strAlcoholic}</small>
        <Link to={`/cocktail/${item.idDrink}`} className='btn btn-primary d-block mt-2'>Details</Link>
      </Card.Body>
      </Card>
      </Col>
      )
     })}
  </Row>
  )
}
