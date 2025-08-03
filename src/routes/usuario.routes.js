import express from 'express';
import {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
  crearUsuario
} from '../controller/usuario.controller.js';
import { validarCreacionUsuario } from '../validaciones/usuario.validacion.js';
import { validarUsuarioPorId } from '../validaciones/usuario.validacion.js';
import { validarCampos } from '../middleware/validarCampos.js'
import { validarUsuario } from '../middleware/usuario.middleware.js';

const router = express.Router();

// Métodos HTTP para usuarios
router.get('/', obtenerUsuarios);
router.get('/:id', validarCreacionUsuario, validarUsuarioPorId, validarCampos, obtenerUsuarioPorId);
router.post('/', validarUsuario, crearUsuario );
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);

export default router;

