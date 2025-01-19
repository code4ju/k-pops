export const Gallery = () => {
	return (
		<>
			<div className="flex flex-col gap-12">
				<h1 className="text-6xl self-center">SELECTED</h1>
				<div className="flex flex-col-reverse justify-between w-full xl:w-10/12 xl:m-auto xl:flex-row xl:items-center">
					<div className="flex flex-col p-3 xl:pl-20 xl:w-1/2">
						<h4 className="text-3xl">HOUSTON EXPONENTIAL</h4>
						<p className="text-lg xl:p-4 w-8/12">
							A new digital HUB for houston’s biggest startup
							ecosystem.
						</p>
					</div>
					<img
						className="p-3 xl:w-1/2"
						src="./img/assets/GalleryHouston-Exponential1.png"
						alt=""
					/>
				</div>
				<div className="flex flex-col-reverse justify-between w-full xl:w-10/12 xl:m-auto xl:flex-row-reverse xl:items-center">
					<div className="flex flex-col p-3 xl:pl-20 xl:w-1/2">
						<h4 className="text-3xl">NAMI ML</h4>
						<p className="text-lg xl:p-4 w-8/12">
							A brand new digital identity and website for the
							subscription App service that focuses on happy
							subscribers.
						</p>
					</div>
					<img
						className="p-3 xl:w-1/2"
						src="./img/assets/GalleryNami-ML.png"
						alt=""
					/>
				</div>
				<div className="flex flex-col-reverse justify-between w-full xl:w-10/12 xl:m-auto xl:flex-row xl:items-center">
					<div className="flex flex-col p-3 xl:pl-20 xl:w-1/2">
						<h4 className="text-3xl">THIN REEL</h4>
						<p className="text-lg xl:p-4 w-8/12">
							How we turned a local studio into one of the biggest
							video agencies in the south of the UK.
						</p>
					</div>
					<img
						className="p-3 xl:w-1/2"
						src="./img/assets/GalleryThin-Reel.png"
						alt=""
					/>
				</div>
			</div>
		</>
	);
};
