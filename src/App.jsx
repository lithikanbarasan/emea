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

const listItems = [
  {
    icon: ClockIcon,
    text: "Automate your workflows and save hours",
    subtext: "We design systems that automate repetitive business processes, freeing up your team to focus on what matters most.."
  },
  {
    icon: DocumentIcon,
    text: "Custom mobile apps, built for users",
    subtext: "From concept to App Store, we develop sleek and scalable mobile apps tailored to your audience and platform."
  },
  {
    icon: DownloadIcon,
    text: "Streamline your operations",
    subtext: "Centralize your business tools, APIs, and data pipelines into one intuitive system to cut costs and increase speed."
  },
  {
    icon: InfoIcon,
    text: "Predict trends with advanced analytics",
    subtext: "Harness AI and machine learning to uncover insights and predict outcomes — from user behavior to business growth."
  },
  {
    icon: BankIcon,
    text: "Smart tools, tailored for your business",
    subtext: "Every product we build is purpose-driven: built from the ground up to support your processes, customers, and goals."
  }
]

const title = "Smart Tech That Grows With Your Business"


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Homepage with your full layout */}
        <Route path="/" element={
          <>
            <MainPage />
            <FeatureGrid />
            <IconListPage listItems={listItems} title={title} flipped={true} />
            <IconListPage listItems={listItems} title={title} flipped={false} />
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
