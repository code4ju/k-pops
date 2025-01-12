import clsx from "clsx";

interface ButtonProps {
	text: string;
	variant?: "primary" | "red" | "blue";
	className?: string;
}

const Button = ({
	text,
	variant = "primary",
	className,
	...rest
}: ButtonProps) => {
	const handleClick = () => {
		window.open("https://www.google.com", "_blank");
	};
	return (
		<button
			onClick={handleClick}
			className={clsx(
				"text-sm text-white bg-neutral-900 px-6 py-4 rounded-lg tracking-wide",
				{
					"bg-red-500": variant === "red",
					"bg-blue-500": variant === "blue",
				},
				className
			)}
			{...rest}>
			{text}
		</button>
	);
};

export default Button;
