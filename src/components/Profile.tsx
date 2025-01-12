export const Profile = () => {
	return (
		<>
			<div className="flex flex-col w-full border">
				<div className="flex flex-row items-center justify-between px-5 text-sm h-24 border-2 border-neutral-900">
					<p>
						<b>NAME</b>: FRAZER HURELL
					</p>
					<p>
						<b>ROLE</b>: CREATEIVE TECHNOLOGIST
					</p>
					<p>
						<b>COMPANY</b>: YAHOO!
					</p>
					<p>
						<b>PROJECT</b>: BRITISH AIRWAYS
					</p>
				</div>
				<div className="flex flex-row border-2 border-neutral-900 border-t-0">
					<img
						className="h-max m-3"
						src="./img/assets/Frazer-hurrell-p-1080.png"
						alt=""
					/>
					<div className="flex flex-col p-12 gap-7">
						<img
							className="opacity-10 max-w-20 max-h-20"
							src="../../public/img/assets/quotes.png"
							alt=""
						/>
						<p className="text-4xl font-thin">
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
