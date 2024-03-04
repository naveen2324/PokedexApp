import React from 'react'
import styles from './Navbar.module.css';
import {useState} from 'react';
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const [searchText, setSearchText] = useState('');

  const navigate = useNavigate();

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  function handleClick() {
    if (searchText == "") {
      return
    }
    
    if (window.location.href.split("/")[(window.location.href.split("/").length)-1] == "searchResults") {
      window.location.reload();
    }

    navigate('/searchResults', {
      state: {
        searchTerm: searchText
      }
    });
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  function handleClickLogo() {
    navigate('/');
  }

  return (
    <div id={styles.navbar}>
      <img id={styles.navbar_logo} src={require('./logo.png')} onClick={handleClickLogo} />
      <div id={styles.search_bar_container}>
        <input type="text" id={styles.search_bar} onChange={handleChange} onKeyPress={handleEnter}></input>
            <button id={styles.search_button} onClick={handleClick}>
              <FontAwesomeIcon id={styles.search_icon} icon={faMagnifyingGlass} />
            </button>
      </div>
    </div>
  );
}

export default Navbar;
