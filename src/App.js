import React from 'react'
import styles from './App.module.css';
import Home from './Home';
import Navbar from './Navbar';
import Searchresults from './Searchresults';
import Pokemondetails from './Pokemondetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Navbar /> 
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/searchResults" element={<Searchresults />}/>
          <Route exact path="/pokemonDetails/:id" element={<Pokemondetails />}/>
        </Routes>
    </Router>
  );
}

export default App;
