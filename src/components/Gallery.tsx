export const Gallery = () => {
	return (
		<>
			<div className="flex flex-col items-center gap-32 max-w-screen-xl">
				<h1 className="text-9xl">SELECTED</h1>
				<div className="flex flex-row justify-between w-full">
					<div className="self-center px-20">
						<h4 className="text-3xl">HOUSTON EXPONENTIAL</h4>
						<p className="text-lg">
							A new digital HUB for houston’s biggest startup
							ecosystem.
						</p>
					</div>
					<img
						className="w-1/2"
						src="./img/assets/GalleryHouston-Exponential1.png"
						alt=""
					/>
				</div>
				<div>
					<div className="flex flex-row justify-between w-full">
						<img
							className="w-1/2"
							src="./img/assets/GalleryNami-ML.png"
							alt=""
						/>
						<div className="self-center px-20 w-1/2">
							<h4 className="text-3xl">NAMI ML</h4>
							<p className="text-lg">
								A brand new digital identity and website for the
								subscription App service that focuses on happy
								subscribers.
							</p>
						</div>
					</div>
				</div>
				<div>
					<div className="flex flex-row justify-between w-full">
						<div className="self-center px-20 w-1/2">
							<h4 className="text-3xl">THIN REEL</h4>
							<p className="text-lg">
								How we turned a local studio into one of the
								biggest video agencies in the south of the UK.
							</p>
						</div>
						<img
							className="w-1/2"
							src="./img/assets/GalleryThin-Reel.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</>
	);
};
