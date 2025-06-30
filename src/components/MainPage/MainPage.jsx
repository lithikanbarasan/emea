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
          <strong>We develop AI based software from apps to automation tools</strong>
          
        </h1>
        <p>
        We specialize in full-cycle software development from designing intuitive mobile apps to building powerful automation such as machine learning, predictive systems, data analytics. We turn your idea into scalable, secure, smart, and innovative solutions
        </p>
        <div className={styles.buttonGroup}>
        <Link to="/contact" className={styles.secondary}>CONTACT US</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
