import React from 'react';
import MobileAppsImg from '../assets/projectSectionImages/mobile1.png';
import TaskReminderImg from '../assets/screenshots/mobpic1.png';
import ActivityTrackingImg from '../assets/screenshots/mobpic2.png';
import EOGDoctorImg from '../assets/screenshots/mobpic1.png';
import AwarenessForumImg from '../assets/screenshots/mobpic4.png';

const CircleNumber = ({ number }) => (
  <span style={{
    backgroundColor: '#003366',
    color: 'white',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginRight: '0.5rem'
  }}>
    {number}
  </span>
);

const MobileApps = () => (
  <div style={{ padding: '3rem 1.5rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', maxWidth: '1200px', margin: '0 auto' }}>
    {/* Hero Image */}
    <img
      src={MobileAppsImg}
      alt="Mobile Apps"
      style={{
        width: '100%',
        maxHeight: '600px',
        objectFit: 'cover',
        borderRadius: '12px',
        marginBottom: '1rem'
      }}
    />

    {/* Header */}
    <h1 style={{
  fontSize: '2.5rem',
  fontWeight: '900',
  color: '#000',
  marginBottom: '2rem',
  fontFamily: 'system-ui, sans-serif'
}}>
  Mobile Development
</h1>

    <hr style={{ margin: '2rem 0', borderTop: '1px solid #ccc' }} />

    {/* Overview */}
    <h2 style={{
  fontSize: '2.0rem',
  color: '#003366',
  fontWeight: '600',
  marginBottom: '0.75rem',
  textDecoration: 'underline'
}}>
  <em>Olivia</em> – ADHD app
</h2>
    <p>
    Attention-deficit hyperactivity disorder (ADHD) is considered to be one of the most common neuropsychiatric disorders of childhood. ADHD was once thought of as a predominantly male disorder. While this may be true for ADHD in childhood, research suggests that the number of women with ADHD may be nearly equal to that of men with the disorder and important sex differences exist in the symptom profile. 
    Compared to males with ADHD, females with ADHD are more prone to have difficulties with inattentive symptoms than hyperactive and impulsive symptoms, and females often receive a diagnosis of ADHD significantly later than do males. 
    Emerging evidence suggests differences exist in the neuropathology of ADHD, and there are hormonal factors which may play an important role in understanding ADHD in females. Women with ADHD face an uphill battle because their symptoms are likely misdiagnosed, since​ ADHD looks different in women​ than in men.

    </p>

    <h3 style={{ color: '#003366', fontSize: '1.25rem', marginTop: '2rem' }}>Problems Addressed</h3>
    <p>
    The main problem in ADHD is thought to be due to the lack of cognitive functions, lack of attention, impulse control as well as excessive mobility.
    There are important sex differences in the symptom profile. Compared to males with ADHD, females with ADHD are more prone to have difficulties with inattentive symptoms than hyperactive and impulsive symptoms, and females often receive a diagnosis of ADHD significantly later than do males . As adults, women are at risk for divorce, financial crises, single-parenting a child with ADHD, never completing college, underemployment, substance abuse, eating disorders and constant stress due to difficulty in managing the demands of daily life which
    overflow into the difficulties of their children.
    </p>
    <p>
    Research shows that ADHD exacts a greater toll on women than it does on men. Clinicians need a different set of tools for diagnosing and treating the disorder across genders and women deserve a better understanding of how the disorder affects them. Therefore, it is important to improve methods of ADHD recognition in women and develop a diagnostic system that is specific to tackle ADHD clinical symptoms in women.

    </p>

    <h3 style={{ color: '#003366', fontSize: '1.25rem', marginTop: '2rem' }}>Genetic Analysis Overview</h3>
    <p>
    ADHD has been observed to be both familial and heritable. Genes are assumed to explain up to 76% of the variability of ADHD-related symptoms in the population.
    Data has shown a clear link between ADHD and the presence of VNTR, a dopamine D4 receptor gene, and a dopamine D5 receptor gene microsatellite marker. Thus, these results suggest the importance of examining gene-phenotype links and testing patients for these gene variants.
    </p>
    <p>
    Olivia is an application for better recognition and treatment of ADHD in women through monitoring certain biomarkers, activity and eye movement.
    The results of these tests help women and their doctors monitor their performance daily activities. Olivia app has four features to tackle ADHD which are the task reminder, digital biomarker, EOG linked to AI, and raise awareness. 
    </p>

    {/* App Features Section */}
    <h3 style={{ color: '#003366', fontSize: '1.25rem', marginTop: '2rem' }}>App Features</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: '2rem', marginBottom: '3rem' }}>
      {/* Left images */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <img src={TaskReminderImg} alt="Task Reminder" style={{ width: '200px', borderRadius: '12px' }} />
        <img src={EOGDoctorImg} alt="EOG" style={{ width: '200px', borderRadius: '12px' }} />
      </div>

      {/* Feature Text */}
      <div style={{ maxWidth: '500px' }}>
        {[
          {
            number: 1,
            title: 'Process design & automation',
            heading: 'Task Reminder',
            text: 'Task reminder helps women with ADHD to be aware of their activities. We use four different strategies for managing tasks: (1) Habits and Routines, (2) reframing challenges and self-evaluation, (3) Symptom-specific strategies, and (4) Planning according to the infradian rhythm.'
          },
          {
            number: 2,
            title: 'Automated Market Research',
            heading: 'Digital Biomarker',
            text: 'Tackles hormone fluctuations during the monthly cycle. By mapping symptoms to the infradian rhythm, women can anticipate flare-ups and work with doctors to optimize care.'
          },
          {
            number: 3,
            title: 'System Integration',
            heading: 'AI and EOG',
            text: 'Uses Electrooculogram (EOG) signals to record eye movement in real-time. Paired with AI, it may support ADHD diagnostics (Fatma et al., 2019; Vakil et al., 2019).'
          },
          {
            number: 4,
            title: 'Enterprise Security',
            heading: 'Raising Awareness',
            text: 'Through articles, forums, and social media, the app builds public awareness of ADHD in women. In-app campaigns support user education and advocacy.'
          }
        ].map(({ number, heading, text }) => (
          <div key={number} style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <CircleNumber number={number} />
              <h4 style={{ color: '#003366', fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>{heading}</h4>
            </div>
            <p style={{ fontSize: '1rem', color: '#000', margin: 0, lineHeight: '1.5' }}>{text}</p>
          </div>
        ))}
      </div>

      {/* Right images */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <img src={ActivityTrackingImg} alt="Activity Tracking" style={{ width: '200px', borderRadius: '12px' }} />
        <img src={AwarenessForumImg} alt="Awareness Forum" style={{ width: '200px', borderRadius: '12px' }} />
      </div>
    </div>
  </div>
);

export default MobileApps;
