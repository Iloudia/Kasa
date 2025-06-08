
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/logo.svg'

function Footer() {
  return (
    
    <footer>
      <Link to="/">
          <img src={logo} alt="Kasa Logo" className="nav-logo-footer" />
          </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
