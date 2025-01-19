export const Profile = () => {
	return (
		<>
			<div className="flex flex-col m-auto p-3 justify-center md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
				<div className="flex w-full p-3 items-stretch text-sm h-24 border-2 border-neutral-900">
					<p className="flex flex-col w-1/4">
						<b>NAME:</b> FRAZER HURELL
					</p>
					<p className="flex flex-col w-1/4">
						<b>ROLE:</b> CREATEIVE TECHNOLOGIST
					</p>
					<p className="flex flex-col w-1/4">
						<b>COMPANY:</b> YAHOO!
					</p>
					<p className="flex flex-col w-1/4">
						<b>PROJECT:</b> BRITISH AIRWAYS
					</p>
				</div>
				<div className="flex flex-col border-2 border-neutral-900 border-t-0 lg:flex-row">
					<img
						className="h-max m-3"
						src="./img/assets/Frazer-hurrell-p-1080.png"
						alt=""
					/>
					<div className="flex flex-col p-12 gap-7">
						<img
							className="opacity-10 max-w-10 max-h-10"
							src="./img/assets/quotes.png"
							alt=""
						/>
						<p className="text-2xl font-thin">
							From the initial meeting to the final delivery,
							Ethan has created a feeling of trust and delivered
							everything we asked of him. The quality of his work
							speaks for itself and he is able to execute at a
							pace. He is an excellent Webflow developer and we
							will be calling on his services again, very soon.
						</p>
					</div>
				</div>
				<div>
					<div className="flex flex-row justify-between items-center px-5 h-24 border-2 border-neutral-900 border-t-0">
						<img
							className="max-h-16"
							src="./img/assets/left.png"
							alt=""
						/>
						<p>01/04</p>
						<img
							className="max-h-16"
							src="./img/assets/right.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</>
	);
};
