
import { Link } from 'react-router-dom';
import './Erreur.css';

function Erreur() {
  return (
    <div class="erreurPage">
        <h1 class="h1">404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" class="homeBack">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Erreur;
