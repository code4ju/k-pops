import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";

// import "@fontsource-variable/inter"; // Defaults to wght axis

export const App = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};
