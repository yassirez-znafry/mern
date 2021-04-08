import PropTypes from 'prop-types'
import Button from './Button'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'


const Header = () => {
    return (
        <div>

            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
<LinkContainer to='/'>
                <Navbar.Brand><i class="fas fa-music"></i> Ensias Music <i class="fas fa-music"></i>
            </Navbar.Brand>
</LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <LinkContainer to='/signup'>
        <Nav.Link>sign up <i className="fas fa-user"></i></Nav.Link>
</LinkContainer>
<LinkContainer to='/login'>
        <Nav.Link>log in <i class="fas fa-sign-in-alt"></i></Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    )
}


export default Header
