import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ShareButton from './ShareButton';
import { shareCard } from '../utils/share';
import cardDataJson from '../data/cardData.json';
import './Card.css';

function Card({ cardData }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Try to find and navigate to a related card
  const handleRelatedCardClick = (e, relatedText) => {
    e.stopPropagation(); // Prevent card flip

    // Extract card title from text like "Next: Run a Model Feasibility Spike"
    const titleMatch = relatedText.match(/(?:Next|Previous|Also):\s*(.+)/);
    const searchTitle = titleMatch ? titleMatch[1].trim() : relatedText;

    // Search for card by title
    const allCards = Object.values(cardDataJson.cards);
    const foundCard = allCards.find(card =>
      card.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
      searchTitle.toLowerCase().includes(card.title.toLowerCase())
    );

    if (foundCard) {
      // Find a path that contains this card
      const paths = Object.values(cardDataJson.paths);
      const pathWithCard = paths.find(path => path.cardIds.includes(foundCard.id));

      if (pathWithCard) {
        const cardIndex = pathWithCard.cardIds.indexOf(foundCard.id);
        // Save the card index to localStorage so PathView loads it
        localStorage.setItem(`path-progress-${pathWithCard.id}`, cardIndex.toString());
        navigate(`/path/${pathWithCard.id}`);
      } else {
        // Card found but not in a path - open in browse view
        navigate('/browse', { state: { cardId: foundCard.id } });
      }
    } else {
      alert(`Could not find card: "${searchTitle}"\n\nTry browsing all cards instead.`);
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

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
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
        <div className="flip-hint">Click or press SPACE to see framework →</div>
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
    </div>
  );
}

export default Card;
