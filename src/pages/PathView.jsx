import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import cardDataJson from '../data/cardData.json';
import './PathView.css';

function PathView() {
  const { pathId } = useParams();
  const navigate = useNavigate();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const pathInfo = cardDataJson.paths[pathId];
  const cards = pathInfo?.cardIds.map(id => cardDataJson.cards[id]) || [];

  useEffect(() => {
    setCurrentCardIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathId]);

  const handleNext = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert('Path completed! 🎉\n\nYou\'ve explored all tactics in this path.');
      navigate('/start/problem');
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!pathInfo) {
    return <div>Path not found</div>;
  }

  const currentCard = cards[currentCardIndex];

  return (
    <div className="path-view">
      <div className="container">
        <div className="path-header">
          <button className="btn-back" onClick={() => navigate('/start/problem')}>
            ← Change path
          </button>
          <h2>{pathInfo.title}</h2>
          <p className="path-subtitle">{cards.length} tactics to guide you</p>
        </div>

        <div className="path-content">
          {/* Progress Indicator */}
          <div className="path-progress">
            <div className="progress-label">
              Card {currentCardIndex + 1} of {cards.length}
            </div>
            <div className="progress-dots">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`progress-dot ${
                    index === currentCardIndex
                      ? 'active'
                      : index < currentCardIndex
                      ? 'completed'
                      : ''
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Card Display */}
          <div className="card-container">
            <Card cardData={currentCard} />
          </div>

          {/* Navigation */}
          <div className="card-navigation">
            <button
              className="btn-nav"
              onClick={handlePrevious}
              disabled={currentCardIndex === 0}
            >
              ← Previous
            </button>
            <button
              className="btn-nav btn-nav-primary"
              onClick={handleNext}
            >
              {currentCardIndex === cards.length - 1 ? 'Complete Path ✓' : 'Next Card →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PathView;
