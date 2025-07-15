import React from 'react';
import HealthcareImg from '../assets/projectSectionImages/healthcare2.png';
import CTScanImg from '../assets/screenshots/deeplearning.png';
import DashboardImg from '../assets/screenshots/healthcareimg.png';

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

const Healthcare = () => (
  <div style={{ padding: '1.5rem 1.5rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', maxWidth: '1200px', margin: '0 auto' }}>
    {/* Hero Image */}
    <img
      src={HealthcareImg}
      alt="Healthcare"
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
      Healthcare
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
      <em>CrohnScan</em> – AI-powered diagnostic platform
    </h2>
    <p>
    CrohnScan is a cutting-edge machine learning software developed to address one of the most persistent diagnostic challenges in gastroenterology: distinguishing between ulcerative colitis (UC) and Crohn's disease (CD), the two primary forms of inflammatory bowel disease (IBD). 
    Both conditions present nearly identical clinical symptoms: abdominal pain, diarrhea, fatigue, and weight loss making accurate diagnosis highly complex and often delayed by over five years on average. This delay can have serious consequences on patient health, treatment planning, and quality of life. 
    </p>

    <h3 style={{ color: '#003366', fontSize: '1.25rem', marginTop: '2rem' }}>Problems Addressed</h3>
    <p>
    Current diagnostic protocols for IBD rely heavily on clinical observation, colonoscopy, histopathology, and radiological imaging, none of which are independently sufficient to differentiate UC from CD with confidence. 
    As a result, medical professionals struggle to classify patients accurately and timely. Misclassification can lead to inappropriate treatment, prolonged suffering, and higher risk of complications like strictures, fistulas, or surgery.  
    </p>
    <p>
    CrohnScan solves this through the integration of AI-powered digital biomarkers and real-time image analysis. 
    It rapidly analyzes CT scan data and provides an automated prediction of disease subtype ulcerative colitis vs. Crohn’s disease within less than 5 minutes. This transforms a historically complex diagnostic pathway into a swift, accurate, and streamlined experience that empowers clinicians with instant results directly from the hospital's imaging systems.  
    </p>

    <h3 style={{ color: '#003366', fontSize: '1.25rem', marginTop: '2rem' }}>Digital Biomarker Overview</h3>
    <p>
    CrohnScan is built upon advanced machine learning models trained on thousands of anonymized clinical cases, combining radiographic imaging with digital biomarkers derived from inflammation patterns, tissue morphology, and disease progression indicators. These biomarkers act as a computational fingerprint for each disease subtype, enabling precise classification that goes beyond human pattern recognition. The system is designed to continuously improve with more data and has already demonstrated clinically significant accuracy and reliability in hospital trials.  CrohnScan is a diagnostic ally for gastroenterologists accelerating decision-making, minimizing misdiagnosis, and improving outcomes for patients facing IBD.  
    </p>

    {/* Image before features */}
    <div style={{ textAlign: 'center', margin: '3rem 0 2rem' }}>
      <img src={CTScanImg} alt="CT Scan Integration" style={{ maxWidth: '900px', borderRadius: '8px', width: '100%' }} />
    </div>

    {/* App Features Section */}
    <h3 style={{ color: '#003366', fontSize: '1.25rem', marginBottom: '2rem' }}>Software Features</h3>

    {/* Feature 1 */}
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <CircleNumber number={1} />
        <h4 style={{ color: '#003366', fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>CT Scan Integration</h4>
      </div>
      <p style={{ fontSize: '1rem', color: '#000', margin: 0 }}>
        CrohnScan integrates directly with hospital CT scan systems and PACS to enable frictionless diagnostic analysis, operating silently in the background.
      </p>
    </div>

    {/* Feature 2 */}
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <CircleNumber number={2} />
        <h4 style={{ color: '#003366', fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>Real-time Disease Detection</h4>
      </div>
      <p style={{ fontSize: '1rem', color: '#000', margin: 0 }}>
      In under 5 minutes, CrohnScan identifies disease subtypes using AI-based pattern recognition and digital biomarker mapping. This cuts down years of diagnostic uncertainty to mere moments.

      </p>
    </div>

    {/* Image between features 2 and 3 */}
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <img src={DashboardImg} alt="Clinical Dashboard" style={{ maxWidth: '800px', borderRadius: '12px', width: '100%' }} />
    </div>

    {/* Feature 3 */}
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <CircleNumber number={3} />
        <h4 style={{ color: '#003366', fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>Clinical Dashboard</h4>
      </div>
      <p style={{ fontSize: '1rem', color: '#000', margin: 0 }}>
      Clinicians receive results in real time via a secure dashboard that provides disease classification, confidence level, and interpretive guidance for treatment decision support.  
      </p>
    </div>
  </div>
);

export default Healthcare;
