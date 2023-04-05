import PropTypes from "prop-types";

function NavBar(index) {

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
        <div>
            <button onClick={handlePreviousPokemon}>Pokémon précédent</button>
            <button onClick={handleNextPokemon}>Pokemon suivant</button>
        </div>
    );

}

export default NavBar;