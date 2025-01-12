import { NavLink } from "react-router-dom";
import Button from "../lib/elements.tsx";

export const Navbar = () => {
	return (
		<div className="flex justify-between items-center pt-2 px-3">
			<div>
				<img
					className="w-1/2"
					src="src/assets/homeLogo.png"
					alt=""
				/>
			</div>
			<div className="flex flex-row items-center gap-3">
				<ul className="flex flex-row gap-3">
					<li>
						<NavLink to={"/"}>HOME</NavLink>
					</li>
					<li>
						<NavLink to={"/Work"}>WORK</NavLink>
					</li>
					<li>
						<NavLink to={"/Contact"}>CONTACT</NavLink>
					</li>
				</ul>
				<Button
					text="SCHEDULE A CALL"
					variant=""
					onClick={() => console.log("red button clicked")}
					className=""
				/>
			</div>
		</div>
	);
};
