import React from 'react';
import MLImg from '../assets/projectSectionImages/machinelearning1.png';
import SearchInputImg from '../assets/screenshots/namedash1.png';
import SentimentDashboardImg from '../assets/screenshots/dashboard1.png';


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

const MachineLearning = () => (
  <div style={{ padding: '1.5rem 1.5rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', maxWidth: '1200px', margin: '0 auto' }}>
    {/* Hero Image */}
    <img
      src={MLImg}
      alt="Machine Learning"
      style={{
        width: '100%',
        maxHeight: '600px',
        objectFit: 'cover',
        borderRadius: '12px',
        marginBottom: '2rem'
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
      Software Development
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
      <em>ProfilingCheck</em> – AI-powered automated background profiling
    </h2>
    <p>
    ProfilingCheck is an advanced web-based platform designed to transform traditional background verification into a fully automated, AI-driven experience. The platform utilizes web scraping and natural language processing to collect and analyze publicly available data on individuals, including online publications, social media posts, LinkedIn profiles, blogs, and more. This information is then synthesized into a comprehensive profile that highlights behavioral patterns, digital presence, and frequently used language all in a matter of seconds.  
    </p>

    <h3 style={{ color: '#003366', fontSize: '1.25rem', marginTop: '2rem' }}>Problems Addressed</h3>
    <p>
    Background checks are typically slow, manual, and incomplete. Companies and investigators must sift through fragmented data, comb through individual platforms, and often miss important online cues that indicate personality, sentiment, or influence. In high-volume hiring, client onboarding, or digital compliance processes, time-consuming background checks create bottlenecks, raise privacy concerns, and leave gaps in understanding an individual’s public footprint.  

    </p>
    <p>ProfilingCheck addresses these issues with full-stack automation. The user inputs a name into the platform, and in real time, the AI launches a scraping process across indexed websites, digital publications, and social media platforms. It retrieves relevant content, analyzes linguistic patterns, and presents keyword frequency maps and sentiment scores, offering a rapid snapshot of the person’s digital identity.  
    </p>

    <h3 style={{ color: '#003366', fontSize: '1.25rem', marginTop: '2rem' }}>Language & Sentiment Analysis</h3>
    <p>
    ProfilingCheck goes beyond simple data aggregation, its deep language model parses through textual content to extract tone, intent, and personality indicators. Frequent keywords are identified to reveal themes the individual focuses on, while sentiment mapping shows whether their public presence leans toward optimism, professionalism, controversy, empathy, or other traits.  
    </p>

    {/* App Features Section */}
    <h3 style={{ color: '#003366', fontSize: '1.25rem', marginBottom: '2rem' }}>Platform Features</h3>

    {/* Feature 1 */}
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <CircleNumber number={1} />
        <h4 style={{ color: '#003366', fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>Name-Based Search Input</h4>
      </div>
      <p style={{ fontSize: '1rem', color: '#000', margin: 0 }}>
      Users enter a full name into ProfilingCheck’s interface, and the platform begins pulling data associated with that individual from hundreds of web sources. 
      </p>
    </div>

    {/* Image between features */}
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <img src={SearchInputImg} alt="Search Input Dashboard" style={{ maxWidth: '600px', borderRadius: '12px', width: '100%' }} />
    </div>

    {/* Feature 2 */}
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <CircleNumber number={2} />
        <h4 style={{ color: '#003366', fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>AI-Powered Web Scraping</h4>
      </div>
      <p style={{ fontSize: '1rem', color: '#000', margin: 0 }}>
      Using sophisticated web crawling technology, ProfilingCheck collects publicly visible content from blogs, LinkedIn, Twitter, online articles, forums, and more, filtering only verified matches. 
      </p>
    </div>


    {/* Feature 3 */}
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <CircleNumber number={3} />
        <h4 style={{ color: '#003366', fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>Keyword & Frequency Visualization</h4>
      </div>
      <p style={{ fontSize: '1rem', color: '#000', margin: 0 }}>
      The platform identifies recurring terms and phrases to help users understand core interests, professional domains, and language patterns associated with the individual.
      </p>
    </div>

    

    {/* Feature 4 */}
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <CircleNumber number={4} />
        <h4 style={{ color: '#003366', fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>Sentiment Dashboard</h4>
      </div>
      <p style={{ fontSize: '1rem', color: '#000', margin: 0 }}>
      An intelligent sentiment engine categorizes content by emotional tone and communication style, helping investigators, employers, or partners better gauge compatibility, professionalism, and public voice.  
      </p>
    </div>

    {/* image features */}
    <div style={{ textAlign: 'center', margin: '3rem 0 2rem' }}>
      <img src={SentimentDashboardImg} alt="Sentiment Dashboard" style={{ maxWidth: '600px', borderRadius: '12px', width: '100%' }} />
    </div>

    {/* Feature 5 */}
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <CircleNumber number={5} />
        <h4 style={{ color: '#003366', fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>Privacy-Safe Use</h4>
      </div>
      <p style={{ fontSize: '1rem', color: '#000', margin: 0 }}>
      ProfilingCheck focuses only on publicly available digital footprints, protecting individual privacy, ethical evaluations for recruitment, partnership, and profiling.  
      </p>
    </div>
  </div>
);

export default MachineLearning;
