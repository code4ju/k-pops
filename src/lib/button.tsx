import clsx from "clsx";

interface ButtonProps {
	text: string;
	variant?: "primary" | "red" | "blue";
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	text,
	variant = "primary",
	className,
	...rest
}: ButtonProps) => {
	const handleClick = () => {
		console.log("to be continued");
	};
	return (
		<button
			onClick={handleClick}
			className={clsx(
				"text-3xl border-0  px-6 py-4 mt-5 md:mt-0 rounded-lg tracking-wide md:text-base md:text-white md:bg-neutral-900",
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
