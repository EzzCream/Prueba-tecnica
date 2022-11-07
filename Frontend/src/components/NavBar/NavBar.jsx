import { useContext } from 'react';
import User from '../../context/Provider.jsx';

export const NavBar = () => {
	const { user } = useContext(User);

	const { nombrePersona, correoPersona } = user;

	return (
		<>
			<nav className="navbar bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						{correoPersona}
					</a>
					<a className="navbar-brand" href="#">
						{nombrePersona}
					</a>
				</div>
			</nav>
		</>
	);
};
