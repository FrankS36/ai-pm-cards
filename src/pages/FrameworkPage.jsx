import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ShareButton from '../components/ShareButton';
import { shareCard } from '../utils/share';
import cardDataJson from '../data/cardData.json';
import './FrameworkPage.css';

function FrameworkPage() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [framework, setFramework] = useState(null);
  const [relatedFrameworks, setRelatedFrameworks] = useState([]);

  useEffect(() => {
    // Find the framework by ID
    const card = cardDataJson.cards[cardId];

    if (!card) {
      navigate('/404');
      return;
    }

    setFramework(card);

    // Find paths that contain this framework
    const containingPaths = Object.values(cardDataJson.paths).filter(path =>
      path.cardIds.includes(cardId)
    );

    setRelatedFrameworks(containingPaths);
  }, [cardId, navigate]);

  // Navigate to related framework
  const handleRelatedClick = (relatedText) => {
    const titleMatch = relatedText.match(/(?:Next|Previous|Also|Related):\s*(.+)/);
    const searchTitle = titleMatch ? titleMatch[1].trim() : relatedText;

    const allCards = Object.values(cardDataJson.cards);
    const foundCard = allCards.find(card =>
      card.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
      searchTitle.toLowerCase().includes(card.title.toLowerCase())
    );

    if (foundCard) {
      navigate(`/framework/${foundCard.id}`);
      window.scrollTo(0, 0);
    }
  };

  if (!framework) {
    return null;
  }

  return (
    <div className="framework-page">
      <div className="framework-container">
        {/* Header */}
        <div className="framework-header">
          <button className="btn-back" onClick={() => navigate('/browse')}>
            ← Back to Browse
          </button>

          <div className="framework-meta">
            <span className={`framework-deck ${framework.deck}-deck`}>
              {framework.deck.charAt(0).toUpperCase() + framework.deck.slice(1)}
            </span>
            <span className="framework-divider">•</span>
            <span className="framework-category">{framework.category}</span>
            <span className="framework-divider">•</span>
            <span className={`framework-difficulty ${framework.difficulty}`}>
              {framework.difficulty.charAt(0).toUpperCase() + framework.difficulty.slice(1)}
            </span>
          </div>

          <div className="framework-icon-large">{framework.icon}</div>

          <h1 className="framework-title">{framework.title}</h1>
          <p className="framework-description">{framework.description}</p>

          <div className="framework-actions">
            <ShareButton
              onShare={() => shareCard(framework)}
              label="Share Framework"
            />
          </div>
        </div>

        {/* When to Use */}
        <section className="framework-section">
          <h2>When to Use This Framework</h2>
          <ul className="when-to-use-list">
            {framework.whenToUse.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Overview */}
        <section className="framework-section">
          <h2>Overview</h2>
          <p className="framework-overview">{framework.overview}</p>
        </section>

        {/* Steps */}
        <section className="framework-section">
          <h2>How to Apply It</h2>
          <ol className="framework-steps">
            {framework.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>

        {/* Tips */}
        {framework.tips && framework.tips.length > 0 && (
          <section className="framework-section">
            <h2>💡 Pro Tips</h2>
            <ul className="framework-tips">
              {framework.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Related Frameworks */}
        {framework.relatedCards && framework.relatedCards.length > 0 && (
          <section className="framework-section">
            <h2>Related Frameworks</h2>
            <div className="related-frameworks">
              {framework.relatedCards.map((related, index) => (
                <button
                  key={index}
                  className="related-framework-btn"
                  onClick={() => handleRelatedClick(related)}
                >
                  {related}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Paths containing this framework */}
        {relatedFrameworks.length > 0 && (
          <section className="framework-section">
            <h2>Learning Paths</h2>
            <p className="paths-intro">This framework is part of these curated learning paths:</p>
            <div className="framework-paths">
              {relatedFrameworks.map((path) => (
                <button
                  key={path.id}
                  className="path-card"
                  onClick={() => {
                    // Set progress to this card's index in the path
                    const cardIndex = path.cardIds.indexOf(cardId);
                    localStorage.setItem(`path-progress-${path.id}`, cardIndex.toString());
                    navigate(`/path/${path.id}`);
                  }}
                >
                  <h3>{path.title}</h3>
                  <p>{path.description}</p>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="framework-cta">
          <h2>Ready to explore more frameworks?</h2>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => navigate('/browse')}>
              Browse All Frameworks
            </button>
            <button className="btn-secondary" onClick={() => navigate('/paths')}>
              View Learning Paths
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FrameworkPage;
