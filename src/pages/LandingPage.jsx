import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="container">
        <header className="hero">
          <h1 className="headline">Ship AI Features Without the Guesswork</h1>
          <p className="subheadline">
            Battle-tested frameworks from a Product Manager who ships AI/ML products. Free, no signup required.
          </p>

          <div className="creator-badge">
            <div className="creator-avatar">FS</div>
            <div className="creator-info">
              <div className="creator-name">Frank Sellhausen</div>
              <div className="creator-title">AI/ML Product Manager | Certified Scrum Product Owner</div>
            </div>
          </div>

          <div className="hero-cta">
            <button className="btn-primary btn-large" onClick={() => navigate('/start')}>
              Find Your Framework →
            </button>
            <button className="btn-link" onClick={() => navigate('/browse')}>
              or browse all 150 frameworks
            </button>
          </div>

          <div className="trust-indicators">
            <span>Free</span>
            <span>•</span>
            <span>No signup</span>
            <span>•</span>
            <span>150 frameworks</span>
            <span>•</span>
            <span>20 curated paths</span>
          </div>
        </header>

        <section className="problem-section">
          <h2>Sound Familiar?</h2>
          <div className="pain-points">
            <div className="pain-point">
              <span className="pain-icon">❌</span>
              <p>Your exec said "add AI" but gave no roadmap</p>
            </div>
            <div className="pain-point">
              <span className="pain-icon">❌</span>
              <p>You're Googling "AI product strategy" and getting blog posts</p>
            </div>
            <div className="pain-point">
              <span className="pain-icon">❌</span>
              <p>You have no idea if 85% accuracy is good enough</p>
            </div>
            <div className="pain-point">
              <span className="pain-icon">❌</span>
              <p>Your users don't trust the AI recommendations</p>
            </div>
            <div className="pain-point">
              <span className="pain-icon">❌</span>
              <p>You feel like everyone else knows something you don't</p>
            </div>
          </div>
          <p className="problem-solution-bridge">
            You don't need more theory. <strong>You need tactics from someone who's shipped this.</strong>
          </p>
        </section>

        <section className="validation-section">
          <h2>Wait. Are You Solving the Right Problem?</h2>
          <p className="section-intro">
            Before you build AI features, validate you're solving a problem users actually have.
          </p>
          <div className="validation-grid">
            <div className="validation-card" onClick={() => navigate('/browse?card=STRAT-008')}>
              <div className="validation-icon">💎</div>
              <h3>Define AI Value Proposition</h3>
              <p>Articulate the specific value AI delivers beyond what non-AI solutions can provide</p>
            </div>
            <div className="validation-card" onClick={() => navigate('/browse?card=STRAT-001')}>
              <div className="validation-icon">🗺️</div>
              <h3>Map Model Capabilities</h3>
              <p>Evaluate which AI capabilities you need and assess technical feasibility</p>
            </div>
            <div className="validation-card" onClick={() => navigate('/browse?card=STRAT-012')}>
              <div className="validation-icon">🚀</div>
              <h3>Run a Feasibility Spike</h3>
              <p>Test if your AI idea is technically possible with a quick prototype</p>
            </div>
          </div>
          <div className="validation-cta">
            <button className="btn-secondary" onClick={() => navigate('/paths/problem-discovery')}>
              Explore Problem Discovery Path →
            </button>
          </div>
        </section>

        <section className="solution-section">
          <h2>Frameworks That Actually Ship</h2>
          <p className="section-intro">
            Every situation you'll face. Every decision you'll make. Frameworks from someone who's been there.
          </p>
          <div className="solution-grid">
            <div className="solution-example">
              <div className="solution-problem">
                <span className="solution-label">The Problem</span>
                <h3>"Users don't trust our AI"</h3>
              </div>
              <div className="solution-arrow">→</div>
              <div className="solution-card">
                <span className="solution-label">The Framework</span>
                <div className="mini-card">
                  <div className="mini-card-deck">Strategy & Risk</div>
                  <h4>When Users Don't Trust Your AI</h4>
                  <p>8 frameworks with tactics</p>
                </div>
              </div>
              <div className="solution-arrow">→</div>
              <div className="solution-outcome">
                <span className="solution-label">The Outcome</span>
                <h3>Ship with confidence</h3>
              </div>
            </div>
          </div>
          <div className="solution-stats">
            <div className="stat">
              <div className="stat-number">150</div>
              <div className="stat-label">Frameworks</div>
            </div>
            <div className="stat">
              <div className="stat-number">20</div>
              <div className="stat-label">Curated Paths</div>
            </div>
            <div className="stat">
              <div className="stat-number">Every</div>
              <div className="stat-label">Situation Covered</div>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <h2>Find Your Framework in 30 Seconds</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Tell us where you're stuck</h3>
              <p>Quick diagnostic or browse paths</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Get your framework</h3>
              <p>2-minute read with real examples</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Ship the feature</h3>
              <p>Follow related cards to complete</p>
            </div>
          </div>
        </section>

        <section className="example-preview">
          <h2>See a Framework in Action</h2>
          <p className="section-intro">
            Here's what you get: the problem, the framework, and a real example from production.
          </p>
          <div className="preview-card" onClick={() => navigate('/browse?card=design-progressive-disclosure')}>
            <div className="preview-header">
              <span className="preview-deck">UX & Design</span>
              <span className="preview-id">Card #42</span>
            </div>
            <h3 className="preview-title">Design Progressive Disclosure</h3>

            <div className="preview-section">
              <h4>The Problem</h4>
              <p>Your AI feature has 20 configuration options. If you show them all upfront, users freeze. If you hide them, power users complain.</p>
            </div>

            <div className="preview-section">
              <h4>The Framework</h4>
              <p>Layer 1 (default): Show only what 80% of users need. Layer 2 (optional): Hide advanced controls behind "Show more." Layer 3 (expert): Technical settings behind "Advanced mode."</p>
            </div>

            <div className="preview-section">
              <h4>Real Example</h4>
              <p>An AI writing assistant had 15 configuration options. We showed 3 by default (tone, length, audience). Click "Advanced" revealed 8 more. Click "Expert mode" unlocked the rest. Result: 90% of users never needed Layer 2.</p>
            </div>

            <div className="preview-footer">
              <span className="preview-cta">Click to explore full framework →</span>
            </div>
          </div>
        </section>

        <section className="creator-section">
          <h2>From Real AI/ML Experience</h2>
          <div className="creator-content">
            <div className="creator-avatar-large">FS</div>
            <div className="creator-story">
              <h3>Frank Sellhausen</h3>
              <p className="creator-subtitle">AI/ML Product Manager</p>
              <p className="creator-quote">
                "I've shipped AI features that flopped and AI features that scaled. These are the frameworks I wish I had when I started. Now you have them."
              </p>
              <div className="creator-credentials">
                <span className="credential">🎓 Certified Scrum Product Owner</span>
                <span className="credential">🚀 Shipped AI/ML Products at Scale</span>
                <span className="credential">💡 150 Frameworks Documented</span>
              </div>
              <button className="btn-link" onClick={() => navigate('/about')}>
                Read full story →
              </button>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <h2>Ready to Ship Better AI Products?</h2>
          <p className="final-cta-subtitle">
            Start with the 30-second diagnostic. Find your framework. Ship with confidence.
          </p>
          <button className="btn-primary btn-large" onClick={() => navigate('/start')}>
            Get Started →
          </button>
          <div className="final-cta-trust">
            Free • No signup • No credit card
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
