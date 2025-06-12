import { Link } from 'react-router-dom';
import './Accueil.css';
import banner from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
import logements from '../../assets/data/logements.js';

function Accueil() {
  return (
    <div className="home">
      <section className="banner" style={{ backgroundImage: `url(${banner})` }}>
        <h1><b>Chez vous, partout et ailleurs</b></h1>
      </section>

      <section className="card-container">
        {logements.map(({ id, title, cover }) => (
          <Link
            to={`/logement/${id}`}
            className="location-card"
            style={{ backgroundImage: `url(${cover})` }}
          >
            <span className="location-title">{title}</span>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Accueil;