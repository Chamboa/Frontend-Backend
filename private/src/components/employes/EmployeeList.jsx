import React from "react";
import EmployeeItem from "./EmployeeItem";
import useEmployees from "./hooks/useEmployees";
import EmployeeForm from "./EmployeeForm";

const EmployeeList = () => {
  const { employees, loading, error, deleteEmployee, selectEmployeeForEdit, employeeToEdit } =
    useEmployees();

  if (loading) return <div>Cargando empleados...</div>;
  if (error) return <div>Error al cargar empleados: {error}</div>;

  return (
    <div className="employee-list">
      <h2>Lista de Empleados</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>DUI</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <EmployeeItem
              key={employee._id}
              employee={employee}
              onDelete={() => deleteEmployee(employee._id)}
              onEdit={() => selectEmployeeForEdit(employee)}
            />
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default EmployeeList;