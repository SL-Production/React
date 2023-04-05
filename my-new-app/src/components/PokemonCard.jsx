import PropTypes from "prop-types";

function PokemonCard(pokemon) {

  const { name, imgSrc } = pokemon;
  const [pokemonIndex, setPokemonIndex] = useState(0)

  PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }

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