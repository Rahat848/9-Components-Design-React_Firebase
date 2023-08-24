import React from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import UseAuth from '../../context/UseAuth';
import './Header.css';
const Header = () => {
    const {user,googleHandaler,googleLogout} = UseAuth() 
    return (
        <div>
            <Navbar>
        <Container>
            <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
            </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">

          {user.displayName && 
            <Navbar.Text style={{marginRight:"12px"}}>
              Signed in as: {user.displayName}
            </Navbar.Text>}
        {
            user?.displayName?(<Button onClick={googleLogout} variant='primary'>Logout</Button> ):(<Button onClick={googleHandaler} variant='primary'>Login</Button>)

        }
           

          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;