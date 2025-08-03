import { body, param } from 'express-validator';

export const validarUsuarioPorId = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('El ID debe ser un número entero positivo'),
];

export const validarCreacionUsuario = [
  body('nombre')
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .isString()
    .withMessage('El nombre debe ser texto'),

  body('email')
    .isEmail()
    .withMessage('Debe proporcionar un email válido'),
];
