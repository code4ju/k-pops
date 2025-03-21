import { useState } from "react";

export const Slider = () => {
	const [page, setPage] = useState(1);

	const pages = ["ONE", "TWO", "THREE", "FOUR"];

	return (
		<>
			<div className="flex flex-col items-center text-7xl gap-10 text-center">
				<div>
					<h1>{pages[page - 1]}</h1>
				</div>
				<p>{page} / 4</p>
				<div className="flex gap-20">
					<button
						onClick={() => {
							setPage((prevpage) => {
								if (prevpage === 1) {
									return 4;
								}
								return prevpage - 1;
							});
						}}
						className="text-4xl bg-neutral-900 text-white rounded-lg px-10 py-1">
						last
					</button>
					<button
						onClick={() => {
							setPage((prevpage) => {
								if (prevpage === 4) {
									return 1;
								}
								return prevpage + 1;
							});
						}}
						className="text-4xl bg-neutral-900 text-white rounded-lg px-10 py-1">
						next
					</button>
				</div>
			</div>
		</>
	);
};
