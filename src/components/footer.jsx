import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
  <div className={styles.footerContent}>
    <div className={styles.left}>
      <Link to="/" className={styles.logo}>EMEA Venture Builder</Link>
      <p className={styles.copyright}>© 2025 EMEA Venture. Todos los derechos reservados.</p>
    </div>

    <div className={styles.right}>
      <a href="https://www.linkedin.com/company/emea-venture/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className={styles.icon} />
      </a>
      <a href="https://www.instagram.com/speaker_nema/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className={styles.icon} />
      </a>
      <Link to="/contact" className={styles.contactButton}>Contact Us</Link>
    </div>
  </div>
</footer>
  );
}

export default Footer;
