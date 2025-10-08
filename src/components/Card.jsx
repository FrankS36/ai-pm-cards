import { useState, useRef, useEffect } from 'react';
import './Card.css';

function Card({ cardData }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Reset flip state when card changes
  useEffect(() => {
    setIsFlipped(false);
  }, [cardData.id]);

  // Scroll to top of card when flipped
  useEffect(() => {
    if (cardRef.current && isFlipped) {
      const cardTop = cardRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: cardTop - 100, behavior: 'smooth' });
    }
  }, [isFlipped]);

  return (
    <div ref={cardRef} className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      {/* Front of Card */}
      <div className="card-front">
        <div className="card-header">
          <span className={`category-badge ${cardData.deck}-deck`}>{cardData.category}</span>
          <div className="metadata-icons">
            <span title={cardData.difficulty}>⚫⚫⚪</span>
            <span title={cardData.companyContext}>🏢</span>
          </div>
        </div>

        <div className="card-icon">{cardData.icon}</div>

        <h3 className="card-title">{cardData.title}</h3>

        <p className="card-description">{cardData.description}</p>

        <div className="when-to-use">
          <h4>When to Use:</h4>
          <ul>
            {cardData.whenToUse.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="card-id">{cardData.id}</div>
        <div className="flip-hint">Click to see framework →</div>
      </div>

      {/* Back of Card */}
      <div className="card-back">
        <h3 className="card-title">{cardData.title}</h3>

        <div className="framework-section">
          <h4>The Framework</h4>
          <p className="overview">{cardData.overview}</p>

          <ol className="steps">
            {cardData.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="tips-section">
          <h4>💡 Pro Tips</h4>
          <ul>
            {cardData.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="related-section">
          <h4>→ Related Cards</h4>
          <div className="related-cards">
            {cardData.relatedCards.map((related, index) => (
              <button key={index} className="related-card-btn">
                {related}
              </button>
            ))}
          </div>
        </div>

        <div className="flip-hint">Click to see front →</div>
      </div>
    </div>
  );
}

export default Card;
