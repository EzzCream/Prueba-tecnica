import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import User from '../../context/Provider.jsx';
import { useForm } from '../../hooks/useForm.js';
import './Inicio.css';

export const Inicio = () => {
	const { user } = useContext(User);

	const [info, setInfo] = useState([]);
	const [estado, setEstado] = useState(1);

	useEffect(() => {
		axios
			.get(`http://localhost:8080/agenda/consultar/${user.idPersona}`)
			.then((res) => setInfo(res.data));
	}, [estado]);

	const {
		actividad,
		status,
		fecha,
		horaInicio,
		horaFin,
		comentario,
		form,
		inputChange,
	} = useForm({
		actividad: '',
		status: '',
		fecha: '',
		horaInicio: '',
		horaFin: '',
		comentario: '',
	});

	const obj = {
		...form,
		idPersona: user.idPersona,
	};

	const crear = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8080/agenda/agregar', obj).then((res) => {
			if (res.status === 200) {
				setEstado(0);
			}
		});
	};

	return (
		<div>
			<h1>Agenda</h1>
			<div className="agenda mb-3">
				<div className="agregar p-3">
					<input
						type="text"
						className="form-control form-control-lg mb-3"
						name="actividad"
						value={actividad}
						onChange={inputChange}
						placeholder="Actividad"
					/>
					<input
						type="text"
						className="form-control form-control-lg mb-3"
						name="status"
						value={status}
						onChange={inputChange}
						placeholder="Status"
					/>
					<label htmlFor="fecha">Fecha inicio</label>
					<input
						type="date"
						className="form-control form-control-lg mb-3"
						name="fecha"
						value={fecha}
						onChange={inputChange}
						placeholder=""
					/>
					<label htmlFor="horaInicio">Fecha fin</label>
					<input
						type="time"
						className="form-control form-control-lg mb-3"
						name="horaInicio"
						value={horaInicio}
						onChange={inputChange}
						placeholder=""
					/>
					<label htmlFor="horaFin">Fecha fin</label>
					<input
						type="time"
						className="form-control form-control-lg mb-3"
						name="horaFin"
						value={horaFin}
						onChange={inputChange}
						placeholder=""
					/>
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
						placeholder="Comentario"
						name="comentario"
						value={comentario}
						onChange={inputChange}
					></textarea>
					<button
						type="submit"
						onClick={crear}
						className="btn btn-primary"
					>
						<h5>Agregar tarea</h5>
					</button>
				</div>
				<div className="cont-agenda">
					{info.map((detalles) => {
						return (
							<div
								key={detalles.idAgenda}
								className="info mt-3 mb-3"
							>
								<h4>{detalles.actividad}</h4>
								<h6>{detalles.status}</h6>
								<p>
									{detalles.fecha} {detalles.horaInicio}{' '}
									{detalles.horaFin}
								</p>
								<h6>Comentario</h6>
								<p>{detalles.comentario}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
