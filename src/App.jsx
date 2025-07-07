import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/IconListPage/Home.jsx';
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

import MobileApps from './projectpages/MobileApps.jsx';
import Healthcare from './projectpages/Healthcare.jsx';
import MachineLearning from './projectpages/MachineLearning.jsx';
import Academy from './projectpages/Academy.jsx';

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
    subtext: "We develop applications for Android and iOS platforms that adhere to the design and performance standards to each operating system"
  },
  {
    icon: DocumentIcon,
    text: "Smart features powered by AI",
    subtext: "We build applications with AI-powered tools like chat assistants and recommendation tools to enhance user experience and satisfaction"
  },
  {
    icon: DownloadIcon,
    text: "Scalable back-end systems",
    subtext: "We design back‑end systems that scale to global user bases by leveraging real‑time data synchronization across platforms seamlessly"
  },
  {
    icon: InfoIcon,
    text: "Offline-friendly design",
    subtext: "No internet? No problem. We build mobile apps that function fully offline and synchronize data once internet connection is restored"
  },
  {
    icon: BankIcon,
    text: "Built-in growth tools",
    subtext: "We embed analytics, engagement tracking, and A/B testing tools to drive data‑informed growth and continual optimization across products"
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
              quote="I am an expert in Artificial Intelligence with a strong background in data science, software development, and AI Ethics. I specialize in developing AI systems that are fair, transparent and human-centered. My experience covers software engineering, AI education, and Ethical training."
              name="Neema Balolebwami Nelly"
              title="CEO and Founder of EMEA Venture Builder"
            />
          </>
        } />

        
        
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/mobile-apps" element={<MobileApps />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/academy" element={<Academy />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
