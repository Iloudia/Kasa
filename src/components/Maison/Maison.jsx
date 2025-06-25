import { useParams } from 'react-router-dom';
import { useState } from 'react';
import logements from '../../assets/data/logements';
import './Maison.css';
import Dropdown from '../Dropdown/dropdown.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import { Navigate } from 'react-router-dom';
import Host from '../Host/Host.jsx';

function MaisonCard() {
  const { id } = useParams();
  const logement = logements.find((log) => log.id === id);
  const [index, setIndex] = useState(0);

if (!logement) {
  return <Navigate to="/*" replace />;
}

  const total = logement.pictures.length;
  const full = Number(logement.rating);
  const empty = 5 - full;


  return (
    <div className="logement-page">
      {/*Carousel */}
      <Carousel
        pictures={logement.pictures}
        title={logement.title}
        index={index}
        setIndex={setIndex}
      />

      {/*En-tête*/}
      <div className="header">
        <div className="left">
          <h1 className="title">{logement.title}</h1>
          <p className="location">{logement.location}</p>

          <div className="tags">
            {logement.tags.map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="right">
         <Host name={logement.host.name} picture={logement.host.picture} />

          <div className="rating">
            {Array.from({ length: full }).map((_, i) => (
              <i key={`f-${i}`} className="fa-solid fa-star star filled"></i>
            ))}
            {Array.from({ length: empty }).map((_, i) => (
              <i key={`e-${i}`} className="fa-regular fa-star star"></i>
            ))}
          </div>
        </div>
      </div>

      {/*Panneaux déroulants */}

      <section className="dropdowns">
        <Dropdown
          title="Description"
          content={logement.description}
        />

        <Dropdown
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((eq, i) => (
                <li key={i}>{eq}</li>
              ))}
            </ul>
          }
        />
      </section>
    </div>
  );
}

export default MaisonCard;