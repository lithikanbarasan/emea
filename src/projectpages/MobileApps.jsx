import React from 'react';
import MobileAppsImg from '../assets/projectSectionImages/mobile1.png';

const MobileApps = () => (
  <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    {/* Hero Image */}
    <img
      src={MobileAppsImg}
      alt="Mobile Apps"
      style={{
        width: '100%',
        maxHeight: '600px',
        objectFit: 'cover',
        borderRadius: '12px',
        marginBottom: '1.5rem'
      }}
    />

    {/* Introductory Header */}
    <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#000', marginBottom: '0.5rem' }}>
      Mobile App Projects
    </h1>
    

    {/* Divider */}
    <hr style={{ margin: '2rem 0', borderTop: '1px solid #ccc' }} />

    {/* === ADHD Support App for Women === */}
    <h2 style={{ fontSize: '1.5rem', color: '#003366', fontWeight: '600', marginBottom: '0.5rem' }}>
      ADHD Support App for Women
    </h2>
    <p style={{ color: '#555' }}><strong>Category:</strong> Mobile Apps</p>
    <p style={{ color: '#555', marginBottom: '1rem' }}><strong>Tech Stack:</strong> React Native, Redux, Firebase</p>

    {/* About */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>About the Client</h3>
    <p>
      The client is a female-founded digital health startup committed to improving the lives of women with ADHD through technology.
      With a strong research foundation in neuroscience and behavioral health, they sought to fill a gap in the wellness app space by focusing on
      the intersection of hormonal cycles and task management.
    </p>

    {/* Challenge */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Challenge</h3>
    <p>
      ADHD symptoms in women are often misunderstood and underdiagnosed. The client identified a need for a mobile-first solution that could track
      emotional and cognitive patterns aligned with hormonal fluctuations, while remaining accessible, private, and clinically informed.
    </p>
    <p>
      The solution needed to combine mood tracking, smart planning tools, and personalized insights into a seamless experience, with offline functionality
      and secure sync for daily use.
    </p>

    {/* Solution */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Solution</h3>
    <p>
      We built a cross-platform ADHD support app using React Native and Firebase, designed for ease-of-use and rich daily interaction.
      Users can log mood shifts, focus levels, and physical symptoms tied to their menstrual cycle and receive tailored suggestions.
    </p>
    <ul>
      <li>Hormone-cycle calendar with symptom overlays</li>
      <li>Smart daily to-do planner with adaptive suggestions</li>
      <li>Push reminders based on predicted focus windows</li>
      <li>Secure data storage and real-time cloud sync using Firebase</li>
    </ul>

    {/* Results */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Results</h3>
    <p>
      The app launched successfully on both iOS and Android with over 20,000 downloads in its first quarter. User engagement metrics showed
      3x higher daily retention rates compared to similar wellness apps. The product has since been featured in women’s health publications
      and is being piloted by mental health clinics as a companion tool for therapy.
    </p>

    {/* Technologies */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Technologies and Tools</h3>
    <p><strong>Frontend:</strong> React Native, Redux</p>
    <p><strong>Backend & Storage:</strong> Firebase Realtime DB, Cloud Functions</p>
    <p><strong>APIs:</strong> HealthKit & Google Fit (integration-ready)</p>
    <p><strong>Security:</strong> End-to-end encrypted journal entries & private sync</p>

    {/* Divider */}
    <hr style={{ margin: '3rem 0', borderTop: '1px solid #ccc' }} />

    {/* === All-in-One Music & Podcast App === */}
    <h2 style={{ fontSize: '1.5rem', color: '#003366', fontWeight: '600', marginBottom: '0.5rem' }}>
      All-in-One Music & Podcast App
    </h2>
    <p style={{ color: '#555' }}><strong>Category:</strong> Mobile Apps</p>
    <p style={{ color: '#555', marginBottom: '1rem' }}><strong>Tech Stack:</strong> Flutter, Dart, Spotify API</p>

    {/* About */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>About the Client</h3>
    <p>
      A growing media-tech startup wanted to revolutionize how users stream, discover, and interact with audio content.
      Their goal was to unify music, podcasts, and audio snippets into a single experience, eliminating the need for multiple apps and fragmented playlists.
    </p>

    {/* Challenge */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Challenge</h3>
    <p>
      Existing platforms treat music and podcasts as separate entities. The client envisioned a unified, smart media player that would integrate
      various content types, work offline, and allow deep personalization, all in a beautiful and responsive mobile app.
    </p>

    {/* Solution */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Solution</h3>
    <p>
      Using Flutter for cross-platform development, we delivered a highly performant app that connects to the Spotify API and dynamically builds unified
      playlists from both music and podcast feeds. Users can stream, download, and customize playback through one clean interface.
    </p>
    <ul>
      <li>Smart unified player for seamless music & podcast integration</li>
      <li>Offline download support with intelligent storage management</li>
      <li>Custom playlist builder based on activity, mood, or genre</li>
      <li>Voice search and media shortcut integrations</li>
    </ul>

    {/* Results */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Results</h3>
    <p>
      The app achieved over 4.8 stars on both app stores and received recognition for innovation in user experience.
      Beta users praised its seamless transition between podcast episodes and music tracks, with average session times exceeding 40 minutes.
      It’s now preparing for global expansion.
    </p>

    {/* Technologies */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Technologies and Tools</h3>
    <p><strong>Frontend:</strong> Flutter (Dart)</p>
    <p><strong>Backend:</strong> Node.js microservices (Spotify proxy and caching)</p>
    <p><strong>APIs:</strong> Spotify API, Apple Podcasts (RSS ingestion)</p>
    <p><strong>Capabilities:</strong> Offline mode, cross-device syncing, media analytics</p>
  </div>
);

export default MobileApps;
