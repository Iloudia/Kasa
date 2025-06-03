// src/components/MaisonCard/MaisonCard.jsx
import './MaisonCard.css';

function MaisonCard({ titre, image }) {
  return (
    <div className="maison-card">
      <img src={image} alt={titre} />
      <h2>{titre}</h2>
    </div>
  );
}

export default MaisonCard;
