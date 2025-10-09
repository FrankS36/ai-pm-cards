import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cardDataJson from '../data/cardData.json';

function PathsDirectory() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('lifecycle'); // 'topic' or 'lifecycle'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedStage, setExpandedStage] = useState('discovery');

  const allPaths = Object.values(cardDataJson.paths);

  // Categorize paths
  const pathCategories = {
    strategy: ['concept-to-strategy', 'first-business-case', 'roadmap-planning', 'choosing-ai-approach', 'pricing-ai-product'],
    risk: ['prevent-failures', 'building-trust', 'compliance-ethics', 'fixing-underperforming'],
    execution: ['scoping-first-feature', 'model-to-production', 'launching-safely', 'data-pipelines', 'ai-ux-design', 'testing-qa'],
    crosscutting: ['end-to-end-launch', 'enterprise-guide', 'cost-performance', 'ai-pm-fundamentals']
  };

  const filteredPaths = selectedCategory === 'all'
    ? allPaths
    : allPaths.filter(path => pathCategories[selectedCategory]?.includes(path.id));

  const getCategoryLabel = (pathId) => {
    if (pathCategories.strategy.includes(pathId)) return 'Strategy';
    if (pathCategories.risk.includes(pathId)) return 'Risk';
    if (pathCategories.execution.includes(pathId)) return 'Execution';
    if (pathCategories.crosscutting.includes(pathId)) return 'Cross-Cutting';
    return '';
  };

  const getCategoryIcon = (pathId) => {
    if (pathCategories.strategy.includes(pathId)) return '🔭';
    if (pathCategories.risk.includes(pathId)) return '🛡️';
    if (pathCategories.execution.includes(pathId)) return '🚀';
    if (pathCategories.crosscutting.includes(pathId)) return '⭐';
    return '';
  };

  // Lifecycle stages data
  const lifecycleStages = [
    {
      id: 'discovery',
      icon: '🎯',
      title: 'Discovery',
      subtitle: 'Should we build this?',
      description: 'Validate the problem before writing code',
      frameworks: [
        { id: 'STRAT-001', title: 'Write a Clear Problem Statement' },
        { id: 'STRAT-002', title: 'Conduct Customer Discovery Interviews' },
        { id: 'STRAT-003', title: 'Apply Jobs to Be Done Framework' },
        { id: 'STRAT-004', title: 'Identify AI Opportunities' },
        { id: 'STRAT-005', title: 'Assess AI Feasibility' },
      ],
      paths: [
        { id: 'problem-discovery', title: 'Problem Discovery' },
        { id: 'concept-to-strategy', title: 'Concept to Strategy' },
      ],
    },
    {
      id: 'planning',
      icon: '📋',
      title: 'Planning',
      subtitle: 'What are we building?',
      description: 'Strategy, roadmap, and risk assessment',
      frameworks: [
        { id: 'STRAT-006', title: 'Craft Your AI Vision' },
        { id: 'STRAT-007', title: 'Write an AI Business Case' },
        { id: 'STRAT-008', title: 'Build an AI Product Roadmap' },
        { id: 'STRAT-010', title: 'Choose the Right AI Approach' },
        { id: 'RISK-015', title: 'Plan Model Risk Mitigation' },
        { id: 'RISK-018', title: 'Assess Ethical Risks' },
      ],
      paths: [
        { id: 'first-business-case', title: 'Your First Business Case' },
        { id: 'roadmap-planning', title: 'Roadmap Planning' },
        { id: 'compliance-ethics', title: 'Compliance & Ethics' },
      ],
    },
    {
      id: 'building',
      icon: '🔨',
      title: 'Building',
      subtitle: 'How do we ship this?',
      description: 'Specs, model selection, data, and UX',
      frameworks: [
        { id: 'STRAT-020', title: 'Define Success Metrics' },
        { id: 'EXEC-001', title: 'Write Technical Specifications' },
        { id: 'EXEC-005', title: 'Choose Model Architecture' },
        { id: 'EXEC-010', title: 'Build Data Pipeline' },
        { id: 'EXEC-025', title: 'Design Progressive Disclosure' },
        { id: 'EXEC-026', title: 'Design Explainability' },
      ],
      paths: [
        { id: 'scoping-first-feature', title: 'Scoping Your First Feature' },
        { id: 'model-to-production', title: 'Model to Production' },
        { id: 'data-pipelines', title: 'Data Pipelines' },
        { id: 'ai-ux-design', title: 'AI UX Design' },
      ],
    },
    {
      id: 'launching',
      icon: '🚀',
      title: 'Launching',
      subtitle: 'How do we de-risk go-live?',
      description: 'Testing, rollout strategy, and monitoring',
      frameworks: [
        { id: 'EXEC-015', title: 'Test Model Performance' },
        { id: 'EXEC-020', title: 'Plan Phased Rollout' },
        { id: 'RISK-025', title: 'Build Trust Mechanisms' },
        { id: 'EXEC-035', title: 'Monitor Models in Production' },
        { id: 'RISK-040', title: 'Plan Incident Response' },
      ],
      paths: [
        { id: 'launching-safely', title: 'Launching Safely' },
        { id: 'building-trust', title: 'Building Trust' },
        { id: 'testing-qa', title: 'Testing & QA' },
      ],
    },
    {
      id: 'optimizing',
      icon: '📈',
      title: 'Optimizing',
      subtitle: 'How do we improve?',
      description: 'Performance, cost, and continuous improvement',
      frameworks: [
        { id: 'EXEC-040', title: 'Optimize Model Performance' },
        { id: 'EXEC-042', title: 'Reduce Inference Costs' },
        { id: 'EXEC-045', title: 'Analyze User Feedback' },
        { id: 'RISK-048', title: 'Debug Underperforming AI' },
        { id: 'EXEC-047', title: 'Retrain Models Safely' },
      ],
      paths: [
        { id: 'fixing-underperforming', title: 'Fixing Underperforming AI' },
        { id: 'cost-performance', title: 'Cost vs Performance' },
      ],
    },
  ];

  const toggleStage = (stageId) => {
    setExpandedStage(expandedStage === stageId ? null : stageId);
  };

  return (
    <div className="min-h-screen pb-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mt-8 mb-12 relative">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-4">Journey Paths</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">20 curated sequences of frameworks for specific situations. Each path takes ~20 minutes and walks you through battle-tested tactics in the right order.</p>
        </div>

        {/* View Toggle */}
        <div className="flex gap-4 justify-center mb-10 max-md:flex-col">
          <button
            className={`px-6 py-3.5 text-base font-semibold border-2 rounded-xl cursor-pointer transition-all ${
              viewMode === 'topic'
                ? 'bg-gradient-to-br from-primary to-purple text-white border-transparent'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            onClick={() => setViewMode('topic')}
          >
            📚 Browse by Topic
          </button>
          <button
            className={`px-6 py-3.5 text-base font-semibold border-2 rounded-xl cursor-pointer transition-all ${
              viewMode === 'lifecycle'
                ? 'bg-gradient-to-br from-primary to-purple text-white border-transparent'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            onClick={() => setViewMode('lifecycle')}
          >
            🎯 Browse by Lifecycle Stage
          </button>
        </div>

        {/* Topic View */}
        {viewMode === 'topic' && (
          <>
            {/* Category Filter */}
        <div className="flex gap-4 justify-center flex-wrap mb-8 max-md:flex-col">
          <button
            className={`px-6 py-3 rounded-lg text-[0.95rem] font-medium cursor-pointer transition-all border-2 ${
              selectedCategory === 'all'
                ? 'bg-primary dark:bg-primary text-white border-primary dark:border-primary'
                : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => setSelectedCategory('all')}
          >
            All Paths ({allPaths.length})
          </button>
          <button
            className={`px-6 py-3 rounded-lg text-[0.95rem] font-medium cursor-pointer transition-all border-2 ${
              selectedCategory === 'strategy'
                ? 'bg-primary dark:bg-primary text-white border-primary dark:border-primary'
                : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => setSelectedCategory('strategy')}
          >
            🔭 Strategy ({pathCategories.strategy.length})
          </button>
          <button
            className={`px-6 py-3 rounded-lg text-[0.95rem] font-medium cursor-pointer transition-all border-2 ${
              selectedCategory === 'risk'
                ? 'bg-primary dark:bg-primary text-white border-primary dark:border-primary'
                : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => setSelectedCategory('risk')}
          >
            🛡️ Risk ({pathCategories.risk.length})
          </button>
          <button
            className={`px-6 py-3 rounded-lg text-[0.95rem] font-medium cursor-pointer transition-all border-2 ${
              selectedCategory === 'execution'
                ? 'bg-primary dark:bg-primary text-white border-primary dark:border-primary'
                : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => setSelectedCategory('execution')}
          >
            🚀 Execution ({pathCategories.execution.length})
          </button>
          <button
            className={`px-6 py-3 rounded-lg text-[0.95rem] font-medium cursor-pointer transition-all border-2 ${
              selectedCategory === 'crosscutting'
                ? 'bg-primary dark:bg-primary text-white border-primary dark:border-primary'
                : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => setSelectedCategory('crosscutting')}
          >
            ⭐ Cross-Cutting ({pathCategories.crosscutting.length})
          </button>
        </div>

        {/* Results */}
        <div className="text-center text-gray-500 dark:text-gray-400 mb-8 text-[0.95rem]">
          Showing {filteredPaths.length} {filteredPaths.length === 1 ? 'path' : 'paths'}
        </div>

        {/* Path Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8 max-md:grid-cols-1">
          {filteredPaths.map(path => (
            <div
              key={path.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] p-8 cursor-pointer transition-all flex flex-col border-2 border-transparent hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-primary dark:hover:border-primary"
              onClick={() => navigate(`/path/${path.id}`)}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[0.85rem] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {getCategoryIcon(path.id)} {getCategoryLabel(path.id)}
                </span>
                {path.difficulty && (
                  <span className={`text-xs px-2 py-1 rounded font-semibold ${
                    path.difficulty === 'beginner'
                      ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300'
                      : path.difficulty === 'intermediate'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                      : 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300'
                  }`}>
                    {path.difficulty}
                  </span>
                )}
              </div>

              <h3 className="text-[1.35rem] font-bold text-gray-900 dark:text-white mb-3 leading-tight">{path.title}</h3>
              <p className="text-[0.95rem] text-gray-500 dark:text-gray-400 leading-relaxed mb-6 flex-grow">{path.description}</p>

              <div className="flex gap-6 mb-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center gap-2 text-[0.9rem] text-gray-500 dark:text-gray-400">
                  <span className="text-[1.1rem]">📚</span>
                  <span>{path.cardIds.length} cards</span>
                </div>
                {path.duration && (
                  <div className="flex items-center gap-2 text-[0.9rem] text-gray-500 dark:text-gray-400">
                    <span className="text-[1.1rem]">⏱️</span>
                    <span>{path.duration}</span>
                  </div>
                )}
              </div>

              {path.targetAudience && (
                <div className="text-[0.85rem] text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 px-3 py-3 rounded-md mb-4 leading-normal">
                  <strong className="text-gray-900 dark:text-white">For:</strong> {path.targetAudience}
                </div>
              )}

              <button className="w-full bg-gradient-to-br from-primary to-purple text-white border-none px-6 py-3.5 rounded-lg cursor-pointer text-[0.95rem] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(30,58,138,0.3)] dark:hover:shadow-[0_4px_12px_rgba(30,58,138,0.5)]">
                Start Path →
              </button>
            </div>
          ))}
        </div>
          </>
        )}

        {/* Lifecycle View */}
        {viewMode === 'lifecycle' && (
          <div className="max-w-[900px] mx-auto">
            <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
              Find frameworks and paths based on where you are in your AI product journey.
            </p>
            <div className="flex flex-col gap-4">
              {lifecycleStages.map((stage) => (
                <div
                  key={stage.id}
                  className={`bg-white dark:bg-gray-800 border-2 rounded-2xl overflow-hidden transition-all ${
                    expandedStage === stage.id
                      ? 'border-primary dark:border-primary shadow-md dark:shadow-[0_4px_6px_rgba(0,0,0,0.3)]'
                      : 'border-gray-200 dark:border-gray-600'
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between px-8 py-6 bg-transparent border-none cursor-pointer text-left transition-all hover:bg-gray-50 dark:hover:bg-gray-700/50 max-md:px-6 max-md:py-5"
                    onClick={() => toggleStage(stage.id)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[2rem] flex-shrink-0 max-md:text-2xl">{stage.icon}</span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white m-0 max-md:text-xl">{stage.title}</h3>
                        <span className="text-[0.9375rem] text-gray-500 dark:text-gray-400 italic">{stage.subtitle}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap max-md:hidden">
                        {stage.frameworks.length} frameworks • {stage.paths.length} paths
                      </span>
                      <span className="text-base text-gray-500 dark:text-gray-400">
                        {expandedStage === stage.id ? '▼' : '▶'}
                      </span>
                    </div>
                  </button>

                  {expandedStage === stage.id && (
                    <div className="px-8 pb-8 animate-[slideDown_0.3s_ease-out] max-md:px-6 max-md:pb-6">
                      <p className="text-base text-gray-600 dark:text-gray-400 mb-8 pb-6 border-b border-gray-200 dark:border-gray-600">{stage.description}</p>

                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recommended Paths ({stage.paths.length})</h4>
                        <div className="flex flex-col gap-2">
                          {stage.paths.map((path) => (
                            <button
                              key={path.id}
                              className="flex items-center gap-3 px-5 py-4 bg-gradient-to-br from-primary/5 to-purple/5 dark:from-primary/10 dark:to-purple/10 border-2 border-gray-200 dark:border-gray-600 rounded-xl cursor-pointer transition-all text-left w-full hover:border-primary dark:hover:border-primary hover:translate-x-1"
                              onClick={() => navigate(`/path/${path.id}`)}
                            >
                              <span className="text-xl flex-shrink-0">🗺️</span>
                              <span className="text-base font-semibold text-gray-900 dark:text-white flex-1">{path.title}</span>
                              <span className="text-base text-primary dark:text-primary-light opacity-0 transition-opacity group-hover:opacity-100 hover:opacity-100">→</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mb-0">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Key Frameworks ({stage.frameworks.length})</h4>
                        <div className="flex flex-col gap-2">
                          {stage.frameworks.map((framework) => (
                            <button
                              key={framework.id}
                              className="flex items-center gap-4 px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer transition-all text-left w-full hover:border-primary dark:hover:border-primary hover:bg-white dark:hover:bg-gray-700 hover:translate-x-1 group"
                              onClick={() => navigate(`/framework/${framework.id}`)}
                            >
                              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 font-mono flex-shrink-0">{framework.id}</span>
                              <span className="text-[0.9375rem] text-gray-900 dark:text-white flex-1 font-medium">{framework.title}</span>
                              <span className="text-base text-primary dark:text-primary-light opacity-0 transition-opacity group-hover:opacity-100">→</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PathsDirectory;
