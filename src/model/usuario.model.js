import db from '../config/db.js';

// 🔎 Obtener todos los usuarios
export const getUsuarios = async () => {
  try {
    const [rows] = await db.query('SELECT * FROM usuarios');
    return rows;
  } catch (error) {
    console.error('🔴 Error al obtener todos los usuarios:', error);
    throw error;
  }
};

// 🔍 Obtener un usuario por ID
export const getUsuarioPorId = async (id) => {
  try {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    console.error('🔴 Error al obtener usuario por ID:', error);
    throw error;
  }
};

import pool from '../config/db.js';

export const insertarUsuario = async (nombre, email) => {
  const [resultado] = await pool.query(
    'INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
    [nombre, email]
  );
  return { id: resultado.insertId, nombre, email };
};
