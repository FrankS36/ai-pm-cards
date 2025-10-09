import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="container">
        <header className="hero">
          <h1 className="headline">156 Battle-Tested Frameworks for Shipping AI Products Users Actually Adopt</h1>
          <p className="subheadline">
            The tactical frameworks I used at Dell Technologies to increase AI feature adoption from 8% to 47% in 6 weeks.
            Built for Product Managers shipping their first AI features.
          </p>

          <div className="creator-badge">
            <div className="creator-avatar">FS</div>
            <div className="creator-info">
              <div className="creator-name">Frank Sellhausen</div>
              <div className="creator-title">AI/ML Product Manager at Dell Technologies</div>
            </div>
          </div>

          <div className="hero-cta">
            <button className="btn-primary btn-large" onClick={() => navigate('/start')}>
              Find Your Framework →
            </button>
            <button className="btn-link" onClick={() => navigate('/browse')}>
              or browse all 156 frameworks
            </button>
          </div>

          <div className="trust-indicators">
            <span>156 frameworks</span>
            <span>•</span>
            <span>20 curated paths</span>
            <span>•</span>
            <span>Free forever</span>
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
            <div className="validation-card">
              <div className="validation-icon">🎯</div>
              <h3>Write a Clear Problem Statement</h3>
              <p>Frame the user problem you're solving before jumping to AI solutions</p>
            </div>
            <div className="validation-card">
              <div className="validation-icon">🎤</div>
              <h3>Conduct Customer Discovery</h3>
              <p>Run interviews that uncover real problems, not what users think you want to hear</p>
            </div>
            <div className="validation-card">
              <div className="validation-icon">💼</div>
              <h3>Jobs to Be Done Framework</h3>
              <p>Understand what users are really hiring your product to do</p>
            </div>
          </div>
          <div className="validation-cta">
            <button className="btn-secondary" onClick={() => navigate('/path/problem-discovery')}>
              Explore Problem Discovery Path →
            </button>
          </div>
        </section>

        <section className="solution-section">
          <h2>Frameworks That Actually Ship</h2>
          <p className="section-intro">
            Real outcomes from applying these frameworks at Dell Technologies. Same models, better product thinking.
          </p>
          <div className="solution-grid">
            <div className="solution-example">
              <div className="solution-problem">
                <span className="solution-label">The Problem</span>
                <h3>8% adoption - users ignored our AI recommendations</h3>
              </div>
              <div className="solution-arrow">→</div>
              <div className="solution-card">
                <span className="solution-label">The Framework</span>
                <div className="mini-card">
                  <div className="mini-card-deck">UX & Design</div>
                  <h4>Progressive Disclosure + Explainability</h4>
                  <p>Applied 3 trust-building patterns</p>
                </div>
              </div>
              <div className="solution-arrow">→</div>
              <div className="solution-outcome">
                <span className="solution-label">The Outcome</span>
                <h3>47% adoption in 6 weeks</h3>
              </div>
            </div>
          </div>
          <div className="solution-stats">
            <div className="stat">
              <div className="stat-number">156</div>
              <div className="stat-label">Frameworks</div>
            </div>
            <div className="stat">
              <div className="stat-number">20</div>
              <div className="stat-label">Curated Paths</div>
            </div>
            <div className="stat">
              <div className="stat-number">3</div>
              <div className="stat-label">Specialized Decks</div>
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
          <div className="preview-card" onClick={() => navigate('/framework/EXEC-025')}>
            <div className="preview-header">
              <span className="preview-deck">UX & Design</span>
              <span className="preview-id">EXEC-025</span>
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
          <h2>The Frameworks I Wish I Had When I Started</h2>
          <div className="creator-content">
            <div className="creator-avatar-large">FS</div>
            <div className="creator-story">
              <h3>Frank Sellhausen</h3>
              <p className="creator-subtitle">AI/ML Product Manager at Dell Technologies</p>
              <p className="creator-quote">
                "I've shipped AI features that users hated and ones they loved. The difference wasn't the algorithm—it was the product thinking. These frameworks capture what actually works when shipping AI products to real users."
              </p>
              <div className="creator-credentials">
                <span className="credential">📈 Increased AI adoption by 40%+ avg</span>
                <span className="credential">🏢 Leading AI initiatives at Fortune 50</span>
                <span className="credential">📚 156 frameworks from 5+ years shipping</span>
              </div>
              <button className="btn-link" onClick={() => navigate('/about')}>
                Read full story →
              </button>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <h2>Start Shipping AI Products Users Actually Adopt</h2>
          <p className="final-cta-subtitle">
            Take the 30-second diagnostic and get matched to the frameworks you need right now.
          </p>
          <button className="btn-primary btn-large" onClick={() => navigate('/start')}>
            Find Your Framework →
          </button>
          <div className="final-cta-trust">
            156 frameworks • 20 paths • Free forever
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
