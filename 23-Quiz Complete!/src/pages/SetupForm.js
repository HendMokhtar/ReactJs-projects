import React from 'react'
import Form from 'react-bootstrap/Form'
import { useGlobalContext } from '../context'
export default function SetupForm() {
  const{quiz, handleChange, handleSubmit, error} = useGlobalContext()
 return (
   <section className='setup-form'>
   <Form onSubmit={handleSubmit}>
    <h2>Setup Quiz</h2>
     <Form.Group>
       <Form.Label htmlFor='amout'>number of questions</Form.Label>
     <input type='number'
            min={1}
            max={50}
            name='amount'
            value={quiz.amount}
            onChange={handleChange}
            id='amount'
     />
     </Form.Group>
     <Form.Group>
       <Form.Label htmlFor='category'>Category</Form.Label>
       <Form.Select name='category'
                    value={quiz.category}
                    onChange={handleChange}
                    id='category'>
                <option value='sports'>sports</option>
                <option value='history'>history</option>
                <option value='politics'>politics</option>
       </Form.Select>
     </Form.Group>
     <Form.Group>
       <Form.Label htmlFor='difficulty'>Select difficulty</Form.Label>
       <Form.Select value={quiz.difficulty}
                    name='difficulty'
                    onChange={handleChange}
                    id='difficulty'>
           <option value='easy'>easy</option>
           <option value='medium'>medium</option>
           <option value='hard'>hard</option>
       </Form.Select>
       </Form.Group>
       {error && (
        <p className='error'>
        can't generate questions, please try different options
      </p>
       )
       }
    <button>Start</button>
    </Form>
   </section>
  )
}
