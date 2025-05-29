import React from 'react';
import CustomerForm from '../components/customers/CustomerForm.jsx';
import CustomerList from '../components/customers/CustomerList';
import { Toaster } from 'react-hot-toast';
import useCustomers from '../components/customers/hooks/useCustomers';
import './css/customer.css';

const CustomersPage = () => {
  const { 
    customers, 
    loading, 
    error, 
    deleteCustomer, 
    selectCustomerForEdit, 
    customerToEdit,
    refreshCustomers, 
    handleSubmit // Necesitarás agregar esta función en useCustomers
  } = useCustomers();

  return (
    <div className="customers-container">
      <Toaster position="top-right" />
      <h1>Gestión de Clientes</h1>
      <div className="customers-content">
        <CustomerForm 
          customerToEdit={customerToEdit} 
          onCustomerUpdated={refreshCustomers}
          onClearEdit={() => selectCustomerForEdit(null)}
          handleSubmit={handleSubmit} // Asegúrate de pasar la función handleSubmit
        />
        <CustomerList 
          customers={customers}
          loading={loading}
          error={error}
          onDelete={deleteCustomer}
          onEdit={selectCustomerForEdit}
        />
      </div>
    </div>
  );
};

export default CustomersPage;