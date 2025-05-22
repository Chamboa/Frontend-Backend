import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeesPage from './pages/EmployeesPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/" element={<EmployeesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;