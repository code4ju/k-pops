import { Slider } from "../lib/slider";
import React from "react";

export const Contact: React.FC = () => {

	return (
		<>
			<div className="flex flex-col mx-auto max-w-screen-2xl pt-20">
				<div className="flex flex-col w-full items-center">
					<h2 className="text-5xl pt-10 md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
						CONTACT
					</h2>
				</div>
				<Slider />
			</div>
		</>
	);
};
