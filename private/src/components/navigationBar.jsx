import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css"; // Puedes agregar estilos personalizados

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <h2>Gestión de Recursos</h2>
      <ul>
        <li>
          <NavLink
            to="/employees"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Empleados
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/customers"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Clientes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
