import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ShareButton from './ShareButton';
import { shareCard } from '../utils/share';
import cardDataJson from '../data/cardData.json';

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
    <div
      className={`w-full max-w-[600px] mx-auto h-[700px] max-md:h-[650px] relative cursor-pointer transition-transform duration-[600ms] [transform-style:preserve-3d] ${
        isFlipped ? '[transform:rotateY(180deg)]' : ''
      }`}
      onClick={handleFlip}
    >
      {/* Front of Card */}
      <div
        className="absolute w-full h-full [backface-visibility:hidden] bg-white dark:bg-gray-900 rounded-[20px] p-10 max-md:p-6 shadow-lg overflow-y-auto transition-colors duration-300"
        ref={cardFrontRef}
      >
        <div className="flex justify-between items-center mb-8">
          <span className={`text-white px-4 py-1.5 rounded-[20px] text-xs font-semibold uppercase tracking-wide ${
            cardData.deck === 'strategy'
              ? 'bg-gradient-to-br from-primary to-purple'
              : cardData.deck === 'risk'
              ? 'bg-gradient-to-br from-amber-600 to-red-600'
              : 'bg-gradient-to-br from-emerald-600 to-teal-600'
          }`}>
            {cardData.category}
          </span>
          <div className="flex gap-2 text-sm">
            <span title={cardData.difficulty}>⚫⚫⚪</span>
            <span title={cardData.companyContext}>🏢</span>
          </div>
        </div>

        <div className="text-[5rem] text-center my-8">{cardData.icon}</div>

        <h3 className="text-[2rem] font-bold text-center mb-6 text-gray-900 dark:text-white">{cardData.title}</h3>

        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8 leading-[1.7]">{cardData.description}</p>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-8 transition-colors duration-300">
          <h4 className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400 mb-3">When to Use:</h4>
          <ul className="list-none pl-0">
            {cardData.whenToUse.map((item, index) => (
              <li key={index} className="pl-6 mb-2 relative text-gray-900 dark:text-white before:content-['•'] before:text-primary before:font-bold before:absolute before:left-0">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center text-gray-400 dark:text-gray-500 text-sm mt-auto">{cardData.id}</div>
        <div className="text-center text-gray-400 dark:text-gray-500 text-sm mt-4">Click or press SPACE to see framework →</div>
      </div>

      {/* Back of Card */}
      <div
        className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white dark:bg-gray-900 rounded-[20px] p-10 max-md:p-6 shadow-lg overflow-y-auto transition-colors duration-300"
        ref={cardBackRef}
      >
        <h3 className="text-[2rem] font-bold text-center mb-6 text-gray-900 dark:text-white">{cardData.title}</h3>

        <div className="mb-8">
          <h4 className="text-base font-bold mb-4 text-gray-900 dark:text-white">The Framework</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-[1.7]">{cardData.overview}</p>

          <ol className="list-none [counter-reset:step-counter] pl-0">
            {cardData.steps.map((step, index) => (
              <li
                key={index}
                className="[counter-increment:step-counter] mb-4 pl-8 relative text-gray-900 dark:text-white leading-[1.6] before:content-[counter(step-counter)] before:absolute before:left-0 before:top-0 before:bg-primary before:text-white before:w-6 before:h-6 before:rounded-full before:flex before:items-center before:justify-center before:text-xs before:font-bold"
              >
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="mb-8">
          <h4 className="text-base font-bold mb-4 text-gray-900 dark:text-white">💡 Pro Tips</h4>
          <ul className="list-none pl-0">
            {cardData.tips.map((tip, index) => (
              <li key={index} className="pl-6 mb-3 relative text-gray-900 dark:text-white leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-primary before:font-bold">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-base font-bold mb-4 text-gray-900 dark:text-white">→ Related Cards</h4>
          <div className="flex flex-col gap-2">
            {cardData.relatedCards.map((related, index) => (
              <button
                key={index}
                className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 py-3 px-4 rounded-lg text-left cursor-pointer transition-all duration-200 text-[0.95rem] text-gray-900 dark:text-white font-medium after:content-['_→'] after:text-primary after:opacity-50 after:transition-all after:duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-primary hover:text-primary hover:translate-x-0.5 hover:after:opacity-100 hover:after:translate-x-1"
                onClick={(e) => handleRelatedCardClick(e, related)}
              >
                {related}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center mb-6 mt-6" onClick={(e) => e.stopPropagation()}>
          <ShareButton
            onShare={() => shareCard(cardData)}
            label="Share Card"
          />
        </div>

        <div className="text-center text-gray-400 dark:text-gray-500 text-sm mt-4">Click or press SPACE to see front →</div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none animate-bounce">
          <span className="text-2xl text-primary bg-white dark:bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow-md">↓</span>
        </div>
      )}
    </div>
  );
}

export default Card;
