import React from 'react'
import Tour from './componants/Tour'
import Loading from './componants/Loading'

export default function App() {
    const[loading, setLoading] = React.useState(false)
    const [toursExist, setToursExist] = React.useState(true)
    const [tours, setTours] = React.useState([])
    React.useEffect(() => {
        setLoading(true)
        fetch("https://course-api.com/react-tours-project")
        .then(res => res.json())
            .then(data => {
                setTours(data)
                setLoading(false)
            })
    }, [toursExist])
    if(loading) {
        return <Loading/>
    }
    
    function deleteTour(tourId) {
        setTours(oldTours => oldTours.filter(tourItem => 
            tourItem.id !== tourId 
        ))
        if(tours.length === 1){
            setToursExist(false)
        }    
    }    
        
    const tourSection = tours.map(item => {
        return <Tour key= {item.id}
                     item={item}
                     deleteTour ={deleteTour}
        />
    })
    return (
        <div>
        {toursExist ? 
                <main className="container">
                <h2 className='title'>Our Tours
                    <div className='underline'></div>
                </h2>                  
                <section>
                {tourSection}
                </section>
                </main> 
        :(
                <main className='container'>
                    <h2 className='title'>No Tours Left</h2>
                    <button className="btn refreshBtn" onClick={()=>setToursExist(true)}>Refresh</button>
                </main> 
        )}
    </div>
    )
}
