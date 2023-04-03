import sun from "../assets/soleil.png";

function Clothes() {
  return (
    <div className="HelloWild">
      <h1>🪵 Hello, Wild Code School 🪵</h1>
      <button>Cliques moi dessus pour voir mes vêtements...</button>
      <br />
      <br />
      <br />
      <br />
      <button class="sun-btn">
        <img src={sun} alt="soleil" />
      </button>
    </div>
  );
}

export default Clothes;