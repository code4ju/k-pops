interface buttonInterface {
	children: React.ReactNode;
	goTo: string;
	variant: "primary" | "secondary" | "danger" | "default";
	className?: string;
}

export const NewButton: React.FC<buttonInterface> = ({
	children,
	goTo,
	variant,
	...rest
}) => {
	const getVariantClasses = () => {
		switch (variant) {
			case "primary":
				return "bg-neutral-900 text-white";
			case "secondary":
				return "bg-yellow-600 text-blue-600";
			case "danger":
				return "bg-red-600";
			default:
				return "bg-pink-600";
		}
	};

	return (
		<button
			onClick={() => {
				window.open(`http://${goTo}`, "_blank");
			}}
			className={`text-3xl border-0 px-6 py-4 mt-5 md:mt-0 rounded-lg tracking-wide md:text-base ${getVariantClasses()} ${
				rest.className
			}`}
			{...rest}>
			{children}
		</button>
	);
};
