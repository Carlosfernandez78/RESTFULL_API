// ejemplo en libro.routes.js
const express = require('express');
const router = express.Router();
const { getLibros, createLibro } = require('../controller/libro.controller');

router.get('/', getLibros);
router.post('/', createLibro);

module.exports = router;
