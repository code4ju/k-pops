import { NavLink } from "react-router-dom";
import { useState } from "react";

import Button from "../lib/button.tsx";

export const Navbar = () => {
	const [burger, setburger] = useState(false);
	const toggleBurger = () => {
		setburger(!burger);
	};
	return (
		<>
			<div className="p-3 m-auto md:flex md:flex-row md:justify-between md:items-center md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
				<div className="fixed top-44 min-w-10 min-h-10 md:bg-blue-400 lg:bg-yellow-400 xl:bg-green-400 2xl:bg-pink-600"></div>
				<div className="flex justify-between">
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
								: "flex flex-col gap-1 justify-center md:hidden"
						}
						onClick={toggleBurger}>
						<div className="min-w-8 border-black border-2"></div>
						<div className="min-w-8 border-black border-2"></div>
						<div className="min-w-8 border-black border-2"></div>
					</div>
					<p
						className={!burger ? "hidden" : "block text-2xl"}
						onClick={toggleBurger}>
						X
					</p>
				</div>
				<div className="">
					<div className="INSIDEMENU md:flex md:flex-row md:items-center md:gap-5 hidden">
						<ul className="md:flex md:flex-row md:gap-5">
							<li onClick={toggleBurger}>
								<NavLink to={"/"}>HOME</NavLink>
							</li>
							<li onClick={toggleBurger}>
								<NavLink to={"/work"}>WORK</NavLink>
							</li>
							<li onClick={toggleBurger}>
								<NavLink to={"/contact"}>CONTACT</NavLink>
							</li>
						</ul>
						<Button
							className="border-2"
							text="SCHEDULE A CALL"
							// change color of button - options: red || blue || primary = black
							variant="primary"
						/>
					</div>
				</div>
			</div>
			<div className={burger ? "flex" : "hidden"}>
				<div className="flex flex-col fixed bg-black text-white w-full p-9 gap-5 z-50 motion-preset-slide-down md:hidden">
					<ul className="flex flex-col w-full max-h-screen items-center text-3xl gap-5">
						<li onClick={toggleBurger}>
							<NavLink to={"/"}>HOME</NavLink>
						</li>
						<li onClick={toggleBurger}>
							<NavLink to={"/work"}>WORK</NavLink>
						</li>
						<li onClick={toggleBurger}>
							<NavLink to={"/contact"}>CONTACT</NavLink>
						</li>
					</ul>
					<Button
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
