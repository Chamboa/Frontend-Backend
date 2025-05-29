import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navigationBar.jsx";
import EmployeesPage from "./pages/EmployeesPage";
import CustomersPage from "./pages/CustomersPage";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/customers" element={<CustomersPage />} />
      </Routes>
    </Router>
  );
};

export default App;