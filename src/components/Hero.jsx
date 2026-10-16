import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-image">
        <div className="hero-text">
          <span>AN INSPIRING GREATNESS SERIES</span>
          <span id="hero-head">BLACK BADGE CULLINAN</span>
          <span>BY CYRILL KONGO</span>
          <Link to="/InspireGreatness">
          <button>
            <span>DISCOVER MORE</span>
          </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;
