import { useState } from 'react';
import './ResourcesPage.css';

function ResourcesPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // TODO: Replace with actual ConvertKit/Beehiiv API integration
    // For now, trigger downloads immediately
    setTimeout(() => {
      // Trigger download of all templates
      templates.forEach((template) => {
        const link = document.createElement('a');
        link.href = template.downloadUrl;
        link.download = template.downloadUrl.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });

      setIsSubmitted(true);
      setIsSubmitting(false);

      // TODO: When API is integrated:
      // 1. Call email service API
      // 2. Send email with download links
      // 3. Show success message
    }, 500);
  };

  const templates = [
    {
      id: 'progressive-disclosure',
      title: 'Progressive Disclosure Design Worksheet',
      description: 'Step-by-step guide to designing AI features that don\'t overwhelm users. Includes wireframe templates and user testing questions.',
      pages: '2 pages',
      format: 'PDF',
      relatedCard: 'design-progressive-disclosure',
      downloadUrl: '/templates/progressive-disclosure-worksheet.pdf', // TODO: Add actual file
    },
    {
      id: 'risk-scorecard',
      title: 'AI Risk Assessment Scorecard',
      description: 'Evaluate and score risks before building. Covers bias, privacy, performance, and UX risks with mitigation planning.',
      pages: '1 page',
      format: 'PDF',
      relatedCard: 'plan-model-risk-mitigation',
      downloadUrl: '/templates/risk-assessment-scorecard.pdf', // TODO: Add actual file
    },
    {
      id: 'opportunity-canvas',
      title: 'AI Opportunity Canvas',
      description: 'One-page template for assessing whether an AI feature is worth building. Includes go/no-go decision framework.',
      pages: '1 page',
      format: 'PDF',
      relatedCard: 'identify-ai-opportunities',
      downloadUrl: '/templates/ai-opportunity-canvas.pdf', // TODO: Add actual file
    },
  ];

  return (
    <div className="resources-page">
      <div className="container">
        <div className="resources-header">
          <h1>Free AI PM Templates</h1>
          <p className="resources-intro">
            Practical templates to apply the frameworks from AI PM Cards.
            Just enter your email to download all three templates instantly.
          </p>
        </div>

        {!isSubmitted ? (
          <>
            <div className="email-capture-section">
              <div className="email-capture-box">
                <h2>Download All Templates</h2>
                <p>
                  Enter your email to instantly download all 3 templates.
                  I'll also send you one AI PM framework per week (unsubscribe anytime).
                </p>
                <form onSubmit={handleSubmit} className="email-form">
                  <input
                    type="email"
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="email-input"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="email-submit"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Templates'}
                  </button>
                </form>
                {error && <p className="error-message">{error}</p>}
                <p className="privacy-note">
                  No spam. Unsubscribe anytime. Your email stays private.
                </p>
              </div>
            </div>

            <div className="templates-grid">
              {templates.map((template) => (
                <div key={template.id} className="template-card">
                  <div className="template-header">
                    <h3>{template.title}</h3>
                    <div className="template-meta">
                      <span className="template-format">{template.format}</span>
                      <span className="template-pages">{template.pages}</span>
                    </div>
                  </div>
                  <p className="template-description">{template.description}</p>
                  <div className="template-actions">
                    <a
                      href={`/browse?card=${template.relatedCard}`}
                      className="view-card-link"
                    >
                      View Related Framework →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="why-templates-section">
              <h2>Why These Templates?</h2>
              <div className="why-grid">
                <div className="why-item">
                  <div className="why-icon">⚡</div>
                  <h3>Immediately Actionable</h3>
                  <p>Don't just read about frameworks—apply them today with fill-in-the-blank templates.</p>
                </div>
                <div className="why-item">
                  <div className="why-icon">✅</div>
                  <h3>Battle-Tested</h3>
                  <p>Used at Dell Technologies to ship AI/ML products. Real-world proven, not theoretical.</p>
                </div>
                <div className="why-item">
                  <div className="why-icon">🎯</div>
                  <h3>Team-Ready</h3>
                  <p>Share with your team, use in workshops, adapt to your needs. No attribution required.</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="success-section">
            <div className="success-box">
              <div className="success-icon">✓</div>
              <h2>Templates Downloaded!</h2>
              <p className="success-message">
                Your 3 templates should be downloading now. Check your downloads folder!
              </p>
              <p className="success-submessage">
                Didn't download?{' '}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="retry-link"
                >
                  try again
                </button>
              </p>
              <div className="success-templates">
                <h3>What You're Getting:</h3>
                <ul>
                  {templates.map((template) => (
                    <li key={template.id}>{template.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResourcesPage;
