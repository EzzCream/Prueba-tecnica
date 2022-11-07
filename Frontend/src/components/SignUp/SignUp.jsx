import axios from 'axios';
import { useForm } from '../../hooks/useForm.js';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export const SignUp = () => {
	const {
		correoPersona,
		nombrePersona,
		apellidoPersona,
		password,
		form,
		inputChange,
	} = useForm({
		nombrePersona: '',
		apellidoPersona: '',
		correoPersona: '',
		password: '',
	});

	const [navigate, setNavigate] = useState(0);

	const crear = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8080/signup', form).then((res) => {
			if (res.status === 200) {
				setNavigate(1);
			} else setNavigate(2);
		});
	};

	if (navigate === 1) {
		return <Navigate to="/login" />;
	}

	return (
		<div className="contenedor-login">
			<div className="login">
				<h2 className="mb-3">Crear usuario</h2>
				<div className="mb-3">
					<input
						type="text"
						className="form-control form-control-lg mb-3"
						name="nombrePersona"
						value={nombrePersona}
						onChange={inputChange}
						placeholder="Nombre"
					/>
					<input
						type="text"
						className="form-control form-control-lg mb-3"
						name="apellidoPersona"
						value={apellidoPersona}
						onChange={inputChange}
						placeholder="Apellidos"
					/>
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
					{navigate > 1 ? (
						<h6 style={{ color: 'red' }}>Usuario existente</h6>
					) : (
						''
					)}
					<button
						type="submit"
						onClick={crear}
						className="btn btn-primary"
					>
						<h5>Crear usuario</h5>
					</button>
					<hr />
					<Link to="/login" type="submit" className="btn boton">
						<h5>Login</h5>
					</Link>
				</div>
			</div>
		</div>
	);
};
