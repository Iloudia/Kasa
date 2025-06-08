
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <header>
     <Link to="/">
    <img src={logo} alt="Kasa Logo" className="nav-logo" />
    </Link>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">A propos</Link>
        </nav>
    </header>
  );
}

export default Header;
