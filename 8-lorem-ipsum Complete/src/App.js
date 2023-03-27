import React from 'react'
import data from './data'
// import { nanoid } from 'nanoid'

export default function App() {
    const [count, setCount] = React.useState("")
    const [text, setText] = React.useState([])
    function handleSubmit(event) {
        event.preventDefault()
        let value = parseInt(count)
        if (count <= 0) {
            value = 1
        }
        if (count > 8) {
            value = 8
        }
        setText(data.slice(0,value))        

    }

    return (
        <main>
        <section className='section-center'>
        <h3> TIRED OF BORING LOREM IPSUM? </h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor='count'>Paragraphs:</label>
            <input     type="number"
                        id="count"
                        value={count}
                        name="count"
                        onChange={(e) => {
                            setCount(e.target.value)
                        } }
            >
            </input>
            <button className='btn'>GENERATE</button>
        </form>
            <div className='result'>
                {text.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                })}
            </div>
        </section>
        </main>
    )
    
}
