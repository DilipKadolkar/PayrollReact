import React from 'react'
import Card from '../components/Card'; // Make sure this path is correct based on your project structure

export default function PayrollProcess() {
  return (
    <div className="displayContentWhenNavbar">
      <Card title="Add employe"></Card>
      <Card title="Salary Breakdown"></Card>
      <Card title="Tax Information"></Card>
    </div>
  );
}

