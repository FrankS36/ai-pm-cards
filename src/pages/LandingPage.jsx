import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="container">
        <header className="hero">
          <h1 className="headline">Navigate your AI product journey with confidence</h1>
          <p className="subheadline">
            150 battle-tested tactics for strategy, risk, and execution—organized to get you from problem to solution in minutes.
          </p>

          <div className="cta-group">
            <button className="btn-primary" onClick={() => navigate('/start')}>
              Find Your Starting Point
            </button>
            <button className="btn-secondary" onClick={() => navigate('/paths')}>
              Browse Journey Paths
            </button>
            <button className="btn-secondary" onClick={() => navigate('/browse')}>
              Browse All Cards
            </button>
          </div>

          <div className="trust-indicators">
            <span>150 tactics</span>
            <span>•</span>
            <span>3 decks</span>
            <span>•</span>
            <span>For AI/ML Product Managers</span>
          </div>
        </header>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-icon">🧭</div>
              <h3>Tell us where you are</h3>
              <p>Answer 2 quick questions about your challenge</p>
            </div>
            <div className="step">
              <div className="step-icon">🎴</div>
              <h3>Get your tactic</h3>
              <p>Land on the perfect card for your situation</p>
            </div>
            <div className="step">
              <div className="step-icon">🔗</div>
              <h3>Follow the path</h3>
              <p>Explore related cards to complete your journey</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
