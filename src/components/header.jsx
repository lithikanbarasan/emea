import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import Logo from '../assets/ListEntryIcons/emea_venture_logo.png';

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/" className={styles.logoLink} onClick={closeMenu}>
          <img src={Logo} alt="EMEA Venture Logo" className={styles.logoImage} />
        </Link>
        <button
          className={styles.menuButton}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {/* Simple hamburger icon */}
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>
      </div>

      {/* Overlay for off-canvas menu */}
      {open && <div className={styles.backdrop} onClick={closeMenu} />}

      <nav
        id="site-nav"
        className={`${styles.nav} ${open ? styles.open : ''}`}
        onClick={closeMenu}
      >
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/software-development" className={styles.navLink}>Software Development</Link>
        <Link to="/healthcare" className={styles.navLink}>Healthcare</Link>
        <Link to="/mobile-apps" className={styles.navLink}>Mobile Apps</Link>
        <a
          href="https://neemaai.io/course"
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
