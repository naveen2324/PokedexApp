import React from 'react'
import styles from './Home.module.css';
import {useState} from 'react';
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const [searchText, setSearchText] = useState('');

  const navigate = useNavigate();

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  function handleClick() {
    console.log(window.location.href.split("/")[(window.location.href.split("/").length)-1]);
    if (window.location.href.split("/")[(window.location.href.split("/").length)-1] == "searchResults") {
      window.location.reload();
    }

    navigate('/searchResults', {
      state: {
        searchTerm: searchText
      }
    });
  };

  return (
    <div id={styles.page_container}>
      <div id={styles.home_container}>
        <h1>Welcome to the</h1>
        <img src={require('./logo.png')} />
        <input type="text" id={styles.search_bar} onChange={handleChange}></input>
        <button id={styles.search_button} onClick={handleClick}>
            <FontAwesomeIcon id={styles.search_icon} icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
}

export default Home;
