import React from 'react'
import axios from 'axios';
import styles from './Searchresults.module.css';
import { useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

function Searchresults() {
  const [allPokemon, setAllPokemon] = useState('');
  const [displayPokemon, setDisplayPokemon] = useState('');
  const [numberOfPokemon, setNumberOfPokemon] = useState('');

  const {state} = useLocation();
  const navigate = useNavigate();

  useEffect (() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then((response) => {
        setNumberOfPokemon(response.data.count);

        for (let i=0; i<numberOfPokemon; i++) {
          if (response.data.results[i].name.slice(0,state.searchTerm.length).toLowerCase() == state.searchTerm) {
              axios.get("https://pokeapi.co/api/v2/pokemon/"+response.data.results[i].name).then((response2) => {
                if (response2.data.id < 10000) {
                  const name = response2.data.name[0].toUpperCase() + response2.data.name.slice(1); 
                  const imgurl = response2.data.sprites.front_default;
                  const pokedex_number = response2.data.id;

                  var abilities = [];
                  for(let j=0;j<response2.data.abilities.length;j++) {
                    abilities.push(
                      <p>
                        {response2.data.abilities[j].ability.name[0].toUpperCase() + response2.data.abilities[j].ability.name.slice(1)}
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
                  for(let j=0;j<response2.data.types.length;j++){
                    types.push(
                      <div style={{background: type_colors[response2.data.types[j].type.name]}}>
                        {response2.data.types[j].type.name[0].toUpperCase() + response2.data.types[j].type.name.slice(1)}
                      </div>
                    );
                  }

                  const detailsLink = "/pokemonDetails/" + pokedex_number;

                  setDisplayPokemon(current => [...current,
                    <a href={detailsLink}>
                    <div id={styles.pokemon_info_container}>
                      <p id={styles.pokemon_number}>
                        {pokedex_number}
                      </p>
                      <img src={imgurl} />
                      <div id={styles.pokemon_name}>
                        <p>
                          {name}
                        </p>
                      </div>
                      <div id={styles.pokemon_types}>
                        {types}
                      </div>
                      <div id={styles.pokemon_abilities}>
                        {abilities}
                      </div>
                    </div>
                    </a>
                  ]);
                }

              });
          }
        }
    });
  }, [numberOfPokemon]);

  return (
    <div id={styles.full_page}>
      <div id={styles.search_results}>
        {displayPokemon}
      </div>
    </div>
  );
}

export default Searchresults;
