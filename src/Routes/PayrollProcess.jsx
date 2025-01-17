import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card'; // Make sure this path is correct based on your project structure
import { faUserPlus, faDollarSign, faBuilding, faFileInvoiceDollar, faBriefcase, faClock, faCalendarAlt, faChartLine, faGraduationCap, faHeartbeat, faPiggyBank, faMoneyCheckAlt, faPlane, faGift, faCalendar, faHome, faAddressBook, faBullhorn, faBook, faUsers, faTasks, faFileInvoice, faMoneyBillWave, faChartPie, faClipboardList, faShieldAlt, faLaptop, faBoxOpen, faCalendarCheck, faCalendarDay, faChalkboardTeacher, faPoll, faCommentDots, faUserGraduate, faArrowUp, faMoneyBill, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function PayrollProcess() {
    const navigate = useNavigate();

    const handleCardClick = (title) => {
        if (title === 'Process Payroll') {
            navigate('/loggedInPage/payrollProcess/uploadExcelProcess');
        } else if (title === 'Payroll Statement') {
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
        'Process Payroll', 'Payroll Statement', 'Add Company', 'Add Employee', 'Tax Information', 'Employee Benefits', 'Payroll Summary',
        'Overtime Details', 'Leave Management', 'Employee Attendance', 'Performance Review', 'Training Programs',
        'Health Insurance', 'Retirement Plans', 'Expense Reimbursement', 'Travel Allowance', 'Bonus Distribution',
        'Holiday Schedule', 'Work From Home', 'Employee Directory', 'Job Openings', 'Company Policies',
        'Team Building', 'Project Management', 'Client Invoices', 'Vendor Payments', 'Budget Planning',
        'Financial Reports', 'Audit Logs', 'Compliance Check', 'Risk Management', 'IT Support',
        'Office Supplies', 'Meeting Schedule', 'Event Planning', 'Corporate Training', 'Employee Surveys',
        'Feedback System', 'Career Development', 'Promotion Criteria', 'Salary Adjustments', 'Exit Interviews'
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