import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SingleCocktail() {
 const {id} = useParams()
 const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
 const[cocktails,setCocktails] =React.useState([])
 const[loading,setLoading] =React.useState(false)
 const fetchingData = React.useCallback(async () => {
  try {
  const response = await fetch(`${url}${id}`)
  const data = await response.json()
    if (data.drinks) {
      setCocktails(data.drinks)
      setLoading(false)
    } else {
      setCocktails([])
    }
  } catch(error) {
    console.log(error)
    setLoading(false)        
  }
},[id])
 React.useEffect(() => {
   setLoading(true)
  fetchingData()
 }, [id, fetchingData])
  
  if (loading) {
  return <Loading/>
  }
  if (cocktails.length <1) {
    return (
      <h2 className='section-title pt-5'>no cocktail to dispaly</h2>
    )
  }
  return (
    <section className='single-cocktail container'>
      <Link to='/' className='btn btn-primary'>back home</Link>
      {cocktails.map(item => {
      const Ingredients = [item.strIngredient1,item.strIngredient2,item.strIngredient3,item.strIngredient4,item.strIngredient5]
      return (
      <div  key={item.idDrink}  className='cocktails-center my-5'>
        <h2 className='section-titel text-center pb-4 fw-bold'>{item.strDrink}</h2>
        <Row className="g-5">
          <Col xs={12} md={5} className='thumb'><img src={item.strDrinkThumb} alt={item.strDrink} /></Col>
          <Col xs={12} md={7} className ='details d-flex flex-column justify-content-center'>
          <div><span>Name :</span> {item.strDrink}</div>
          <div><span>Category :</span> {item.strCategory}</div>
          <div><span>Info :</span> {item.strAlcoholic}</div>
          <div><span>Glass :</span> {item.strGlass}</div>
          <div><span>Instructions :</span> {item.strInstructions}</div>
          <div className='d-flex flex-row flex-wrap'><span className='mb-1'>Ingredients :</span>
                {Ingredients.map((Ingredient, index) => {
                  return (
                    Ingredient ?
                    <ul key={index} className='d-inline-flex align-items-center p-0 m-0'>
                    <li className='px-2'>{Ingredient}</li>
                      </ul>  
                      : null
                )
              })}
          </div>
          </Col>
       </Row>
       </div>
       )
      })}
    </section>
  )
}
