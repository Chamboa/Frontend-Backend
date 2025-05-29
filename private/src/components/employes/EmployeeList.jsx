import React from "react";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = ({ employees, loading, error, onDelete, onEdit }) => {
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
              onDelete={() => onDelete(employee._id)}
              onEdit={() => onEdit(employee)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;