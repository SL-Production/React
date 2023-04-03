function PokemonCard(pokemon) {

  const { name, imgSrc } = pokemon;

  if (!imgSrc) {
    let noImg = "???";

    return (
      <div>
        <figure>
          <p>{noImg}</p>
          <figcaption>{name}</figcaption>
        </figure>
      </div>
    );
  } else {

    return (
      <div>
        <figure>
            <img src={imgSrc} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
      </div>
    );
  }
}

export default PokemonCard;