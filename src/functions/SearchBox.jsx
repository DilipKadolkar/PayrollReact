import React, { useState, useEffect } from 'react';
import { FormControl, ListGroup, Button } from 'react-bootstrap';

export default function SearchBox({ onSearch }) {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        if (query.trim().length > 0) {
            // Fetch employees from the API
            fetch(`http://localhost:8080/api/employees`)
                .then((response) => response.json())
                .then((data) => {
                    // Filter names that start with the query
                    const filteredEmployees = data.filter((employee) =>
                        `${employee.firstName.toLowerCase()}`.startsWith(query.toLowerCase()) ||
                        `${employee.lastName.toLowerCase()}`.startsWith(query.toLowerCase())
                    );

                    // Exclude the selected employee from the suggestions
                    const filteredSuggestions = selectedEmployee
                        ? filteredEmployees.filter(
                              (employee) =>
                                  `${employee.firstName} ${employee.lastName}` !==
                                  `${selectedEmployee.firstName} ${selectedEmployee.lastName}`
                          )
                        : filteredEmployees;

                    setSuggestions(filteredSuggestions);
                    setShowSuggestions(true);
                })
                .catch((error) => console.error('Error fetching employee suggestions:', error));
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [query, selectedEmployee]);

    const handleSuggestionClick = (employee) => {
        // Set selected employee and clear suggestions
        setQuery(`${employee.firstName} ${employee.lastName}`);
        setShowSuggestions(false);
        setSelectedEmployee(employee);
        setSuggestions([]);
    };

    const handleSearchClick = () => {
        if (selectedEmployee) {
            // Fetch details of the selected employee
            fetch(`http://localhost:8080/api/employees/${selectedEmployee.employeeID}`)
                .then((response) => response.json())
                .then((data) => {
                    onSearch(data); // Pass data to the parent component
                })
                .catch((error) => console.error('Error fetching employee data:', error));
        }
    };

    return (
        <div style={{ margin: '4% auto', position: 'relative', width: '40%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2%' }}>
                {/* Input field for search query */}
                <FormControl
                    type="text"
                    placeholder="Search for employee..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setShowSuggestions(true);
                    }}
                    style={{ flex: 1 ,width: '100%',height:'30px', borderRadius: '0'}}
                />
                {/* Search button */}
                <Button onClick={handleSearchClick} disabled={!query.trim()}>
                    Search
                </Button>
            </div>

            {/* Suggestions dropdown */}
            {showSuggestions && suggestions.length > 0 && (
                <ListGroup
                    style={{
                        position: 'absolute', // Ensure dropdown appears independently
                        zIndex: 1050, // Above other elements like the navbar
                        backgroundColor: '#fff',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        maxHeight: '200px', // Limit height for overflow
                        overflowY: 'auto', // Add scroll for long lists
                        width: '40%', // Match the width of the search box
                    }}
                >
                    {suggestions.map((employee, index) => (
                        <ListGroup.Item
                            key={index}
                            onClick={() => handleSuggestionClick(employee)}
                            style={{ width: '100%',height:'25px', borderRadius: '0',cursor: 'pointer' }}
                        >
                            {`${employee.firstName} ${employee.lastName}`}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
}
