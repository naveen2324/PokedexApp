import React from 'react'
import axios from 'axios';
import styles from './Pokemondetails.module.css';
import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'

function Pokemondetails() {
  const {id} = useParams();
  const [mainDetails, setMainDetails] = useState('');
  const [stats, setStats] = useState('');
  const [miscInfo, setMiscInfo] = useState('');
  const [previousButton, setPreviousButton] = useState('');
  const [nextButton, setNextButton] = useState('');

  useEffect (() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/" + id).then(async (response) => {
      const height = response.data.height;
      const weight = response.data.weight;
      const base_exp = response.data.base_experience;
      const misc_details = await axios.get("https://pokeapi.co/api/v2/pokemon-species/" + id);
      const base_happiness = misc_details.data.base_happiness;
      const capture_rate = misc_details.data.capture_rate;
      const growth_rate = misc_details.data.growth_rate.name[0].toUpperCase() + misc_details.data.growth_rate.name.slice(1);

      var held_items = [];
      if (response.data.held_items.length == 0) {
        held_items.push(
          <p>
            None
          </p>
        );
      }
      else {
        for(let j=0;j<response.data.held_items.length;j++) {
          held_items.push(
            <p class={styles.misc_value_group}>
              {response.data.held_items[j].item.name[0].toUpperCase() + response.data.held_items[j].item.name.slice(1)}
            </p>
          );
        }
      }

      var egg_groups = [];
        for(let j=0;j<misc_details.data.egg_groups.length;j++) {
          egg_groups.push(
            <p class={styles.misc_value_group}>
              {misc_details.data.egg_groups[j].name[0].toUpperCase() + misc_details.data.egg_groups[j].name.slice(1)}
            </p>
          );
        }

      const name = response.data.name[0].toUpperCase() + response.data.name.slice(1);
      const imgurl = response.data.sprites.other['official-artwork'].front_default;
      const pokedex_number = response.data.id;

      const hp = response.data.stats[0].base_stat;
      const atk = response.data.stats[1].base_stat;
      const def = response.data.stats[2].base_stat;
      const spatk = response.data.stats[3].base_stat;
      const spdef = response.data.stats[4].base_stat;
      const speed = response.data.stats[5].base_stat;
      const total = hp + atk + def + spatk + spdef + speed;

      setMiscInfo(current => [...current, 
        <div id={styles.misc_details}>
          <h1>Game Info:</h1>
          <div class={styles.misc_value}>
            <p class={styles.headings}>Height: </p>
            <p>{height/10}m</p>
          </div>
          <div class={styles.misc_value}>
            <p class={styles.headings}>Weight: </p>
            <p>{weight/10}kg</p>
          </div>
          <div class={styles.misc_value}>
            <p class={styles.headings}>Base Exp: </p>
            <p>{base_exp}</p>
          </div>

          <div class={styles.misc_value}>
            <p class={styles.headings}>Base Happiness: </p>
            <p>{base_happiness}</p>
          </div>
          <div class={styles.misc_value}>
            <p class={styles.headings}>Capture Rate: </p>
            <p>{capture_rate}</p>
          </div>
          <div class={styles.misc_value}>
            <p class={styles.headings}>Growth Rate: </p>
            <p>{growth_rate}</p>
          </div>
          <div class={styles.misc_value}>
            <p class={styles.headings}>Egg Groups: </p>
            {egg_groups}
          </div>
          <div class={styles.misc_value}>
            <p class={styles.headings}>Held Items: </p>
            {held_items}
          </div>
        </div>
      ]);

      var abilities = [];
      for(let j=0;j<response.data.abilities.length;j++) {
        abilities.push(
          <p>
            {response.data.abilities[j].ability.name[0].toUpperCase() + response.data.abilities[j].ability.name.slice(1)}
          </p>
        );
      }

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

      var types = [];
      for(let j=0;j<response.data.types.length;j++){
        types.push(
          <div style={{background: type_colors[response.data.types[j].type.name]}}>
            {response.data.types[j].type.name[0].toUpperCase() + response.data.types[j].type.name.slice(1)}
          </div>
        );
      }

     setMainDetails(current => [...current, 
        <div id={styles.main_details}>
          <p id={styles.pokemon_number}>
            <h1>{name}</h1>
          </p>
          <img src={imgurl} />
          <div id={styles.pokemon_name}>
            <p>
              No. {pokedex_number}
            </p>
          </div>
          <div id={styles.pokemon_types}>
            <p class={styles.headings}>Type: </p>
            {types}
          </div>
          <div id={styles.pokemon_abilities}>
            <p class={styles.headings}>Abilities:</p>
            {abilities}
          </div>
        </div>
      ]);

      function statBarColors(value) {
        if (value < 60) {
          return "#db4242";
        }

        else if (value >= 60 && value < 90) {
          return "#e38034";
        }

        else if (value >= 90 && value < 120) {
          return "#2eb03b";
        }

        else if (value >= 120) {
          return "#77b9db";
        }
      }

      setStats(current => [...current, 
        <div id={styles.outer_stats_container}>
          <h1>Base Stats:</h1>
          <div id={styles.stats_container}>
            <div id={styles.stat_labels}>
              <p>HP: </p>
              <p>Attack: </p>
              <p>Defense: </p>
              <p>Sp. Atk: </p>
              <p>Sp. Def: </p>
              <p>Speed: </p>
              <p>Total: </p>
            </div>
            <div id={styles.stat_numbers}>
              <p>{hp}</p>
              <p>{atk}</p>
              <p>{def}</p>
              <p>{spatk}</p>
              <p>{spdef}</p>
              <p>{speed}</p>
              <p>{total}</p>
            </div>
            <div id={styles.stat_bars_container}>
              <div class={styles.stat_bars} style={{width: hp/7+"vw", background: statBarColors(hp)}}></div>
              <div class={styles.stat_bars} style={{width: atk/7+"vw", background: statBarColors(atk)}}></div>
              <div class={styles.stat_bars} style={{width: def/7+"vw", background: statBarColors(def)}}></div>
              <div class={styles.stat_bars} style={{width: spatk/7+"vw", background: statBarColors(spatk)}}></div>
              <div class={styles.stat_bars} style={{width: spdef/7+"vw", background: statBarColors(spdef)}}></div>
              <div class={styles.stat_bars} style={{width: speed/7+"vw", background: statBarColors(speed)}}></div>
            </div>
          </div>
        </div>
      ]);

      const previous_pokemon = (await axios.get("https://pokeapi.co/api/v2/pokemon/" + (parseInt(id) - 1)));
      const previous_img_url = previous_pokemon.data.sprites.front_default;
      const previous_name = previous_pokemon.data.name[0].toUpperCase() + previous_pokemon.data.name.slice(1);
      const previous_url = "/pokemonDetails/" + (parseInt(pokedex_number) - 1);

      setPreviousButton(current => [...current, 
        <a href={previous_url}>
          <div id={styles.previous_button}>
            <img src={previous_img_url} />
            <p class={styles.button_headings}>
              {previous_name}
            </p>
            <FontAwesomeIcon class={styles.arrow_icons} icon={faLeftLong} />
          </div>
        </a>
      ]);

      const next_pokemon = (await axios.get("https://pokeapi.co/api/v2/pokemon/" + (parseInt(id) + 1)));
      const next_img_url = next_pokemon.data.sprites.front_default;
      const next_name = next_pokemon.data.name[0].toUpperCase() + next_pokemon.data.name.slice(1);
      const next_url = "/pokemonDetails/" + (parseInt(pokedex_number) + 1);

      setNextButton(current => [...current, 
        <a href={next_url}>
          <div id={styles.next_button}>
            <img src={next_img_url} />
            <p class={styles.button_headings}>
              {next_name}
            </p>
            <FontAwesomeIcon class={styles.arrow_icons} icon={faRightLong} />
          </div>
        </a>
      ]);

    });
  }, [id]);

  return (
    <div id={styles.page_container}>
      <div id={styles.previous_next_row}>
        {previousButton}
        {nextButton}
      </div>
      <div class={styles.rows}>
        {miscInfo}
        {mainDetails}
        {stats}
      </div>
    </div>
  );
}

export default Pokemondetails;
