// CeoTestimonial.jsx
import React from 'react';
import styles from './Ceo.module.css';

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
      </div>
    </div>
  );
};

export default Ceo;
