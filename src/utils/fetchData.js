import { useState, useEffect } from "react";

function PokemonList() {
	console.log("test");
	const [list, setList] = useState([]);
	const [error, setError] = useState(null);

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
				setList(data.results); // Typically, the list is in the 'results' field
			} catch (err) {
				setError(err.message);
			}
		};

		fetchPokemons();
	}, []);
}

export default PokemonList;
