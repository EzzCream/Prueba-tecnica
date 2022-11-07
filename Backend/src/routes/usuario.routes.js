import express from 'express';
import * as Usuario from '../controller/usuario.controller.js';

const router = express.Router();

router.post('/signup', Usuario.crearUsuario);

router.post('/consultar', Usuario.consultarUsuario);

export default router;
