import React from 'react'
import axios from 'axios';
import styles from './Movedetails.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

function Itemdetails() {
	const { id } = useParams();
	const [moveDetails, setMoveDetails] = useState('');
	const [pokemon, setPokemon] = useState('');
	const navigate = useNavigate();

	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

	const type_colors = {
		normal: '#A8A77A',
		fire: '#EE8130',
		water: '#6390F0',
		electric: '#F7D02C',
		grass: '#7AC74C',
		ice: '#96D9D6',
		fighting: '#C22E28',
		poison: '#A33EA1',
		ground: '#E2BF65',
		flying: '#A98FF3',
		psychic: '#F95587',
		bug: '#A6B91A',
		rock: '#B6A136',
		ghost: '#735797',
		dragon: '#6F35FC',
		dark: '#705746',
		steel: '#B7B7CE',
		fairy: '#D685AD',
	  };

	useEffect(() => {
		axios.get("https://pokeapi.co/api/v2/move/" + id).then(async (response) => {
			var move_name = response.data.name[0].toUpperCase() + response.data.name.slice(1);
			const move_type = response.data.type.name[0].toUpperCase() + response.data.type.name.slice(1);
			var category = response.data.damage_class.name[0].toUpperCase() + response.data.damage_class.name.slice(1,);
			var pp = response.data.pp;
			var power = "";
			var accuracy = "";
			
			if (response.data.power == null) {
				power = "N/A";
			}

			else {
				power = response.data.power;
			}

			if (response.data.accuracy == null) {
				accuracy = "N/A";
			}

			else {
				accuracy = response.data.accuracy;
			}

			var description = "";
			let i = 0;
			if (response.data.effect_entries.length == 0) {
				description = "This move does not yet have a description.";
			}

			else {
				while (1) {
					if (response.data.effect_entries[i].language.name == "en") {
						description = response.data.effect_entries[i].effect;
						description = description.replaceAll("$effect_chance", response.data.effect_chance);
						break;
					}
					i++;
				}
			}

			setMoveDetails(current => [...current,
				<div id={styles.item_container}>
					<h1 id={styles.move_name}>{move_name}</h1>
					<div class={styles.info_row}>
						<h1 class={styles.item_heading}>Type:</h1>
						<p id={styles.type} style={{background: type_colors[response.data.type.name]}}>{move_type}</p>
					</div>
					<div class={styles.info_row}>
						<h1 class={styles.item_heading}>Power:</h1>
						<p class={styles.info}>{power}</p>
					</div>
					<div class={styles.info_row}>
					<h1 class={styles.item_heading}>Accuracy:</h1>
						<p class={styles.info}>{accuracy}</p>
					</div>
					<div class={styles.info_row}>
					<h1 class={styles.item_heading}>PP:</h1>
						<p class={styles.info}>{pp}</p>
					</div>
					<div class={styles.info_row}>
					<h1 class={styles.item_heading}>Category:</h1>
						<p class={styles.info}>{category}</p>
					</div>
					<div id={styles.main_description}>
						<p id={styles.description}>{description}</p>
					</div>
				</div>
			]);


			for (let i=0; i<response.data.learned_by_pokemon.length; i++) {
				let pokemon_id = response.data.learned_by_pokemon[i].url.split("pokemon/")[1].slice(0,response.data.learned_by_pokemon[i].url.split("pokemon/")[1].length - 1);
				if (pokemon_id < 10000) {
					let url = "#/pokemonDetails/" + pokemon_id;
					setPokemon(current => [...current,
						<a href={url}>
							<div id={styles.pokemon_container}>
								<h1 id={styles.pokemon_number}>No. {pokemon_id}</h1>
								<img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon_id + ".png"} id={styles.pokemon_image}/>
								<p id={styles.pokemon_name}>{response.data.learned_by_pokemon[i].name[0].toUpperCase() + response.data.learned_by_pokemon[i].name.slice(1)}</p>
							</div>
						</a>
					]);
				}
			}

			
		});
	}, [id]);

	return (
		<div id={styles.page_container}>
			{moveDetails}
			<div id={styles.all_pokemon_container}>
				<h1 id={styles.pokemon_title}>Pokemon that learn this move:</h1>
				{pokemon}
			</div>
		</div>
	);
}

export default Itemdetails;
