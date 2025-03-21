import { useState } from "react";
import { texts } from "./ProfileTexts.js";

export const Profile = () => {
	const [page, setPage] = useState(1);

	return (
		<>
			<div className="flex flex-col m-auto p-3 justify-center md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
				<div className="flex w-full p-3 items-stretch text-sm h-24 border-2 border-neutral-900">
					<p className="flex flex-col w-1/4">
						<b>NAME:</b> Ju-Yong Chang
					</p>
					<p className="flex flex-col w-1/4">
						<b>ROLE:</b> Software Developer
					</p>
					<p className="flex flex-col w-1/4">
						<b>COMPANY:</b> Some
					</p>
					<p className="flex flex-col w-1/4">
						<b>PROJECT:</b> Several
					</p>
				</div>
				<div className="flex flex-col border-2 border-neutral-900 border-t-0 lg:flex-row">
					<img
						className="w-1/3 m-3"
						src="./img/assets/Frazer-hurrell-p-1080.jpg"
						alt=""
					/>
					<div className="flex flex-col p-12 gap-7 min-h-96 max-h-96">
						<img
							className="opacity-10 max-w-10 max-h-10"
							src="./img/assets/quotes.png"
							alt=""
						/>
						<p className="text-xl font-thin xl:text-3xl">
							{texts[page - 1]}
						</p>
					</div>
				</div>
				<div>
					<div className="flex flex-row justify-between items-center px-5 h-24 border-2 border-neutral-900 border-t-0">
						<img
							className="max-h-16"
							src="./img/assets/left.png"
							alt=""
							onClick={() => {
								setPage((prevPage) => {
									if (page === 1) {
										return 4;
									}
									return prevPage - 1;
								});
							}}
						/>
						<p>0{page}/04</p>
						<img
							className="max-h-16"
							src="./img/assets/right.png"
							alt=""
							onClick={() => {
								setPage((prevPage) => {
									if (page === 4) {
										return 1;
									}
									return prevPage + 1;
								});
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
