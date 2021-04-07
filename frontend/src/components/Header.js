import PropTypes from 'prop-types'
import Button from './Button'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
const Header = () => {
    return (
        <div>

            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
  <Navbar.Brand href="/" >Ensias Music</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/signup">sign up <i className="fas fa-user"></i></Nav.Link>
      <Nav.Link href="/login">log in <i class="fas fa-sign-in-alt"></i></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    )
}


export default Header
