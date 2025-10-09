import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import cardDataJson from '../data/cardData.json';
import './BrowseView.css';

function BrowseView() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDeck, setSelectedDeck] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const allCards = Object.values(cardDataJson.cards);

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
  }, [allCards, selectedDeck, selectedDifficulty, searchQuery]);

  const cardCounts = {
    all: allCards.length,
    strategy: allCards.filter(c => c.deck === 'strategy').length,
    risk: allCards.filter(c => c.deck === 'risk').length,
    execution: allCards.filter(c => c.deck === 'execution').length,
  };

  return (
    <div className="browse-view">
      <div className="container">
        <div className="browse-header">
          <h2>Browse All Frameworks</h2>
          <p className="browse-subtitle">{cardCounts.all} frameworks across 3 decks</p>
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
