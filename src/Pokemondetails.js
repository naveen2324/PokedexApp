import React from 'react'
import axios from 'axios';
import styles from './Pokemondetails.module.css';
import {useState, useEffect} from 'react';
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

function Pokemondetails() {
  const {id} = useParams();
  const [mainDetails, setMainDetails] = useState('');
  const [stats, setStats] = useState('');
  const [miscInfo, setMiscInfo] = useState('');
  const [previousButton, setPreviousButton] = useState('');
  const [nextButton, setNextButton] = useState('');
  const [evolutionDetails, setEvolutionDetails] = useState('');
  const [LevelUpMoveDetails, setLevelUpMoveDetails] = useState('');
  const [tmMoveDetails, setTmMoveDetails] = useState('');
  const [latestVersion, setLatestVersion] = useState('');
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

  useEffect (() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/" + id).then(async (response) => {
      const height = response.data.height;
      const weight = response.data.weight;
      const base_exp = response.data.base_experience;
      const misc_details = await axios.get("https://pokeapi.co/api/v2/pokemon-species/" + id);
      const base_happiness = misc_details.data.base_happiness;
      const capture_rate = misc_details.data.capture_rate;
      const growth_rate = misc_details.data.growth_rate.name[0].toUpperCase() + misc_details.data.growth_rate.name.slice(1);

      const evolution_chain = await axios.get(misc_details.data.evolution_chain.url);

      const moves = response.data.moves;

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
          let url = "#/itemDetails/" + response.data.held_items[j].item.url.split("item/")[1].slice(0,response.data.held_items[j].item.url.split("item/")[1].length - 1);
          held_items.push(
            <a href={url}>
              <p class={styles.misc_value_group} id={styles.single_item}>
                {response.data.held_items[j].item.name[0].toUpperCase() + response.data.held_items[j].item.name.slice(1)}
              </p>
            </a>
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
        let url = "#/abilityDetails/" + response.data.abilities[j].ability.url.split("ability/")[1].slice(0,response.data.abilities[j].ability.url.split("ability/")[1].length - 1);
        abilities.push(
          <a href={url}>
            <p id={styles.single_ability}>
              {response.data.abilities[j].ability.name[0].toUpperCase() + response.data.abilities[j].ability.name.slice(1)}
            </p>
          </a>
        );
      }

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
          <p id={styles.pokemon_name}>
            <h1>{name}</h1>
          </p>
          <img id={styles.pokemon_img} src={imgurl} />
          <div id={styles.pokemon_number}>
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
      
      if (!isPortrait) {
        setStats(current => [...current, 
          <div id={styles.outer_stats_container}>
            <h1>Base Stats:</h1>
            <div id={styles.stats_container}>
              <div class={styles.stat_row}>
                <p class={styles.stat_labels}>HP:</p>
                <p class={styles.stat_values}>{hp}</p>
                <div class={styles.stat_bars} style={{width: hp/7+"vw", background: statBarColors(hp)}}></div>
              </div>
              <div class={styles.stat_row}>
                <p class={styles.stat_labels}>Attack: </p>
                <p class={styles.stat_values}>{atk}</p>
                <div class={styles.stat_bars} style={{width: atk/7+"vw", background: statBarColors(atk)}}></div>
              </div>
              <div class={styles.stat_row}>
                <p class={styles.stat_labels}>Defense: </p>
                <p class={styles.stat_values}>{def}</p>
                <div class={styles.stat_bars} style={{width: def/7+"vw", background: statBarColors(def)}}></div>
              </div>
              <div class={styles.stat_row}>
                <p class={styles.stat_labels}>Sp. Atk: </p>
                <p class={styles.stat_values}>{spatk}</p>
                <div class={styles.stat_bars} style={{width: spatk/7+"vw", background: statBarColors(spatk)}}></div>
              </div>
              <div class={styles.stat_row}>
                <p class={styles.stat_labels}>Sp. Def: </p>
                <p class={styles.stat_values}>{spdef}</p>
                <div class={styles.stat_bars} style={{width: spdef/7+"vw", background: statBarColors(spdef)}}></div>
              </div>
              <div class={styles.stat_row}>
                <p class={styles.stat_labels}>Speed: </p>
                <p class={styles.stat_values}>{speed}</p>
                <div class={styles.stat_bars} style={{width: speed/7+"vw", background: statBarColors(speed)}}></div>
              </div>
              <div class={styles.stat_row}>
                <p class={styles.stat_labels}>Total: </p>
                <p class={styles.stat_values}>{total}</p>
              </div>
            </div>
          </div>
        ]);
      }

      else {
        setStats(current => [...current, 
          <div id={styles.outer_stats_container}>
            <h1>Base Stats:</h1>
            <div id={styles.stats_container}>
              <div class={styles.stat_row}>
                <p class={styles.stat_labels}>HP:</p>
                <p class={styles.stat_values}>{hp}</p>
                <div class={styles.stat_bars} style={{width: hp/3+"vw", background: statBarColors(hp)}}></div>
              </div>
              <div class={styles.stat_row}>
                <p class={styles.stat_labels}>Attack: </p>
                <p class={styles.stat_values}>{atk}</p>
                <div class={styles.stat_bars} style={{width: atk/3+"vw", background: statBarColors(atk)}}></div>
              </div>
              <div class={styles.stat_row}>
                <p class={styles.stat_labels}>Defense: </p>
                <p class={styles.stat_values}>{def}</p>
                <div class={styles.stat_bars} style={{width: def/3+"vw", background: statBarColors(def)}}></div>
              </div>
              <div class={styles.stat_row}>
                <p class={styles.stat_labels}>Sp. Atk: </p>
                <p class={styles.stat_values}>{spatk}</p>
                <div class={styles.stat_bars} style={{width: spatk/3+"vw", background: statBarColors(spatk)}}></div>
              </div>
              <div class={styles.stat_row}>
                <p class={styles.stat_labels}>Sp. Def: </p>
                <p class={styles.stat_values}>{spdef}</p>
                <div class={styles.stat_bars} style={{width: spdef/3+"vw", background: statBarColors(spdef)}}></div>
              </div>
              <div class={styles.stat_row}>
                <p class={styles.stat_labels}>Speed: </p>
                <p class={styles.stat_values}>{speed}</p>
                <div class={styles.stat_bars} style={{width: speed/3+"vw", background: statBarColors(speed)}}></div>
              </div>
              <div class={styles.stat_row}>
                <p class={styles.stat_labels}>Total: </p>
                <p class={styles.stat_values}>{total}</p>
              </div>
            </div>
          </div>
        ]);
      }

      function buttonUrl() {  
        navigate('/');
      };

      let evolutions_array = [[], [], []];
      let evolutions = evolution_chain.data.chain;
      
      function setEvolutionsArray(stage, evolutions) {
        let name = evolutions.species.name[0].toUpperCase() + evolutions.species.name.slice(1,);
        let imgurl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon" + evolutions.species.url.split("pokemon-species")[1].slice(0,evolutions.species.url.split("pokemon-species")[1].length - 1) + ".png";
        let url = "#/pokemonDetails/" + evolutions.species.url.split("pokemon-species")[1].slice(1,evolutions.species.url.split("pokemon-species")[1].length - 1);

        evolutions_array[stage].push(
          <a href={url}>
            <div id={styles.evolution_stage} onClick={buttonUrl}>
              <img src={imgurl} />
              <p id={styles.evolution_name}>
                {name}
              </p>
            </div>
          </a>
        );

        for (let i=0; i<evolutions.evolves_to.length; i++) {
          setEvolutionsArray(stage + 1, evolutions.evolves_to[i]);
        }
      }

      setEvolutionsArray(0, evolutions);

      if (evolutions_array[1].length != 0) {
        for (let i=0; i<evolutions_array.length && evolutions_array[i].length != 0; i++) {
          if (i != 0) {
            setEvolutionDetails(current => [...current, 
              <FontAwesomeIcon class={styles.arrow_icons} icon={faRightLong} />
            ]);
          }
          setEvolutionDetails(current => [...current, 
            <div id={styles.evolution_column}>
                {evolutions_array[i]}
            </div>
          ]);
        }
      }
      else {
        setEvolutionDetails(current => [...current, 
            <p id={styles.no_evolve}>This Pokémon does not evolve.</p>
        ]);
      }

      const previous_pokemon = (await axios.get("https://pokeapi.co/api/v2/pokemon/" + (parseInt(id) - 1)));
      //const previous_img_url = previous_pokemon.data.sprites.front_default;
      const previous_img_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (parseInt(id) - 1) + ".png";
      const previous_name = previous_pokemon.data.name[0].toUpperCase() + previous_pokemon.data.name.slice(1);
      const previous_url = "#/pokemonDetails/" + (parseInt(pokedex_number) - 1);

      setPreviousButton(current => [...current, 
        <a href={previous_url}>
          <div id={styles.previous_button} onClick={buttonUrl}>
            <img src={previous_img_url} />
            <p class={styles.button_headings}>
              {previous_name}
            </p>
            <FontAwesomeIcon class={styles.arrow_icons} icon={faLeftLong} />
          </div>
        </a>
      ]);

      const next_pokemon = (await axios.get("https://pokeapi.co/api/v2/pokemon/" + (parseInt(id) + 1)));
      //const next_img_url = next_pokemon.data.sprites.front_default;
      const next_img_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (parseInt(id) + 1) + ".png";
      const next_name = next_pokemon.data.name[0].toUpperCase() + next_pokemon.data.name.slice(1);
      const next_url = "#/pokemonDetails/" + (parseInt(pokedex_number) + 1);

      setNextButton(current => [...current, 
        <a href={next_url}>
          <div id={styles.next_button} onClick={buttonUrl}>
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

  useEffect (() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/" + id).then(async (response) => {
      const moves = response.data.moves;

      const versions = {
        "x-y": 6,
        "omega-ruby-alpha-sapphire": 6.5,
        "sun-moon": 7,
        "ultra-sun-ultra-moon": 7.5,
        "sword-shield": 8,
        "brilliant-diamond-and-shining-pearl": 8.5,
        "scarlet-violet": 9
      }

      var latest_version = moves.at(-1).version_group_details.at(-1).version_group.name;
      
      for (let i = 0; i<moves.length; i++) {
        if (versions[moves[i].version_group_details.at(-1).version_group.name] > versions[latest_version]) {
          latest_version = moves[i].version_group_details.at(-1).version_group.name
        }
      }

      var level_up_moves_array = [];
      var tm_moves_array = [];

      for (let i=0; i<moves.length; i++) {
        for (let j = moves[i].version_group_details.length - 1; j > -1; j--) {
          if (moves[i].version_group_details[j].move_learn_method.name == "level-up" && moves[i].version_group_details[j].version_group.name == latest_version) {
            const move_details = await axios.get(moves[i].move.url);
            
            var level = moves[i].version_group_details[j].level_learned_at;
            var name = moves[i].move.name[0].toUpperCase() + moves[i].move.name.slice(1,);
            var type = move_details.data.type.name[0].toUpperCase() + move_details.data.type.name.slice(1,);
            var url = "#/moveDetails/" + move_details.data.id;

            var power = 0;
            if (move_details.data.power != null) {
              power = move_details.data.power
            }
            else {
              power = "-"
            }

            var accuracy = 0;
            if (move_details.data.accuracy != null) {
              accuracy = move_details.data.accuracy
            }
            else {
              accuracy = "-"
            }

            let move = {
              "level": level,
              "name": name,
              "type": type,
              "power": power,
              "accuracy": accuracy,
              "url": url
            };
            level_up_moves_array.push(move);
            break;
          }

          if (moves[i].version_group_details[j].version_group.name != latest_version) {
            break;
          }
        }
      }

      level_up_moves_array.sort(function(a,b) {
        return a.level - b.level
      });

      for (let i=0; i<moves.length; i++) {
        for (let j = moves[i].version_group_details.length - 1; j > -1; j--) {
          if (moves[i].version_group_details[j].move_learn_method.name == "machine" && moves[i].version_group_details[j].version_group.name == latest_version) {
            const move_details = await axios.get(moves[i].move.url);
            
            var name = moves[i].move.name[0].toUpperCase() + moves[i].move.name.slice(1,);
            var type = move_details.data.type.name[0].toUpperCase() + move_details.data.type.name.slice(1,);
            var url = "#/moveDetails/" + move_details.data.id;

            var power = 0;
            if (move_details.data.power != null) {
              power = move_details.data.power
            }
            else {
              power = "-"
            }

            var accuracy = 0;
            if (move_details.data.accuracy != null) {
              accuracy = move_details.data.accuracy
            }
            else {
              accuracy = "-"
            }

            let move = {
              "name": name,
              "type": type,
              "power": power,
              "accuracy": accuracy,
              "url": url
            };

            tm_moves_array.push(move);
            break;
          }

          if (moves[i].version_group_details[j].version_group.name != latest_version) {
            break;
          }
        }
      }

      latest_version = latest_version.replace(/-/g, " ");
      setLatestVersion(latest_version[0].toUpperCase() + latest_version.slice(1,));

      setLevelUpMoveDetails(current => [...current, 
          <div class={styles.heading_row}>
            <p class={styles.move_level} style={{fontWeight: "bold"}}>Level Learned</p>
            <p class={styles.move_name} style={{fontWeight: "bold"}}>Move</p>
            <p class={styles.move_type} style={{fontWeight: "bold", border: 0}}>Type</p>
            <p class={styles.move_power} style={{fontWeight: "bold"}}>Power</p>
            <p class={styles.move_accuracy} style={{fontWeight: "bold"}}>Accuracy</p>
          </div>
      ]);

      for (let i=0; i<level_up_moves_array.length; i++) {
        setLevelUpMoveDetails(current => [...current, 
          <a href={level_up_moves_array[i].url}>
            <div id={styles.move_row}>
              <p class={styles.move_level}>{level_up_moves_array[i].level}</p>
              <p class={styles.move_name}>{level_up_moves_array[i].name}</p>
              <p class={styles.move_type} style={{background: type_colors[level_up_moves_array[i].type.toLowerCase()]}}>{level_up_moves_array[i].type}</p>
              <p class={styles.move_power}>{level_up_moves_array[i].power}</p>
              <p class={styles.move_accuracy}>{level_up_moves_array[i].accuracy}</p>
            </div>
          </a>
        ]);
      }

      setTmMoveDetails(current => [...current, 
        <div class={styles.heading_row}>
          <p class={styles.move_name} style={{fontWeight: "bold"}}>Move</p>
          <p class={styles.move_type} style={{fontWeight: "bold", border: 0}}>Type</p>
          <p class={styles.move_power} style={{fontWeight: "bold"}}>Power</p>
          <p class={styles.move_accuracy} style={{fontWeight: "bold"}}>Accuracy</p>
        </div>
    ]);

      for (let i=0; i<tm_moves_array.length; i++) {
        setTmMoveDetails(current => [...current, 
          <a href={tm_moves_array[i].url}>
            <div id={styles.move_row}>
              <p class={styles.move_name}>{tm_moves_array[i].name}</p>
              <p class={styles.move_type} style={{background: type_colors[tm_moves_array[i].type.toLowerCase()]}}>{tm_moves_array[i].type}</p>
              <p class={styles.move_power}>{tm_moves_array[i].power}</p>
              <p class={styles.move_accuracy}>{tm_moves_array[i].accuracy}</p>
            </div>
          </a>
        ]);
      }

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
      <div class={styles.rows}>
        <div id={styles.outer_evolution_container}>
          <h1>Evolution Details:</h1>
          <div id={styles.inner_evolution_container}>
            {evolutionDetails}
          </div>
        </div>
      </div>
      <div class={styles.move_row}>
        <div id={styles.outer_move_container}>
          <h1>Moves Learned by Level Up:</h1>
          <div id={styles.inner_move_container}>
            {LevelUpMoveDetails}
          </div>
        </div>
        <div id={styles.outer_move_container}>
          <h1>Moves Learned by TM:</h1>
          <div id={styles.inner_move_container}>
            {tmMoveDetails}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemondetails;
