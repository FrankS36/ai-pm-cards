import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import cardDataJson from '../data/cardData.json';
import './BrowseView.css';

function BrowseView() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDeck, setSelectedDeck] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedLifecycle, setSelectedLifecycle] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const allCards = Object.values(cardDataJson.cards);

  // Lifecycle stage mapping
  const lifecycleMapping = {
    // Discovery - Problem validation, opportunity assessment
    discovery: ['STRAT-001', 'STRAT-002', 'STRAT-003', 'STRAT-004', 'STRAT-005'],
    // Planning - Strategy, roadmap, business case, risk assessment
    planning: ['STRAT-006', 'STRAT-007', 'STRAT-008', 'STRAT-009', 'STRAT-010', 'STRAT-011', 'STRAT-012', 'STRAT-013', 'STRAT-014', 'STRAT-015', 'STRAT-016', 'STRAT-017', 'STRAT-018', 'STRAT-019', 'STRAT-020', 'RISK-001', 'RISK-002', 'RISK-003', 'RISK-004', 'RISK-005', 'RISK-006', 'RISK-007', 'RISK-008', 'RISK-009', 'RISK-010', 'RISK-011', 'RISK-012', 'RISK-013', 'RISK-014', 'RISK-015', 'RISK-016', 'RISK-017', 'RISK-018', 'RISK-019', 'RISK-020'],
    // Building - Specs, model selection, data, UX
    building: ['STRAT-021', 'STRAT-022', 'STRAT-023', 'STRAT-024', 'STRAT-025', 'STRAT-026', 'STRAT-027', 'STRAT-028', 'STRAT-029', 'STRAT-030', 'STRAT-031', 'EXEC-001', 'EXEC-002', 'EXEC-003', 'EXEC-004', 'EXEC-005', 'EXEC-006', 'EXEC-007', 'EXEC-008', 'EXEC-009', 'EXEC-010', 'EXEC-011', 'EXEC-012', 'EXEC-013', 'EXEC-014', 'EXEC-015', 'EXEC-016', 'EXEC-017', 'EXEC-018', 'EXEC-019', 'EXEC-020', 'EXEC-021', 'EXEC-022', 'EXEC-023', 'EXEC-024', 'EXEC-025', 'EXEC-026', 'EXEC-027'],
    // Launching - Testing, rollout, monitoring, trust
    launching: ['EXEC-028', 'EXEC-029', 'EXEC-030', 'EXEC-031', 'EXEC-032', 'EXEC-033', 'EXEC-034', 'EXEC-035', 'EXEC-036', 'EXEC-037', 'EXEC-038', 'RISK-021', 'RISK-022', 'RISK-023', 'RISK-024', 'RISK-025', 'RISK-026', 'RISK-027', 'RISK-028', 'RISK-029', 'RISK-030', 'RISK-031', 'RISK-032', 'RISK-033', 'RISK-034', 'RISK-035'],
    // Optimizing - Performance, cost, iteration
    optimizing: ['EXEC-039', 'EXEC-040', 'EXEC-041', 'EXEC-042', 'EXEC-043', 'EXEC-044', 'EXEC-045', 'EXEC-046', 'EXEC-047', 'EXEC-048', 'EXEC-049', 'EXEC-050', 'EXEC-051', 'EXEC-052', 'EXEC-053', 'RISK-036', 'RISK-037', 'RISK-038', 'RISK-039', 'RISK-040', 'RISK-041', 'RISK-042', 'RISK-043', 'RISK-044', 'RISK-045', 'RISK-046', 'RISK-047', 'RISK-048', 'RISK-049', 'RISK-050'],
  };

  const getLifecycleStage = (cardId) => {
    for (const [stage, ids] of Object.entries(lifecycleMapping)) {
      if (ids.includes(cardId)) return stage;
    }
    return null;
  };

  // Redirect to framework page if card ID is in URL
  useEffect(() => {
    // Check for card ID in URL query parameter and redirect to framework page
    const params = new URLSearchParams(location.search);
    const cardId = params.get('card');
    if (cardId && cardDataJson.cards[cardId]) {
      navigate(`/framework/${cardId}`);
    }
  }, [location.search, navigate]);

  const filteredCards = useMemo(() => {
    return allCards.filter(card => {
      // Deck filter
      if (selectedDeck !== 'all' && card.deck !== selectedDeck) return false;

      // Difficulty filter
      if (selectedDifficulty !== 'all' && card.difficulty !== selectedDifficulty) return false;

      // Lifecycle filter
      if (selectedLifecycle !== 'all') {
        const cardStage = getLifecycleStage(card.id);
        if (cardStage !== selectedLifecycle) return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          card.title.toLowerCase().includes(query) ||
          card.description.toLowerCase().includes(query) ||
          card.category.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [allCards, selectedDeck, selectedDifficulty, selectedLifecycle, searchQuery]);

  const cardCounts = {
    all: allCards.length,
    strategy: allCards.filter(c => c.deck === 'strategy').length,
    risk: allCards.filter(c => c.deck === 'risk').length,
    execution: allCards.filter(c => c.deck === 'execution').length,
  };

  const lifecycleCounts = {
    discovery: lifecycleMapping.discovery.length,
    planning: lifecycleMapping.planning.length,
    building: lifecycleMapping.building.length,
    launching: lifecycleMapping.launching.length,
    optimizing: lifecycleMapping.optimizing.length,
  };

  return (
    <div className="browse-view">
      <div className="container">
        <div className="browse-header">
          <h2>Browse All Frameworks</h2>
          <p className="browse-subtitle">All {cardCounts.all} frameworks at your fingertips. Filter by deck or search for what you need. Each framework is 2 minutes to read, battle-tested in production.</p>
        </div>

        {/* Filters */}
        <div className="browse-filters">
          <div className="filter-group">
            <label>Deck</label>
            <div className="filter-buttons">
              <button
                className={selectedDeck === 'all' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedDeck('all')}
              >
                All ({cardCounts.all})
              </button>
              <button
                className={selectedDeck === 'strategy' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedDeck('strategy')}
              >
                🔭 Strategy ({cardCounts.strategy})
              </button>
              <button
                className={selectedDeck === 'risk' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedDeck('risk')}
              >
                🛡️ Risk ({cardCounts.risk})
              </button>
              <button
                className={selectedDeck === 'execution' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedDeck('execution')}
              >
                🚀 Execution ({cardCounts.execution})
              </button>
            </div>
          </div>

          <div className="filter-group">
            <label>Difficulty</label>
            <div className="filter-buttons">
              <button
                className={selectedDifficulty === 'all' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedDifficulty('all')}
              >
                All
              </button>
              <button
                className={selectedDifficulty === 'beginner' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedDifficulty('beginner')}
              >
                Beginner
              </button>
              <button
                className={selectedDifficulty === 'intermediate' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedDifficulty('intermediate')}
              >
                Intermediate
              </button>
              <button
                className={selectedDifficulty === 'advanced' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedDifficulty('advanced')}
              >
                Advanced
              </button>
            </div>
          </div>

          <div className="filter-group">
            <label>Lifecycle Stage</label>
            <div className="filter-buttons">
              <button
                className={selectedLifecycle === 'all' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedLifecycle('all')}
              >
                All
              </button>
              <button
                className={selectedLifecycle === 'discovery' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedLifecycle('discovery')}
              >
                🎯 Discovery ({lifecycleCounts.discovery})
              </button>
              <button
                className={selectedLifecycle === 'planning' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedLifecycle('planning')}
              >
                📋 Planning ({lifecycleCounts.planning})
              </button>
              <button
                className={selectedLifecycle === 'building' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedLifecycle('building')}
              >
                🔨 Building ({lifecycleCounts.building})
              </button>
              <button
                className={selectedLifecycle === 'launching' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedLifecycle('launching')}
              >
                🚀 Launching ({lifecycleCounts.launching})
              </button>
              <button
                className={selectedLifecycle === 'optimizing' ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedLifecycle('optimizing')}
              >
                📈 Optimizing ({lifecycleCounts.optimizing})
              </button>
            </div>
          </div>

          <div className="filter-group">
            <label>Search</label>
            <input
              type="text"
              className="search-input"
              placeholder="Search by title, description, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Results count */}
        <div className="results-count">
          Showing {filteredCards.length} {filteredCards.length === 1 ? 'card' : 'cards'}
        </div>

        {/* Card Grid */}
        <div className="card-grid">
          {filteredCards.map(card => (
            <div
              key={card.id}
              className={`card-preview ${card.deck}`}
              onClick={() => navigate(`/framework/${card.id}`)}
            >
              <div className="card-preview-header">
                <span className="card-id">{card.id}</span>
                <span className={`card-difficulty ${card.difficulty}`}>
                  {card.difficulty}
                </span>
              </div>
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p className="card-category">{card.category}</p>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>

        {filteredCards.length === 0 && (
          <div className="no-results">
            <p>No cards match your filters. Try adjusting your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BrowseView;
