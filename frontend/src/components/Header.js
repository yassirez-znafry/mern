import PropTypes from 'prop-types'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from "../actions/userActions.js";



const Header = () => {

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }


    return (
        <div>

            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                      <LinkContainer to='/'>
                            <Navbar.Brand><i className="fas fa-music"></i> Ensias Music <i className="fas fa-music"></i>
                            </Navbar.Brand>
                      </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                      <LinkContainer to='/register'>
              <Nav.Link>sign up <i className="fas fa-user"></i></Nav.Link>
</LinkContainer>
        {userInfo ? (<NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                   <LinkContainer to='/user/playlists'>
                    <NavDropdown.Item>My playlists</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>):<LinkContainer to='/login'>
        <Nav.Link>log in <i className="fas fa-sign-in-alt"></i></Nav.Link>
        </LinkContainer>}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    )
}


export default Header
