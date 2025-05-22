import express from "express";
import cors from "cors";

// Importa las rutas
import productsRoutes from "./src/routes/products.js";
import customersRoutes from "./src/routes/customers.js";
import employeeRoutes from "./src/routes/employees.js";

// Crea la instancia de Express
const app = express();

// Configurar CORS para permitir solicitudes desde el frontend
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Middleware para aceptar JSON
app.use(express.json());

// Definir las rutas
app.use("/api/products", productsRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/employees", employeeRoutes);

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

// Exporta el servidor
export default app;