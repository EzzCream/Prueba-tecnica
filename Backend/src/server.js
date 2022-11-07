import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { logger } from './logs/config.logs.js';
import RouterUsuario from './routes/usuario.routes.js';
import RouterAgenda from './routes/agenda.routes.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/', RouterUsuario);
app.use('/agenda', RouterAgenda);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
	logger.info(`----------------------------------------------`);
	logger.info(`Server started on http://localhost:${PORT} ✨`);
	logger.info(`----------------------------------------------`);
});
server.on('error', (err) => logger.error(err));
