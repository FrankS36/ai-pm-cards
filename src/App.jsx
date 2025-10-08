import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DiagnosticQ1 from './pages/DiagnosticQ1';
import DiagnosticQ2Problem from './pages/DiagnosticQ2Problem';
import DiagnosticPlanning from './pages/DiagnosticPlanning';
import DiagnosticBuilding from './pages/DiagnosticBuilding';
import PathView from './pages/PathView';
import BrowseView from './pages/BrowseView';
import PathsDirectory from './pages/PathsDirectory';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/start" element={<DiagnosticQ1 />} />
        <Route path="/start/problem" element={<DiagnosticQ2Problem />} />
        <Route path="/start/planning" element={<DiagnosticPlanning />} />
        <Route path="/start/building" element={<DiagnosticBuilding />} />
        <Route path="/path/:pathId" element={<PathView />} />
        <Route path="/paths" element={<PathsDirectory />} />
        <Route path="/browse" element={<BrowseView />} />
      </Routes>
    </Router>
  );
}

export default App;
