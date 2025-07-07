import React from 'react';
import MLImg from '../assets/projectSectionImages/machinelearning1.png';

const MachineLearning = () => (
  <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    {/* Hero Image */}
    <img
      src={MLImg}
      alt="Machine Learning"
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
      Machine Learning Projects
    </h1>
    

    {/* Divider */}
    <hr style={{ margin: '2rem 0', borderTop: '1px solid #ccc' }} />

    {/* === Real-Time Social Profiling Tool === */}
    <h2 style={{ fontSize: '1.5rem', color: '#003366', fontWeight: '600', marginBottom: '0.5rem' }}>
      Real-Time Social Profiling Tool
    </h2>
    <p style={{ color: '#555' }}><strong>Category:</strong> Machine Learning</p>
    <p style={{ color: '#555', marginBottom: '1rem' }}><strong>Tech Stack:</strong> Node.js, Puppeteer, Python</p>

    {/* About */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>About the Client</h3>
    <p>
      A global hiring platform specializing in security-sensitive industries wanted a smarter way to conduct background research on candidates using public web data.
      Their goal was to reduce human effort in screening while maintaining high standards for ethics and privacy.
    </p>

    {/* Challenge */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Challenge</h3>
    <p>
      Recruiters spent hours manually browsing candidates’ public social activity, forums, and web mentions.
      The process was time-consuming, inconsistent, and error-prone — often missing critical red flags or wasting time on irrelevant data.
      The client needed a reliable automated tool that could gather, clean, analyze, and score web data in real-time.
    </p>

    {/* Solution */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Solution</h3>
    <p>
      We built a real-time social profiling tool using a combination of Puppeteer-based scraping agents and a Node.js orchestration backend.
      Public data such as blogs, code repositories, forums, and news mentions are scanned and analyzed using a custom NLP pipeline written in Python.
      A scoring algorithm classifies risk levels and relevance based on context, tone, and domain credibility.
    </p>
    <ul>
      <li>Live scraping of public-facing digital profiles and sites</li>
      <li>ML-based scoring system to detect sentiment and keywords</li>
      <li>Visual dashboard for recruiter interaction and audit trail</li>
    </ul>

    {/* Results */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Results</h3>
    <p>
      The client reduced manual screening time by 80%, while increasing consistency and transparency in hiring workflows.
      The tool now screens thousands of candidates weekly and has significantly improved the ability to catch risk indicators earlier in the process.
    </p>

    {/* Technologies */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Technologies and Tools</h3>
    <p><strong>Frontend:</strong> Custom web dashboard (React-based)</p>
    <p><strong>Backend:</strong> Node.js, Puppeteer, Express</p>
    <p><strong>ML & NLP:</strong> Python, spaCy, custom classification model</p>
    <p><strong>Hosting:</strong> AWS Lambda, EC2 scraping nodes</p>

    {/* Divider */}
    <hr style={{ margin: '3rem 0', borderTop: '1px solid #ccc' }} />

    {/* === Task Automation Engine === */}
    <h2 style={{ fontSize: '1.5rem', color: '#003366', fontWeight: '600', marginBottom: '0.5rem' }}>
      Task Automation Engine
    </h2>
    <p style={{ color: '#555' }}><strong>Category:</strong> Machine Learning</p>
    <p style={{ color: '#555', marginBottom: '1rem' }}><strong>Tech Stack:</strong> FastAPI, Celery, PostgreSQL</p>

    {/* About */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>About the Client</h3>
    <p>
      A mid-size DevOps consultancy managing hundreds of concurrent environments needed a backend platform to orchestrate recurring and reactive task flows.
      They wanted to reduce human overhead and ensure reliability across deployments, notifications, and monitoring tasks.
    </p>

    {/* Challenge */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Challenge</h3>
    <p>
      The client’s team was overwhelmed with repetitive tasks like running cloud scans, pushing code updates, notifying Slack/email channels, and rotating logs.
      Existing cron jobs lacked observability and failed silently. They needed a centralized system that could schedule, track, and retry jobs intelligently.
    </p>

    {/* Solution */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Solution</h3>
    <p>
      We delivered a robust task automation engine built on FastAPI and Celery.
      The system enables teams to define modular workflows that are scheduled, queued, and executed reliably. PostgreSQL acts as a job store and audit trail.
      Slack and email channels are integrated for real-time updates and error reporting.
    </p>
    <ul>
      <li>Workflow queueing and execution framework</li>
      <li>Admin panel with task history and manual triggers</li>
      <li>Slack/email/webhook notifications for job status</li>
      <li>Support for cron-like scheduling with retry logic</li>
    </ul>

    {/* Results */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Results</h3>
    <p>
      Task success rates improved from 78% to 99.6%, and the operations team saved 30+ hours/month on manual task handling.
      The platform has since been adopted across client projects and is now used as an internal product offering.
    </p>

    {/* Technologies */}
    <h3 style={{ color: '#003366', marginTop: '1rem' }}>Technologies and Tools</h3>
    <p><strong>Core:</strong> FastAPI, Celery, PostgreSQL</p>
    <p><strong>Infrastructure:</strong> Docker, Redis, RabbitMQ</p>
    <p><strong>Integrations:</strong> Slack API, SMTP, REST hooks</p>
    <p><strong>Security:</strong> Auth middleware, audit logging, role-based access</p>
  </div>
);

export default MachineLearning;
