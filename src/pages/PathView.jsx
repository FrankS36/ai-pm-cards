import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import cardDataJson from '../data/cardData.json';
import './PathView.css';

function PathView() {
  const { pathId } = useParams();
  const navigate = useNavigate();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const pathInfo = cardDataJson.paths[pathId];
  const cards = pathInfo?.cardIds.map(id => cardDataJson.cards[id]) || [];

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(`path-progress-${pathId}`);
    if (savedProgress) {
      const progress = parseInt(savedProgress, 10);
      setCurrentCardIndex(progress);
    } else {
      setCurrentCardIndex(0);
    }
  }, [pathId]);

  // Save progress to localStorage whenever card index changes
  useEffect(() => {
    if (pathId) {
      localStorage.setItem(`path-progress-${pathId}`, currentCardIndex.toString());
    }
  }, [currentCardIndex, pathId]);

  const handleNext = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      alert('Path completed! 🎉\n\nYou\'ve explored all tactics in this path.');
      navigate('/start/problem');
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleResetProgress = () => {
    if (confirm('Reset your progress and start from the beginning?')) {
      setCurrentCardIndex(0);
      localStorage.setItem(`path-progress-${pathId}`, '0');
    }
  };

  // Touch swipe handlers for mobile
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swiped left - go to next card
      handleNext();
    } else if (isRightSwipe) {
      // Swiped right - go to previous card
      handlePrevious();
    }
  };

  // Keyboard shortcuts for navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentCardIndex(prev => {
          if (prev > 0) {
            return prev - 1;
          }
          return prev;
        });
      } else if (e.key === 'ArrowRight') {
        setCurrentCardIndex(prev => {
          if (prev < cards.length - 1) {
            return prev + 1;
          } else {
            alert('Path completed! 🎉\n\nYou\'ve explored all tactics in this path.');
            navigate('/start/problem');
          }
          return prev;
        });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [cards.length, navigate]);

  if (!pathInfo) {
    return <div>Path not found</div>;
  }

  const currentCard = cards[currentCardIndex];

  return (
    <div className="path-view">
      <div className="container">
        <div className="path-header">
          <h2>{pathInfo.title}</h2>
          <p className="path-subtitle">{cards.length} tactics to guide you</p>
          {currentCardIndex > 0 && (
            <button className="btn-reset" onClick={handleResetProgress}>
              Reset Progress
            </button>
          )}
        </div>

        <div className="path-content">
          {/* Progress Indicator */}
          <div className="path-progress">
            <div className="progress-label">
              <span className="progress-current">{currentCardIndex + 1}</span>
              <span className="progress-separator"> / </span>
              <span className="progress-total">{cards.length}</span>
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
          <div
            className="card-container"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
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
