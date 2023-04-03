import sun from "../assets/soleil.png";
import moon from "../assets/lune.png";

function Lumos(type) {

    console.log(type);
    if (type === 0) {

        return (
            <div className="sun">
              <button class="moon-btn">
                <img src={sun} alt="moon" />
              </button>
            </div>
          );

    }
    if (type === 1) {

        return (
            <div className="moon">
              <button class="sun-btn">
                <img src={moon} alt="soleil" />
              </button>
            </div>
          );
    }

}

export default Lumos;