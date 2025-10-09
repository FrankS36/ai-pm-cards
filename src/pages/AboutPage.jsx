import { useNavigate } from 'react-router-dom';
import './AboutPage.css';

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <div className="container">
        <div className="about-content">
          <div className="about-header">
            <h1>About AI PM Cards</h1>
            <p className="about-tagline">
              Practical frameworks for building AI products that users actually adopt
            </p>
          </div>

          <div className="about-story">
            <h2>Why I Built This</h2>
            <p>
              Two years ago, I watched a team spend 9 months building an AI recommendation engine for an enterprise product.
              The model was brilliant—94% accuracy. Launch day: 3% adoption.
            </p>
            <p>
              The problem wasn't the algorithm. It was everything else: trust, explainability, user experience,
              progressive disclosure. We rebuilt the UX using frameworks I'd learned shipping AI products at a Fortune 50
              company. 6 weeks later: 47% adoption. Same model, different product thinking.
            </p>
            <p>
              That's when I started documenting what actually works. Not theory—tactical frameworks from shipping
              AI features to 100K+ users across enterprise products. The patterns that drive adoption, build trust,
              and prevent failures.
            </p>
            <p>
              AI PM Cards is those frameworks. 156 of them, organized into Strategy, Risk, and Execution. Each one
              answers a specific question you'll face when building AI products.
            </p>
          </div>

          <div className="about-author">
            <h2>About Me</h2>
            <div className="author-bio">
              <p>
                I'm <strong>Frank Sellhausen</strong>, an AI/ML Product Manager leading product initiatives at Dell Technologies.
                Over 5+ years, I've shipped AI features to 100K+ enterprise users and learned what drives adoption (and what kills it).
              </p>
              <p>
                My background combines technical depth with product thinking. I write Python, understand the algorithms,
                and know how to package them into products users trust. That's rare—most PMs are one or the other.
              </p>
              <p>
                These frameworks come from real experience: features that flopped, features that scaled, late-night
                debugging sessions, user interviews that changed everything, and launches that taught hard lessons.
              </p>
              <p className="philosophy">
                <em>
                  "The best AI products don't showcase their intelligence—they make users feel more intelligent."
                </em>
              </p>
            </div>
          </div>

          <div className="about-project">
            <h2>About the Project</h2>
            <p>
              AI PM Cards is completely free and built with:
            </p>
            <ul>
              <li><strong>156 frameworks</strong> covering every scenario you'll face</li>
              <li><strong>20 curated learning paths</strong> for different situations</li>
              <li><strong>3 specialized decks:</strong> Strategy, Risk, and Execution</li>
              <li><strong>Battle-tested</strong> frameworks from shipping AI products at scale</li>
            </ul>
            <p>
              Each framework follows a consistent structure: when to use it, step-by-step application,
              pro tips from experience, and related frameworks. No theory, no fluff—just what works.
            </p>
            <p>
              The project is <a href="https://github.com/FrankS36/ai-pm-cards" target="_blank" rel="noopener noreferrer">open source on GitHub</a>,
              built with React, and demonstrates both product thinking and technical execution.
            </p>
          </div>

          <div className="about-audience">
            <h2>Who This Is For</h2>
            <p className="audience-intro">
              Built primarily for <strong>Product Managers shipping their first AI features</strong>.
              Also valuable for product leaders building AI teams and founders shipping AI products.
            </p>
            <div className="audience-grid">
              <div className="audience-card">
                <div className="audience-icon">🎯</div>
                <h3>Product Managers</h3>
                <p>Entering AI product development and need tactical frameworks to ship with confidence</p>
              </div>
              <div className="audience-card">
                <div className="audience-icon">👩‍💼</div>
                <h3>Product Leaders</h3>
                <p>Building AI teams and need frameworks for consistent execution across products</p>
              </div>
              <div className="audience-card">
                <div className="audience-icon">🚀</div>
                <h3>Founders</h3>
                <p>Shipping AI features fast and want to avoid the mistakes everyone else makes</p>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <h2>Let's Connect</h2>
            <p>
              Questions about applying these frameworks? Want to discuss a specific AI product challenge?
              Connect with me on LinkedIn.
            </p>
            <div className="cta-buttons">
              <a
                href="https://www.linkedin.com/in/frank-sellhausen/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta btn-cta-primary"
              >
                Connect on LinkedIn
              </a>
              <button
                className="btn-cta"
                onClick={() => navigate('/browse')}
              >
                Browse All Frameworks
              </button>
            </div>
          </div>

          <div className="about-footer">
            <p className="about-update">
              <strong>These frameworks evolve.</strong> I update them regularly based on new experience and what I learn
              from shipping AI products. Last updated: January 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
