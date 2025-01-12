import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./router/AppRouter.tsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={AppRouter} />
	</StrictMode>
);
