import React from 'react';
import styles from './featureGrid.module.css';
import { Link } from 'react-router-dom';

// Images for each category
import MobileImg from '../../assets/projectSectionImages/mobile1.png';
import HealthcareImg from '../../assets/projectSectionImages/pinkhealthcare.png';
import MLImg from '../../assets/projectSectionImages/machinelearning1.png';
import AcademyImg from '../../assets/projectSectionImages/academy3.png';

const FeatureGrid = ({
  features = [
    {
      image: MobileImg,
      title: 'Mobile Apps',
      description: 'Custom-built iOS and Android apps designed for usability and scalability',
      link: '/mobile-apps'
    },
    {
      image: HealthcareImg,
      title: 'Healthcare',
      description: 'AI-based software for medical diagnosis, predictive analysis, and disease detection',
      link: '/healthcare'
    },
    {
      image: MLImg,
      title: 'Software Development',
      description: 'Data platforms for process automation, real-time insights, and optimization',
      link: '/software-development'
    },
    {
      image: AcademyImg,
      title: 'Academy',
      description: 'NEEMA AI training for ethical AI covering algorithmic privacy and governance',
      link: 'https://neemaai.io'  // External link
    },
  ],
  textColor = '#225f7c',
}) => {
  const style = {
    '--textTop-color': textColor,
  };

  return (
    <div className={styles.sectionWrapper} style={style}>
      <div className={styles.header}>
        <h4 className={styles.subheading}>Projects we have worked on</h4>
        <h2 className={styles.heading}>Innovation Across Industries</h2>
        <p className={styles.descriptionText}>
          We’ve built powerful AI-driven solutions from LLM-powered chatbots to machine learning–based real-time analytics platforms that transform how organizations make decisions and operate
        </p>
      </div>

      <div className={styles.gridContainer}>
        {features.map((item, index) => {
          const isExternal = item.link.startsWith('http');
          const CardContent = (
            <>
              <img src={item.image} alt={item.title} className={styles.featureImage} />
              <div className={styles.title}>{item.title}</div>
              <div className={styles.description}>{item.description}</div>
              <div className={styles.arrow}>→</div>
            </>
          );

          return isExternal ? (
            <a
              href={item.link}
              className={styles.card}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CardContent}
            </a>
          ) : (
            <Link to={item.link} className={styles.card} key={index}>
              {CardContent}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureGrid;
