import React from 'react';
import styles from './MainPage.module.css';
import BackgroundVideo from '../../assets/ListEntryIcons/mainpage.mp4'; // Replace with your image path
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div
      className={styles.main}>
    <video
        className={styles.videoBackground}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
