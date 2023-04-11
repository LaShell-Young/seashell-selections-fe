import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrog } from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' expand="lg" style={{ "margin": "0px" }}>
            <Container fluid>
                <Navbar.Brand href='/seashell-selections-fe/' style={{ "color": 'gold' }}>
                    <FontAwesomeIcon icon={faFrog} /> SeaShell Selections
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                    <Nav
                        className='me-auto my-2 my-lg-0'
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="nav-link" to="/seashell-selections-fe/">Home</NavLink>
                        <NavLink className="nav-link" to="/activities">Activites</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
