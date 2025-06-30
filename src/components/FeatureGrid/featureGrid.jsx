import React from 'react';
import styles from './featureGrid.module.css';
import DefaultIcon from '../../assets/ListEntryIcons/DocumentIcon.svg'; // Replace with a real default icon if needed
import { Link } from 'react-router-dom';

import MobileIcon from '../../assets/ListEntryIcons/MobileIcon.svg';
import HealthcareIcon from '../../assets/ListEntryIcons/HealthcareIcon.svg';
import NatureIcon from '../../assets/ListEntryIcons/NatureIcon.svg';
import AcademyIcon from '../../assets/ListEntryIcons/AcademyIcon.svg';

const FeatureGrid = ({
  features = [
    {
      icon: MobileIcon,
      title: 'Mobile Apps',
      description: 'Custom-built iOS and Android apps designed for performance usability and scalability',
    },
    {
      icon: HealthcareIcon,
      title: 'Healthcare',
      description: 'AI-based software for medical diagnosis, predictive analysis and disease detection',
    },
    {
      icon: NatureIcon,
      title: 'Machine Learning',
      description: 'Data analysis platforms for process automation, real time insights and optimization',
    },
    {
      icon: AcademyIcon,
      title: 'Academy',
      description: 'NEEMA AI training for ethical AI covering algorithmic fairness privacy to AI governance',
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
    <div className={styles.gridContainer} style={style}>
      {features.map((item, index) => (
        <div className={styles.card} key={index}>
          <Link to="/projects" className={styles.card} key={index}>
  <img src={item.icon} alt={item.title} className={styles.icon} />
  <div className={styles.title}>{item.title}</div>
  <div className={styles.description}>{item.description}</div>
  <div className={styles.arrow}>→</div>
</Link>

        </div>
      ))}
    </div>
    </div>
  );
};

export default FeatureGrid;
