import React, { useState, memo } from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import SearchBox from '../functions/SearchBox.jsx'; // Import the SearchBox component
import styles from './EmployeeDetails.module.css'; // Import the CSS module

// Memoized Profile Section to avoid unnecessary re-renders
const ProfileSection = memo(({ employeeData, setEmployeeData }) => (
    <Container
        style={{
            marginTop: '10%', // Adjusted to move the data under Profile Section lower
            height: '50vh',
            width: '90%',
            overflowY: 'auto',
            border: '1px solid #ddd',
            padding: '2%',
            borderRadius: '8px',
            boxSizing: 'border-box',
        }}
    >
        <Form>
            <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    value={employeeData.firstName}
                    onChange={(e) => setEmployeeData({ ...employeeData, firstName: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    value={employeeData.lastName}
                    onChange={(e) => setEmployeeData({ ...employeeData, lastName: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    value={employeeData.email}
                    onChange={(e) => setEmployeeData({ ...employeeData, email: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="text"
                    value={employeeData.phoneNumber}
                    onChange={(e) => setEmployeeData({ ...employeeData, phoneNumber: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                    type="text"
                    value={employeeData.jobTitle}
                    onChange={(e) => setEmployeeData({ ...employeeData, jobTitle: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formDepartment">
                <Form.Label>Department</Form.Label>
                <Form.Control
                    type="text"
                    value={employeeData.department}
                    onChange={(e) => setEmployeeData({ ...employeeData, department: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formHireDate">
                <Form.Label>Hire Date</Form.Label>
                <Form.Control
                    type="date"
                    value={new Date(employeeData.hireDate).toISOString().split('T')[0]}
                    onChange={(e) => setEmployeeData({ ...employeeData, hireDate: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                    type="number"
                    value={employeeData.salary}
                    onChange={(e) => setEmployeeData({ ...employeeData, salary: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formAddressLine1">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control
                    type="text"
                    value={employeeData.addressLine1}
                    onChange={(e) => setEmployeeData({ ...employeeData, addressLine1: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formAddressLine2">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control
                    type="text"
                    value={employeeData.addressLine2}
                    onChange={(e) => setEmployeeData({ ...employeeData, addressLine2: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                    type="text"
                    value={employeeData.city}
                    onChange={(e) => setEmployeeData({ ...employeeData, city: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control
                    type="text"
                    value={employeeData.state}
                    onChange={(e) => setEmployeeData({ ...employeeData, state: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formZipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                    type="text"
                    value={employeeData.zipCode}
                    onChange={(e) => setEmployeeData({ ...employeeData, zipCode: e.target.value })}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Save Changes
            </Button>
        </Form>
    </Container>
));

export default function EmployeeDetails() {
    const [activeTab, setActiveTab] = useState('profile');
    const [employeeData, setEmployeeData] = useState(null);

    const handleSearch = (data) => {
        setEmployeeData(data);
        setActiveTab('profile');
    };

    const isDisabled = !employeeData; // Disable buttons if no employee is selected

    return (
        <div className={styles.displayContentWhenNavbar}>
            {/* Search Box */}
            <SearchBox onSearch={handleSearch} />

            {/* Navbar */}
            <Navbar bg="primary" variant="dark" expand="lg" style={{ marginTop: '10%', marginLeft: '11.5%' }}>
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link
                                href="#profile"
                                active={activeTab === 'profile'}
                                onClick={() => setActiveTab('profile')}
                                disabled={isDisabled}
                                style={{
                                    backgroundColor: isDisabled ? '#cccccc' : '#ffffff',
                                    color: isDisabled ? '#666666' : '#000',
                                    borderRadius: '4px',
                                    margin: '0 2% 1% 0',
                                    pointerEvents: isDisabled ? 'none' : 'auto',
                                }}
                            >
                                Profile
                            </Nav.Link>
                            <Nav.Link
                                href="#bank"
                                active={activeTab === 'bank'}
                                onClick={() => setActiveTab('bank')}
                                disabled={isDisabled}
                                style={{
                                    backgroundColor: isDisabled ? '#cccccc' : '#ffffff',
                                    color: isDisabled ? '#666666' : '#000',
                                    borderRadius: '4px',
                                    margin: '0 2% 1% 0',
                                    pointerEvents: isDisabled ? 'none' : 'auto',
                                }}
                            >
                                Bank
                            </Nav.Link>
                            <Nav.Link
                                href="#salary"
                                active={activeTab === 'salary'}
                                onClick={() => setActiveTab('salary')}
                                disabled={isDisabled}
                                style={{
                                    backgroundColor: isDisabled ? '#cccccc' : '#ffffff',
                                    color: isDisabled ? '#666666' : '#000',
                                    borderRadius: '4px',
                                    margin: '0 2% 1% 0',
                                    pointerEvents: isDisabled ? 'none' : 'auto',
                                }}
                            >
                                Salary
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Profile Section */}
            {activeTab === 'profile' && employeeData && (
                <ProfileSection
                    employeeData={employeeData}
                    setEmployeeData={setEmployeeData}
                />
            )}
        </div>
    );
}
