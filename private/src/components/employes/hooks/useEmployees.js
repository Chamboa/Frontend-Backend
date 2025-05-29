import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const API_EMPLOYEES = "http://localhost:5000/api/employees";

const useEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_EMPLOYEES, { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`Error del servidor: ${response.status} ${response.statusText}`);

      const text = await response.text();
      if (text.startsWith("<!DOCTYPE html>")) throw new Error("El servidor devolvió HTML en lugar de JSON.");

      const data = JSON.parse(text);
      setEmployees(data);
      setError(null);
    } catch (err) {
      console.error("Error al obtener empleados:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    try {
      const response = await fetch(`${API_EMPLOYEES}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error(`Error al eliminar empleado: ${response.status} ${response.statusText}`);

      setEmployees(employees.filter((emp) => emp._id !== id));
      toast.success("Empleado eliminado correctamente");
    } catch (error) {
      toast.error(error.message);
      console.error("Error al eliminar empleado:", error);
    }
  };

  const selectEmployeeForEdit = (employee) => {
    console.log("Seleccionando empleado para editar:", employee); // Debug
    setEmployeeToEdit(employee);
  };

  const refreshEmployees = () => {
    fetchEmployees();
  };

  return {
    employees,
    loading,
    error,
    deleteEmployee,
    selectEmployeeForEdit,
    employeeToEdit,
    refreshEmployees,
  };
};

export default useEmployees;