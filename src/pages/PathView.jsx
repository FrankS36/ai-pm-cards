import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import ShareButton from '../components/ShareButton';
import { sharePath } from '../utils/share';
import cardDataJson from '../data/cardData.json';
import './PathView.css';

function PathView() {
  const { pathId } = useParams();
  const navigate = useNavigate();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [showJumpMenu, setShowJumpMenu] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [slideDirection, setSlideDirection] = useState(null);
  const [animationPhase, setAnimationPhase] = useState('idle'); // 'idle', 'out', 'in'

  const pathInfo = cardDataJson.paths[pathId];
  const cards = pathInfo?.cardIds.map(id => cardDataJson.cards[id]) || [];

  // Path categorization for recommendations
  const pathCategories = {
    strategy: ['concept-to-strategy', 'first-business-case', 'roadmap-planning', 'choosing-ai-approach', 'pricing-ai-product'],
    risk: ['prevent-failures', 'building-trust', 'compliance-ethics', 'fixing-underperforming'],
    execution: ['scoping-first-feature', 'model-to-production', 'launching-safely', 'data-pipelines', 'ai-ux-design', 'testing-qa'],
    crosscutting: ['end-to-end-launch', 'enterprise-guide', 'cost-performance', 'ai-pm-fundamentals']
  };

  const getPathCategory = (pid) => {
    for (const [category, paths] of Object.entries(pathCategories)) {
      if (paths.includes(pid)) return category;
    }
    return null;
  };

  const getRecommendedPaths = () => {
    const currentCategory = getPathCategory(pathId);
    const allPathIds = Object.keys(cardDataJson.paths);

    // Get paths from same category first, excluding current path
    const sameCategoryPaths = allPathIds.filter(pid =>
      getPathCategory(pid) === currentCategory && pid !== pathId
    );

    // Get cross-cutting paths as they're comprehensive
    const crossCuttingPaths = pathCategories.crosscutting.filter(pid => pid !== pathId);

    // Combine and take first 2 recommendations
    const recommendations = [...sameCategoryPaths, ...crossCuttingPaths]
      .slice(0, 2)
      .map(pid => ({
        id: pid,
        ...cardDataJson.paths[pid]
      }));

    return recommendations;
  };

  const recommendedPaths = getRecommendedPaths();

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
      setSlideDirection('left');
      setAnimationPhase('out');
      setTimeout(() => {
        setCurrentCardIndex(currentCardIndex + 1);
        setAnimationPhase('in');
        setTimeout(() => {
          setSlideDirection(null);
          setAnimationPhase('idle');
        }, 300);
      }, 300);
    } else {
      setShowCompletionModal(true);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setSlideDirection('right');
      setAnimationPhase('out');
      setTimeout(() => {
        setCurrentCardIndex(currentCardIndex - 1);
        setAnimationPhase('in');
        setTimeout(() => {
          setSlideDirection(null);
          setAnimationPhase('idle');
        }, 300);
      }, 300);
    }
  };

  const handleResetProgress = () => {
    if (confirm('Reset your progress and start from the beginning?')) {
      setCurrentCardIndex(0);
      localStorage.setItem(`path-progress-${pathId}`, '0');
    }
  };

  const handleJumpToCard = (index) => {
    const direction = index > currentCardIndex ? 'left' : 'right';
    setSlideDirection(direction);
    setAnimationPhase('out');
    setShowJumpMenu(false);
    setTimeout(() => {
      setCurrentCardIndex(index);
      setAnimationPhase('in');
      setTimeout(() => {
        setSlideDirection(null);
        setAnimationPhase('idle');
      }, 300);
    }, 300);
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
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentCardIndex, cards.length]);

  if (!pathInfo) {
    return <div>Path not found</div>;
  }

  const currentCard = cards[currentCardIndex];

  return (
    <div className="path-view">
      <div className="container">
        <div className="path-header">
          <h2>{pathInfo.title}</h2>
          <p className="path-subtitle">{cards.length} frameworks in sequence for this situation. Navigate with arrows (← →) or swipe on mobile. Your progress is saved automatically.</p>
          <div className="path-header-actions">
            <ShareButton
              onShare={() => sharePath(pathId, pathInfo.title)}
              label="Share Path"
            />
            {currentCardIndex > 0 && (
              <button className="btn-reset" onClick={handleResetProgress}>
                Reset Progress
              </button>
            )}
          </div>
        </div>

        <div className="path-content">
          {/* Progress Indicator */}
          <div className="path-progress">
            <div className="progress-header">
              <div className="progress-label">
                <span className="progress-current">{currentCardIndex + 1}</span>
                <span className="progress-separator"> / </span>
                <span className="progress-total">{cards.length}</span>
              </div>
              <button
                className="jump-menu-button"
                onClick={() => setShowJumpMenu(!showJumpMenu)}
                title="Jump to card"
              >
                Jump to...
              </button>
            </div>

            {/* Jump Menu Dropdown */}
            {showJumpMenu && (
              <div className="jump-menu">
                <div className="jump-menu-header">
                  <h3>Jump to Card</h3>
                  <button
                    className="jump-menu-close"
                    onClick={() => setShowJumpMenu(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="jump-menu-list">
                  {cards.map((card, index) => (
                    <button
                      key={card.id}
                      className={`jump-menu-item ${index === currentCardIndex ? 'active' : ''} ${index < currentCardIndex ? 'completed' : ''}`}
                      onClick={() => handleJumpToCard(index)}
                    >
                      <span className="jump-menu-number">{index + 1}</span>
                      <span className="jump-menu-title">{card.title}</span>
                      {index < currentCardIndex && <span className="jump-menu-check">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}

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
            className={`card-container ${
              animationPhase === 'out' && slideDirection === 'left' ? 'slide-out-left' :
              animationPhase === 'out' && slideDirection === 'right' ? 'slide-out-right' :
              animationPhase === 'in' && slideDirection === 'left' ? 'slide-in-left' :
              animationPhase === 'in' && slideDirection === 'right' ? 'slide-in-right' :
              ''
            }`}
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

        {/* Completion Modal */}
        {showCompletionModal && (
          <div className="completion-modal-overlay" onClick={() => setShowCompletionModal(false)}>
            <div className="completion-modal" onClick={(e) => e.stopPropagation()}>
              <div className="completion-celebration">🎉</div>
              <h2>Path Completed!</h2>
              <p className="completion-message">
                You've explored all {cards.length} tactics in <strong>{pathInfo.title}</strong>
              </p>

              {/* Recommended Next Paths */}
              {recommendedPaths.length > 0 && (
                <div className="recommended-paths">
                  <h3>Continue Your Journey</h3>
                  {recommendedPaths.map(path => (
                    <button
                      key={path.id}
                      className="recommended-path-card"
                      onClick={() => {
                        setShowCompletionModal(false);
                        navigate(`/path/${path.id}`);
                      }}
                    >
                      <div className="recommended-path-header">
                        <span className="recommended-path-title">{path.title}</span>
                        <span className="recommended-path-arrow">→</span>
                      </div>
                      <p className="recommended-path-description">{path.description}</p>
                      <div className="recommended-path-meta">
                        📚 {path.cardIds.length} cards • ⏱️ {path.duration || '~20 min'}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              <div className="completion-actions">
                <button
                  className="btn-completion btn-completion-primary"
                  onClick={() => navigate('/paths')}
                >
                  Explore More Paths
                </button>
                <button
                  className="btn-completion"
                  onClick={() => navigate('/browse')}
                >
                  Browse All Frameworks
                </button>
                <button
                  className="btn-completion"
                  onClick={() => {
                    handleResetProgress();
                    setShowCompletionModal(false);
                  }}
                >
                  Restart This Path
                </button>
              </div>

              <button
                className="completion-close"
                onClick={() => setShowCompletionModal(false)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PathView;
