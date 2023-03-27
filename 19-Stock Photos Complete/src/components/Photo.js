import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
export default function Photo(props) {
  // console.log(props.photos)
 return (
  <Row xs={1} md={2} lg={3} className="g-3">
  {props.photos.map((item,index) => {
    return (
           <Col key={index}>
           <Card className='mb-2'>
             <Card.Img src={item.urls.raw} alt={item.alt_description} />
            <Card.ImgOverlay className='photo-info'>
            <div className='leftInfo'>
            <Card.Title className='name'>{item.user.name}</Card.Title>
            <Card.Text className='likes'>{item.likes} likes</Card.Text>
            </div>
            <div className='rightInfo'>
              <a href={item.user.social.portfolio_url} alt="">
                <img src={item.user.profile_image.large} className='user-img' alt=""/>
              </a>
            </div>
            </Card.ImgOverlay>
           </Card>
           </Col>
         )
       })}
    </Row>
  )
}
