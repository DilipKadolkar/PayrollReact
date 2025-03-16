import React, { useState, useEffect } from 'react';
import { FormControl, ListGroup, Button, Card } from 'react-bootstrap';

export default function SearchBox() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [employeeData, setEmployeeData] = useState(null);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Fetch employee suggestions when query changes
    useEffect(() => {
        if (query.trim().length > 0) {
            fetch(`http://localhost:8080/api/employees`)
                .then((response) => response.json())
                .then((data) => {
                    const filteredEmployees = data.filter((employee) =>
                        `${employee.firstName} ${employee.lastName}`
                            .toLowerCase()
                            .includes(query.toLowerCase())
                    );
                    setSuggestions(filteredEmployees);
                    setShowSuggestions(true); // Show suggestions
                })
                .catch((error) => console.error('Error fetching employee suggestions:', error));
        } else {
            setSuggestions([]);
            setShowSuggestions(false); // Hide suggestions
        }
    }, [query]);

    // Handle when a suggestion is clicked
    const handleSuggestionClick = (employee) => {
        setQuery(`${employee.firstName} ${employee.lastName}`); // Update search input
        setShowSuggestions(false); // Hide suggestions immediately
        setSuggestions([]); // Clear suggestions list
        setSelectedEmployee(employee); // Set the selected employee
        console.log('Selected employee:', employee); // Debugging
    };

    // Handle the Search button click
    const handleSearchClick = () => {
        if (selectedEmployee) {
            fetch(`http://localhost:8080/api/employees/${selectedEmployee.employeeID}`)
                .then((response) => response.json())
                .then((data) => setEmployeeData(data)) // Store employee data
                .catch((error) => console.error('Error fetching employee data:', error));
        }
    };

    return (
        <div style={{ margin: '4% auto', marginLeft: '35%', width: '50%' }}>
            {/* Search input and search button container */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FormControl
                    type="text"
                    placeholder="Search for employee..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setShowSuggestions(true); // Show suggestions when typing
                    }}
                    style={{ flex: 1 }} // Make the input box flexible
                />
                <Button
                    onClick={handleSearchClick}
                    disabled={!selectedEmployee} // Disable button until an employee is selected
                >
                    Search
                </Button>
            </div>

            {/* Suggestions dropdown */}
            {showSuggestions && suggestions.length > 0 && (
                <ListGroup style={{ marginTop: '1%' }}>
                    {suggestions.map((employee, index) => (
                        <ListGroup.Item
                            key={index}
                            onClick={() => handleSuggestionClick(employee)}
                            style={{ cursor: 'pointer' }}
                        >
                            {`${employee.firstName} ${employee.lastName}`}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}

            {/* Display employee details */}
            {employeeData && (
                <Card style={{ marginTop: '30%' }}>
                    <Card.Body>
                        <Card.Title>{`${employeeData.firstName} ${employeeData.lastName}`}</Card.Title>
                        <Card.Text>
                            <strong>Email:</strong> {employeeData.email}<br />
                            <strong>Phone Number:</strong> {employeeData.phoneNumber}<br />
                            <strong>Job Title:</strong> {employeeData.jobTitle}<br />
                            <strong>Department:</strong> {employeeData.department}<br />
                            <strong>Hire Date:</strong> {new Date(employeeData.hireDate).toLocaleDateString()}<br />
                            <strong>Salary:</strong> {employeeData.salary}<br />
                            <strong>Address:</strong> {`${employeeData.addressLine1}, ${employeeData.addressLine2}, ${employeeData.city}, ${employeeData.state}, ${employeeData.zipCode}`}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
}
