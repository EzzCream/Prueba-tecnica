import { knex } from '../db/connection.db.js';

export const insert = async (body, table) => {
	await knex.insert(body).from(table);
};
export const select = (table, correoPersona) => {
	const response = knex
		.select()
		.from(table)
		.where('correoPersona', correoPersona);
	return response;
};
export const selectById = (table, idPersona) => {
	const response = knex.select().from(table).where('idPersona', idPersona);
	return response;
};
