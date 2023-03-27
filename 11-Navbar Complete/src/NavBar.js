import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.svg'
import {social, links } from './data'


export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="md">
      <Container>
      <Navbar.Brand href="#home">
      <img
        src={logo}
        className="d-inline-block align-top logo"
        alt="logo"
      />
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='justify-content-center' id="responsive-navbar-nav">
          <Nav>
            {links.map(link => {
              return (
                <Nav.Link key={link.id} href={link.url}>{link.text}</Nav.Link>
              )
            })}
        
          </Nav>
        </Navbar.Collapse>
      <Nav className='social-icons'>
      {social.map(link => {
        return (
          <Nav.Link key={link.id} href={link.url}>{link.icons}</Nav.Link>
        )
      })} 
      </Nav>
      </Container>
    </Navbar>
  );
}

