import { Link } from 'react-router-dom';
import './Accueil.css';
import banner from '../../assets/apropos-banner.jpg';
import logements from '../../assets/json/maison.json';

function Accueil() {
  return (
    <div className="home">
      <section className="banner" style={{ backgroundImage: `url(${banner})` }}>
        <h1><b>Chez vous, partout et ailleurs</b></h1>
      </section>

      <section className="card-container">
        {logements.map(({ id, title, cover }) => (
          <Link
            key={id}
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