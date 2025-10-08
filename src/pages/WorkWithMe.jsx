import { useNavigate } from 'react-router-dom';
import './WorkWithMe.css';

function WorkWithMe() {
  const navigate = useNavigate();

  return (
    <div className="work-page">
      <div className="container">
        <div className="work-content">
          <div className="work-header">
            <h1>Collaborate</h1>
            <p className="work-intro">
              Let's apply these frameworks to ship AI products that users adopt.
            </p>
            <p className="work-availability">
              If your team is facing AI product challenges—user adoption, risk assessment,
              strategic direction—I'd love to explore how we can work together.
            </p>
          </div>

          <div className="services-section">
            <h2>How I Help</h2>

            <div className="service-card">
              <h3>AI Product Strategy</h3>
              <p>
                Validate opportunities, de-risk approaches, build execution roadmaps using
                battle-tested frameworks.
              </p>
              <ul className="service-details">
                <li>Opportunity assessment and validation</li>
                <li>Risk identification and mitigation planning</li>
                <li>Roadmap development with clear milestones</li>
                <li>Framework application from AI PM Cards</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Team Training</h3>
              <p>
                Level up your PMs on AI product fundamentals through workshops and applied learning.
              </p>
              <ul className="service-details">
                <li>Interactive workshops using real scenarios</li>
                <li>Framework application exercises</li>
                <li>Best practices from building AI/ML products</li>
                <li>Ongoing support and resources</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Product Audits</h3>
              <p>
                Review AI features against proven frameworks, identify gaps and opportunities.
              </p>
              <ul className="service-details">
                <li>Comprehensive feature evaluation</li>
                <li>User experience and adoption analysis</li>
                <li>Risk and compliance assessment</li>
                <li>Actionable recommendations prioritized by impact</li>
              </ul>
            </div>
          </div>

          <div className="approach-section">
            <h2>How We'll Work Together</h2>
            <p>
              Every engagement is grounded in the frameworks from AI PM Cards—approaches I've
              tested building AI/ML products at Dell Technologies. No theory. Just practical,
              applicable methods that help teams ship AI products users trust and adopt.
            </p>
            <p>
              I focus on three outcomes: user adoption, manageable risk, and sustainable execution.
              If your AI features are technically sound but users aren't adopting them, let's talk.
            </p>
          </div>

          <div className="availability-section">
            <h2>Let's Start a Conversation</h2>
            <p className="availability-note">
              I work with teams where there's strong alignment on goals and approach. The best
              partnerships start with understanding your unique challenges and exploring if these
              frameworks are the right fit.
            </p>
          </div>

          <div className="cta-section">
            <h2>Get in Touch</h2>
            <p>
              Connect with me on LinkedIn and share a bit about what you're working on.
              I'd love to hear about your AI product challenges and explore how we might work together.
            </p>
            <div className="cta-buttons">
              <a
                href="https://www.linkedin.com/in/frank-sellhausen/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-primary"
              >
                Connect on LinkedIn
              </a>
              <button
                className="btn-cta-secondary"
                onClick={() => navigate('/about')}
              >
                Learn More About Me
              </button>
            </div>
          </div>

          <div className="explore-section">
            <p className="explore-note">
              Want to see the frameworks in action first?{' '}
              <button className="link-button" onClick={() => navigate('/browse')}>
                Explore AI PM Cards
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkWithMe;
