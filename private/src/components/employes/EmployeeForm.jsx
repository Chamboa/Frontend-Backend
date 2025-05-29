import React, { useEffect } from "react";
import useDataEmployees from "./hooks/useDataEmployees";

const EmployeeForm = ({ employeeToEdit, onEmployeeUpdated, onClearEdit }) => {
  const {
    editing, setEditing,
    name, setName,
    lastName, setLastName,
    email, setEmail,
    telephone, setTelephone,
    dui, setDui,
    handleSubmit, cleanData,
    setEmployeeToEdit
  } = useDataEmployees();

  useEffect(() => {
    if (employeeToEdit) {
      console.log("Empleado para editar:", employeeToEdit); // Debug
      setEmployeeToEdit(employeeToEdit);
    }
  }, [employeeToEdit, setEmployeeToEdit]);

  const handleFormSubmit = async (e) => {
    const result = await handleSubmit(e);
    if (result !== false) { // Si no hubo error
      if (onEmployeeUpdated) onEmployeeUpdated();
      if (onClearEdit) onClearEdit();
    }
  };

  const handleCancel = () => {
    cleanData();
    if (onClearEdit) onClearEdit();
  };

  return (
    <div className="employee-form">
      <h2>{editing ? "Editar Empleado" : "Agregar Empleado"}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Apellido:</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Teléfono:</label>
          <input 
            type="tel" 
            value={telephone} 
            onChange={(e) => setTelephone(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>DUI:</label>
          <input 
            type="text" 
            value={dui} 
            onChange={(e) => setDui(e.target.value)} 
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            {editing ? "Actualizar" : "Guardar"}
          </button>
          <button type="button" onClick={handleCancel} className="btn-cancel">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;