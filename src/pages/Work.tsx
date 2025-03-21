import { useState, useEffect } from "react";

export const Work = () => {
	const [list, setList] = useState([]);
	useEffect(() => {
		const fetchPokemons = async () => {
			try {
				const response = await fetch(
					"https://pokeapi.co/api/v2/pokemon"
				);

				if (!response.ok) {
					throw new Error("API connection failed.");
				}

				const data = await response.json();
				setList(data.results);
				console.log(data.results);
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchPokemons();
	}, []);
	return (
		<>
			<div className="flex flex-col items-center mx-auto max-w-screen-2xl pb-20 pt-20 gap-10">
				<div className="flex flex-col w-full items-center gap-44">
					<h2 className="text-5xl pt-10 md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
						POKEMON LIST
					</h2>
				</div>
				<div className="flex flex-col items-center max-w-lg gap-3">
					{list.map((pokemon) => (
						<p
							className="border-2 border-neutral-700 text-xl px-16 py-3 rounded-lg text-center w-full"
							key={pokemon.name}>
							{pokemon.name}
						</p>
					))}
				</div>
			</div>
		</>
	);
};
