import { Route, Routes } from 'react-router-dom';
import { Inicio } from '../components/Agenda/Inicio.jsx';
import { NavBar } from '../components/NavBar/NavBar.jsx';

export const AgendaRoutes = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/inicio" element={<Inicio />} />
			</Routes>
		</>
	);
};
