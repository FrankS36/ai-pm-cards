import { useNavigate } from 'react-router-dom';
import './Diagnostic.css';

function DiagnosticPlanning() {
  const navigate = useNavigate();

  return (
    <div className="diagnostic-screen">
      <div className="container">
        <div className="diagnostic-header">
          <button className="btn-back" onClick={() => navigate('/start')}>
            ← Back
          </button>
          <h2>What planning challenge are you facing?</h2>
          <p className="diagnostic-subtitle">Select the statement that best matches your situation</p>
        </div>

        <div className="problem-list">
          <button className="problem-btn-detailed" onClick={() => navigate('/path/concept-to-strategy')}>
            <h3>"I need to figure out if AI is even the right solution"</h3>
            <p>Exploring whether AI fits your product or user need</p>
          </button>

          <button className="problem-btn-detailed" onClick={() => navigate('/path/first-business-case')}>
            <h3>"I need to convince leadership to invest in AI"</h3>
            <p>Building ROI projections, quantifying benefits, securing budget</p>
          </button>

          <button className="problem-btn-detailed" onClick={() => navigate('/path/choosing-ai-approach')}>
            <h3>"I'm deciding whether to build, buy, or use APIs"</h3>
            <p>Evaluating technical feasibility and architectural decisions</p>
          </button>

          <button className="problem-btn-detailed" onClick={() => navigate('/path/roadmap-planning')}>
            <h3>"I need to create a 6-12 month AI roadmap"</h3>
            <p>Prioritizing features, sequencing work, planning tech debt</p>
          </button>

          <button className="problem-btn-detailed" onClick={() => navigate('/path/pricing-ai-product')}>
            <h3>"I'm figuring out how to price and monetize AI"</h3>
            <p>Pricing strategy, packaging, cost containment, unit economics</p>
          </button>

          <button className="problem-btn-detailed" onClick={() => navigate('/path/enterprise-guide')}>
            <h3>"I'm navigating enterprise AI complexity"</h3>
            <p>Large org constraints, procurement, compliance, change management</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiagnosticPlanning;
