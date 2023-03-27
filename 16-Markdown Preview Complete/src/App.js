import React from 'react'
// import {useGlobalContext} from './context'
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ReactMarkdown from 'react-markdown'

export default function App() {
  const [preview, setPreview] = React.useState('# markdown preview')
  function handleChange(e) {
    setPreview(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <Container className='mt-5'>
      <Row>
        <Col sm={12} lg={5}>
        <FloatingLabel controlId="floatingTextarea2" onSubmit={handleSubmit}>
        <Form.Control
          as="textarea"
          style={{ minHeight: '80vh', boxShadow: "var(--dark-shadow)" }}
          onChange={handleChange}
          value={preview}
        />
        
       </FloatingLabel>
        </Col>
        <Col  sm={12} lg={5} className='m-3'>
          <article className='result'>
          <ReactMarkdown>{preview}</ReactMarkdown>
          </article>
        </Col>
      </Row>
    </Container>        
    )
    
}
