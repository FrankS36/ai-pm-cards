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
  const [selectedCard, setSelectedCard] = useState(null);

  const allCards = Object.values(cardDataJson.cards);

  // Open card from navigation state (e.g., from related cards)
  useEffect(() => {
    if (location.state?.cardId) {
      const card = cardDataJson.cards[location.state.cardId];
      if (card) {
        setSelectedCard(card);
      }
    }
  }, [location.state]);

  // Keyboard shortcut to close modal with ESC
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && selectedCard) {
        setSelectedCard(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedCard]);

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
          <button className="btn-back" onClick={() => navigate('/')}>
            ← Back
          </button>
          <h2>Browse All Cards</h2>
          <p className="browse-subtitle">{cardCounts.all} tactics across 3 decks</p>
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
              onClick={() => setSelectedCard(card)}
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

        {/* Card Detail Modal */}
        {selectedCard && (
          <div className="card-modal" onClick={() => setSelectedCard(null)}>
            <div className="card-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedCard(null)}>×</button>

              <div className="modal-header">
                <span className="card-id">{selectedCard.id}</span>
                <span className={`card-difficulty ${selectedCard.difficulty}`}>
                  {selectedCard.difficulty}
                </span>
              </div>

              <div className="modal-icon">{selectedCard.icon}</div>
              <h2>{selectedCard.title}</h2>
              <p className="modal-category">{selectedCard.category}</p>
              <p className="modal-description">{selectedCard.description}</p>

              <div className="modal-section">
                <h4>When to use</h4>
                <ul>
                  {selectedCard.whenToUse.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Overview</h4>
                <p>{selectedCard.overview}</p>
              </div>

              <div className="modal-section">
                <h4>Steps</h4>
                <ol>
                  {selectedCard.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>

              {selectedCard.tips && selectedCard.tips.length > 0 && (
                <div className="modal-section">
                  <h4>Tips</h4>
                  <ul>
                    {selectedCard.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BrowseView;
