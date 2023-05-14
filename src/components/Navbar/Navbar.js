import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function Navbarr() {
  return (
    <>
        <Navbar className='shadow-sm p-3 mb-5 bg-white rounded'>
            <Container>
                <Navbar.Brand href='/'>CAPS TN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link>Vellore</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
    </>
  )
}

