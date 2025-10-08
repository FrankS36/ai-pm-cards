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
              As a Product Manager at Dell Technologies working on AI/ML products, I kept seeing the same patterns:
            </p>
            <ul className="problem-list">
              <li>Teams shipping AI features that confused users instead of helping them</li>
              <li>PMs treating AI like regular software, missing critical differences</li>
              <li>Risk considerations discovered too late in the development cycle</li>
              <li>Brilliant technical work that never achieved product-market fit</li>
            </ul>
            <p>
              I realized the problem wasn't a lack of information—it was a lack of <strong>actionable frameworks</strong> at
              the right moment. PMs needed practical, structured approaches they could apply immediately.
            </p>
            <p>
              So I built AI PM Cards: 128 frameworks across Strategy, Risk, and Execution that address the unique
              challenges of AI product management.
            </p>
          </div>

          <div className="about-author">
            <h2>About Me</h2>
            <div className="author-bio">
              <p>
                I'm <strong>Frank Sellhausen</strong>, a Product Manager at Dell Technologies where I lead AI/ML product initiatives.
                I'm currently pursuing my MBA at Stanford Graduate School of Business (LEAD Program, 2025-2026).
              </p>
              <p>
                My background combines deep technical expertise with strategic product leadership:
              </p>
              <ul className="credentials-list">
                <li><strong>Certifications:</strong> PMP, Certified ScrumMaster, Google UX Design, IDEO Advanced Design Thinking</li>
                <li><strong>Technical Skills:</strong> Python, Front-End Development, ML/AI, Agile Methodologies</li>
                <li><strong>Experience:</strong> Digital transformation, AI/ML products, empowering high-performing teams</li>
                <li><strong>Military Service:</strong> Leadership training and discipline from military background</li>
              </ul>
              <p>
                What sets me apart is my ability to bridge technical depth with user-centered design. I don't just understand
                the algorithms—I understand how to package them into products people love using.
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
              AI PM Cards is a completely free, open resource built with:
            </p>
            <ul>
              <li><strong>128 cards</strong> covering critical AI PM frameworks</li>
              <li><strong>20 curated paths</strong> for different scenarios and skill levels</li>
              <li><strong>3 decks:</strong> Strategy (discovering opportunities), Risk (addressing challenges), and Execution (shipping successfully)</li>
              <li><strong>Real-world tested</strong> frameworks from actual AI product development</li>
            </ul>
            <p>
              Each card follows a consistent structure: when to use it, the framework itself, step-by-step implementation,
              and pro tips from experience. No fluff—just actionable guidance.
            </p>
            <p>
              The entire project is <a href="https://github.com/FrankS36/ai-pm-cards" target="_blank" rel="noopener noreferrer">open source on GitHub</a> and
              built with React, showcasing both product thinking and technical execution.
            </p>
          </div>

          <div className="about-audience">
            <h2>Who This Is For</h2>
            <div className="audience-grid">
              <div className="audience-card">
                <div className="audience-icon">🎯</div>
                <h3>Product Managers</h3>
                <p>Transitioning to AI products or looking to level up your AI PM skills</p>
              </div>
              <div className="audience-card">
                <div className="audience-icon">👩‍💼</div>
                <h3>Product Leaders</h3>
                <p>Building AI product teams and need frameworks for consistent execution</p>
              </div>
              <div className="audience-card">
                <div className="audience-icon">🚀</div>
                <h3>Founders</h3>
                <p>Shipping AI features and want to avoid common pitfalls</p>
              </div>
              <div className="audience-card">
                <div className="audience-icon">🎓</div>
                <h3>Students</h3>
                <p>Learning AI product management and need practical frameworks</p>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <h2>Let's Connect</h2>
            <p>
              I'm passionate about helping teams build AI products that create real value. Whether you have questions
              about the cards, want to discuss AI product challenges, or are interested in working together, I'd love to hear from you.
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
                Explore the Cards
              </button>
            </div>
          </div>

          <div className="about-footer">
            <p className="about-update">
              <strong>Always Learning:</strong> These cards reflect my current understanding and will evolve as I learn more.
              I update them regularly based on new experiences and community feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
