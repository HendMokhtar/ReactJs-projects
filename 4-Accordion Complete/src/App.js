import React from 'react'
import Accordion from './componants/Accordion'
import data from './data'
export default function App() {
    const question = data.map(item => {
        return (
            <Accordion key={item.id} item={item}/>
        )
    })
    return (
        <main>
            <div className='container'>
                <h3>Question And Answers About Login</h3>
                <section className='info'>
                 {question}
                </section>
                
        </div>
        </main>
    )
    
}
