import { useNavigate } from 'react-router-dom';
import './Diagnostic.css';

function DiagnosticBuilding() {
  const navigate = useNavigate();

  return (
    <div className="diagnostic-screen">
      <div className="container">
        <div className="diagnostic-header">
          <button className="btn-back" onClick={() => navigate('/start')}>
            ← Back
          </button>
          <h2>What execution challenge are you facing?</h2>
          <p className="diagnostic-subtitle">Select the statement that best matches your situation</p>
        </div>

        <div className="problem-list">
          <button className="problem-btn-detailed" onClick={() => navigate('/path/scoping-first-feature')}>
            <h3>"I need to write specs or requirements for an AI feature"</h3>
            <p>Product specs, success metrics, acceptance criteria, edge cases</p>
          </button>

          <button className="problem-btn-detailed" onClick={() => navigate('/path/data-pipelines')}>
            <h3>"I'm setting up data infrastructure and pipelines"</h3>
            <p>Data collection, labeling workflows, versioning, quality validation</p>
          </button>

          <button className="problem-btn-detailed" onClick={() => navigate('/path/model-to-production')}>
            <h3>"I'm taking AI from prototype to production"</h3>
            <p>Model iteration, testing, deployment, monitoring, feedback loops</p>
          </button>

          <button className="problem-btn-detailed" onClick={() => navigate('/path/ai-ux-design')}>
            <h3>"I'm designing user experiences for AI features"</h3>
            <p>Loading states, errors, confidence scores, explanations, feedback</p>
          </button>

          <button className="problem-btn-detailed" onClick={() => navigate('/path/testing-qa')}>
            <h3>"I need to establish AI testing practices"</h3>
            <p>Test strategy, edge cases, A/B testing, shadow mode, fairness testing</p>
          </button>

          <button className="problem-btn-detailed" onClick={() => navigate('/path/launching-safely')}>
            <h3>"I'm preparing to launch AI to production"</h3>
            <p>Phased rollouts, monitoring dashboards, incident response, fallbacks</p>
          </button>

          <button className="problem-btn-detailed" onClick={() => navigate('/path/end-to-end-launch')}>
            <h3>"I'm launching a new AI product from scratch"</h3>
            <p>Complete end-to-end journey from concept through production (8-12 weeks)</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiagnosticBuilding;
