import { config } from '../config/db.config.js';
import _knex from 'knex';
import { logger } from '../logs/config.logs.js';

logger.info(`----------------------------------------------`);
logger.info('Conectado a MySql 🐬');

export const knex = _knex(config);
