// ✅ 1. Importar primero las dependencias
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// ✅ 2. Cargar las variables de entorno
dotenv.config();

// ✅ 3. Validar que existan las variables necesarias (opcional pero recomendado)
if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
  throw new Error('Faltan variables de entorno para conectar a la base de datos');
}

// ✅ 4. Crear el pool de conexión
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ✅ 5. Exportar la conexión para usarla en otros módulos
export default db;
