import React from 'react'
import axios from 'axios';
import styles from './Abilitydetails.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

function Abilitydetails() {
	const { id } = useParams();
	const [abilityDetails, setAbilityDetails] = useState('');
	const [pokemon, setPokemon] = useState('');
	const navigate = useNavigate();

	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

	useEffect(() => {
		axios.get("https://pokeapi.co/api/v2/ability/" + id).then(async (response) => {
			console.log(response);
			var ability_name = response.data.name[0].toUpperCase() + response.data.name.slice(1);
			var description = "";
			let i = 0;
			if (response.data.effect_entries.length == 0) {
				description = "This ability does not yet have a description.";
			}

			else {
				while (1) {
					if (response.data.effect_entries[i].language.name == "en") {
						description = response.data.effect_entries[i].effect;
						break;
					}
					i++;
				}
			}

			setAbilityDetails(current => [...current,
				<div id={styles.ability_container}>
					<h1>{ability_name}</h1>
					<p>{description}</p>
				</div>
			]);

			for (let i=0; i<response.data.pokemon.length; i++) {
				let pokemon_id = response.data.pokemon[i].pokemon.url.split("pokemon/")[1].slice(0,response.data.pokemon[i].pokemon.url.split("pokemon/")[1].length - 1);
				if (pokemon_id < 10000) {
					let url = "#/pokemonDetails/" + pokemon_id;
					setPokemon(current => [...current,
						<a href={url}>
							<div id={styles.pokemon_container}>
								<h1 id={styles.pokemon_number}>No. {pokemon_id}</h1>
								<img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon_id + ".png"} id={styles.pokemon_image}/>
								<p id={styles.pokemon_name}>{response.data.pokemon[i].pokemon.name[0].toUpperCase() + response.data.pokemon[i].pokemon.name.slice(1)}</p>
							</div>
						</a>
					]);
				}
			}

			
		});
	}, [id]);

	return (
		<div id={styles.page_container}>
			{abilityDetails}
			<div id={styles.all_pokemon_container}>
				<h1 id={styles.pokemon_title}>Pokemon with this ability:</h1>
				{pokemon}
			</div>
		</div>
	);
}

export default Abilitydetails;
