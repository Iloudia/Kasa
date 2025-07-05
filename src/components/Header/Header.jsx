import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Kasa Logo" className="nav-logo" />
      </Link>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          end
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
