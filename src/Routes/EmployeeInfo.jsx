import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card'; // Make sure this path is correct based on your project structure
import { faUserPlus, faDollarSign, faBuilding, faFileInvoiceDollar, faBriefcase, faClock, faCalendarAlt, faChartLine, faGraduationCap, faHeartbeat, faPiggyBank, faMoneyCheckAlt, faPlane, faGift, faCalendar, faHome, faAddressBook, faBullhorn, faBook, faUsers, faTasks, faFileInvoice, faMoneyBillWave, faChartPie, faClipboardList, faShieldAlt, faLaptop, faBoxOpen, faCalendarCheck, faCalendarDay, faChalkboardTeacher, faPoll, faCommentDots, faUserGraduate, faArrowUp, faMoneyBill, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function EmployeeInfo() {
    const navigate = useNavigate();

    const handleCardClick = (title) => {
        if (title === 'Employee Details') {
            navigate('/loggedInPage/employeeInfo/employeeDetails');
        } else if (title === 'Admin') {
            navigate('/loggedInPage/payrollProcess/payrollStatement');
        } else if (title === 'Add Company') {
            navigate('/loggedInPage/payrollProcess/addCompany');
        } else if (title === 'Add Employee') {
            navigate('/loggedInPage/payrollProcess/addEmployee');
        } else {
            alert(`You clicked on ${title}`);
        }
    };

    const cardTitles = [
        'Employee Details', 'Admin'
    ];

    const icons = [
        faFileInvoiceDollar, faChartLine, faBuilding, faUserPlus, faFileInvoiceDollar, faHeartbeat, faChartPie,
        faClock, faCalendarAlt, faCalendarDay, faPoll, faGraduationCap,
        faHeartbeat, faPiggyBank, faMoneyCheckAlt, faPlane, faGift,
        faCalendar, faHome, faAddressBook, faBullhorn, faBook,
        faUsers, faTasks, faFileInvoice, faMoneyBillWave, faChartPie,
        faClipboardList, faShieldAlt, faLaptop, faBoxOpen, faCalendarCheck,
        faCalendarDay, faChalkboardTeacher, faPoll, faCommentDots, faUserGraduate,
        faArrowUp, faMoneyBill, faSignOutAlt
    ];


    return ( <
        div className = "displayContentWhenNavbar" > {
            cardTitles.map((title, index) => ( <
                Card key = { index }
                title = { title }
                onClick = {
                    () => handleCardClick(title)
                }
                style = {
                    {
                        backgroundColor: '#f9f9f9', // Changed to #333
                        color: '#fff', // Ensure text is visible on dark background
                        height: '250px',
                        width: 'calc(33.333% - 20px)',
                        border: '3px solid #ccc',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        margin: '10px'
                    }
                }
                icon = { icons[index] }
                />
            ))
        } <
        /div>
    );
}