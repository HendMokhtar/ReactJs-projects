import React from 'react'
import data from './data'
import MenuItem from './componants/MenuItem'
import MenuBts from './componants/MenuBtns'
export default function App() {
    const categories = ['All',...new Set(data.map(item => item.category))]
    const [menuData,setMenuData] = React.useState(data)
    const menuItem = menuData.map(item => {
        return (
            <MenuItem key={item.id} item={item}/>
    )
    })
    function selectCategory(category){
        if (category === 'All') {
            setMenuData(data)
            return
        } 
        const uniqueCategory = data.filter(categoryItem =>categoryItem.category === category)
        setMenuData(uniqueCategory) 
    }    

    return (
        <main>
        <section className='container'>
            <div className="title">
                <h2>Our Menu</h2>
                <div className='underline'></div>
            </div>
            <div className='btn-container'>
                    <MenuBts categories={categories} selectCategory={selectCategory}/>
            </div>
            <div className="section-center">
                {menuItem}
            </div>
        </section>
        </main>
    )
    
}
