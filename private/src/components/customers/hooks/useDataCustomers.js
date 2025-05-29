import { useState } from "react";
import { toast } from "react-hot-toast";

const API_CUSTOMERS = "http://localhost:5000/api/customers";

const useDataCustomers = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dui, setDui] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [editing, setEditing] = useState(false);

  const cleanData = () => {
    setId("");
    setName("");
    setLastName("");
    setBirthday("");
    setEmail("");
    setPassword("");
    setTelephone("");
    setDui("");
    setIsVerified(false);
    setEditing(false);
  };

  const setCustomerToEdit = (customer) => {
    if (!customer) {
      console.error("Cliente no definido en setCustomerToEdit");
      cleanData();
      return;
    }
  
    console.log("Configurando cliente para editar:", customer);
    
    setId(customer._id || "");
    setName(customer.name || "");
    setLastName(customer.lastName || "");
    setBirthday(customer.birthday ? new Date(customer.birthday).toISOString().split('T')[0] : "");
    setEmail(customer.email || "");
    setPassword(customer.password || "");
    setTelephone(customer.telephone || "");
    setDui(customer.dui || "");
    setIsVerified(customer.isVerified || false);
    setEditing(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      lastName,
      birthday,
      email,
      password,
      telephone,
      dui,
      isVerified
    };

    try {
      let response;
      if (editing) {
        response = await fetch(`${API_CUSTOMERS}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("Error al actualizar cliente");

        toast.success("Cliente actualizado correctamente");
      } else {
        response = await fetch(API_CUSTOMERS, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("Error al crear cliente");

        toast.success("Cliente creado correctamente");
      }

      cleanData();
      //return true;
    } catch (error) {
      toast.error(error.message);
      console.error(error);
     // return false;
    }
  };

  return {
    id,
    setId,
    name,
    setName,
    lastName,
    setLastName,
    birthday,
    setBirthday,
    email,
    setEmail,
    password,
    setPassword,
    telephone,
    setTelephone,
    dui,
    setDui,
    isVerified,
    setIsVerified,
    handleSubmit,
    cleanData,
    setCustomerToEdit,
    editing,
    setEditing
  };
};

export default useDataCustomers;