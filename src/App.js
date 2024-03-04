import React from 'react'
import styles from './App.module.css';
import Home from './Home';
import Navbar from './Navbar';
import Searchresults from './Searchresults';
import Pokemondetails from './Pokemondetails';
import Abilitydetails from './Abilitydetails';
import Itemdetails from './Itemdetails';
import Movedetails from './Movedetails';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
        <Navbar /> 
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/searchResults" element={<Searchresults />}/>
          <Route exact path="/pokemonDetails/:id" element={<Pokemondetails />}/>
          <Route exact path="/abilityDetails/:id" element={<Abilitydetails />}/>
          <Route exact path="/itemDetails/:id" element={<Itemdetails />}/>
          <Route exact path="/moveDetails/:id" element={<Movedetails />}/>
        </Routes>
    </Router>
  );
}

export default App;
