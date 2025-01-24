import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../lib/button.tsx";
import { NewButton } from "../lib/newButton.tsx";

export const Navbar = () => {
	const [burger, setburger] = useState(false);
	const toggleBurger = () => {
		setburger(!burger);
	};
	const navigate = useNavigate();

	function handleClick() {
		navigate("/calendar");
		setburger(!burger);
	}
	return (
		<>
			{/* <div className=" p-3 m-auto md:w-full md:m-auto md:flex md:flex-row md:justify-between md:items-center md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"> */}
			<div className="fixed w-full bg-white h-14 md:h-20">
				<div className=" fixed top-0 left-0 right-0 p-3 m-auto md:w-full md:max-w-full md:m-auto md:flex md:flex-row md:justify-between md:items-center lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
					{/* <div className="fixed top-44 min-w-10 min-h-10 md:bg-blue-400 lg:bg-yellow-400 xl:bg-green-400 2xl:bg-pink-600"></div> */}
					<div className="flex justify-between">
						{/* //: LOGO LOGO LOGO LOGO LOGO LOGO */}
						<div>
							<NavLink to={"/"}>
								<img
									src="./img/assets/homeLogo.png"
									alt=""
								/>
							</NavLink>
						</div>
						{/* //: BURGER BURGER BURGER BURGER BURGER BURGER */}
						<div
							className={
								burger
									? "hidden"
									: "flex flex-col gap-1 justify-center md:hidden"
							}
							/* className="flex flex-col gap-1 justify-center md:hidden" */
							onClick={toggleBurger}>
							<div className="min-w-8 border-black border-2"></div>
							<div className="min-w-8 border-black border-2"></div>
							<div className="min-w-8 border-black border-2"></div>
						</div>
					</div>
					{/* //: MD:NAV MD:NAV MD:NAV MD:NAV MD:NAV MD:NAV */}
					<div className="">
						<div className="INSIDEMENU md:flex md:flex-row md:items-center md:gap-5 hidden">
							<ul className="md:flex md:flex-row md:gap-5">
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
							<button
								className="text-3xl border-0 px-6 py-4 mt-5 md:mt-0 rounded-lg tracking-wide md:text-base bg-neutral-900 text-white"
								onClick={handleClick}>
								SCHEDULE A CALL
							</button>
						</div>
					</div>
				</div>
				{/* //: MOBILE:NAV MOBILE:NAV MOBILE:NAV MOBILE:NAV MOBILE:NAV */}
				<div className={burger ? "flex" : "hidden"}>
					<div className="flex flex-col fixed bg-black text-white w-full p-9 gap-5 z-50 motion-preset-slide-down md:hidden mt-20">
						<p
							className={
								!burger ? "hidden" : "block text-2xl self-end"
							}
							onClick={toggleBurger}>
							X
						</p>
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
						<button
							className="text-3xl border-0 px-6 py-4 mt-5 md:mt-0 rounded-lg tracking-wide md:text-base bg-neutral-900 text-white"
							onClick={handleClick}>
							SCHEDULE A CALL
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
