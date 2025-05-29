import React, { useEffect } from "react";
import useDataCustomers from "./hooks/useDataCustomers";

const CustomerForm = ({ customerToEdit, onCustomerUpdated, onClearEdit }) => {
  const {
    editing, setEditing,
    name, setName,
    lastName, setLastName,
    email, setEmail,
    telephone, setTelephone,
    dui, setDui,
    handleSubmit, cleanData,
    setCustomerToEdit
  } = useDataCustomers();

  useEffect(() => {
    if (customerToEdit) {
      console.log("Cliente para editar:", customerToEdit);
      setCustomerToEdit(customerToEdit);
    }
  }, [customerToEdit, setCustomerToEdit]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(e);
    
    if (result) { // ✅ Solo ejecuta si `handleSubmit` tuvo éxito
      if (onCustomerUpdated) onCustomerUpdated();
      if (onClearEdit) onClearEdit();
    }
  };

  return (
    <div className="customer-form">
      <h2>{editing ? "Editar Cliente" : "Agregar Cliente"}</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Nombre" />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Apellido" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} required placeholder="Teléfono" />
        <input type="text" value={dui} onChange={(e) => setDui(e.target.value)} placeholder="DUI" />
        <button type="submit">{editing ? "Actualizar" : "Guardar"}</button>
        <button type="button" onClick={cleanData}>Cancelar</button>
      </form>
    </div>
  );
};

export default CustomerForm;