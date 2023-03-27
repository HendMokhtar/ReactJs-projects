import React from 'react'

const AppContext = React.createContext()

function AppProvider({ children }) {
  const [loading, setLoading] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState('batman')
  const[error, setError] = React.useState({show: false, msg: ''})
  const [movies, setMovies] = React.useState([])
  const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${searchTerm}`
 
  const fetchingData = React.useCallback(async () => {
      setLoading(true)
      try {
        const response = await fetch(API_ENDPOINT)
        const data = await response.json()
        if (data.Search) {
          setMovies(data.Search)
          setError({show: false, msg: ''})
        } else {
          setMovies([])
          setError({show: true, msg: data.Error})
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    },[API_ENDPOINT]
  )
  React.useEffect(() => {
    fetchingData()
  },[searchTerm,fetchingData])

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        movies,
        loading,
        error
        
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