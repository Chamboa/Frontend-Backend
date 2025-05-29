import React from "react";

const CustomerItem = ({ customer, onDelete, onEdit }) => {
  if (typeof onEdit !== "function") {
    console.error("Error: `onEdit` no es una función válida.", onEdit);
    return null;
  }

  return (
    <tr>
      <td>{customer.name}</td>
      <td>{customer.lastName}</td>
      <td>{customer.email}</td>
      <td>{customer.telephone}</td>
      <td>{customer.dui}</td>
      <td>
        <button onClick={() => onEdit(customer)} className="btn-edit">
          Editar
        </button>
        <button onClick={() => onDelete(customer._id)} className="btn-delete">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default CustomerItem;