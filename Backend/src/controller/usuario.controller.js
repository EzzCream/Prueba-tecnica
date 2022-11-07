import { logger } from '../logs/config.logs.js';
import bcrypt from 'bcrypt';
import * as Service from '../service/services.js';

export const crearUsuario = async (req, res) => {
	try {
		const { body } = req;
		const response = await Service.select('usuario', body.correoPersona);
		if (response.length != 0) {
			res.status(206).send('Usuario existente ✨');
		} else {
			const { password } = body;
			const obj = {
				...body,
				password: bcrypt.hashSync(
					password,
					bcrypt.genSaltSync(10),
					null,
				),
			};
			Service.insert(obj, 'usuario');
			res.status(200).send('Usuario creado ✨');
		}
	} catch (error) {
		logger.error(error);
	}
};

export const consultarUsuario = async (req, res) => {
	try {
		const { body } = req;
		const response = await Service.select('usuario', body.correoPersona);
		if (response.length != 0) {
			const des = response[0];
			const isValid = bcrypt.compareSync(body.password, des.password);
			if (isValid) {
				const {
					idPersona,
					nombrePersona,
					apellidoPersona,
					correoPersona,
				} = des;
				const obj = {
					nombrePersona,
					apellidoPersona,
					correoPersona,
					idPersona,
				};
				res.status(200).json(obj);
			} else {
				res.status(202).send('Pass incorrecto');
			}
		} else {
			res.status(202).send('Correo incorrecto');
		}
	} catch (error) {
		logger.error(error);
	}
};
