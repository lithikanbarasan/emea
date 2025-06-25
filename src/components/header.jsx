import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
    return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">EMEA Venture Builder</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/projects" className={styles.navLink}>Projects</Link>
        <Link to="/blog" className={styles.navLink}>Blog</Link>
        <Link to="/contact" className={styles.navLink}>Contact Us</Link>
      </nav>
    </header>
    );
}
export default Header;

