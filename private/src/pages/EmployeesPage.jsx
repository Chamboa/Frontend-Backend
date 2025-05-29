import React from 'react';
import EmployeeForm from '../components/employes/EmployeeForm.jsx';
import EmployeeList from '../components/employes/EmployeeList.jsx';
import { Toaster } from 'react-hot-toast';
import useEmployees from '../components/employes/hooks/useEmployees';
import NavigationBar from '../components/navigationBar.jsx';
import './css/style.css';

const EmployeesPage = () => {
  const { 
    employees, 
    loading, 
    error, 
    deleteEmployee, 
    selectEmployeeForEdit, 
    employeeToEdit,
    refreshEmployees // Necesitarás agregar esta función en useEmployees
  } = useEmployees();

  return (
    <div className="employees-container">

      <Toaster position="top-right" />
      <h1>Gestión de Empleados</h1>
      <div className="employees-content">
        <EmployeeForm 
          employeeToEdit={employeeToEdit} 
          onEmployeeUpdated={refreshEmployees}
          onClearEdit={() => selectEmployeeForEdit(null)}
        />
        <EmployeeList 
          employees={employees}
          loading={loading}
          error={error}
          onDelete={deleteEmployee}
          onEdit={selectEmployeeForEdit}
        />
      </div>
    </div>
  );
};

export default EmployeesPage;