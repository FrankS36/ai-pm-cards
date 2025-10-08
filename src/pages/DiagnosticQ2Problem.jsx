import { useNavigate } from 'react-router-dom';
import './Diagnostic.css';

function DiagnosticQ2Problem() {
  const navigate = useNavigate();

  return (
    <div className="diagnostic-screen">
      <div className="container">
        <div className="diagnostic-header">
          <button className="btn-back" onClick={() => navigate('/start')}>
            ← Back
          </button>
          <h2>What problem are you trying to solve?</h2>
          <p className="diagnostic-subtitle">Select the statement that best matches your situation</p>
        </div>

        <div className="problem-list">
          <button className="problem-btn-detailed" onClick={() => navigate('/path/fixing-underperforming')}>
            <h3>"Our AI model isn't performing well or is degrading"</h3>
            <p>Poor accuracy, model drift, overfitting, data quality issues</p>
          </button>

          <button className="problem-btn-detailed" onClick={() => navigate('/path/prevent-failures')}>
            <h3>"I'm worried about AI failures before we launch"</h3>
            <p>Bias detection, harmful outputs, edge cases, fallback mechanisms</p>
          </button>

          <button className="problem-btn-detailed" onClick={() => navigate('/path/building-trust')}>
            <h3>"Users don't trust our AI or its recommendations"</h3>
            <p>User skepticism, transparency, explainability, error communication</p>
          </button>

          <button className="problem-btn-detailed" onClick={() => navigate('/path/compliance-ethics')}>
            <h3>"I need to navigate regulations and ethical requirements"</h3>
            <p>GDPR, fairness auditing, audit trails, responsible AI documentation</p>
          </button>

          <button className="problem-btn-detailed" onClick={() => navigate('/path/cost-performance')}>
            <h3>"AI costs are too high or performance is too slow"</h3>
            <p>Unit economics, cost containment, latency optimization, efficiency</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiagnosticQ2Problem;
