import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
  <div className={styles.leftSection}>
    <Link to="/" className={styles.logo}>Emea Venture Builder</Link>
    <p className={styles.address}>Av. Diagonal 452, Grácia 08006 Barcelona</p>
  </div>

  <div className={styles.centerSection}>
    <a href="https://www.linkedin.com/company/emea-venture/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className={styles.icon} />
    </a>
    <a href="https://www.instagram.com/speaker_nema/" target="_blank" rel="noopener noreferrer">
      <FaInstagram className={styles.icon} />
    </a>
  </div>

  <div className={styles.rightSection}>
    <p className={styles.copyright}>© 2025 EMEA Venture Builder. All Rights Reserved.</p>
  </div>
</div>

    </footer>
  );
}

export default Footer;
