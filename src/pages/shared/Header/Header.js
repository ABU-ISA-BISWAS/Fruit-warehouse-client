import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const handleSignout = () => {
        signOut(auth);
    }
    const [user] = useAuthState(auth);

    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={50} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Brand as={Link} to="/">
                        <p className='mt-3 fs-5 fw-bold'>FRUIT WAREHOUSE</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            

                                    
                        </Nav>
                        <Nav>
                        {
                                        user ?
                                        <Nav.Link as={Link} to="/manage-inventory">
                                        <button className='btn manage-button'>Manage Inventory</button>
                                        </Nav.Link>
                                    :
                                    <></>
                                    }
                           
                        </Nav>
                        <Nav>
                        {
                                user ?
                                    <button className='btn btn-danger text-decoration-none fw-bold' onClick={handleSignout}>Sign Out</button>
                                    
                                    

                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;