import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm.js';
import './Login.css';
import User from '../../context/Provider.jsx';

export const Login = () => {
	const { setUser, setUserStatus } = useContext(User);

	const { correoPersona, password, form, inputChange } = useForm({
		correoPersona: '',
		password: '',
	});

	const [login, setLogin] = useState(0);

	const validar = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8080/consultar', form).then((res) => {
			console.log(res.data);
			if (res.status === 200) {
				setUserStatus(2);
				setUser(res.data);
				setLogin(1);
			} else if (res.status === 202) {
				setLogin(2);
			}
		});
	};

	if (login === 1) {
		return <Navigate to="/inicio" />;
	}

	return (
		<div className="contenedor-login">
			<div className="login">
				<h2 className="mb-3">Agenda</h2>
				<div className="mb-3">
					<input
						type="email"
						className="form-control form-control-lg mb-3"
						name="correoPersona"
						value={correoPersona}
						onChange={inputChange}
						placeholder="Correo electronico"
					/>
					<input
						type="password"
						className="form-control form-control-lg mb-3"
						name="password"
						value={password}
						onChange={inputChange}
						placeholder="Contraseña"
					/>
					{login > 1 ? (
						<h6 style={{ color: 'red' }}>
							Correo o password invalido
						</h6>
					) : (
						''
					)}
					<button
						type="submit"
						onClick={validar}
						className="btn btn-primary"
					>
						<h5>Iniciar Sesion</h5>
					</button>
					<hr />
					<Link to="/signUp" type="submit" className="btn boton">
						<h5>Crear nueva cuenta</h5>
					</Link>
				</div>
			</div>
		</div>
	);
};
