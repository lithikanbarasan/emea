import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Projects.css';

import mobileImg from '../../assets/projectSectionImages/mobile.png';
import healthcareImg from '../../assets/projectSectionImages/healthcare.png';
import mlImg from '../../assets/projectSectionImages/machinelearning.png';
import academyImg from '../../assets/projectSectionImages/machinelearning.png';


const categorizedProjects = {
    "Mobile Apps": [
      {
        title: "ADHD Support App for Women",
        description: "Track hormonal shifts, mood, and manage tasks specifically for ADHD in women.",
        tech: "React Native, Redux, Firebase",
        features: [
          "Hormone-cycle calendar",
          "Daily mood insights",
          "Smart to-do planner"
        ]
      },
      {
        title: "All-in-One Music & Podcast App",
        description: "Stream music, listen to podcasts, and personalize your media feed.",
        tech: "Flutter, Dart, Spotify API",
        features: [
          "Unified player",
          "Offline downloads",
          "Custom playlists"
        ]
      }
    ],
    "Healthcare": [
      {
        title: "Crohn Disease Detection Software",
        description: "AI-based platform distinguishing Ulcerative Colitis vs Crohn’s Disease using digital biomarkers.",
        tech: "Python, TensorFlow, Flask, AWS",
        features: [
          "Biomarker-based classification model",
          "Cloud-hosted diagnosis platform",
          "Real-time data visualization"
        ]
      }
    ],
    "Machine Learning": [
      {
        title: "Real-Time Social Profiling Tool",
        description: "Automated web scraping system for candidate background checks.",
        tech: "Node.js, Puppeteer, Python",
        features: [
          "Live scraping of public data",
          "ML-based profile scoring",
          "Rich visual dashboard"
        ]
      },
      {
        title: "Task Automation Engine",
        description: "Backend automation tool for recurring task flows in ops-heavy teams.",
        tech: "FastAPI, Celery, PostgreSQL",
        features: [
          "Workflow queueing system",
          "Slack/email integrations",
          "Scheduled job executor"
        ]
      }
    ],
    "Academy": [
      {
        title: "NEEMA AI Ethics Platform",
        description: "Interactive course system teaching ethical AI, privacy, and governance.",
        tech: "Next.js, GraphQL, Stripe",
        features: [
          "Gamified modules",
          "User progress tracking",
          "Payments with Stripe"
        ]
      }
    ]
  };
  
  const sectionImages = {
    "Mobile Apps": mobileImg,
    "Healthcare": healthcareImg,
    "Machine Learning": mlImg,
    "Academy": academyImg
  };
  
  const Projects = () => {
    const { hash } = useLocation();
  
    useEffect(() => {
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }, [hash]);
  
    return (
      <div className="projects-container">
        <div className="projects-header">
          <h4 className="projects-subheading">PROJECTS WE HAVE WORKED ON</h4>
          <h2 className="projects-heading">Innovation Across Industries</h2>
          <p className="projects-description">
            We’ve built powerful AI-driven solutions from LLM-powered chatbots to real-time ML platforms that transform how organizations operate and make decisions.
          </p>
        </div>
  
        {Object.entries(categorizedProjects).map(([category, projects], index) => (
          <div key={index} className="project-section" id={category.toLowerCase().replace(/\s+/g, '-')}>
            <h3 className="section-title">{category}</h3>
            <div className="section-wrapper">
              <div className="projects-grid">
                {projects.map((project, idx) => (
                  <div key={idx} className="project-card">
                    <h4>{project.title}</h4>
                    <p className="category">{category}</p>
                    <p>{project.description}</p>
                    <p><strong>Tech Stack:</strong> {project.tech}</p>
                    <ul>
                      {project.features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="section-image">
                <img src={sectionImages[category]} alt={`${category} illustration`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Projects;