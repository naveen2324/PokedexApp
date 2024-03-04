import React from 'react'
import axios from 'axios';
import styles from './Itemdetails.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

function Itemdetails() {
	const { id } = useParams();
	const [itemDetails, setItemDetails] = useState('');
	const [pokemon, setPokemon] = useState('');
	const navigate = useNavigate();

	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

	useEffect(() => {
		axios.get("https://pokeapi.co/api/v2/item/" + id).then(async (response) => {
			console.log(response);
			var item_name = response.data.name[0].toUpperCase() + response.data.name.slice(1);
			const item_category = response.data.category.name[0].toUpperCase() + response.data.category.name.slice(1);
			const imgurl = response.data.sprites.default;
			var fling_power = "";
			var fling_effect = "";
			
			if (response.data.fling_effect == null) {
				fling_effect = "N/A";
			}

			else {
				fling_effect = response.data.fling_effect.name[0].toUpperCase() + response.data.fling_effect.name.slice(1);;
			}

			if (response.data.fling_power == null) {
				fling_power = "N/A";
			}

			else {
				fling_power = response.data.fling_power;
			}

			var description = "";
			let i = 0;
			if (response.data.effect_entries.length == 0) {
				description = "This item does not yet have a description.";
			}

			else {
				while (1) {
					if (response.data.effect_entries[i].language.name == "en") {
						description = response.data.effect_entries[i].short_effect;
						break;
					}
					i++;
				}
			}

			setItemDetails(current => [...current,
				<div id={styles.item_container}>
					<h1>{item_name}</h1>
					<img id={styles.item_image} src={imgurl} />
					<div class={styles.info_row}>
						<h1 class={styles.item_heading}>Category:</h1>
						<p class={styles.info}>{item_category}</p>
					</div>
					<div class={styles.info_row}>
						<h1 class={styles.item_heading}>Fling Power:</h1>
						<p class={styles.info}>{fling_power}</p>
					</div>
					<div class={styles.info_row}>
					<h1 class={styles.item_heading}>Fling Effect:</h1>
						<p class={styles.info}>{fling_effect}</p>
					</div>
					<div id={styles.main_description}>
						<p id={styles.description}>{description}</p>
					</div>
				</div>
			]);


			for (let i=0; i<response.data.held_by_pokemon.length; i++) {
				let pokemon_id = response.data.held_by_pokemon[i].pokemon.url.split("pokemon/")[1].slice(0,response.data.held_by_pokemon[i].pokemon.url.split("pokemon/")[1].length - 1);
				if (pokemon_id < 10000) {
					let url = "#/pokemonDetails/" + pokemon_id;
					setPokemon(current => [...current,
						<a href={url}>
							<div id={styles.pokemon_container}>
								<h1 id={styles.pokemon_number}>No. {pokemon_id}</h1>
								<img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon_id + ".png"} id={styles.pokemon_image}/>
								<p id={styles.pokemon_name}>{response.data.held_by_pokemon[i].pokemon.name[0].toUpperCase() + response.data.held_by_pokemon[i].pokemon.name.slice(1)}</p>
							</div>
						</a>
					]);
				}
			}

			
		});
	}, [id]);

	return (
		<div id={styles.page_container}>
			{itemDetails}
			<div id={styles.all_pokemon_container}>
				<h1 id={styles.pokemon_title}>Pokemon that hold this item in the wild:</h1>
				{pokemon}
			</div>
		</div>
	);
}

export default Itemdetails;
