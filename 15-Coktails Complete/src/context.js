import React from 'react'

const AppContext = React.createContext()
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

function AppProvider ({ children }) {
  const [cocktails, setCocktails] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState("a")
 
  const fetchingData = React.useCallback(async () => {
    setLoading(true)
    try {
    const response = await fetch(`${url}${searchTerm}`)
    const data = await response.json()
      if (data.drinks) {
        setCocktails(data.drinks)
        setLoading(false)
      } else {
        setCocktails([])
        setLoading(false)
      }
    } catch(error) {
      console.log(error)
      setLoading(false)        
    }
  }, [searchTerm])
  
  React.useEffect(() => {
    fetchingData()
  },[searchTerm, fetchingData])

  return (
    <AppContext.Provider
      value={{
        cocktails,
        loading,
        setSearchTerm
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return React.useContext(AppContext)
}

export { AppContext, AppProvider }