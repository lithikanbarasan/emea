import React from 'react';
import styles from './MainPage.module.css';
import BackgroundImage from '../../assets/ListEntryIcons/ai.webp'; // Replace with your image path

const MainPage = () => {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className={styles.overlay}>
        <h1>
          <strong>Unlock the power of data and AI</strong>
          <br />
          through Federated Learning
        </h1>
        <p>
          The first SaaS platform for privacy-preserving AI model training
          through Federated Learning. Maximize the value of your data and AI
          while maintaining privacy and security across data silos, as data is never moved.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.primary}>BOOK A DEMO</button>
          <button className={styles.secondary}>CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
