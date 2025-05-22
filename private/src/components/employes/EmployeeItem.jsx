import React from "react";

const EmployeeItem = ({ employee, onDelete, onEdit }) => {
  if (typeof onEdit !== "function") {
    console.error("Error: `onEdit` no es una función válida.", onEdit);
    return null;
  }

  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.lastName}</td>
      <td>{employee.email}</td>
      <td>{employee.telephone}</td>
      <td>{employee.dui}</td>
      <td>
        <button onClick={() => onEdit(employee)} className="btn-edit">
          Editar
        </button>
        <button onClick={() => onDelete(employee._id)} className="btn-delete">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default EmployeeItem;