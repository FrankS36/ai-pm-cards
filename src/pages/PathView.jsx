import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Bot } from 'lucide-react';
import Card from '../components/Card';
import ShareButton from '../components/ShareButton';
import { sharePath } from '../utils/share';
import cardDataJson from '../data/cardData.json';

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

  // Map paths to featured agents
  const pathToAgent = {
    'first-business-case': {
      id: 'ai-roi-calculator',
      name: 'ROI Calculator',
      icon: '💰',
      description: 'Build your business case in 2 hours with 3-scenario ROI analysis that CFOs trust',
      timeToValue: '2 hours'
    },
    'pricing-ai-product': {
      id: 'ai-roi-calculator',
      name: 'ROI Calculator',
      icon: '💰',
      description: 'Calculate pricing models with automated ROI scenarios',
      timeToValue: '2 hours'
    },
    'prevent-failures': {
      id: 'ai-risk-auditor',
      name: 'Risk Auditor',
      icon: '🛡️',
      description: 'Complete risk audit in 1 afternoon covering compliance, bias, security, and model performance',
      timeToValue: '1 afternoon'
    },
    'compliance-ethics': {
      id: 'ai-risk-auditor',
      name: 'Risk Auditor',
      icon: '🛡️',
      description: 'Automated compliance audit with GDPR and AI Act considerations',
      timeToValue: '1 afternoon'
    },
    'concept-to-strategy': {
      id: 'ai-pm-value-scout',
      name: 'Value Scout',
      icon: '🔍',
      description: 'Competitive analysis and positioning strategy in minutes',
      timeToValue: 'Minutes'
    },
    'choosing-ai-approach': {
      id: 'ai-pm-value-scout',
      name: 'Value Scout',
      icon: '🔍',
      description: 'Compare approaches with automated competitive intelligence',
      timeToValue: 'Minutes'
    },
    'ai-ux-design': {
      id: 'ui-ux-design-auditor',
      name: 'UX Auditor',
      icon: '✨',
      description: 'Comprehensive UX audit with actionable recommendations in 1 hour',
      timeToValue: '1 hour'
    },
    'building-trust': {
      id: 'ui-ux-design-auditor',
      name: 'UX Auditor',
      icon: '✨',
      description: 'Trust and transparency analysis with design improvements',
      timeToValue: '1 hour'
    },
    'scoping-first-feature': {
      id: 'ai-prd-writer',
      name: 'PRD Writer',
      icon: '📝',
      description: 'Generate comprehensive PRD with AI-specific considerations in 2-3 hours',
      timeToValue: '2-3 hours'
    },
    'model-to-production': {
      id: 'ai-prd-writer',
      name: 'PRD Writer',
      icon: '📝',
      description: 'Production PRD with model deployment and monitoring specs',
      timeToValue: '2-3 hours'
    },
    'launching-safely': {
      id: 'ai-success-metrics',
      name: 'Success Metrics Designer',
      icon: '📊',
      description: 'Define complete monitoring plan and success metrics in 1-2 hours',
      timeToValue: '1-2 hours'
    },
    'fixing-underperforming': {
      id: 'ai-success-metrics',
      name: 'Success Metrics Designer',
      icon: '📊',
      description: 'Diagnose issues with comprehensive metrics analysis',
      timeToValue: '1-2 hours'
    },
    'end-to-end-launch': {
      id: 'ai-pm-card-generator',
      name: 'Framework Generator',
      icon: '🃏',
      description: 'Create custom launch checklist for your team in 30 minutes',
      timeToValue: '30 minutes'
    },
    'enterprise-guide': {
      id: 'ai-pm-card-generator',
      name: 'Framework Generator',
      icon: '🃏',
      description: 'Generate enterprise-specific frameworks and processes',
      timeToValue: '30 minutes'
    }
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
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 mt-8 relative">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">{pathInfo.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-base mt-2">{cards.length} frameworks in sequence for this situation. Navigate with arrows (← →) or swipe on mobile. Your progress is saved automatically.</p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <ShareButton
              onShare={() => sharePath(pathId, pathInfo.title)}
              label="Share Path"
            />
            {currentCardIndex > 0 && (
              <button
                className="px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg text-sm text-gray-600 dark:text-gray-300 cursor-pointer transition-all duration-200 hover:border-red-600 hover:text-red-600 dark:hover:border-red-500 dark:hover:text-red-500 hover:bg-red-50/10"
                onClick={handleResetProgress}
              >
                Reset Progress
              </button>
            )}
          </div>
        </div>

        {/* Featured Agent */}
        {pathToAgent[pathId] && (
          <div className="max-w-[900px] mx-auto mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-shrink-0 text-5xl">{pathToAgent[pathId].icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white m-0">
                    Autopilot This Path
                  </h3>
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-full">
                    ⏱️ {pathToAgent[pathId].timeToValue}
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 m-0 mb-3">
                  <strong className="text-gray-900 dark:text-white">{pathToAgent[pathId].name}</strong> can generate this deliverable for you: {pathToAgent[pathId].description}
                </p>
              </div>
              <button
                onClick={() => navigate('/agents')}
                className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                <Bot className="w-5 h-5" />
                View Agent
              </button>
            </div>
          </div>
        )}

        <div className="max-w-[900px] mx-auto">
          {/* Progress Indicator */}
          <div className="text-center mb-8 relative">
            <div className="flex items-center justify-center gap-4 mb-6 max-md:flex-col max-md:gap-3">
              <div className="text-xl font-bold text-primary px-6 py-3 bg-gradient-to-br from-primary/8 to-purple/8 rounded-xl inline-block border-2 border-primary/15">
                <span className="text-[1.75rem] font-extrabold text-primary dark:text-white">{currentCardIndex + 1}</span>
                <span className="text-gray-400 dark:text-gray-300 font-normal mx-1"> / </span>
                <span className="text-gray-500 dark:text-gray-300 font-semibold">{cards.length}</span>
              </div>
              <button
                className="px-4 py-2 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-300 cursor-pointer transition-all duration-200 hover:border-primary hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 max-md:text-[0.8125rem] max-md:px-3.5"
                onClick={() => setShowJumpMenu(!showJumpMenu)}
                title="Jump to card"
              >
                Jump to...
              </button>
            </div>

            {/* Jump Menu Dropdown */}
            {showJumpMenu && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-[500px] max-h-[400px] overflow-hidden z-[100] animate-slide-down border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="m-0 text-base font-bold text-gray-900 dark:text-white">Jump to Card</h3>
                  <button
                    className="bg-none border-none text-2xl text-gray-600 dark:text-gray-400 cursor-pointer w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    onClick={() => setShowJumpMenu(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="max-h-80 overflow-y-auto p-2">
                  {cards.map((card, index) => (
                    <button
                      key={card.id}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 bg-none border-none rounded-lg text-left cursor-pointer transition-all duration-200 mb-1 hover:bg-gray-50 dark:hover:bg-gray-800 ${
                        index === currentCardIndex
                          ? 'bg-gradient-to-br from-primary/15 to-purple/15 border border-primary dark:from-primary/25 dark:to-purple/25'
                          : ''
                      } ${index < currentCardIndex ? 'opacity-70' : ''}`}
                      onClick={() => handleJumpToCard(index)}
                    >
                      <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold ${
                        index === currentCardIndex
                          ? 'bg-gradient-to-br from-primary to-purple text-white'
                          : index < currentCardIndex
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                      }`}>{index + 1}</span>
                      <span className="flex-1 text-[0.9375rem] font-medium text-gray-900 dark:text-gray-300 max-md:text-sm">{card.title}</span>
                      {index < currentCardIndex && <span className="flex-shrink-0 text-emerald-600 text-lg">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-2 justify-center items-center">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentCardIndex
                      ? 'bg-primary scale-[1.3]'
                      : index < currentCardIndex
                      ? 'bg-emerald-600'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Card Display */}
          <div
            className={`mb-8 ${
              animationPhase === 'out' && slideDirection === 'left' ? 'animate-slide-out-left' :
              animationPhase === 'out' && slideDirection === 'right' ? 'animate-slide-out-right' :
              animationPhase === 'in' && slideDirection === 'left' ? 'animate-slide-in-left' :
              animationPhase === 'in' && slideDirection === 'right' ? 'animate-slide-in-right' :
              ''
            }`}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <Card cardData={currentCard} />
          </div>

          {/* Navigation */}
          <div className="flex justify-between gap-4 max-w-[600px] mx-auto max-md:flex-col">
            <button
              className="flex-1 px-8 py-4 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-xl text-base font-semibold text-gray-900 dark:text-white cursor-pointer transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:border-primary enabled:hover:bg-gray-50 dark:enabled:hover:bg-gray-800"
              onClick={handlePrevious}
              disabled={currentCardIndex === 0}
            >
              ← Previous
            </button>
            <button
              className="flex-1 px-8 py-4 bg-gradient-to-br from-primary to-purple text-white border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-200 hover:from-primary-light hover:to-purple-light"
              onClick={handleNext}
            >
              {currentCardIndex === cards.length - 1 ? 'Complete Path ✓' : 'Next Card →'}
            </button>
          </div>
        </div>

        {/* Completion Modal */}
        {showCompletionModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[10000] animate-fade-in" onClick={() => setShowCompletionModal(false)}>
            <div className="bg-white dark:bg-gray-900 rounded-3xl px-10 py-12 max-w-[500px] w-[90%] text-center relative shadow-2xl animate-slide-up max-md:px-6 max-md:py-8 max-md:max-h-[90vh] max-md:overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="text-6xl mb-4 animate-celebrate max-md:text-5xl">🎉</div>
              <h2 className="m-0 mb-4 text-3xl font-bold bg-gradient-to-br from-primary to-purple bg-clip-text text-transparent max-md:text-2xl">Path Completed!</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 max-md:text-base">
                You've explored all {cards.length} tactics in <strong className="text-gray-900 dark:text-white font-semibold">{pathInfo.title}</strong>
              </p>

              {/* Recommended Next Paths */}
              {recommendedPaths.length > 0 && (
                <div className="my-8 text-left">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white m-0 mb-4 text-center">Continue Your Journey</h3>
                  {recommendedPaths.map(path => (
                    <button
                      key={path.id}
                      className="w-full bg-gradient-to-br from-primary/5 to-purple/5 border-2 border-gray-200 dark:border-gray-700 dark:from-primary/10 dark:to-purple/10 rounded-xl px-5 py-5 mb-3 text-left cursor-pointer transition-all duration-200 hover:border-primary hover:translate-x-1 hover:shadow-[0_4px_12px_rgba(30,58,138,0.15)] dark:hover:shadow-[0_4px_12px_rgba(30,58,138,0.3)] max-md:px-4"
                      onClick={() => {
                        setShowCompletionModal(false);
                        navigate(`/path/${path.id}`);
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-base font-bold text-gray-900 dark:text-white max-md:text-[0.9375rem]">{path.title}</span>
                        <span className="text-primary text-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100">→</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed m-0 mb-3 max-md:text-[0.8125rem]">{path.description}</p>
                      <div className="text-[0.8125rem] text-gray-600 dark:text-gray-300">
                        📚 {path.cardIds.length} cards • ⏱️ {path.duration || '~20 min'}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-3">
                <button
                  className="px-6 py-3.5 rounded-xl text-base font-semibold bg-gradient-to-br from-primary to-purple text-white border-none cursor-pointer transition-all duration-200 hover:from-primary-light hover:to-purple-light hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(30,58,138,0.3)] max-md:text-[0.9375rem] max-md:px-5 max-md:py-3"
                  onClick={() => navigate('/paths')}
                >
                  Explore More Paths
                </button>
                <button
                  className="px-6 py-3.5 rounded-xl text-base font-semibold border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white cursor-pointer transition-all duration-200 hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-px max-md:text-[0.9375rem] max-md:px-5 max-md:py-3"
                  onClick={() => navigate('/browse')}
                >
                  Browse All Frameworks
                </button>
                <button
                  className="px-6 py-3.5 rounded-xl text-base font-semibold border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white cursor-pointer transition-all duration-200 hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-px max-md:text-[0.9375rem] max-md:px-5 max-md:py-3"
                  onClick={() => {
                    handleResetProgress();
                    setShowCompletionModal(false);
                  }}
                >
                  Restart This Path
                </button>
              </div>

              <button
                className="absolute top-4 right-4 bg-none border-none text-3xl text-gray-500 dark:text-gray-400 cursor-pointer w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
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
