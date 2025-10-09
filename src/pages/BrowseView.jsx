import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import cardDataJson from '../data/cardData.json';
import { getCardIcon } from '../utils/iconMapping';

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
    <div className="min-h-screen pb-12 bg-white dark:bg-black">
      <div className="max-w-[1400px] mx-auto px-20 max-md:px-6">
        {/* Header */}
        <div className="text-center mt-4 mb-8 md:mt-4 md:mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse All Frameworks
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {cardCounts.all} frameworks. Search or filter by deck to find what you need.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-10">
          <input
            type="text"
            className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-800 rounded-lg text-lg transition-colors bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gray-900 dark:focus:border-white"
            placeholder="Search frameworks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Deck Filter */}
        <div className="flex gap-3 justify-center mb-12 flex-wrap max-md:max-w-md max-md:mx-auto">
          <button
            className={`px-5 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all border-2 ${
              selectedDeck === 'all'
                ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                : 'bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => setSelectedDeck('all')}
          >
            All ({cardCounts.all})
          </button>
          <button
            className={`px-5 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all border-2 ${
              selectedDeck === 'strategy'
                ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                : 'bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => setSelectedDeck('strategy')}
          >
            🔭 Strategy ({cardCounts.strategy})
          </button>
          <button
            className={`px-5 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all border-2 ${
              selectedDeck === 'risk'
                ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                : 'bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => setSelectedDeck('risk')}
          >
            🛡️ Risk ({cardCounts.risk})
          </button>
          <button
            className={`px-5 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all border-2 ${
              selectedDeck === 'execution'
                ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                : 'bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => setSelectedDeck('execution')}
          >
            🚀 Execution ({cardCounts.execution})
          </button>
        </div>

        {/* Results count */}
        <div className="text-center text-gray-500 dark:text-gray-400 mb-10 text-sm">
          Showing {filteredCards.length} {filteredCards.length === 1 ? 'framework' : 'frameworks'}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
          {filteredCards.map(card => (
            <div
              key={card.id}
              className={`
                bg-white dark:bg-gray-900
                p-6 rounded-lg
                cursor-pointer
                transition-all duration-200
                border-2 border-gray-200 dark:border-gray-800
                hover:border-gray-900 dark:hover:border-white
                hover:-translate-y-1
                ${card.deck === 'strategy' ? 'border-l-4 border-l-blue-500' : ''}
                ${card.deck === 'risk' ? 'border-l-4 border-l-red-500' : ''}
                ${card.deck === 'execution' ? 'border-l-4 border-l-emerald-500' : ''}
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
              <div className="flex justify-center mb-4">
                {(() => {
                  const Icon = getCardIcon(card);
                  return <Icon className="w-12 h-12 text-gray-900 dark:text-white" strokeWidth={1.5} />;
                })()}
              </div>

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
