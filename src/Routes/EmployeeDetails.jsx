import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './EmployeeDetails.module.css'; // Import the CSS module
import SearchBox from '../functions/SearchBox.jsx'; // Import the SearchBox component

export default function EmployeeDetails() {
    const navLinks = ["Profile", "Bank", "Salary"]; // Replace with API or state if dynamic

    return (
        <div className={styles.displayContentWhenNavbar}>
            <SearchBox />
            <Navbar bg="primary" variant="dark" expand="lg" style={{ marginTop: '200px', marginLeft: '175px' }}>
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link href="#profile" style={{ backgroundColor: '#ffffff', color: '#000', borderRadius: '4px', margin: '0 20px 10px 0' }}>Profile</Nav.Link>
                            <Nav.Link href="#bank" style={{ backgroundColor: '#ffffff', color: '#000', borderRadius: '4px', margin: '0 20px 10px 0' }}>Bank</Nav.Link>
                            <Nav.Link href="#salary" style={{ backgroundColor: '#ffffff', color: '#000', borderRadius: '4px', margin: '0 20px 10px 0' }}>Salary</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}