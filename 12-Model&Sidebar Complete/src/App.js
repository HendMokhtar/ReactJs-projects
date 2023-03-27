import React from 'react'
import Sidebar from './Sidebar'
import CenteredModal from './CenteredModal'
import Button from 'react-bootstrap/Button';
import {FaBars} from 'react-icons/fa'


export default function App() {
    const [modalShow, setModalShow] = React.useState(false);
    const [sidebarShow, setSidebarShow] = React.useState(false);

    return (
      <main>
        {!sidebarShow &&
          <button class="sidebar-toggle" onClick={() => setSidebarShow(true)}>
             <FaBars/>
          </button>}
        {sidebarShow && <Sidebar sidebarShow={sidebarShow} setSidebarShow={setSidebarShow} />}
        <Button className='btn' variant="primary" onClick={() => setModalShow(true)}>
          show modal
        </Button>  
        <CenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </main>
    )
    
}
