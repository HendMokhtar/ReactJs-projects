import React from 'react'
import StripeNavbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
        <StripeNavbar
          show={modalShow}
          onShow={() => setModalShow(true)}
          onHide={() => setModalShow(false)}
        />
       <Hero /> 
      </>
    )
    
}
