/*import { getUsuarios, getUsuarioPorId } from '../model/usuario.model.js';

// 🧪 Controlador para obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await getUsuarios();
    res.status(200).json({
      mensaje: 'Usuarios obtenidos correctamente ✔️',
      data: usuarios,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener los usuarios ❌',
    });
  }
};

// 🔍 Controlador para obtener un usuario por ID
export const obtenerUsuarioPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await getUsuarioPorId(id);

    if (!usuario) {
      return res.status(404).json({
        mensaje: 'Usuario no encontrado ⚠️',
      });
    }

    res.status(200).json({
      mensaje: 'Usuario obtenido correctamente ✔️',
      data: usuario,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener el usuario ❌',
    });
  }
};

// 📝 Controladores para crear, actualizar y eliminar usuario

import { insertarUsuario } from '../model/usuario.model.js';

export const crearUsuario = async (req, res) => {
  const { nombre, email } = req.body;

  if (!nombre || !email) {
    return res.status(400).json({ mensaje: 'Nombre y email son obligatorios ❌' });
  }

  try {
    const nuevoUsuario = await insertarUsuario(nombre, email);
    res.status(201).json({ mensaje: 'Usuario creado exitosamente ✔️', data: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el usuario 💥', error: error.message });
  }
};

export const actualizarUsuario = (req, res) => {
  res.send(`Actualizando usuario con ID ${req.params.id}`);
};

export const eliminarUsuario = (req, res) => {
  res.send(`Eliminando usuario con ID ${req.params.id}`);
};
*/
// controllers/usuario.controller.js
import {
  getUsuarios,
  getUsuarioPorId,
  insertarUsuario
} from '../model/usuario.model.js';

// 🧪 Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await getUsuarios();
    res.status(200).json({
      mensaje: 'Usuarios obtenidos correctamente ✔️',
      data: usuarios,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener los usuarios ❌',
    });
  }
};

// 🔍 Obtener un usuario por ID
export const obtenerUsuarioPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await getUsuarioPorId(id);

    if (!usuario) {
      return res.status(404).json({
        mensaje: 'Usuario no encontrado ⚠️',
      });
    }

    res.status(200).json({
      mensaje: 'Usuario obtenido correctamente ✔️',
      data: usuario,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener el usuario ❌',
    });
  }
};

// 📝 Crear un nuevo usuario con validación para tests
export const crearUsuario = async (req, res) => {
  const { nombre, email } = req.body;
  const errores = [];

  if (!nombre || nombre.trim() === '') errores.push('El nombre es obligatorio');
  if (!email || email.trim() === '') errores.push('El email es obligatorio');

  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }

  try {
    const nuevoUsuario = await insertarUsuario(nombre, email);
    res.status(201).json({ data: nuevoUsuario });
    
  } catch (error) {
    console.error('Error al insertar usuario:', error.message);
    res.status(500).json({ error: 'Error al crear el usuario 💥' });
  }
};

// ✏️ Placeholder para actualizar usuario
export const actualizarUsuario = (req, res) => {
  res.send(`Actualizando usuario con ID ${req.params.id}`);
};

// 🗑️ Placeholder para eliminar usuario
export const eliminarUsuario = (req, res) => {
  res.send(`Eliminando usuario con ID ${req.params.id}`);
};
