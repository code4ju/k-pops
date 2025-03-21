import Button from "./button.tsx";
import { NewButton } from "../lib/newButton";

export const InputForm = () => {
	return (
		<>
			<h1 className="text-4xl text-center text-neutral-900 mb-6 w-3/4 self-center pt-16">
				Schedule your personal Call
			</h1>
			<div className="flex flex-col p-3 gap-6">
				<form className="flex flex-col lg:flex-row gap-5">
					<div className="flex flex-col gap-3 lg:w-2/5">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							className="border focus:ring-0 focus:outline-none focus:border-neutral-900 border-gray-300 rounded-md p-5"
						/>
						<input
							type="email"
							name="mail"
							placeholder="Your email"
							className="border focus:ring-0 focus:outline-none focus:border-neutral-900 border-gray-300 rounded-md p-5"
						/>
						<input
							type="tel"
							name="phone"
							placeholder="Your email Number"
							className="border focus:ring-0 focus:outline-none focus:border-neutral-900 border-gray-300 rounded-md p-5"
						/>
						<input
							type="text"
							name="description"
							placeholder="Call Description"
							className="border focus:ring-0 focus:outline-none focus:border-neutral-900 border-gray-300 rounded-md p-5"
						/>
					</div>
					<div className="flex flex-col gap-3 w-full lg:w-3/5">
						<textarea
							name="personal"
							placeholder="Personal Message"
							className="border focus:ring-0 focus:outline-none focus:border-neutral-900 border-gray-300 rounded-md p-5 w-full h-36 lg:h-full"></textarea>
						<div className="flex gap-3">
							<input
								type="date"
								name="date"
								placeholder="Date"
								className="border focus:ring-0 focus:outline-none focus:border-neutral-900 w-1/2 border-gray-300 rounded-md p-5"
							/>
							<input
								type="time"
								name="time"
								placeholder="Time"
								className="border focus:ring-0 focus:outline-none focus:border-neutral-900 w-1/2 border-gray-300 rounded-md p-5"
							/>
						</div>
					</div>
				</form>
				<Button
					className="text-3xl bg-neutral-900 text-white"
					text="SEND IT"
					// change color of button - options: red || blue || primary = black
					// variant="red"
				/>
				<NewButton
					goTo="libacco.de"
					variant="primary">
					LIBACCO
				</NewButton>
				<NewButton
					goTo="google.com"
					variant="primary">
					GOOGLE
				</NewButton>
			</div>
		</>
	);
};
