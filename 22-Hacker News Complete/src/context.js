import React from 'react'

const AppContext = React.createContext()

function AppProvider({ children }) {
  const [loading, setLoading] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState('React')
  const[error, setError] = React.useState({show: false, msg: ''})
  const [stories, setStories] = React.useState([])
  const [nbPages, setNbPages] = React.useState(0)
  const [page, setPage] = React.useState(0)
  const API_ENDPOINT = `https://hn.algolia.com/api/v1/search?&query=${searchTerm}&page=${page}`

 
  const fetchingData = React.useCallback(async () => {
      setLoading(true)
      try {
        const response = await fetch(API_ENDPOINT)
        const data = await response.json()
        setNbPages(data.nbPages)
        setPage(data.page)
        if (data.hits) {
          setStories(data.hits)
          setError({show: false, msg: ''})
        } else {
          setStories([])
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
  },[searchTerm,fetchingData,page])

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        stories,
        setStories,
        loading,
        error,
        nbPages,
        page,
        setPage
        
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