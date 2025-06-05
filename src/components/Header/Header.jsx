// src/components/Header/Header.jsx
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        zIndex: 1000, // pour qu’il reste au-dessus du reste
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}>
        <h1>Le header</h1>
        <Link to="/maison">Voir les maisons</Link>
    </header>
  );
}

export default Header;
