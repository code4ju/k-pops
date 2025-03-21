import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

// import "@fontsource-variable/inter"; // Defaults to wght axis

export const App = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};
