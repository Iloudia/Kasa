import { Link } from 'react-router-dom';
import './Accueil.css';
import BgBanner from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
import logements from '../../assets/data/logements.js';
import Banner from '../../components/Banner/banner.jsx';

function Accueil() {
  return (
    <div className="home">
      <Banner title={"Chez vous, partout et ailleurs"} bgImg={BgBanner} />
      <section className="card-container">
        {logements.map(({ id, title, cover }) => (
          <Link
            to={`/logement/${id}`}
            key={id}
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