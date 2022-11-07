import express from 'express';
import * as Agenda from '../controller/agenda.controller.js';

const router = express.Router();

router.get('/consultar/:id', Agenda.consultarAgenda);

router.post('/agregar', Agenda.createAgenda);

export default router;
