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

import ProcessDesign from './assets/ListEntryIcons/Icons/hierarchy-3.png'
import MessageHandling from './assets/ListEntryIcons/Icons/mail-check.png'
import SystemIntegration from './assets/ListEntryIcons/Icons/devices-bolt.png'
import PerformanceDashboards from './assets/ListEntryIcons/Icons/presentation-analytics.png'
import EnterpriseSecurity from './assets/ListEntryIcons/Icons/lock.png'

import DataSetup from './assets/ListEntryIcons/Icons/database-star.png'
import ForecastingModels from './assets/ListEntryIcons/Icons/presentation.png'
import TailoredBusiness from './assets/ListEntryIcons/Icons/adjustments.png'
import ClearInsights from './assets/ListEntryIcons/Icons/file-search.png'
import LongtermReliability from './assets/ListEntryIcons/Icons/clock-shield.png'

import AnyPlatform from './assets/ListEntryIcons/Icons/device-mobile-message.png'
import SmartFeatures from './assets/ListEntryIcons/Icons/cpu.png'
import ScalableSystems from './assets/ListEntryIcons/Icons/server-2.png'
import OfflineFriendly from './assets/ListEntryIcons/Icons/wifi-off.png'
import GrowthTools from './assets/ListEntryIcons/Icons/settings-share.png'

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
    icon: ProcessDesign,
    text: "Process design & automation",
    subtext: "We build smart workflows that remove repetitive tasks and reduce human error to make your operations faster and more accurate"
  },
  {
    icon: MessageHandling,
    text: "Automated Market Research",
    subtext: "We build software that automates market research by analyzing third‑party data and detecting emerging trends in real time"
  },
  {
    icon: SystemIntegration,
    text: "System integration",
    subtext: "We link your finance, HR, CRM and third-party tools into one seamless engine. That means fewer logins, no double entry, and one source"
  },
  {
    icon: PerformanceDashboards,
    text: "Performance dashboards",
    subtext: "Track your tasks, teams, and systems as they run. Spot trends and opportunities in one centralized view to get clarity and control"
  },
  {
    icon: EnterpriseSecurity,
  
    text: "Enterprise security",
    subtext: "We build automation systems without compromising on compliances We keep the operation protected with access and data encryption"
  }
]

const listItems2 = [
  {
    icon: DataSetup,
    text: "End-to-end data setup",
    subtext: "From raw spreadsheets to structured data pipelines, we develop, clean, and organize your data for reporting, modeling, and growth"
  },
  {
    icon: ForecastingModels,
    text: "Business forecasting models",
    subtext: "We build AI systems that predict what truly matters on demand. The models empower you to make data-driven decisions with confidence"
  },
  {
    icon: TailoredBusiness,
    text: "Tailored for your business",
    subtext: "We build tailored models that reflect your market, seasonality, and strategic goals, delivering insights that support your decision-making"
  },
  {
    icon: ClearInsights,
    text: "Clear, executive-ready insights",
    subtext: "We translate technical output into plain language with charts, visuals, and recommendations. We turn insights into decisive actions"
  },
  {
    icon: LongtermReliability,
  
    text: "Long-term reliability",
    subtext: "We design, develop and deploy  prediction systems with automated model updates and fully quality checks built-in"
  }
]

const listItems3 = [
  {
    icon: AnyPlatform,
    text: "Built for any platform",
    subtext: "We develop applications for Android and iOS platforms that adhere to the design and performance standards to each operating system"
  },
  {
    icon: SmartFeatures,
    text: "Smart features powered by AI",
    subtext: "We build applications with AI-powered tools like chat assistants and recommendation tools to enhance user experience and satisfaction"
  },
  {
    icon: ScalableSystems,
    text: "Scalable back-end systems",
    subtext: "We design back‑end systems that scale to global user bases by leveraging real‑time data synchronization across platforms seamlessly"
  },
  {
    icon: OfflineFriendly,
    text: "Offline-friendly design",
    subtext: "No internet? No problem. We build mobile apps that function fully offline and synchronize data once internet connection is restored"
  },
  {
    icon: GrowthTools,
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
            <div style={{justifyContent: 'center'}}>
              <IconListPage 
              listItems={listItems} 
              title={title} 
              flipped={true}
              image={TaskAutomationImage}
              imgSize={700} 
              imgTopMargin={2}
            />
            <IconListPage 
              listItems={listItems2} 
              title={title2} 
              flipped={false}
              image={PredictiveAnalyticsImage}
              imgSize={470}
              imgTopMargin={0}
            />
            <IconListPage 
              listItems={listItems3} 
              title={title3} 
              flipped={true} 
              image={MobileDevelopmentImage}
              imgSize={650}
              imgTopMargin={3}
            />
            </div>
            
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
