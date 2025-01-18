import { NavLink } from "react-router-dom";
import { useState } from "react";

import Button from "../lib/elements.tsx";

export const Navbar = () => {
	const [burger, setburger] = useState(false);
	const toggleBurger = () => {
		setburger(!burger);
	};
	return (
		<>
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

					<div
						className={
							burger
								? "hidden"
								: "flex flex-col gap-1 justify-center"
						}
						onClick={toggleBurger}>
						<div className="min-w-8 border-black border-2"></div>
						<div className="min-w-8 border-black border-2"></div>
						<div className="min-w-8 border-black border-2"></div>
					</div>
					<p
						className={
							burger ? "block text-3xl text-black" : "hidden"
						}
						onClick={toggleBurger}>
						X
					</p>
				</div>
			</div>
			<div className={burger ? "flex" : "hidden"}>
				<div className="flex flex-col fixed bg-black text-white w-full p-9 gap-5 z-50 motion-preset-slide-down">
					<ul className="flex flex-col w-full max-h-screen items-center text-3xl gap-5">
						<li
							onClick={toggleBurger}
							className="hover:text-blue-400">
							<NavLink to={"/"}>HOME</NavLink>
						</li>
						<li
							onClick={toggleBurger}
							className="hover:text-blue-400">
							<NavLink to={"/work"}>WORK</NavLink>
						</li>
						<li
							onClick={toggleBurger}
							className="hover:text-blue-400">
							<NavLink to={"/contact"}>CONTACT</NavLink>
						</li>
					</ul>
					<Button
						onClick={toggleBurger}
						className="text-3xl"
						text="SCHEDULE A CALL"
						// change color of button - options: red || blue || primary = black
						variant="primary"
					/>
				</div>
			</div>
		</>
	);
};
