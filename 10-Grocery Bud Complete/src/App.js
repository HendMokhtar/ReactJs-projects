import React from 'react'
import List from './componants/List'
import { nanoid } from 'nanoid'


export default function App() {
    let getLocalItem = localStorage.getItem('listItem')
    let parseLocalItem = JSON.parse(getLocalItem)
    const [name, setName] = React.useState("")
    const [list, setList] = React.useState(parseLocalItem || [])
    const [isEditing, setIsEditing] = React.useState(false)
    const [editId, setEditId] = React.useState(null)
    const [alert, setAlert] = React.useState({
        state: false,
        color: "",
        body: ""
    })
    
    React.useEffect(()=>{
        localStorage.setItem('listItem',JSON.stringify(list))
    }, [list])  

    React.useEffect(() => {
        const timeOut = setTimeout(() => {
            setAlert(prev => {
                return {
                    state: false
                }
            })
        }, 2000)
        return () => clearTimeout(timeOut)
    },[alert])

    function handleSubmit(event) {
        event.preventDefault()
        if (!name) {
            showAlert(true, "danger", "Please Enter Value")
        }
       else if (name && isEditing) {
            // Put the most recently-modified note at the top
            const index = list.findIndex(object => {
            return object.id === editId;
            });
            list.unshift(list.splice(index, 1)[0]);
            setList(
                list.map(item => {
                    if (item.id === editId) {
                        return { ...item, title: name }
                    }
                    return item
                })
            )
            showAlert(true, "success", "Please Enter Value Changed")
            setName('')
            setIsEditing(false)
            setEditId(null)
        } else {
            const newItem = { id: nanoid(), title: name }
            setList(prev => [...prev, newItem])
            setName('')
            showAlert(true, "success", "Item Added To The List")
        }
    }
    function showAlert(alertState, alertColor, alertBody) {
      const alertShow =  setAlert(prev => {
            return {
                state : alertState,
                color: alertColor,
                body: alertBody
            }
      })
        return alertShow
    }
    
    function updateItem(itemId) {
        const speceficItem = list.find(item => item.id === itemId)
        setIsEditing(true)
        setEditId(itemId)
        setName(speceficItem.title)
    }
    
    function deleteItem(itemId) {
        setList(prev => prev.filter(item => 
         item.id !== itemId
        ))
        showAlert(true, "danger", "Item Removed")
       }

    return (
        <section className='section-center'>
            {alert.state && <p className={`alert alert-${alert.color}`}>{alert.body}</p> } 
            <form className='grocery-form' onSubmit={handleSubmit}>
                <h3>grocery bud</h3>
                <div className='form-control'>
                    <input className='grocery'
                            type='text'
                            placeholder="e.g. eggs"
                            name='groceryItem'
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                    ></input>
                    <button className='submit-btn'>
                        {isEditing ? "Edit" : "Submit"}
                    </button>
                </div>
            </form>
            {list.length > 0 ? 
                <div className='grocery-container'>
                <div className='grocery-list'>
                        {list.map(item => {
                            return (
                                <List   key={item.id}
                                        title={item.title}
                                        id={item.id}
                                        updateItem ={updateItem}
                                        deleteItem={deleteItem}
                                />
                        )
                    })}
                </div>
                    <button className='clear-btn' onClick={() => { 
                        setList([])
                        showAlert(true, "danger", "Empty List")
                    }}>clear items</button>
                </div>
                :
                <></>
            }
        </section>
    )
    
}
