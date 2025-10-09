import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import cardDataJson from '../data/cardData.json';

function BrowseView() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDeck, setSelectedDeck] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const allCards = Object.values(cardDataJson.cards);

  // Get unique categories
  const uniqueCategories = [...new Set(allCards.map(card => card.category))].sort();

  // Redirect to framework page if card ID is in URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cardId = params.get('card');
    if (cardId && cardDataJson.cards[cardId]) {
      navigate(`/framework/${cardId}`);
    }
  }, [location.search, navigate]);

  const filteredCards = useMemo(() => {
    return allCards.filter(card => {
      if (selectedDeck !== 'all' && card.deck !== selectedDeck) return false;
      if (selectedCategory !== 'all' && card.category !== selectedCategory) return false;
      if (selectedDifficulty !== 'all' && card.difficulty !== selectedDifficulty) return false;

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
  }, [allCards, selectedDeck, selectedCategory, selectedDifficulty, searchQuery]);

  const cardCounts = {
    all: allCards.length,
    strategy: allCards.filter(c => c.deck === 'strategy').length,
    risk: allCards.filter(c => c.deck === 'risk').length,
    execution: allCards.filter(c => c.deck === 'execution').length,
  };

  const categoryCounts = uniqueCategories.reduce((acc, category) => {
    acc[category] = allCards.filter(c => c.category === category).length;
    return acc;
  }, {});

  return (
    <div className="min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mt-8 mb-12 relative">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-4">
            Browse All Frameworks
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            All {cardCounts.all} frameworks at your fingertips. Filter by deck or search for what you need. Each framework is 2 minutes to read, battle-tested in production.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm mb-8">
          {/* Deck Filter */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
              Deck
            </label>
            <div className="flex gap-3 flex-wrap">
              <button
                className={`px-4 py-2 rounded-lg text-base font-medium cursor-pointer transition-all border-2 ${
                  selectedDeck === 'all'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-gray-100 dark:bg-gray-700 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setSelectedDeck('all')}
              >
                All ({cardCounts.all})
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-base font-medium cursor-pointer transition-all border-2 ${
                  selectedDeck === 'strategy'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-gray-100 dark:bg-gray-700 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setSelectedDeck('strategy')}
              >
                🔭 Strategy ({cardCounts.strategy})
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-base font-medium cursor-pointer transition-all border-2 ${
                  selectedDeck === 'risk'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-gray-100 dark:bg-gray-700 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setSelectedDeck('risk')}
              >
                🛡️ Risk ({cardCounts.risk})
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-base font-medium cursor-pointer transition-all border-2 ${
                  selectedDeck === 'execution'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-gray-100 dark:bg-gray-700 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setSelectedDeck('execution')}
              >
                🚀 Execution ({cardCounts.execution})
              </button>
            </div>
          </div>

          {/* Difficulty Filter */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
              Difficulty
            </label>
            <div className="flex gap-3 flex-wrap">
              <button
                className={`px-4 py-2 rounded-lg text-base font-medium cursor-pointer transition-all border-2 ${
                  selectedDifficulty === 'all'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-gray-100 dark:bg-gray-700 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setSelectedDifficulty('all')}
              >
                All
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-base font-medium cursor-pointer transition-all border-2 ${
                  selectedDifficulty === 'beginner'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-gray-100 dark:bg-gray-700 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setSelectedDifficulty('beginner')}
              >
                Beginner
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-base font-medium cursor-pointer transition-all border-2 ${
                  selectedDifficulty === 'intermediate'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-gray-100 dark:bg-gray-700 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setSelectedDifficulty('intermediate')}
              >
                Intermediate
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-base font-medium cursor-pointer transition-all border-2 ${
                  selectedDifficulty === 'advanced'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-gray-100 dark:bg-gray-700 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setSelectedDifficulty('advanced')}
              >
                Advanced
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
              Category
            </label>
            <div className="flex gap-3 flex-wrap">
              <button
                className={`px-3.5 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all border-2 ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-gray-100 dark:bg-gray-700 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setSelectedCategory('all')}
              >
                All
              </button>
              {uniqueCategories.map(category => (
                <button
                  key={category}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all border-2 ${
                    selectedCategory === category
                      ? 'bg-primary text-white border-primary'
                      : 'bg-gray-100 dark:bg-gray-700 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({categoryCounts[category]})
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
              Search
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg text-base transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-primary dark:focus:border-primary"
              placeholder="Search by title, description, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Results count */}
        <div className="text-center text-gray-600 dark:text-gray-400 mb-8 text-base">
          Showing {filteredCards.length} {filteredCards.length === 1 ? 'card' : 'cards'}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
          {filteredCards.map(card => (
            <div
              key={card.id}
              className={`
                bg-white dark:bg-gray-800
                p-6 rounded-xl
                shadow-md hover:shadow-xl
                cursor-pointer
                transition-all duration-200
                border-2 border-transparent
                hover:-translate-y-1
                ${card.deck === 'strategy' ? 'border-l-4 border-l-blue-500' : ''}
                ${card.deck === 'risk' ? 'border-l-4 border-l-red-500' : ''}
                ${card.deck === 'execution' ? 'border-l-4 border-l-green-500' : ''}
              `}
              onClick={() => navigate(`/framework/${card.id}`)}
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {card.id}
                </span>
                <span className={`
                  text-xs px-2 py-1 rounded font-semibold
                  ${card.difficulty === 'beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
                  ${card.difficulty === 'intermediate' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : ''}
                  ${card.difficulty === 'advanced' ? 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200' : ''}
                `}>
                  {card.difficulty}
                </span>
              </div>

              {/* Icon */}
              <div className="text-5xl text-center mb-4">{card.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {card.title}
              </h3>

              {/* Category */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-semibold">
                {card.category}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredCards.length === 0 && (
          <div className="text-center py-16 px-8 text-gray-600 dark:text-gray-400">
            <p>No cards match your filters. Try adjusting your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BrowseView;
