import React from 'react';
import EmployeeForm from '../components/employes/EmployeeForm';
import EmployeeList from '../components/employes/EmployeeList';
import { Toaster } from 'react-hot-toast';
import './css/style.css';

const EmployeesPage = () => {
  return (
    <div className="employees-container">
      <Toaster position="top-right" />
      <h1>Gestión de Empleados</h1>
      <div className="employees-content">
        <EmployeeForm />
        <EmployeeList />
      </div>
    </div>
  );
};

export default EmployeesPage;