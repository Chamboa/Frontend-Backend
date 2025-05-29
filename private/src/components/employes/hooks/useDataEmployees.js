import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const API_EMPLOYEES = "http://localhost:5000/api/employees";

const useDataEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [hireDate, setHireDate] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dui, setDui] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [issnumber, setIssnumber] = useState("");
  const [editing, setEditing] = useState(false);

  const cleanData = () => {
    setId("");
    setName("");
    setLastName("");
    setBirthday("");
    setEmail("");
    setAddress("");
    setPassword("");
    setHireDate("");
    setTelephone("");
    setDui("");
    setIsVerified(false);
    setIssnumber("");
    setEditing(false);
  };

  const setEmployeeToEdit = (employee) => {
    if (!employee) {
      console.error("Empleado no definido en setEmployeeToEdit");
      cleanData();
      return;
    }
  
    console.log("Configurando empleado para editar:", employee); // Debug
    
    setId(employee._id || "");
    setName(employee.name || "");
    setLastName(employee.lastName || "");
    setBirthday(employee.birthday ? new Date(employee.birthday).toISOString().split('T')[0] : "");
    setEmail(employee.email || "");
    setAddress(employee.address || "");
    setPassword(employee.password || "");
    setHireDate(employee.hireDate ? new Date(employee.hireDate).toISOString().split('T')[0] : "");
    setTelephone(employee.telephone || "");
    setDui(employee.dui || "");
    setIsVerified(employee.isVerified || false);
    setIssnumber(employee.issnumber || "");
    setEditing(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      lastName,
      birthday,
      email,
      address,
      password,
      hireDate,
      telephone,
      dui,
      isVerified,
      issnumber
    };

    try {
      let response;
      if (editing) {
        response = await fetch(`${API_EMPLOYEES}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("Error al actualizar empleado");

        toast.success("Empleado actualizado correctamente");
      } else {
        response = await fetch(API_EMPLOYEES, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("Error al crear empleado");

        toast.success("Empleado creado correctamente");
      }

      cleanData();
      return true; // Indica éxito
    } catch (error) {
      toast.error(error.message);
      console.error(error);
      return false; // Indica error
    }
  };

  return {
    employees,
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
    address,
    setAddress,
    password,
    setPassword,
    hireDate,
    setHireDate,
    telephone,
    setTelephone,
    dui,
    setDui,
    issnumber,
    setIssnumber,
    isVerified,
    setIsVerified,
    handleSubmit,
    cleanData,
    setEmployeeToEdit,
    editing,
    setEditing
  };
};

export default useDataEmployees;