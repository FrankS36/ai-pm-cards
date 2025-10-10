import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Lightbulb, Copy, Check, Sparkles } from 'lucide-react';
import ShareButton from '../components/ShareButton';
import { shareCard } from '../utils/share';
import cardDataJson from '../data/cardData.json';
import { getCardIcon } from '../utils/iconMapping';

function FrameworkPage() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [framework, setFramework] = useState(null);
  const [relatedFrameworks, setRelatedFrameworks] = useState([]);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    // Find the framework by ID
    const card = cardDataJson.cards[cardId];

    if (!card) {
      navigate('/404');
      return;
    }

    setFramework(card);

    // Find paths that contain this framework
    const containingPaths = Object.values(cardDataJson.paths).filter(path =>
      path.cardIds.includes(cardId)
    );

    setRelatedFrameworks(containingPaths);
  }, [cardId, navigate]);

  // Navigate to related framework
  const handleRelatedClick = (relatedText) => {
    const titleMatch = relatedText.match(/(?:Next|Previous|Also|Related):\s*(.+)/);
    const searchTitle = titleMatch ? titleMatch[1].trim() : relatedText;

    const allCards = Object.values(cardDataJson.cards);
    const foundCard = allCards.find(card =>
      card.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
      searchTitle.toLowerCase().includes(card.title.toLowerCase())
    );

    if (foundCard) {
      navigate(`/framework/${foundCard.id}`);
      window.scrollTo(0, 0);
    }
  };

  // Copy prompt to clipboard
  const handleCopy = async (promptText, promptId) => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopiedId(promptId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!framework) {
    return null;
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-[800px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <button
            className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary-light transition-colors cursor-pointer bg-transparent border-none text-base font-medium"
            onClick={() => navigate('/browse')}
          >
            ← Back to Browse
          </button>

          <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
            <span className={`text-white px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide ${
              framework.deck === 'strategy'
                ? 'bg-gradient-to-br from-primary to-purple'
                : framework.deck === 'risk'
                ? 'bg-gradient-to-br from-amber-600 to-red-600'
                : 'bg-gradient-to-br from-emerald-600 to-teal-600'
            }`}>
              {framework.deck.charAt(0).toUpperCase() + framework.deck.slice(1)}
            </span>
            <span className="text-gray-500 dark:text-gray-400">•</span>
            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{framework.category}</span>
            <span className="text-gray-500 dark:text-gray-400">•</span>
            <span className={`text-xs px-3 py-1 rounded-lg font-semibold capitalize ${
              framework.difficulty === 'beginner'
                ? 'bg-green-500/10 text-green-700 dark:bg-green-500/20 dark:text-green-400'
                : framework.difficulty === 'intermediate'
                ? 'bg-orange-500/10 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400'
                : 'bg-red-500/10 text-red-700 dark:bg-red-500/20 dark:text-red-400'
            }`}>
              {framework.difficulty.charAt(0).toUpperCase() + framework.difficulty.slice(1)}
            </span>
          </div>

          <div className="flex justify-center my-6">
            {(() => {
              const Icon = getCardIcon(framework);
              return <Icon className="w-20 h-20 text-gray-900 dark:text-white" strokeWidth={1.5} />;
            })()}
          </div>

          <h1 className="text-[2.5rem] font-extrabold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
            {framework.title}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {framework.description}
          </p>

          <div className="flex justify-center mt-6">
            <ShareButton
              onShare={() => shareCard(framework)}
              label="Share Framework"
            />
          </div>
        </div>

        {/* When to Use */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-5 pb-2 border-b-2 border-gray-200 dark:border-gray-700">
            When to Use This Framework
          </h2>
          <ul className="list-none p-0">
            {framework.whenToUse.map((item, index) => (
              <li key={index} className="py-3 pl-6 relative text-gray-900 dark:text-gray-100 leading-relaxed before:content-['→'] before:absolute before:left-0 before:text-primary dark:before:text-primary-light before:font-bold">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-5 pb-2 border-b-2 border-gray-200 dark:border-gray-700">
            Overview
          </h2>
          <p className="text-lg leading-[1.7] text-gray-900 dark:text-gray-100">
            {framework.overview}
          </p>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-5 pb-2 border-b-2 border-gray-200 dark:border-gray-700">
            How to Apply It
          </h2>
          <ol className="list-none p-0 [counter-reset:step-counter]">
            {framework.steps.map((step, index) => (
              <li
                key={index}
                className="[counter-increment:step-counter] mb-6 pl-12 relative text-gray-900 dark:text-gray-100 leading-[1.7] text-[1.0625rem] before:content-[counter(step-counter)] before:absolute before:left-0 before:top-0 before:bg-primary dark:before:bg-primary-light before:text-white before:w-8 before:h-8 before:rounded-full before:flex before:items-center before:justify-center before:text-base before:font-bold"
              >
                {step}
              </li>
            ))}
          </ol>
        </section>

        {/* Tips */}
        {framework.tips && framework.tips.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-5 pb-2 border-b-2 border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <Lightbulb className="w-6 h-6" />
              <span>Pro Tips</span>
            </h2>
            <ul className="list-none p-0">
              {framework.tips.map((tip, index) => (
                <li
                  key={index}
                  className="py-3 pl-8 relative text-gray-900 dark:text-gray-100 leading-relaxed bg-gray-50 dark:bg-gray-800 mb-3 rounded-lg p-4 flex gap-3"
                >
                  <Lightbulb className="w-5 h-5 flex-shrink-0 text-gray-600 dark:text-gray-400 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* AI Prompts */}
        {framework.prompts && framework.prompts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-5 pb-2 border-b-2 border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              <span>Ready-to-Use AI Prompts</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Copy these prompts to ChatGPT, Claude, or any AI assistant to apply this framework to your work.
            </p>
            <div className="space-y-6">
              {framework.prompts.map((prompt) => (
                <div
                  key={prompt.id}
                  className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {prompt.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {prompt.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {prompt.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 mb-4 font-mono text-sm text-gray-900 dark:text-gray-100 whitespace-pre-wrap max-h-64 overflow-y-auto border border-gray-200 dark:border-gray-700">
                    {prompt.prompt.replace(/\\n/g, '\n')}
                  </div>

                  <button
                    onClick={() => handleCopy(prompt.prompt.replace(/\\n/g, '\n'), prompt.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    {copiedId === prompt.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Prompt
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Want more prompts like these? Browse our complete prompt library.
              </p>
              <button
                onClick={() => navigate('/prompts')}
                className="text-sm font-semibold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                View All AI Prompts →
              </button>
            </div>
          </section>
        )}

        {/* Related Frameworks */}
        {framework.relatedCards && framework.relatedCards.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-5 pb-2 border-b-2 border-gray-200 dark:border-gray-700">
              Related Frameworks
            </h2>
            <div className="flex flex-col gap-3">
              {framework.relatedCards.map((related, index) => (
                <button
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 px-6 rounded-lg text-left cursor-pointer transition-all text-base text-gray-900 dark:text-gray-100 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-primary dark:hover:border-primary-light hover:translate-x-1 after:content-['_→'] after:text-primary dark:after:text-primary-light after:opacity-50 after:transition-all hover:after:opacity-100 hover:after:translate-x-1"
                  onClick={() => handleRelatedClick(related)}
                >
                  {related}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Paths containing this framework */}
        {relatedFrameworks.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-5 pb-2 border-b-2 border-gray-200 dark:border-gray-700">
              Learning Paths
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base">
              This framework is part of these curated learning paths:
            </p>
            <div className="flex flex-col gap-4">
              {relatedFrameworks.map((path) => (
                <button
                  key={path.id}
                  className="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 rounded-lg text-left cursor-pointer transition-all hover:border-primary dark:hover:border-primary-light hover:bg-gray-100 dark:hover:bg-gray-700 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                  onClick={() => {
                    // Set progress to this card's index in the path
                    const cardIndex = path.cardIds.indexOf(cardId);
                    localStorage.setItem(`path-progress-${path.id}`, cardIndex.toString());
                    navigate(`/path/${path.id}`);
                  }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {path.title}
                  </h3>
                  <p className="text-[0.9375rem] text-gray-700 dark:text-gray-300 m-0 leading-normal">
                    {path.description}
                  </p>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center mt-16 py-12 px-8 bg-gradient-to-br from-primary/[0.03] to-purple/[0.03] dark:from-primary/[0.05] dark:to-purple/[0.05] rounded-xl">
          <h2 className="text-[1.75rem] font-bold text-gray-900 dark:text-gray-100 mb-6 border-none p-0">
            Ready to explore more frameworks?
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="bg-gradient-to-br from-primary to-purple text-white border-none py-4 px-8 text-base font-semibold rounded-lg cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(30,58,138,0.3)] dark:hover:shadow-[0_6px_20px_rgba(30,58,138,0.5)]"
              onClick={() => navigate('/browse')}
            >
              Browse All Frameworks
            </button>
            <button
              className="bg-white dark:bg-gray-900 text-purple border-2 border-purple py-4 px-8 text-base font-semibold rounded-lg cursor-pointer transition-all hover:bg-purple hover:text-white hover:-translate-y-0.5"
              onClick={() => navigate('/paths')}
            >
              View Learning Paths
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FrameworkPage;
