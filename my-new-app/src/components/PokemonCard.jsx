function PokemonCard() {

  let pokemon1 = pokemonList[1];

  if (!pokemon1.imgSrc) {
    let test = "???";

    return (
      <div>
        <figure>
          <p>{test}</p>
          <figcaption>{pokemon1.name}</figcaption>
        </figure>
      </div>
    );
  } else {

    console.log(pokemon1.imgSrc);

    return (
      <div>
        <figure>
            <img src={pokemon1.imgSrc} alt={pokemon1.name} />
            <figcaption>{pokemon1.name}</figcaption>
        </figure>
      </div>
    );
  }
}


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

export default PokemonCard;