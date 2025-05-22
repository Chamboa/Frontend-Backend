import React, { useEffect } from "react";
import useDataEmployees from "./hooks/useDataEmployees";

const EmployeeForm = ({ employeeToEdit }) => {
  const {
    editing, setEditing,
    name, setName,
    lastName, setLastName,
    email, setEmail,
    telephone, setTelephone,
    dui, setDui,
    handleSubmit, cleanData
  } = useDataEmployees();

  useEffect(() => {
    if (employeeToEdit) {
      setEditing(true);
      setName(employeeToEdit.name || "");
      setLastName(employeeToEdit.lastName || "");
      setEmail(employeeToEdit.email || "");
      setTelephone(employeeToEdit.telephone || "");
      setDui(employeeToEdit.dui || "");
    }
  }, [employeeToEdit]);

  return (
    <div className="employee-form">
      <h2>{editing ? "Editar Empleado" : "Agregar Empleado"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Apellido:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Teléfono:</label>
          <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>DUI:</label>
          <input type="text" value={dui} onChange={(e) => setDui(e.target.value)} />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            {editing ? "Actualizar" : "Guardar"}
          </button>
          <button type="button" onClick={cleanData} className="btn-cancel">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;