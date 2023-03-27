import React from 'react'
import navbarLogo from '../images/logo.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import SubLinks from './SubLinks';
import NavModal from './NavModal';

function StripeNavbar(props) {

  return (
    <Navbar  expand="lg" className='nav'>
      <Container className='nav-center'>
     <Navbar.Brand className='nav-header' href="#home">
      <img src={navbarLogo} alt='logo'/>
     </Navbar.Brand>
        <Navbar.Toggle aria-controls = "contained-modal-title-vcenter" onClick={props.onShow} />
      <Nav className=" nav-links" >
        <SubLinks/>
      </Nav>
      <Nav className='d-none d-lg-block d-xl-block'>
        <button className='btn signin-btn '>Sign in</button>
      </Nav>
        <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className=''
      >
        <Modal.Header closeButton className=''>
        </Modal.Header>
        <Modal.Body>
          <NavModal/>
        </Modal.Body>
      </Modal>
      </Container>
      </Navbar>
  );
}

export default StripeNavbar;