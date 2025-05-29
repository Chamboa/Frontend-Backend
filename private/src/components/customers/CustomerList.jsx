import React from "react";
import CustomerItem from "./CustomerItem.jsx";

const CustomerList = ({ customers, loading, error, onDelete, onEdit }) => {
  if (loading) return <div>Cargando clientes...</div>;
  if (error) return <div>Error al cargar clientes: {error}</div>;

  return (
    <div className="customer-list">
      <h2>Lista de Clientes</h2>
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
          {customers.map((customer) => (
            <CustomerItem
              key={customer._id}
              customer={customer}
              onDelete={() => onDelete(customer._id)}
              onEdit={() => onEdit(customer)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;