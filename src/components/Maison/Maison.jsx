import { useParams } from 'react-router-dom';
import { useState } from 'react';
import logements from '../../assets/data/logements';
import './Maison.css';
import Dropdown from '../../components/dropdown.jsx';

function MaisonCard() {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);
  const [index, setIndex] = useState(0);

  if (!logement) return <h2>Logement introuvable</h2>;

  const total = logement.pictures.length;
  const full = Number(logement.rating);
  const empty = 5 - full;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <div className="logement-page">
      {/*Carousel */}
      <div className="gallery">
        <img
          src={logement.pictures[index]}
          alt={`${logement.title} – ${index + 1}`}
          className="gallery-img"
        />

        {total > 1 && (
          <>
            <button className="arrow left" onClick={prev}>‹</button>
            <button className="arrow right" onClick={next}>›</button>
            <span className="counter">
              {index + 1}/{total}
            </span>
          </>
        )}
      </div>

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
          <div className="host">
            <p className="host-name">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
          </div>

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