import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const API_CUSTOMERS = "http://localhost:5000/api/customers";

const useCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [customerToEdit, setCustomerToEdit] = useState(null);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_CUSTOMERS, { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`Error del servidor: ${response.status} ${response.statusText}`);

      const text = await response.text();
      if (text.startsWith("<!DOCTYPE html>")) throw new Error("El servidor devolvió HTML en lugar de JSON.");

      const data = JSON.parse(text);
      setCustomers(data);
      setError(null);
    } catch (err) {
      console.error("Error al obtener clientes:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const deleteCustomer = async (id) => {
    try {
      const response = await fetch(`${API_CUSTOMERS}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error(`Error al eliminar cliente: ${response.status} ${response.statusText}`);

      setCustomers(customers.filter((cust) => cust._id !== id));
      toast.success("Cliente eliminado correctamente");
    } catch (error) {
      toast.error(error.message);
      console.error("Error al eliminar cliente:", error);
    }
  };

  const selectCustomerForEdit = (customer) => {
    console.log("Seleccionando cliente para editar:", customer);
    setCustomerToEdit(customer);
  };

  const refreshCustomers = () => {
    fetchCustomers();
  };

  return {
    customers,
    loading,
    error,
    deleteCustomer,
    selectCustomerForEdit,
    customerToEdit,
    refreshCustomers,
  };
};

export default useCustomers;