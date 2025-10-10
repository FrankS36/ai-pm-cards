import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, Check, ExternalLink, Search, Filter, Sparkles } from 'lucide-react';
import cardDataJson from '../data/cardData.json';

function PromptsPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  // Extract all prompts from all cards
  const allPrompts = useMemo(() => {
    const prompts = [];
    Object.values(cardDataJson.cards).forEach(card => {
      if (card.prompts && card.prompts.length > 0) {
        card.prompts.forEach(prompt => {
          prompts.push({
            ...prompt,
            cardId: card.id,
            cardTitle: card.title,
            deck: card.deck
          });
        });
      }
    });
    return prompts;
  }, []);

  // Filter prompts
  const filteredPrompts = useMemo(() => {
    return allPrompts.filter(prompt => {
      const matchesCategory = selectedCategory === 'all' || prompt.category.toLowerCase() === selectedCategory;
      const matchesSearch = searchQuery === '' ||
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [allPrompts, selectedCategory, searchQuery]);

  const handleCopy = async (promptText, promptId) => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopiedId(promptId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const categories = ['all', 'strategy', 'execution', 'risk'];

  return (
    <div className="min-h-screen py-16 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">AI PM Prompts</span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Copy-Paste AI PM Prompts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Production-ready prompts for ChatGPT, Claude, or any AI assistant. Each prompt uses the frameworks from this site—copy, customize, and get results.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-4">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-3">
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search prompts by title, description, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600 dark:text-gray-400">
          {filteredPrompts.length} {filteredPrompts.length === 1 ? 'prompt' : 'prompts'} found
        </div>

        {/* Prompts Grid */}
        <div className="space-y-6">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-gray-900 dark:hover:border-white transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {prompt.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {prompt.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      prompt.deck === 'strategy'
                        ? 'bg-gradient-to-br from-primary to-purple text-white'
                        : prompt.deck === 'risk'
                        ? 'bg-gradient-to-br from-amber-600 to-red-600 text-white'
                        : 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white'
                    }`}>
                      {prompt.category}
                    </span>
                    {prompt.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prompt Text */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-4 font-mono text-sm text-gray-900 dark:text-gray-100 whitespace-pre-wrap max-h-96 overflow-y-auto">
                {prompt.prompt.replace(/\\n/g, '\n')}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={() => navigate(`/framework/${prompt.cardId}`)}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-black text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-800 rounded-lg font-semibold hover:border-gray-900 dark:hover:border-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Framework: {prompt.cardTitle}
                </button>

                <button
                  onClick={() => handleCopy(prompt.prompt.replace(/\\n/g, '\n'), prompt.id)}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  {copiedId === prompt.id ? (
                    <>
                      <Check className="w-5 h-5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copy Prompt
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPrompts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              No prompts found matching your filters
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-800 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Want More AI PM Tools?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Each prompt is based on battle-tested frameworks from Dell Technologies. Explore 156 tactical frameworks, or use our Claude Code agents to automate PRD writing, ROI calculations, and risk audits.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate('/browse')}
              className="bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Browse All Frameworks →
            </button>
            <button
              onClick={() => navigate('/agents')}
              className="bg-white dark:bg-black text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              View Claude Code Agents →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromptsPage;
