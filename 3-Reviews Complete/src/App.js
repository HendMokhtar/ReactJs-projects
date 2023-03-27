import React from 'react'
import Review from './componants/Review'
// import { nanoid } from 'nanoid'

export default function App() {

    return (
        <main>
            <section className='container'>
              <div className="title">
              <h2 className='title'>Our Reviews</h2>
              <div className='underline'></div>
              </div>
                <Review />
            </section>
        </main>
    )
    
}
