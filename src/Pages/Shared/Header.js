import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hook/useAuth';

import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    return (
        <Navbar expand="lg" className='shadow'>
            <Container fluid>
                <Navbar.Brand className='logo ps-5 pe-5' href="#">Dream Tours & Travel</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="btn-hover" as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link className="btn-hover" as={HashLink} to="/signup">Register </Nav.Link>
                        {user?.email && <li style={{ display: 'inherit' }}>
                            <Nav.Link className='btn-hover' as={HashLink} to="/myordars">My ordars</Nav.Link>
                            <Nav.Link className='btn-hover' as={HashLink} to="/manageordars">Manage all ordar</Nav.Link>
                            <Nav.Link className='btn-hover' as={HashLink} to="/addservice">Add a new service</Nav.Link>
                            <button className='btn btn-custom' onClick={logOut}>log out</button>
                        </li>

                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;