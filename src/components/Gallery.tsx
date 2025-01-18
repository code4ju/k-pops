export const Gallery = () => {
	return (
		<>
			<div className="flex flex-col gap-12">
				<h1 className="text-6xl self-center">SELECTED</h1>
				<div className="flex flex-col-reverse justify-between w-full">
					<div className="flex flex-col p-3">
						<h4 className="text-3xl">HOUSTON EXPONENTIAL</h4>
						<p className="text-xl">
							A new digital HUB for houston’s biggest startup
							ecosystem.
						</p>
					</div>
					<img
						className="p-3"
						src="./img/assets/GalleryHouston-Exponential1.png"
						alt=""
					/>
				</div>
				<div>
					<div className="flex flex-col justify-between w-full">
						<img
							className="p-3"
							src="./img/assets/GalleryNami-ML.png"
							alt=""
						/>
						<div className="flex flex-col p-3">
							<h4 className="text-3xl">NAMI ML</h4>
							<p className="text-xl">
								A brand new digital identity and website for the
								subscription App service that focuses on happy
								subscribers.
							</p>
						</div>
					</div>
				</div>
				<div>
					<div className="flex flex-col-reverse justify-between w-full">
						<div className="flex flex-col p-3">
							<h4 className="text-3xl">THIN REEL</h4>
							<p className="text-xl">
								How we turned a local studio into one of the
								biggest video agencies in the south of the UK.
							</p>
						</div>
						<img
							className="p-3"
							src="./img/assets/GalleryThin-Reel.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</>
	);
};
