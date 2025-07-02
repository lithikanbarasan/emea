import React from 'react';
import styles from './featureGrid.module.css';
import { Link } from 'react-router-dom';

import MobileIcon from '../../assets/ListEntryIcons/MobileIcon.svg';
import HealthcareIcon from '../../assets/ListEntryIcons/HealthcareIcon.svg';
import NatureIcon from '../../assets/ListEntryIcons/NatureIcon.svg';
import AcademyIcon from '../../assets/ListEntryIcons/AcademyIcon.svg';
import RobotIcon from '../../assets/ListEntryIcons/RobotIcon.svg';

const FeatureGrid = ({
  features = [
    {
      icon: MobileIcon,
      title: 'Mobile Apps',
      description: 'Custom-built iOS and Android apps designed for performance usability and scalability',
      link: '/projects#mobile-apps'
    },
    {
      icon: HealthcareIcon,
      title: 'Healthcare',
      description: 'AI-based software for medical diagnosis, predictive analysis and disease detection',
      link: '/projects#healthcare'
    },
    {
      icon: RobotIcon,
      title: 'Machine Learning',
      description: 'Data analysis platforms for process automation, real time insights and optimization',
      link: '/projects#machine-learning'
    },
    {
      icon: AcademyIcon,
      title: 'Academy',
      description: 'NEEMA AI training for ethical AI covering algorithmic fairness privacy to AI governance',
      link: '/projects#academy'
    },
  ],
  textColor = '#0061f2',
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
          We’ve built powerful AI-driven solutions from LLM-powered chatbots to machine learning prediction real-time data analytics platforms that transform how organizations make decisions and operate
        </p>
      </div>
      <div className={styles.gridContainer}>
        {features.map((item, index) => (
          <Link to={item.link} className={styles.card} key={index}>
            <img src={item.icon} alt={item.title} className={styles.icon} />
            <div className={styles.title}>{item.title}</div>
            <div className={styles.description}>{item.description}</div>
            <div className={styles.arrow}>→</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
