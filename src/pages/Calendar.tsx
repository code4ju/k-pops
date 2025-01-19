import { InputForm } from "../lib/input";

export const Calendar = () => {
	return (
		<>
			<div className="flex flex-col mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
				<div className="flex flex-col w-full items-center gap-44">
					<h2 className="text-5xl pt-10 md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
						CALENDAR
					</h2>
				</div>
				<InputForm />
			</div>
		</>
	);
};
