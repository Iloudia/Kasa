// src/components/Accueil/Accueil.jsx
import { Link } from 'react-router-dom';
import './Accueil.css';

function Accueil({ titre, image }) {
  return (
    <div>
        <h1>Bonjour</h1>
        <Link to="/maison">Voir les maisons</Link>
    </div>
  );
}

export default Accueil;
