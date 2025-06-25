import React from 'react';
import styles from './MainPage.module.css';
import BackgroundImage from '../../assets/ListEntryIcons/ai.webp'; // Replace with your image path
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className={styles.overlay}>
        <h1>
          <strong>Empowering Innovation with Custom Software</strong>
          <br />
          from Apps to Automation
        </h1>
        <p>
        We specialize in full-cycle software development — from intuitive mobile apps to powerful automation tools and
  intelligent data analysis solutions. Turn your ideas into scalable, secure, and smart digital products that drive real impact.
        </p>
        <div className={styles.buttonGroup}>
        <Link to="/contact" className={styles.secondary}>CONTACT US</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
