import React from 'react'
import { useGlobalContext } from '../context'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

export default function Stories() {
 const {stories,setStories, loading} = useGlobalContext()
// console.log(stories)
  function deleteStory(storyId) {
    setStories(prevStories => prevStories.filter(story => 
      story.objectID !== storyId ))
  }
  if (loading) {
    return <Spinner animation="border" variant="info"  />
  }
  return (
    <article className='storySection my-5'>
    <Row xs={1} lg={2}>
    {stories.map(item => {
      return(
        <Col key={item.objectID} className='story'>
          <h4>{ item.title}</h4>
          <p>{item.points} points by {item.author} | {item.num_comments} comments</p>
          <div className='actionBtns'>
            <a href={item.url} className='read-link'>Read More</a>
            <button className='remove-btn' onClick={()=>deleteStory(item.objectID)}>Remove</button>
          </div>
        </Col>
      )
    })}
    </Row>
    </article>
  )
}
