import { logger } from '../logs/config.logs.js';
import * as Service from '../service/services.js';

export const createAgenda = (req, res) => {
	try {
		const { body } = req;
		Service.insert(body, 'agenda');
		res.status(200).send('Agenda creada ✨');
	} catch (error) {
		logger.error(error);
	}
};

export const consultarAgenda = async (req, res) => {
	try {
		const { id } = req.params;
		const response = await Service.selectById('agenda', id);
		res.status(200).json(response);
	} catch (error) {
		logger.error(error);
	}
};
