import React from 'react';
import styles from './featureGrid.module.css';
import DefaultIcon from '../../assets/ListEntryIcons/DocumentIcon.svg'; // Replace with a real default icon if needed
import { Link } from 'react-router-dom';

const FeatureGrid = ({
  features = [
    {
      icon: DefaultIcon,
      title: 'Mobile Apps',
      description: 'Custom-built iOS and Android apps designed for performance, usability, and scalability.',
    },
    {
      icon: DefaultIcon,
      title: 'Healthcare',
      description: 'Secure digital health platforms that improve access, coordination, and patient engagement.',
    },
    {
      icon: DefaultIcon,
      title: 'Nature',
      description: 'Tech-driven solutions for sustainability, from conservation tools to climate data platforms.',
    },
    {
      icon: DefaultIcon,
      title: 'Academy',
      description: 'Modern e-learning systems that enhance online education and streamline knowledge delivery',
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
        <h4 className={styles.subheading}>Projects EMEA Venture Builder has worked on</h4>
        <h2 className={styles.heading}>Innovation Across Industries</h2>
        <p className={styles.descriptionText}>
        We've built powerful solutions across sectors, from mobile to medical, academic to environmental. We are leveraging cutting-edge technology and purposeful design.
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
