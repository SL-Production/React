import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

let pokemon1 = pokemonList[0];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PokemonCard name={pokemon1.name} imgSrc={pokemon1.imgSrc}/>
    </div>

    
  )
}

export default App
