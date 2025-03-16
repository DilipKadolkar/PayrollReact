import React, { useState, useEffect } from 'react';
import { FormControl, ListGroup, Button } from 'react-bootstrap';

export default function SearchBox({ onSearch }) {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [showSuggestions, setShowSuggestions] = useState(false);

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
                    setShowSuggestions(true);
                })
                .catch((error) => console.error('Error fetching employee suggestions:', error));
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [query]);

    const handleSuggestionClick = (employee) => {
        setQuery(`${employee.firstName} ${employee.lastName}`);
        setShowSuggestions(false);
        setSuggestions([]);
        setSelectedEmployee(employee);
    };

    const handleSearchClick = () => {
        if (selectedEmployee) {
            fetch(`http://localhost:8080/api/employees/${selectedEmployee.employeeID}`)
                .then((response) => response.json())
                .then((data) => {
                    onSearch(data); // Pass the employee data to the parent component
                })
                .catch((error) => console.error('Error fetching employee data:', error));
        }
    };

    return (
        <div style={{ margin: '4% auto', marginLeft: '35%', width: '50%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FormControl
                    type="text"
                    placeholder="Search for employee..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setShowSuggestions(true);
                    }}
                    style={{ flex: 1 }}
                />
                <Button
                    onClick={handleSearchClick}
                    disabled={!selectedEmployee}
                >
                    Search
                </Button>
            </div>

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
        </div>
    );
}
