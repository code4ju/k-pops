import { InputForm } from "../lib/inputField.tsx";
// import { InputField } from "../lib/inputField";

export const Calendar = () => {
	return (
		<>
			<div className="flex flex-col mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl gap-5 pt-20">
				<div className="flex flex-col w-full items-center gap-44">
					{/* <h2 className="text-5xl pt-10 md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
						CALENDAR
					</h2> */}
				</div>
				<InputForm />
				{/* <InputField /> */}
			</div>
		</>
	);
};
