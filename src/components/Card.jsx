import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ShareButton from './ShareButton';
import { shareCard } from '../utils/share';
import cardDataJson from '../data/cardData.json';
import './Card.css';

function Card({ cardData }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const cardFrontRef = useRef(null);
  const cardBackRef = useRef(null);
  const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Navigate to related framework page
  const handleRelatedCardClick = (e, relatedText) => {
    e.stopPropagation(); // Prevent card flip

    // Extract card title from text like "Next: Run a Model Feasibility Spike"
    const titleMatch = relatedText.match(/(?:Next|Previous|Also|Related):\s*(.+)/);
    const searchTitle = titleMatch ? titleMatch[1].trim() : relatedText;

    // Search for card by title
    const allCards = Object.values(cardDataJson.cards);
    const foundCard = allCards.find(card =>
      card.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
      searchTitle.toLowerCase().includes(card.title.toLowerCase())
    );

    if (foundCard) {
      navigate(`/framework/${foundCard.id}`);
    } else {
      alert(`Could not find framework: "${searchTitle}"\n\nTry browsing all frameworks instead.`);
    }
  };

  // Reset flip state when card changes
  useEffect(() => {
    setIsFlipped(false);
  }, [cardData.id]);

  // Keyboard shortcut to flip card with spacebar
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault(); // Prevent page scroll
        setIsFlipped(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Check if card content is scrollable and update indicator
  useEffect(() => {
    const checkScroll = (element) => {
      if (!element) return false;
      const isScrollable = element.scrollHeight > element.clientHeight;
      const isAtBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 5;
      return isScrollable && !isAtBottom;
    };

    const updateScrollIndicator = () => {
      const currentCard = isFlipped ? cardBackRef.current : cardFrontRef.current;
      setShowScrollIndicator(checkScroll(currentCard));
    };

    updateScrollIndicator();

    const currentCard = isFlipped ? cardBackRef.current : cardFrontRef.current;
    if (currentCard) {
      currentCard.addEventListener('scroll', updateScrollIndicator);
      return () => currentCard.removeEventListener('scroll', updateScrollIndicator);
    }
  }, [isFlipped, cardData]);

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      {/* Front of Card */}
      <div className="card-front" ref={cardFrontRef}>
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
        <div className="flip-hint">Click or press SPACE to see framework →</div>
      </div>

      {/* Back of Card */}
      <div className="card-back" ref={cardBackRef}>
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
              <button
                key={index}
                className="related-card-btn"
                onClick={(e) => handleRelatedCardClick(e, related)}
              >
                {related}
              </button>
            ))}
          </div>
        </div>

        <div className="card-share-section" onClick={(e) => e.stopPropagation()}>
          <ShareButton
            onShare={() => shareCard(cardData)}
            label="Share Card"
          />
        </div>

        <div className="flip-hint">Click or press SPACE to see front →</div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="scroll-indicator">
          <span className="scroll-arrow">↓</span>
        </div>
      )}
    </div>
  );
}

export default Card;
