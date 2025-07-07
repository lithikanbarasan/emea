import React from 'react';
import HealthcareImg from '../assets/projectSectionImages/healthcare2.png';

const Healthcare = () => (
  <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    {/* Hero Image */}
    <img
      src={HealthcareImg}
      alt="Healthcare"
      style={{
        width: '100%',
        maxHeight: '600px',
        objectFit: 'cover',
        borderRadius: '12px',
        marginBottom: '1.5rem'
      }}
    />

    {/* Main Section Title */}
    <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#000', marginBottom: '0.5rem' }}>
      Healthcare Technology Projects
    </h1>
    

    {/* Divider */}
    <hr style={{ margin: '2rem 0', borderTop: '1px solid #ccc' }} />

    {/* === Crohn Disease Detection Software === */}
    <h2 style={{ fontSize: '1.5rem', color: '#003366', fontWeight: '600', marginBottom: '0.5rem' }}>
      Crohn Disease Detection Software
    </h2>
    <p style={{ color: '#555' }}><strong>Industry:</strong> Healthcare</p>
    <p style={{ color: '#555', marginBottom: '1rem' }}><strong>Tech Stack:</strong> Python, TensorFlow, Flask, AWS</p>

    {/* About */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>About the Client</h3>
    <p>
      Our client is a leading medical research organization focused on transforming gastrointestinal healthcare using digital technologies and AI.
      With a global footprint in clinical research and innovation, their mission is to empower gastroenterologists with cutting-edge diagnostic tools
      and help patients receive accurate, early detection of chronic inflammatory conditions.
    </p>

    {/* Challenge */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Challenge</h3>
    <p>
      Differentiating between Ulcerative Colitis and Crohn’s Disease presents a major diagnostic challenge due to overlapping symptoms and subjective interpretations.
      Traditional diagnosis often requires invasive procedures with long turnaround times. The client sought a fast, accurate, and AI-driven solution
      to analyze non-invasive biomarker data for differential diagnosis — scalable, secure, and suitable for clinical integration.
    </p>

    {/* Solution */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Solution</h3>
    <p>
      We developed a cloud-based diagnostic software platform that leverages digital biomarkers and machine learning to classify IBD subtypes.
      Built on TensorFlow, the backend ingests biomarker data and runs it through a trained classification model that outputs probability-based
      diagnoses for Ulcerative Colitis or Crohn's Disease.
    </p>
    <ul>
      <li>Biomarker-based classification engine with 90%+ diagnostic accuracy</li>
      <li>HIPAA-compliant architecture hosted on AWS</li>
      <li>Interactive heatmaps and clinician-friendly insights dashboard</li>
      <li>Integration-ready via secure REST APIs for hospital EMRs</li>
    </ul>

    {/* Results */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Results</h3>
    <p>
      The solution reduced diagnosis time from several days to just minutes, improving early intervention strategies. Clinics using the tool
      reported higher diagnostic accuracy and confidence, enabling better treatment matching for IBD patients. With built-in model retraining support,
      the platform continues to improve in precision as more patient data is processed.
    </p>

    {/* Technologies */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Technologies and Tools</h3>
    <p><strong>Tech Stack:</strong> Python, TensorFlow, Flask</p>
    <p><strong>Infrastructure:</strong> AWS (EC2, S3, CloudWatch)</p>
    <p><strong>Security & Compliance:</strong> HIPAA-compliant deployment, secure user access, data encryption</p>

    {/* Optional Divider if more projects are added later */}
    {/* <hr style={{ margin: '3rem 0', borderTop: '1px solid #ccc' }} /> */}
  </div>
);

export default Healthcare;
