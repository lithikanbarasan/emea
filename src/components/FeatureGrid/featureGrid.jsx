import React from 'react';
import styles from './featureGrid.module.css';
import DefaultIcon from '../../assets/ListEntryIcons/DocumentIcon.svg'; // Replace with a real default icon if needed

const FeatureGrid = ({
  features = [
    {
      icon: DefaultIcon,
      title: 'Mayor control',
      description: 'Contabilidad en orden, más eficiencia e informes que se hacen solos.',
    },
    {
      icon: DefaultIcon,
      title: 'Información siempre actualizada',
      description: 'Tu información estará siempre disponible. Cuando y donde quieras.',
    },
    {
      icon: DefaultIcon,
      title: 'Ahorro de tiempo y dinero',
      description: 'Automatiza tareas repetitivas y reduce errores costosos.',
    },
    {
      icon: DefaultIcon,
      title: 'Seguridad garantizada',
      description: 'Tus datos están protegidos con tecnología de cifrado avanzada.',
    },
  ],
  textColor = '#0061f2',
}) => {
  const style = {
    '--textTop-color': textColor,
  };

  return (
    <div className={styles.gridContainer} style={style}>
      {features.map((item, index) => (
        <div className={styles.card} key={index}>
          <img src={item.icon} alt={item.title} className={styles.icon} />
          <div className={styles.title}>{item.title}</div>
          <div className={styles.description}>{item.description}</div>
          <div className={styles.arrow}>→</div>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
