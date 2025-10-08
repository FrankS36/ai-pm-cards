import { useNavigate } from 'react-router-dom';
import './Diagnostic.css';

function DiagnosticQ1() {
  const navigate = useNavigate();

  return (
    <div className="diagnostic-screen">
      <div className="container">
        <div className="diagnostic-header">
          <button className="btn-back" onClick={() => navigate('/')}>
            ← Back
          </button>
          <h2>What's your current situation?</h2>
          <p className="diagnostic-subtitle">Choose what best describes where you are</p>
        </div>

        <div className="option-cards">
          <div className="option-card" onClick={() => navigate('/path/ai-pm-fundamentals')}>
            <div className="option-icon">🌱</div>
            <h3>New to AI Product Management</h3>
            <p>I'm learning the fundamentals or just getting started</p>
          </div>

          <div className="option-card" onClick={() => navigate('/start/planning')}>
            <div className="option-icon">📋</div>
            <h3>Planning an AI initiative</h3>
            <p>Strategy, feasibility assessment, roadmap, or business case</p>
          </div>

          <div className="option-card" onClick={() => navigate('/start/building')}>
            <div className="option-icon">🔨</div>
            <h3>Building or launching AI</h3>
            <p>Writing specs, testing, deploying, or going to production</p>
          </div>

          <div className="option-card" onClick={() => navigate('/start/problem')}>
            <div className="option-icon">🚨</div>
            <h3>Solving a specific problem</h3>
            <p>Performance issues, risks, trust, compliance, or fixing what's broken</p>
          </div>
        </div>

        <a href="#" className="link-explore" onClick={(e) => { e.preventDefault(); navigate('/browse'); }}>
          I just want to explore all paths
        </a>
      </div>
    </div>
  );
}

export default DiagnosticQ1;
