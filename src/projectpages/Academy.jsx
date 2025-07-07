import React from 'react';
import AcademyImg from '../assets/projectSectionImages/Component 1.png';

const Academy = () => (
  <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    {/* Hero Image */}
    <img
      src={AcademyImg}
      alt="Academy"
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
      Academy Projects
    </h1>
    

    {/* Divider */}
    <hr style={{ margin: '2rem 0', borderTop: '1px solid #ccc' }} />

    {/* === NEEMA AI Ethics Platform === */}
    <h2 style={{ fontSize: '1.5rem', color: '#003366', fontWeight: '600', marginBottom: '0.5rem' }}>
      NEEMA AI Ethics Platform
    </h2>
    <p style={{ color: '#555' }}><strong>Category:</strong> Academy</p>
    <p style={{ color: '#555', marginBottom: '1rem' }}><strong>Tech Stack:</strong> Next.js, GraphQL, Stripe</p>

    {/* About */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>About the Client</h3>
    <p>
      NEEMA is a non-profit education initiative focused on making AI literacy and ethics education globally accessible.
      Their mission is to help students and professionals understand the societal impacts of artificial intelligence
      and promote responsible development practices through inclusive, open-access learning.
    </p>

    {/* Challenge */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Challenge</h3>
    <p>
      NEEMA wanted to launch an interactive platform to teach ethical AI, privacy rights, and algorithmic fairness.
      They needed a modern LMS (learning management system) that was gamified, trackable, and capable of accepting donations and course payments
      — all while remaining performant on lower-end devices and accessible across regions.
    </p>
    <p>
      The challenge was to create a system that was both pedagogically rich and technically lean, with the flexibility to support a growing
      international audience and add new modules over time.
    </p>

    {/* Solution */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Solution</h3>
    <p>
      We built a full-featured education platform using Next.js for high-speed rendering, GraphQL for dynamic content delivery,
      and Stripe for secure course payments. The platform includes a gamified progress system, quiz-based module completion,
      and real-time user analytics to support both learners and instructors.
    </p>
    <ul>
      <li>Gamified learning paths with badges and scoreboards</li>
      <li>User profile management and dynamic progress tracking</li>
      <li>Modular course engine supporting Markdown and media-rich content</li>
      <li>Donations and payment support via Stripe integration</li>
    </ul>

    {/* Results */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Results</h3>
    <p>
      The platform attracted over 12,000 learners from 25+ countries within its first launch phase.
      Educators praised its simplicity and modular design, and learners reported high engagement and completion rates
      compared to standard course platforms. The project has become a template for other ethics-centered learning programs globally.
    </p>

    {/* Technologies */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Technologies and Tools</h3>
    <p><strong>Frontend:</strong> Next.js, React</p>
    <p><strong>API & Content Delivery:</strong> GraphQL, Hasura</p>
    <p><strong>Payments:</strong> Stripe Checkout & Webhooks</p>
    <p><strong>Infrastructure:</strong> Vercel, PostgreSQL (hosted), Cloudinary for media</p>
  </div>
);

export default Academy;
