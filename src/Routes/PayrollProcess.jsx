import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card'; // Make sure this path is correct based on your project structure
import { faUserPlus, faDollarSign, faFileInvoiceDollar, faBriefcase, faClock, faCalendarAlt, faChartLine, faGraduationCap, faHeartbeat, faPiggyBank, faMoneyCheckAlt, faPlane, faGift, faCalendar, faHome, faAddressBook, faBullhorn, faBook, faUsers, faTasks, faFileInvoice, faMoneyBillWave, faChartPie, faClipboardList, faShieldAlt, faLaptop, faBoxOpen, faCalendarCheck, faCalendarDay, faChalkboardTeacher, faPoll, faCommentDots, faUserGraduate, faArrowUp, faMoneyBill, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function PayrollProcess() {
    const navigate = useNavigate();

    const handleCardClick = (title) => {
        if (title === 'Process Payroll') {
            navigate('/loggedInPage/payrollProcess/uploadExcelProcess');
        } else {
            alert(`You clicked on ${title}`);
        }
    };

    const cardTitles = [
        'Process Payroll', 'Add employee', 'Salary Breakdown', 'Tax Information', 'Employee Benefits', 'Payroll Summary',
        'Overtime Details', 'Leave Management', 'Employee Attendance', 'Performance Review', 'Training Programs',
        'Health Insurance', 'Retirement Plans', 'Expense Reimbursement', 'Travel Allowance', 'Bonus Distribution',
        'Holiday Schedule', 'Work From Home', 'Employee Directory', 'Job Openings', 'Company Policies',
        'Team Building', 'Project Management', 'Client Invoices', 'Vendor Payments', 'Budget Planning',
        'Financial Reports', 'Audit Logs', 'Compliance Check', 'Risk Management', 'IT Support',
        'Office Supplies', 'Meeting Schedule', 'Event Planning', 'Corporate Training', 'Employee Surveys',
        'Feedback System', 'Career Development', 'Promotion Criteria', 'Salary Adjustments', 'Exit Interviews'
    ];

    const icons = [
        faUserPlus, faDollarSign, faFileInvoiceDollar, faBriefcase, faDollarSign,
        faClock, faCalendarAlt, faCalendarAlt, faChartLine, faGraduationCap,
        faHeartbeat, faPiggyBank, faMoneyCheckAlt, faPlane, faGift,
        faCalendar, faHome, faAddressBook, faBullhorn, faBook,
        faUsers, faTasks, faFileInvoice, faMoneyBillWave, faChartPie,
        faClipboardList, faShieldAlt, faShieldAlt, faShieldAlt, faLaptop,
        faBoxOpen, faCalendarCheck, faCalendarDay, faChalkboardTeacher, faPoll,
        faCommentDots, faUserGraduate, faArrowUp, faMoneyBill, faSignOutAlt
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
                        backgroundColor: 'grey', // Changed to grey
                        height: '250px',
                        width: 'calc(33.333% - 20px)',
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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