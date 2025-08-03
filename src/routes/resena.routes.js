import express from 'express';
import { getResenas, createResena } from '../controller/resena.controller.js';

const router = express.Router();

router.get('/', getResenas);
router.post('/', createResena);

export default router;
