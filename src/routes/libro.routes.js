// ejemplo en libro.routes.js
import express from 'express';
import { getLibros, createLibro } from '../controller/libro.controller.js';

const router = express.Router();

router.get('/', getLibros);
router.post('/', createLibro);

export default router;
