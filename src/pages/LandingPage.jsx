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

        <section className="what-is-card">
          <h2>What's an AI PM Card?</h2>
          <p className="section-intro">
            Each card is a 2-minute framework for one specific AI product challenge.
            Think of it as a playbook, not a blog post—you don't read them all, you pull the card you need, right when you need it.
          </p>
          <div className="card-anatomy">
            <div className="anatomy-item">
              <div className="anatomy-icon">❓</div>
              <h3>The Problem</h3>
              <p>When to use this card</p>
            </div>
            <div className="anatomy-item">
              <div className="anatomy-icon">📋</div>
              <h3>The Framework</h3>
              <p>Step-by-step tactic</p>
            </div>
            <div className="anatomy-item">
              <div className="anatomy-icon">💡</div>
              <h3>Real Example</h3>
              <p>How I used it at Dell</p>
            </div>
            <div className="anatomy-item">
              <div className="anatomy-icon">➡️</div>
              <h3>Next Steps</h3>
              <p>Related cards to explore</p>
            </div>
          </div>
        </section>

        <section className="use-cases">
          <h2>When to Use AI PM Cards</h2>
          <div className="use-cases-grid">
            <div className="use-case">
              <div className="use-case-icon">🚀</div>
              <h3>Planning</h3>
              <p className="use-case-question">"Should we even build this AI feature?"</p>
              <p className="use-case-solution">→ Card: <strong>Identify AI Opportunities</strong></p>
            </div>
            <div className="use-case">
              <div className="use-case-icon">⚠️</div>
              <h3>Stuck</h3>
              <p className="use-case-question">"Users don't trust our AI recommendations"</p>
              <p className="use-case-solution">→ Path: <strong>When Users Don't Trust Your AI</strong> (8 cards)</p>
            </div>
            <div className="use-case">
              <div className="use-case-icon">🎯</div>
              <h3>Shipping</h3>
              <p className="use-case-question">"How do we design AI UX that doesn't overwhelm?"</p>
              <p className="use-case-solution">→ Card: <strong>Design Progressive Disclosure</strong></p>
            </div>
            <div className="use-case">
              <div className="use-case-icon">🔧</div>
              <h3>Improving</h3>
              <p className="use-case-question">"Our AI accuracy is 85%, is that good enough?"</p>
              <p className="use-case-solution">→ Card: <strong>Define Success Metrics</strong></p>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Pick your entry point</h3>
              <p>Start with a diagnostic quiz, browse 20 curated paths, or search all 150 cards</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Read the card (2 minutes)</h3>
              <p>Get the framework, see a real example, understand when to use it</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Follow related cards</h3>
              <p>Each card links to what comes next—follow the path that matches your journey</p>
            </div>
          </div>
          <div className="how-it-works-cta">
            <button className="btn-primary" onClick={() => navigate('/start')}>
              Try the 30-Second Diagnostic
            </button>
          </div>
        </section>

        <section className="example-preview">
          <h2>See a Card in Action</h2>
          <div className="preview-card" onClick={() => navigate('/browse?card=design-progressive-disclosure')}>
            <div className="preview-header">
              <span className="preview-deck">UX & Design</span>
              <span className="preview-id">Card #42</span>
            </div>
            <h3 className="preview-title">Design Progressive Disclosure</h3>
            <p className="preview-problem">
              <strong>The Problem:</strong> Your AI feature has 20 configuration options. If you show them all upfront, users freeze. If you hide them, power users complain.
            </p>
            <p className="preview-framework">
              <strong>The Framework:</strong> Layer 1 (default): Show only what 80% of users need. Layer 2 (optional): Hide advanced controls behind "Show more." Layer 3 (expert): Technical settings behind "Advanced mode."
            </p>
            <p className="preview-example">
              <strong>Example:</strong> At Dell, our AI writing assistant had 15 knobs. We showed 3 by default (tone, length, audience). Click "Advanced" revealed 8 more. Click "Expert mode" unlocked the rest. Result: 90% of users never needed Layer 2.
            </p>
            <div className="preview-footer">
              <span className="preview-cta">Click to view full card →</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
