import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './pages/LandingPage';
import LandingPageVariantA from './pages/LandingPageVariantA';
import LandingPageVariantB from './pages/LandingPageVariantB';
import LandingPageVariantC from './pages/LandingPageVariantC';
import DiagnosticQ1 from './pages/DiagnosticQ1';
import DiagnosticQ2Problem from './pages/DiagnosticQ2Problem';
import DiagnosticPlanning from './pages/DiagnosticPlanning';
import DiagnosticBuilding from './pages/DiagnosticBuilding';
import PathView from './pages/PathView';
import BrowseView from './pages/BrowseView';
import PathsDirectory from './pages/PathsDirectory';
import LifecyclePage from './pages/LifecyclePage';
import FrameworkPage from './pages/FrameworkPage';
import AboutPage from './pages/AboutPage';
import WorkWithMe from './pages/WorkWithMe';
import ResourcesPage from './pages/ResourcesPage';
import ROICalculator from './pages/ROICalculator';
import TemplatesPage from './pages/TemplatesPage';
import PromptsPage from './pages/PromptsPage';
import AgentsPage from './pages/AgentsPage';
import TrendsPage from './pages/TrendsPage';
import LogoComparison from './pages/LogoComparison';
import IconReview from './pages/IconReview';
import IconTest from './pages/IconTest';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import KeyboardHelp from './components/KeyboardHelp';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/vp/speed" element={<LandingPageVariantA />} />
          <Route path="/vp/pain" element={<LandingPageVariantB />} />
          <Route path="/vp/free" element={<LandingPageVariantC />} />
          <Route path="/start" element={<DiagnosticQ1 />} />
          <Route path="/start/problem" element={<DiagnosticQ2Problem />} />
          <Route path="/start/planning" element={<DiagnosticPlanning />} />
          <Route path="/start/building" element={<DiagnosticBuilding />} />
          <Route path="/path/:pathId" element={<PathView />} />
          <Route path="/paths" element={<PathsDirectory />} />
          <Route path="/lifecycle" element={<LifecyclePage />} />
          <Route path="/browse" element={<BrowseView />} />
          <Route path="/framework/:cardId" element={<FrameworkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/prompts" element={<PromptsPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/trends" element={<TrendsPage />} />
          <Route path="/tools/roi-calculator" element={<ROICalculator />} />
          <Route path="/collaborate" element={<WorkWithMe />} />
          <Route path="/work" element={<WorkWithMe />} />
          <Route path="/logos" element={<LogoComparison />} />
          <Route path="/icons" element={<IconReview />} />
          <Route path="/icon-test" element={<IconTest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
      <KeyboardHelp />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
