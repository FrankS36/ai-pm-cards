import { useNavigate } from 'react-router-dom';
import {
  Target, Compass, Shield, Rocket, Brain, TrendingUp,
  Users, AlertTriangle, Gauge, Lightbulb, Lock, Zap
} from 'lucide-react';

function IconTest() {
  const navigate = useNavigate();

  // Sample card data for testing
  const sampleCards = [
    {
      id: 'STRAT-001',
      deck: 'strategy',
      title: 'Define Success Metrics',
      description: 'Establish clear, measurable KPIs before building AI features to ensure alignment and track progress.',
      category: 'Strategy',
      difficulty: 'beginner',
      emoji: '🎯',
      iconOptions: [
        { Icon: Target, name: 'Target' },
        { Icon: Compass, name: 'Compass' },
        { Icon: TrendingUp, name: 'TrendingUp' },
      ]
    },
    {
      id: 'RISK-015',
      deck: 'risk',
      title: 'Plan Model Risk Mitigation',
      description: 'Identify potential failure modes and build safeguards before deploying AI models to production.',
      category: 'Risk Management',
      difficulty: 'intermediate',
      emoji: '🛡️',
      iconOptions: [
        { Icon: Shield, name: 'Shield' },
        { Icon: AlertTriangle, name: 'AlertTriangle' },
        { Icon: Lock, name: 'Lock' },
      ]
    },
    {
      id: 'EXEC-025',
      deck: 'execution',
      title: 'Optimize Model Performance',
      description: 'Improve inference speed and reduce costs while maintaining accuracy for production AI systems.',
      category: 'Execution',
      difficulty: 'advanced',
      emoji: '🚀',
      iconOptions: [
        { Icon: Rocket, name: 'Rocket' },
        { Icon: Gauge, name: 'Gauge' },
        { Icon: Zap, name: 'Zap' },
      ]
    },
  ];

  const iconStyles = [
    { name: 'Plain Icon', className: 'w-12 h-12' },
    { name: 'With Circle BG', className: 'w-12 h-12', wrapper: true, wrapperClass: 'w-16 h-16 rounded-full flex items-center justify-center' },
    { name: 'Deck Color BG', className: 'w-12 h-12', wrapper: true, wrapperClass: 'w-16 h-16 rounded-full flex items-center justify-center', deckColor: true },
  ];

  const getDeckColorClasses = (deck) => {
    switch (deck) {
      case 'strategy':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      case 'risk':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
      case 'execution':
        return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white';
    }
  };

  return (
    <div className="min-h-screen pb-32 bg-white dark:bg-black">
      <div className="max-w-[1400px] mx-auto px-20 max-md:px-6">
        <div className="text-center mt-4 mb-8 md:mt-20 md:mb-20">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Icon Style Testing
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Compare emoji vs Lucide icons in actual card layouts. Each card shows the current emoji and three icon alternatives.
          </p>
        </div>

        {sampleCards.map((card) => (
          <div key={card.id} className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {card.id} - {card.title}
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-8">
              Current: {card.emoji} | Testing: {card.iconOptions.map(o => o.name).join(', ')}
            </p>

            {/* Current Emoji Version */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Current (Emoji)
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div
                  className={`
                    bg-white dark:bg-gray-900
                    p-6 rounded-lg
                    transition-all duration-200
                    border-2 border-gray-200 dark:border-gray-800
                    ${card.deck === 'strategy' ? 'border-l-4 border-l-blue-500' : ''}
                    ${card.deck === 'risk' ? 'border-l-4 border-l-red-500' : ''}
                    ${card.deck === 'execution' ? 'border-l-4 border-l-emerald-500' : ''}
                    max-w-xs
                  `}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {card.id}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded font-semibold ${
                      card.difficulty === 'beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      card.difficulty === 'intermediate' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
                    }`}>
                      {card.difficulty}
                    </span>
                  </div>
                  <div className="text-5xl text-center mb-4">{card.emoji}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-semibold">
                    {card.category}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Icon Alternatives */}
            {card.iconOptions.map((iconOption) => (
              <div key={iconOption.name} className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Alternative: {iconOption.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {iconStyles.map((style) => {
                    const Icon = iconOption.Icon;
                    return (
                      <div key={style.name}>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                          {style.name}
                        </p>
                        <div
                          className={`
                            bg-white dark:bg-gray-900
                            p-6 rounded-lg
                            transition-all duration-200
                            border-2 border-gray-200 dark:border-gray-800
                            ${card.deck === 'strategy' ? 'border-l-4 border-l-blue-500' : ''}
                            ${card.deck === 'risk' ? 'border-l-4 border-l-red-500' : ''}
                            ${card.deck === 'execution' ? 'border-l-4 border-l-emerald-500' : ''}
                          `}
                        >
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                              {card.id}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded font-semibold ${
                              card.difficulty === 'beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                              card.difficulty === 'intermediate' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                              'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
                            }`}>
                              {card.difficulty}
                            </span>
                          </div>

                          <div className="flex justify-center mb-4">
                            {style.wrapper ? (
                              <div className={`${style.wrapperClass} ${style.deckColor ? getDeckColorClasses(card.deck) : 'bg-gray-100 dark:bg-gray-800'}`}>
                                <Icon className={`${style.className} ${style.deckColor ? '' : 'text-gray-900 dark:text-white'}`} strokeWidth={1.5} />
                              </div>
                            ) : (
                              <Icon className={`${style.className} text-gray-900 dark:text-white`} strokeWidth={1.5} />
                            )}
                          </div>

                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {card.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-semibold">
                            {card.category}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            <hr className="border-gray-200 dark:border-gray-800 mt-12" />
          </div>
        ))}

        <div className="text-center mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Which style do you prefer?
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
            Consider readability, professionalism, and visual consistency across light/dark modes.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate('/browse')}
              className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black border-2 border-gray-900 dark:border-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
            >
              Back to Browse
            </button>
            <button
              onClick={() => navigate('/icons')}
              className="px-6 py-3 bg-white dark:bg-black text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
            >
              View All Icons
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconTest;
