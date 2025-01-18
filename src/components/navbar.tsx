import { NavLink } from "react-router-dom";
import Button from "../lib/elements.tsx";

export const Navbar = () => {
	return (
		<div className="p-3">
			<div className="flex flex-row justify-between">
				<div>
					<NavLink to={"/"}>
						<img
							src="./img/assets/homeLogo.png"
							alt=""
						/>
					</NavLink>
				</div>
				<div className="flex flex-col gap-1 justify-center">
					<div className="min-w-8 border-black border-2"></div>
					<div className="min-w-8 border-black border-2"></div>
					<div className="min-w-8 border-black border-2"></div>
				</div>
				<div className="hidden">
					<ul className="">
						<li>
							<NavLink to={"/"}>HOME</NavLink>
						</li>
						<li>
							<NavLink to={"/work"}>WORK</NavLink>
						</li>
						<li>
							<NavLink to={"/contact"}>CONTACT</NavLink>
						</li>
					</ul>
					<Button
						text="SCHEDULE A CALL"
						// change color of button - options: red || blue || primary = black
						variant="primary"
						className=""
					/>
				</div>
			</div>
		</div>
	);
};
