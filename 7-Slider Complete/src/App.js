import React from 'react'
import data from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

export default function App() {
    const [value, setValue] = React.useState(0)
    React.useEffect(() => {
       let slider = setInterval(() =>setValue(prev => prev + 1), 5000);
        return () => {
            clearInterval(slider)
        };
    }, [value]);

    if (value > data.length-1) {
        setValue(0)
    }
 

return (
        <main>
        <section className='section container'>
                <div className='title'>
                <h2> <span>/</span>  Reviews </h2>
            </div>
            <div className="section-center">           
                {data.map((item, index) => {
                    let position = "nextSlide"
                    if (index === value) {
                        position = "activeSlide"
                    } else if (value === 0 && index === data.length - 1) {
                        position = "lastSlide"
                    }
                    return (
                        <article className= {position} key={item.id}>
                        <img className="person-img" alt="person-img" src={item.image}/>
                        <h3 className="name">{item.name}</h3>
                        <h4 className="title">{item.title}</h4>
                         <p className="text">{item.quote}</p>
                         <FaQuoteRight className="icon"/>
                        <MdNavigateBefore className="prev" onClick={() => {
                            setValue(prev => prev - 1)
                            if (value === 0) {
                                setValue(data.length-1)
                            }
                        }}/>
                        <MdNavigateNext className='next' onClick={() => {
                            setValue(prev => prev + 1)
                         }}/>
                        </article>
                    )
                })
                }
            </div>
        </section>
        </main>
    )
    
}
