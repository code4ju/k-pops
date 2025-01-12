import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Home } from "../pages/Home.tsx";
import { Work } from "../pages/Work.tsx";
import { Contact } from "../pages/Contact.tsx";
import { Calendar } from "../pages/Calendar.tsx";
import { PageNotFound } from "../pages/PageNotFound.tsx";

export const AppRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/work",
				element: <Work />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/calendar",
				element: <Calendar />,
			},
			{
				path: "*",
				element: <PageNotFound />,
			},
		],
	},
]);

export default AppRouter;
