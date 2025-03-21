export const WorkSeenLogoStripe = () => {
	return (
		<div className="flex flex-col w-full self-end md:w-3/4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
			<div className="flex flex-col items-center gap-5 md:self-start">
				<p>WORK SEEN ON</p>
				<div className="flex flex-row justify-between items-baseline overflow-y-scroll gap-5 pl-3">
					<img
						className="object-contain h-16 grayscale"
						src="./img/assets/dci.png"
						alt=""
					/>
					<img
						className="object-contain h-16 grayscale"
						src="./img/assets/libacco-logo.png"
						alt=""
					/>
					<img
						className="object-contain h-13 grayscale pb-1"
						src="./img/assets/tanzraum_rgb.webp"
						alt=""
					/>
					<img
						className="object-contain h-12 grayscale pb-1"
						src="./img/assets/logo.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export const WorkedWithLogoStripe = () => {
	return (
		<div className="flex flex-col w-full self-end">
			<div className="flex flex-col items-center gap-5 text-center">
				<p className="self-center text-lg px-3">
					WORK WITH SOME OF THE BEST OUT THERE
				</p>
				<div className="flex flex-row justify-between items-baseline gap-5 overflow-y-scroll pl-3">
					<img
						className="object-contain h-16 grayscale"
						src="./img/assets/dci.png"
						alt=""
					/>
					<img
						className="object-contain h-16 grayscale"
						src="./img/assets/libacco-logo.png"
						alt=""
					/>
					<img
						className="object-contain h-13 grayscale pb-1"
						src="./img/assets/tanzraum_rgb.webp"
						alt=""
					/>
					<img
						className="object-contain h-12 grayscale pb-1"
						src="./img/assets/logo.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};
