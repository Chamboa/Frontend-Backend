// Configuración base de la API
const API_BASE_URL = 'http://localhost:3000'; // Cambia el puerto según tu backend

// Función helper para hacer peticiones
const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

// Servicios para Products
export const productsAPI = {
  // Obtener todos los productos
  getAll: () => apiRequest('/api/products'),
  
  // Crear un nuevo producto
  create: (productData) => apiRequest('/api/products', {
    method: 'POST',
    body: JSON.stringify(productData),
  }),
  
  // Actualizar producto
  update: (id, productData) => apiRequest(`/api/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(productData),
  }),
  
  // Eliminar producto
  delete: (id) => apiRequest(`/api/products/${id}`, {
    method: 'DELETE',
  }),
};

// Servicios para Customers
export const customersAPI = {
  // Obtener todos los clientes
  getAll: () => apiRequest('/api/customers'),
  
  // Crear un nuevo cliente
  create: (customerData) => apiRequest('/api/customers', {
    method: 'POST',
    body: JSON.stringify(customerData),
  }),
  
  // Actualizar cliente
  update: (id, customerData) => apiRequest(`/api/customers/${id}`, {
    method: 'PUT',
    body: JSON.stringify(customerData),
  }),
  
  // Eliminar cliente
  delete: (id) => apiRequest(`/api/customers/${id}`, {
    method: 'DELETE',
  }),
};

// Servicios para Employees
export const employeesAPI = {
  // Obtener todos los empleados
  getAll: () => apiRequest('/api/employee'),
  
  // Crear un nuevo empleado
  create: (employeeData) => apiRequest('/api/employee', {
    method: 'POST',
    body: JSON.stringify(employeeData),
  }),
  
  // Actualizar empleado
  update: (id, employeeData) => apiRequest(`/api/employee/${id}`, {
    method: 'PUT',
    body: JSON.stringify(employeeData),
  }),
  
  // Eliminar empleado
  delete: (id) => apiRequest(`/api/employee/${id}`, {
    method: 'DELETE',
  }),
};
