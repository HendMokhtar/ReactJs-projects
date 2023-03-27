import React from 'react'
import SingleColor from './componants/SingleColor'
import Values from 'values.js'

export default function App() {
    const [color, setColor] = React.useState("")
    const [error, setError] = React.useState(false)
    const [lists, setLists] = React.useState(new Values('#f15025').all(10))

    function handleSubmit(e) {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10)
            setLists(colors)
            
        } catch(error) {
            setError(true)
            console.log(error)
        }
    }
    return (
        <>
        <section className='container'>
            <h3>Color Generator</h3>
            <form onSubmit={handleSubmit}>
                <input type="text"
                        className={error ? "error" : "null"}
                        placeholder='#f15025'
                        value={color} 
                        onChange={(e)=> setColor(e.target.value)}>
                </input>
                <button className='btn'>Submit</button>
            </form> 
            </section>
            <section className='colors'>
                {
                    lists.map((color, index) => {
                        return (
                            <SingleColor key={index} item={color} index={index}/>
                        )
                    })
                }
            </section>
        </>
    )
    
}
