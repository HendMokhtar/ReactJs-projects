import React from 'react'

const AppContext = React.createContext()

function AppProvider ({ children }) {
 

  return (
    <AppContext.Provider
      value={"test"}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return React.useContext(AppContext)
}

export { AppContext, AppProvider }