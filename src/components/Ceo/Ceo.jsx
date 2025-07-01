// CeoTestimonial.jsx
import React from 'react';
import styles from './Ceo.module.css';
import { FaLinkedin } from 'react-icons/fa';

const Ceo = ({ image, quote, name, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.textSection}>
        <p className={styles.quote}>"{quote}"</p>
        <p className={styles.name}>{name}</p>
        <p className={styles.title}>{title}</p>
        <a href="https://www.linkedin.com/in/neema-balolebwami-nelly-8a2226107/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default Ceo;
