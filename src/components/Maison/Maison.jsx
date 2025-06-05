// src/components/MaisonCard/MaisonCard.jsx
import { Link } from 'react-router-dom';
import './Maison.css';

function MaisonCard({ titre, image }) {
  return (
    <div className="maison-card">
        <button><Link to="/">Accueil</Link></button>
        <h1>Maison</h1>
        <img src={image} alt={titre} />
        <h2>{titre}</h2>
    </div>
  );
}

export default MaisonCard;
