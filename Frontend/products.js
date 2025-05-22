import { productsAPI } from './api.js';

// Obtener todos los productos
const loadProducts = async () => {
  try {
    const products = await productsAPI.getAll();
    console.log('Productos:', products);
    // Actualizar el estado de tu componente aquí
  } catch (error) {
    console.error('Error al cargar productos:', error);
  }
};

// Crear un nuevo producto
const createProduct = async () => {
  try {
    const newProduct = {
      name: "Producto Ejemplo",
      description: "Descripción del producto",
      price: 29.99,
      stock: 100
    };
    
    const result = await productsAPI.create(newProduct);
    console.log('Producto creado:', result);
    // Recargar la lista de productos
    loadProducts();
  } catch (error) {
    console.error('Error al crear producto:', error);
  }
};

// Actualizar un producto
const updateProduct = async (productId) => {
  try {
    const updatedData = {
      name: "Producto Actualizado",
      description: "Nueva descripción",
      price: 35.99,
      stock: 150
    };
    
    const result = await productsAPI.update(productId, updatedData);
    console.log('Producto actualizado:', result);
    loadProducts();
  } catch (error) {
    console.error('Error al actualizar producto:', error);
  }
};

// Eliminar un producto
const deleteProduct = async (productId) => {
  try {
    const result = await productsAPI.delete(productId);
    console.log('Producto eliminado:', result);
    loadProducts();
  } catch (error) {
    console.error('Error al eliminar producto:', error);
  }
};