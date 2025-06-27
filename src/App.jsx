import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/IconListPage/Home.jsx';
import Projects from './pages/IconListPage/Projects.jsx';
import Blog from './pages/IconListPage/Blog.jsx';
import Contact from './pages/IconListPage/ContactUs.jsx';

import './App.css'
import Header from "./components/header.jsx"; 
import Footer from "./components/footer.jsx"; 
import IconListPage from "./pages/IconListPage/IconListPage";
import FeatureGrid from "./components/FeatureGrid/featureGrid.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import Ceo from "./components/Ceo/Ceo.jsx";
import TagList from "./components/TagList/TagList.jsx";

import BankIcon from './assets/ListEntryIcons/BankIcon.png'
import ClockIcon from './assets/ListEntryIcons/ClockIcon.png'
import DocumentIcon from './assets/ListEntryIcons/DocumentIcon.svg'
import DownloadIcon from './assets/ListEntryIcons/DownloadIcon.jpg'
import InfoIcon from './assets/ListEntryIcons/InfoIcon.png'
import CeoImage from './assets/ListEntryIcons/Neema-photo.jpg';

import TaskAutomationImage from './assets/IconListPage/Task Automation.svg'
import MobileDevelopmentImage from './assets/IconListPage/Mobile Development.svg'
import PredictiveAnalyticsImage from './assets/IconListPage/Predictive Analytics.svg'

const listItems = [
  {
    icon: ClockIcon,
    text: "Process design & automation",
    subtext: "We build smart workflows that remove repetitive tasks and reduce human error to make your operations faster and more accurate"
  },
  {
    icon: DocumentIcon,
    text: "Email & message handling",
    subtext: "Our systems read and understand incoming messages from clients or systems, triggering automatic actions like assigning tasks or updating platforms"
  },
  {
    icon: DownloadIcon,
    text: "System integration",
    subtext: "We link your finance, HR, CRM and third-party tools into one seamless engine. That means fewer logins, no double entry, and one source"
  },
  {
    icon: InfoIcon,
    text: "Performance dashboards",
    subtext: "Track your tasks, teams, and systems as they run. Spot trends and opportunities in one centralized view to get clarity and control"
  },
  {
    icon: BankIcon,
    text: "Enterprise security",
    subtext: "We build automation systems without compromising on compliances We keep the operation protected with access and data encryption"
  }
]

const listItems2 = [
  {
    icon: ClockIcon,
    text: "End-to-end data setup",
    subtext: "From raw spreadsheets to structured data pipelines, we develop, clean, and organize your data for reporting, modeling, and growth"
  },
  {
    icon: DocumentIcon,
    text: "Business forecasting models",
    subtext: "We build AI systems that predict what truly matters on demand. The models empower you to make data-driven decisions with confidence"
  },
  {
    icon: DownloadIcon,
    text: "Tailored for your business",
    subtext: "We build tailored models that reflect your market, seasonality, and strategic goals, delivering insights that support your decision-making"
  },
  {
    icon: InfoIcon,
    text: "Clear, executive-ready insights",
    subtext: "We translate technical output into plain language with charts, visuals, and recommendations. We turn insights into decisive actions"
  },
  {
    icon: BankIcon,
    text: "Long-term reliability",
    subtext: "We design, develop and deploy  prediction systems with automated model updates and fully quality checks built-in"
  }
]

const listItems3 = [
  {
    icon: ClockIcon,
    text: "Built for any platform",
    subtext: "Whether your users are on Android, iOS, or both, we’ve got you covered. Apps are tailored to each platform’s best practices and performance."
  },
  {
    icon: DocumentIcon,
    text: "Smart features powered by AI",
    subtext: "Add intelligent tools like chat assistants, content generation, or smart suggestions. Your app adapts to users and delivers experiences they remember."
  },
  {
    icon: DownloadIcon,
    text: "Scalable back-end systems",
    subtext: "From startup MVPs to global apps—we build infrastructure that grows with you. Real-time sync, cloud hosting, and modular architecture built-in."
  },
  {
    icon: InfoIcon,
    text: "Offline-friendly design",
    subtext: "No internet? No problem. Your app stays functional on planes, in tunnels, or on the go. Syncs resume automatically when the connection’s back."
  },
  {
    icon: BankIcon,
    text: "Built-in growth tools",
    subtext: "Track what features users love and test new ones before full rollout. Built-in analytics, feedback collection, and A/B testing help you optimize."
  }
]

const title = "Task Automation Software"
const title2 = "Predictive Analytics Development"
const title3 = "Mobile App Development"

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Homepage with your full layout */}
        <Route path="/" element={
          <>
            <MainPage />
            <IconListPage 
              listItems={listItems} 
              title={title} 
              flipped={true}
              image={TaskAutomationImage} 
            />
            <IconListPage 
              listItems={listItems2} 
              title={title2} 
              flipped={false}
              image={PredictiveAnalyticsImage}
            />
            <IconListPage 
              listItems={listItems3} 
              title={title3} 
              flipped={true} 
              image={MobileDevelopmentImage}
            />
            <FeatureGrid />

            <TagList />
            
            <Ceo
              image={CeoImage}
              quote="I am an expert in Artificial Intelligence with a strong background in data science, software development, and AI Ethics. I specialize in creating AI solutions that emphasize ethical, transparent, and human-centered approaches. My experience covers software engineering, AI education, and Ethics."
              name="Neema Balolebwami Nelly"
              title="CEO and Founder of EMEA Venture Builder"
            />
          </>
        } />

        
        
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
