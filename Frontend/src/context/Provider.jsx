import { createContext, useState } from 'react';

const User = createContext();

export const Provider = ({ children }) => {
	const [userStatus, setUserStatus] = useState(0);
	const [user, setUser] = useState([]);

	return (
		<User.Provider
			value={{
				userStatus,
				setUserStatus,
				user,
				setUser,
			}}
		>
			{children}
		</User.Provider>
	);
};

export default User;
