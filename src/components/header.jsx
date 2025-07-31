import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import Logo from '../assets/ListEntryIcons/emea_venture_logo.png'; // keep or adjust path if needed

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="EMEA Venture Logo" className={styles.logoImage} />
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/software-development" className={styles.navLink}>Software Development</Link>
        <Link to="/healthcare" className={styles.navLink}>Healthcare</Link>
        <Link to="/mobile-apps" className={styles.navLink}>Mobile Apps</Link>
      
      

        {/* External link for Academy */}
        <a
          href="https://neemaai.io"
          className={styles.navLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Academy
        </a>
      </nav>
    </header>
  );
}

export default Header;
