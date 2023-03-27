import React from 'react'
import data from './data'
import NamesList from './componants/NamesList'
// import { nanoid } from 'nanoid'

export default function App() {
    const [birthdayList, setBirthdayList] = React.useState(data)
    const listItems = birthdayList.map(item => {
    return <NamesList key ={item.id}
                      item={item} />
    })
    function deleteItems() {
       setBirthdayList([])
     }
    return (
        <main>
        <section className='container'>
         <h3>{birthdayList.length} birthdays today</h3>
            {listItems}
         <button onClick={deleteItems}>Clear All</button>
        </section>
        </main>
    )
    
}
