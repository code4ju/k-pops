import { NavLink } from "react-router-dom";
import Button from "../lib/elements.tsx";

export const Navbar = () => {
	return (
		<div className="py-3 px-3">
			<div className="flex flex-row mx-auto justify-between max-w-screen-2xl">
				<div className="self-center">
					<img
						src="./img/assets/homeLogo.png"
						alt=""
					/>
				</div>
				<div className="flex flex-row items-center gap-3">
					<ul className="flex flex-row justify-center gap-3">
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
						variant="primary"
						className=""
					/>
				</div>
			</div>
		</div>
	);
};
