import React from 'react'
import axios from 'axios';
import styles from './Searchresults.module.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Searchresults() {
  const [allPokemon, setAllPokemon] = useState('');
  const [displayPokemon, setDisplayPokemon] = useState('');
  const [numberOfPokemon, setNumberOfPokemon] = useState('');
  const [displayAbilities, setDisplayAbilities] = useState('');
  const [numberOfAbilities, setNumberOfAbilities] = useState('');
  const [displayItems, setDisplayItems] = useState('');
  const [numberOfItems, setNumberOfItems] = useState('');
  const [displayMoves, setDisplayMoves] = useState('');
  const [numberOfMoves, setNumberOfMoves] = useState('');

  const [pokemonChecked, setPokemonChecked] = useState(true);
  const [movesChecked, setMovesChecked] = React.useState(true);
  const [itemsChecked, setItemsChecked] = React.useState(true);
  const [abilitiesChecked, setAbilitiesChecked] = React.useState(true);

  var pokemonFound = true;
  var movesFound = true;
  var itemsFound = true;
  var abilitiesFound = true;

  const { state } = useLocation();
  const navigate = useNavigate();

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
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then((response) => {
      setNumberOfPokemon(response.data.count);
      state.searchTerm = state.searchTerm.replaceAll(" ", "-");

      for (let i = 0; i < numberOfPokemon; i++) {
        if (response.data.results[i].name.toLowerCase().includes(state.searchTerm.toLowerCase()) == true) {
        //if (response.data.results[i].name.slice(0, state.searchTerm.length).toLowerCase() == state.searchTerm) {
          if (response.data.results[i].url.split("/pokemon/")[1].slice(0, -1) < 10000) {
            pokemonFound = false;

            axios.get("https://pokeapi.co/api/v2/pokemon/" + response.data.results[i].name).then((response2) => {
              const name = response2.data.name[0].toUpperCase() + response2.data.name.slice(1);
              const imgurl = response2.data.sprites.front_default;
              const pokedex_number = response2.data.id;

              var abilities = [];
              for (let j = 0; j < response2.data.abilities.length; j++) {
                abilities.push(
                  <p>
                    {response2.data.abilities[j].ability.name[0].toUpperCase() + response2.data.abilities[j].ability.name.slice(1)}
                  </p>
                );
              }

              var types = [];
              for (let j = 0; j < response2.data.types.length; j++) {
                types.push(
                  <div style={{ background: type_colors[response2.data.types[j].type.name] }}>
                    {response2.data.types[j].type.name[0].toUpperCase() + response2.data.types[j].type.name.slice(1)}
                  </div>
                );
              }

              const detailsLink = "#/pokemonDetails/" + pokedex_number;

              setDisplayPokemon(current => [...current,
              <a href={detailsLink}>
                <div id={styles.info_container}>
                  <p id={styles.pokemon_number}>
                    No. {pokedex_number}
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

            });
          }
        }
      }

      if (pokemonFound == true) {
        document.getElementById("pokemon_div").style.display = "none";
        document.getElementById("pokemon_checkbox").style.display = "none";
      }

      else {
        document.getElementById("pokemon_div").style.display = "flex";
        document.getElementById("pokemon_checkbox").style.display = "flex";
      }

    });

  }, [numberOfPokemon]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/ability?limit=100000&offset=0").then((response) => {
      setNumberOfAbilities(response.data.count);

      for (let i = 0; i < numberOfAbilities; i++) {
        if (response.data.results[i].name.toLowerCase().includes(state.searchTerm.toLowerCase()) == true) {
        //if (response.data.results[i].name.slice(0, state.searchTerm.length).toLowerCase() == state.searchTerm) {
          if (response.data.results[i].url.split("/ability/")[1].slice(0, -1) < 10000) {
            abilitiesFound = false;

            axios.get("https://pokeapi.co/api/v2/ability/" + response.data.results[i].name).then((response2) => {

              const name = response2.data.name[0].toUpperCase() + response2.data.name.slice(1);
              var description = "";

              let i = 0;

              if (response2.data.effect_entries.length == 0) {
                description = "This ability does not yet have a description.";
              }

              else {
                while (1) {
                  if (response2.data.effect_entries[i].language.name == "en") {
                    description = response2.data.effect_entries[i].short_effect;
                    break;
                  }
                  i++;
                }
              }

              const detailsLink = "#/abilityDetails/" + response2.data.id;

              setDisplayAbilities(current => [...current,
              <a href={detailsLink}>
                <div id={styles.info_container}>
                  <p id={styles.ability_name}>
                    {name}
                  </p>
                  <p id={styles.ability_description}>
                    {description}
                  </p>
                </div>
              </a>
              ]);

            });
          }
        }
      }

      if (abilitiesFound == true) {
        document.getElementById("abilities_div").style.display = "none";
        document.getElementById("abilities_checkbox").style.display = "none";
      }

      else {
        document.getElementById("abilities_div").style.display = "flex";
        document.getElementById("abilities_checkbox").style.display = "flex";
      }

    });
  }, [numberOfAbilities]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/item?limit=100000&offset=0").then((response) => {
      setNumberOfItems(response.data.count);

      for (let i = 0; i < numberOfItems; i++) {
        if (response.data.results[i].name.toLowerCase().includes(state.searchTerm.toLowerCase()) == true) {
        //if (response.data.results[i].name.slice(0, state.searchTerm.length).toLowerCase() == state.searchTerm) {
          if (response.data.results[i].url.split("/item/")[1].slice(0, -1) < 10000) {
            itemsFound = false;
            axios.get("https://pokeapi.co/api/v2/item/" + response.data.results[i].name).then((response2) => {
              const name = response2.data.name[0].toUpperCase() + response2.data.name.slice(1);
              const imgurl = response2.data.sprites.default;
              var description = "";

              let i = 0;

              if (response2.data.effect_entries.length == 0) {
                description = "This item does not yet have a description.";
              }

              else {
                while (1) {
                  if (response2.data.effect_entries[i].language.name == "en") {
                    description = response2.data.effect_entries[i].short_effect;
                    break;
                  }
                  i++;
                }
              }

              const detailsLink = "#/itemDetails/" + response2.data.id;

              setDisplayItems(current => [...current,
              <a href={detailsLink}>
                <div id={styles.info_container}>
                  <p id={styles.item_name}>
                    {name}
                  </p>
                  <img id={styles.item_image} src={imgurl} />
                  <p id={styles.item_description}>
                    {description}
                  </p>
                </div>
              </a>
              ]);

            });
          }
        }

      }

      if (itemsFound == true) {
        document.getElementById("items_div").style.display = "none";
        document.getElementById("items_checkbox").style.display = "none";
      }

      else {
        document.getElementById("items_div").style.display = "flex";
        document.getElementById("items_checkbox").style.display = "flex";
      }

    });
  }, [numberOfItems]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/move?limit=100000&offset=0").then((response) => {
      setNumberOfMoves(response.data.count);

      for (let i = 0; i < numberOfMoves; i++) {
        if (response.data.results[i].name.toLowerCase().includes(state.searchTerm.toLowerCase()) == true) {
        //if (response.data.results[i].name.slice(0, state.searchTerm.length).toLowerCase() == state.searchTerm) {
          movesFound = false;

          axios.get("https://pokeapi.co/api/v2/move/" + response.data.results[i].name).then((response2) => {
            const name = response2.data.name[0].toUpperCase() + response2.data.name.slice(1);
            const move_type = response2.data.type.name[0].toUpperCase() + response2.data.type.name.slice(1);

            var power = "";
            var accuracy = "";

            if (response2.data.power == null) {
              power = "N/A";
            }

            else {
              power = response2.data.power;
            }

            if (response2.data.accuracy == null) {
              accuracy = "N/A";
            }

            else {
              accuracy = response2.data.accuracy;
            }

            var description = "";
            let i = 0;
            if (response2.data.effect_entries.length == 0) {
              description = "This move does not yet have a description.";
            }

            else {
              while (1) {
                if (response2.data.effect_entries[i].language.name == "en") {
                  description = response2.data.effect_entries[i].short_effect;
                  description = description.replaceAll("$effect_chance", response2.data.effect_chance);
                  break;
                }
                i++;
              }
            }

            const detailsLink = "#/moveDetails/" + response2.data.id;

            setDisplayMoves(current => [...current,
            <a href={detailsLink}>
              <div id={styles.info_container}>
                <p id={styles.move_name}>
                  {name}
                </p>
                <p id={styles.move_description}>
                  {description}
                </p>
                <p id={styles.move_type} style={{ background: type_colors[response2.data.type.name] }}>
                  {move_type}
                </p>
                <p id={styles.move_power}>
                  <p style={{ fontWeight: "bold", fontSize: "1vw" }}>Pow: </p>{power}
                </p>
                <p id={styles.move_accuracy}>
                  <p style={{ fontWeight: "bold", fontSize: "1vw" }}>Acc: </p>{accuracy}
                </p>
              </div>
            </a>
            ]);

          });
        }
      }

      if (movesFound == true) {
        document.getElementById("moves_div").style.display = "none";
        document.getElementById("moves_checkbox").style.display = "none";
      }

      else {
        document.getElementById("moves_div").style.display = "flex";
        document.getElementById("moves_checkbox").style.display = "flex";
      }

    });
  }, [numberOfMoves]);

  const handleChangePokemon = () => {
    const pokemonDiv = document.getElementById("pokemon_div");

    if (pokemonChecked == true) {
      pokemonDiv.style.display = "none";
    }

    else {
      pokemonDiv.style.display = "flex";
    }
    setPokemonChecked(!pokemonChecked);
  };

  const handleChangeMoves = () => {
    const movesDiv = document.getElementById("moves_div");

    if (movesChecked == true) {
      movesDiv.style.display = "none";
    }

    else {
      movesDiv.style.display = "flex";
    }
    setMovesChecked(!movesChecked);
  };

  const handleChangeAbilities = () => {
    const abilitiesDiv = document.getElementById("abilities_div");

    if (abilitiesChecked == true) {
      abilitiesDiv.style.display = "none";
    }

    else {
      abilitiesDiv.style.display = "flex";
    }
    setAbilitiesChecked(!abilitiesChecked);
  };

  const handleChangeItems = () => {
    const itemsDiv = document.getElementById("items_div");

    if (itemsChecked == true) {
      itemsDiv.style.display = "none";
    }

    else {
      itemsDiv.style.display = "flex";
    }
    setItemsChecked(!itemsChecked);
  };

  return (
    <div id={styles.full_page}>
      <div id={styles.filter_box}>
        <h1 id="filter_heading">Filter:</h1>
        <div class={styles.checkbox_div} id="pokemon_checkbox">
          <label class={styles.checkbox_text}>Pokemon
            <input type="checkbox" checked={pokemonChecked} onChange={handleChangePokemon} class={styles.checkbox} />
          </label>
        </div>
        <div class={styles.checkbox_div} id="abilities_checkbox">
          <label class={styles.checkbox_text}>Abilites
            <input type="checkbox" checked={abilitiesChecked} onChange={handleChangeAbilities} class={styles.checkbox} />
          </label>
        </div>
        <div class={styles.checkbox_div} id="items_checkbox">
          <label class={styles.checkbox_text}>Items
            <input type="checkbox" checked={itemsChecked} onChange={handleChangeItems} class={styles.checkbox} />
          </label>
        </div>
        <div class={styles.checkbox_div}>
          <label class={styles.checkbox_text} id="moves_checkbox">Moves
            <input type="checkbox" checked={movesChecked} onChange={handleChangeMoves} class={styles.checkbox} />
          </label>
        </div>
      </div>
      <div id={styles.search_results}>
        <div class={styles.results_section} id="pokemon_div">
          <h1 class={styles.search_title}>Pokemon Results:</h1>
          {displayPokemon}
        </div>
        <div class={styles.results_section} id="abilities_div">
          <h1 class={styles.search_title}>Ability Results:</h1>
          {displayAbilities}
        </div>
        <div class={styles.results_section} id="items_div">
          <h1 class={styles.search_title}>Item Results:</h1>
          {displayItems}
        </div>
        <div class={styles.results_section} id="moves_div">
          <h1 class={styles.search_title}>Move Results:</h1>
          {displayMoves}
        </div>
      </div>
    </div>
  );
}

export default Searchresults;
