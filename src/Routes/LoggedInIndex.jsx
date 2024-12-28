import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoggedInPage from "./LoggedInPage";
import EmployeeInfo from "./EmployeeInfo";
import PayrollProcess from "./PayrollProcess";

const LoggedInIndex = () => {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < LoggedInPage / > } >
        <
        Route path = "employeeInfo"
        element = { < EmployeeInfo / > }
        /> <
        Route path = "payrollProcess"
        element = { < PayrollProcess / > }
        /> < /
        Route > <
        /Routes> < /
        Router >
    );
};

export default LoggedInIndex;