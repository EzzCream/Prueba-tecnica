import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login/Login.jsx';
import { SignUp } from './components/SignUp/SignUp.jsx';
import { Start } from './components/Start/Start.jsx';
import { Provider } from './context/Provider.jsx';
import { AgendaRoutes } from './routes/AgendaRoutes.jsx';

function App() {
	return (
		<div className="App">
			<Provider>
				<BrowserRouter>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/signUp" element={<SignUp />} />
						<Route path="/*" element={<AgendaRoutes />} />
						<Route path="/" element={<Start />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
