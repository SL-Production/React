import { useEffect, useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import PropTypes from "prop-types";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",

  },
  {

    name: "squirtle",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },

  {
    name: "pikachu",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)

  useEffect(() => {
    alert(`hello pokemon trainer :)`);
    console.log(`[LOADER]Le composant App s'est load avec succès.`);
  },
   []
   )


  const handleNextPokemon = () => {

    if (pokemonList[pokemonIndex].name === "pikachu") {
      alert(`Pika pikachu !!!`);
    }

    console.log(`Nouveau clic sur le bouton suivant, pokemonIndex = ${pokemonIndex +1}`);

    if (pokemonIndex < pokemonList.length - 1) {
      console.log(`Il y a encore des pokémons à afficher, pokemonIndex = ${pokemonIndex +1}`);
      setPokemonIndex(pokemonIndex + 1)
    } else {
      console.log(`Il n'y a plus de pokémons à afficher, pokemonIndex = ${pokemonIndex+1}`);
      setPokemonIndex(0)
    }
  }

  const handlePreviousPokemon = () => {

    if (pokemonList[pokemonIndex].name === "pikachu") {
      alert(`Pika pikachu !!!`);
    }

    console.log(`Nouveau clic sur le bouton précédent, pokemonIndex = ${pokemonIndex +1}`);

    if (pokemonIndex > 0) {
      console.log(`Il y a encore des pokémons à afficher, pokemonIndex = ${pokemonIndex +1}`);
      setPokemonIndex(pokemonIndex - 1)
    } else {
      console.log(`Il n'y a plus de pokémons à afficher, pokemonIndex = ${pokemonIndex +1}`)
      setPokemonIndex(pokemonList.length - 1)
    }
  }

  return (
    <div className="App">
      <PokemonCard name={pokemonList[pokemonIndex].name} imgSrc={pokemonList[pokemonIndex].imgSrc} />
      <br/>
      <br/>
      <button onClick={handlePreviousPokemon}>Pokémon précédent</button>
      <button onClick={handleNextPokemon}>Pokemon suivant</button>
    </div>


  )
}

export default App
