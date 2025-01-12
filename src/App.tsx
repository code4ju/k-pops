import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";

import "@fontsource-variable/inter";

export const App = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};
