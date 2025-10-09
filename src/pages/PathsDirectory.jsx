import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cardDataJson from '../data/cardData.json';
import {
  Compass, Shield, Rocket, Sparkles,
  Target, ClipboardList, Hammer, TrendingUp,
  BookOpen, Clock, Map
} from 'lucide-react';

function PathsDirectory() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('lifecycle'); // 'topic' or 'lifecycle'
  const [selectedCategories, setSelectedCategories] = useState(['all']);
  const [expandedStage, setExpandedStage] = useState('discovery');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const allPaths = Object.values(cardDataJson.paths);

  // Categorize paths
  const pathCategories = {
    strategy: ['concept-to-strategy', 'first-business-case', 'roadmap-planning', 'choosing-ai-approach', 'pricing-ai-product'],
    risk: ['prevent-failures', 'building-trust', 'compliance-ethics', 'fixing-underperforming'],
    execution: ['scoping-first-feature', 'model-to-production', 'launching-safely', 'data-pipelines', 'ai-ux-design', 'testing-qa'],
    crosscutting: ['end-to-end-launch', 'enterprise-guide', 'cost-performance', 'ai-pm-fundamentals']
  };

  // Multiselect toggle handler
  const toggleCategory = (category) => {
    if (category === 'all') {
      setSelectedCategories(['all']);
    } else {
      setSelectedCategories(prev => {
        // Remove 'all' if it's selected
        const withoutAll = prev.filter(c => c !== 'all');

        // Toggle the category
        if (withoutAll.includes(category)) {
          const newCategories = withoutAll.filter(c => c !== category);
          // If nothing selected, default to 'all'
          return newCategories.length === 0 ? ['all'] : newCategories;
        } else {
          return [...withoutAll, category];
        }
      });
    }
  };

  const filteredPaths = selectedCategories.includes('all')
    ? allPaths
    : allPaths.filter(path =>
        selectedCategories.some(cat => pathCategories[cat]?.includes(path.id))
      );

  const getCategoryLabel = (pathId) => {
    if (pathCategories.strategy.includes(pathId)) return 'Strategy';
    if (pathCategories.risk.includes(pathId)) return 'Risk';
    if (pathCategories.execution.includes(pathId)) return 'Execution';
    if (pathCategories.crosscutting.includes(pathId)) return 'Cross-Cutting';
    return '';
  };

  const getCategoryIcon = (pathId) => {
    const iconClass = "w-4 h-4 inline-block";
    if (pathCategories.strategy.includes(pathId)) return <Compass className={iconClass} />;
    if (pathCategories.risk.includes(pathId)) return <Shield className={iconClass} />;
    if (pathCategories.execution.includes(pathId)) return <Rocket className={iconClass} />;
    if (pathCategories.crosscutting.includes(pathId)) return <Sparkles className={iconClass} />;
    return null;
  };

  // Lifecycle stages data
  const lifecycleStages = [
    {
      id: 'discovery',
      icon: Target,
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
      icon: ClipboardList,
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
      icon: Hammer,
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
      icon: Rocket,
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
      icon: TrendingUp,
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
    <div className="min-h-screen pb-12 bg-white dark:bg-black">
      <div className="max-w-[1400px] mx-auto px-20 max-md:px-6">
        <div className="text-center mt-4 mb-8 md:mt-4 md:mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Journey Paths</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">20 curated sequences of frameworks for specific situations. Each path takes ~20 minutes and walks you through battle-tested tactics in the right order.</p>
        </div>

        {/* View Toggle */}
        <div className="flex gap-4 justify-center mb-12 max-md:flex-col max-md:max-w-md max-md:mx-auto">
          <button
            className={`px-8 py-4 text-base font-semibold border-2 rounded-lg cursor-pointer transition-all flex items-center gap-2 justify-center ${
              viewMode === 'lifecycle'
                ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                : 'bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => setViewMode('lifecycle')}
          >
            <Target className="w-5 h-5" />
            <span>Browse by Lifecycle Stage</span>
          </button>
          <button
            className={`px-8 py-4 text-base font-semibold border-2 rounded-lg cursor-pointer transition-all flex items-center gap-2 justify-center ${
              viewMode === 'topic'
                ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                : 'bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => setViewMode('topic')}
          >
            <BookOpen className="w-5 h-5" />
            <span>Browse by Topic</span>
          </button>
        </div>

        {/* Topic View */}
        {viewMode === 'topic' && (
          <>
            {/* Category Filter - Desktop Multiselect */}
        <div className="mb-12">
          {/* Desktop - Button Pills */}
          <div className="hidden md:flex gap-3 justify-center flex-wrap">
            <button
              className={`px-5 py-3 rounded-lg text-sm font-semibold cursor-pointer transition-all border-2 ${
                selectedCategories.includes('all')
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                  : 'bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
              }`}
              onClick={() => toggleCategory('all')}
            >
              All Paths ({allPaths.length})
            </button>
            <button
              className={`px-5 py-3 rounded-lg text-sm font-semibold cursor-pointer transition-all border-2 flex items-center gap-2 ${
                selectedCategories.includes('strategy')
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                  : 'bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
              }`}
              onClick={() => toggleCategory('strategy')}
            >
              <Compass className="w-4 h-4" />
              <span>Strategy ({pathCategories.strategy.length})</span>
            </button>
            <button
              className={`px-5 py-3 rounded-lg text-sm font-semibold cursor-pointer transition-all border-2 flex items-center gap-2 ${
                selectedCategories.includes('risk')
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                  : 'bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
              }`}
              onClick={() => toggleCategory('risk')}
            >
              <Shield className="w-4 h-4" />
              <span>Risk ({pathCategories.risk.length})</span>
            </button>
            <button
              className={`px-5 py-3 rounded-lg text-sm font-semibold cursor-pointer transition-all border-2 flex items-center gap-2 ${
                selectedCategories.includes('execution')
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                  : 'bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
              }`}
              onClick={() => toggleCategory('execution')}
            >
              <Rocket className="w-4 h-4" />
              <span>Execution ({pathCategories.execution.length})</span>
            </button>
            <button
              className={`px-5 py-3 rounded-lg text-sm font-semibold cursor-pointer transition-all border-2 flex items-center gap-2 ${
                selectedCategories.includes('crosscutting')
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                  : 'bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
              }`}
              onClick={() => toggleCategory('crosscutting')}
            >
              <Sparkles className="w-4 h-4" />
              <span>Cross-Cutting ({pathCategories.crosscutting.length})</span>
            </button>
          </div>

          {/* Mobile - Dropdown */}
          <div className="md:hidden relative max-w-md mx-auto">
            <button
              className="w-full px-5 py-3 rounded-lg text-sm font-semibold cursor-pointer transition-all border-2 bg-white dark:bg-black text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white flex items-center justify-between"
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            >
              <span>
                {selectedCategories.includes('all')
                  ? 'All Paths'
                  : `${selectedCategories.length} ${selectedCategories.length === 1 ? 'Category' : 'Categories'} Selected`}
              </span>
              <span className="text-gray-400">{showCategoryDropdown ? '▲' : '▼'}</span>
            </button>

            {showCategoryDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-10">
                <button
                  className={`w-full px-5 py-3 text-left text-sm font-semibold transition-colors ${
                    selectedCategories.includes('all')
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                      : 'text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => {
                    toggleCategory('all');
                    setShowCategoryDropdown(false);
                  }}
                >
                  All Paths ({allPaths.length})
                </button>
                <button
                  className={`w-full px-5 py-3 text-left text-sm font-semibold transition-colors flex items-center gap-2 ${
                    selectedCategories.includes('strategy')
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                      : 'text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => toggleCategory('strategy')}
                >
                  <Compass className="w-4 h-4" />
                  <span>Strategy ({pathCategories.strategy.length})</span>
                </button>
                <button
                  className={`w-full px-5 py-3 text-left text-sm font-semibold transition-colors flex items-center gap-2 ${
                    selectedCategories.includes('risk')
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                      : 'text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => toggleCategory('risk')}
                >
                  <Shield className="w-4 h-4" />
                  <span>Risk ({pathCategories.risk.length})</span>
                </button>
                <button
                  className={`w-full px-5 py-3 text-left text-sm font-semibold transition-colors flex items-center gap-2 ${
                    selectedCategories.includes('execution')
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                      : 'text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => toggleCategory('execution')}
                >
                  <Rocket className="w-4 h-4" />
                  <span>Execution ({pathCategories.execution.length})</span>
                </button>
                <button
                  className={`w-full px-5 py-3 text-left text-sm font-semibold transition-colors rounded-b-lg flex items-center gap-2 ${
                    selectedCategories.includes('crosscutting')
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                      : 'text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => toggleCategory('crosscutting')}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Cross-Cutting ({pathCategories.crosscutting.length})</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="text-center text-gray-500 dark:text-gray-400 mb-10 text-sm">
          Showing {filteredPaths.length} {filteredPaths.length === 1 ? 'path' : 'paths'}
        </div>

        {/* Path Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8 max-md:grid-cols-1">
          {filteredPaths.map(path => (
            <div
              key={path.id}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 cursor-pointer transition-all flex flex-col border-2 border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white hover:-translate-y-1"
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

              <div className="flex gap-6 mb-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2 text-[0.9rem] text-gray-500 dark:text-gray-400">
                  <BookOpen className="w-4 h-4" />
                  <span>{path.cardIds.length} cards</span>
                </div>
                {path.duration && (
                  <div className="flex items-center gap-2 text-[0.9rem] text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{path.duration}</span>
                  </div>
                )}
              </div>

              {path.targetAudience && (
                <div className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-md mb-4 leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">For:</strong> {path.targetAudience}
                </div>
              )}

              <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-4 rounded-lg cursor-pointer text-base font-semibold transition-all hover:bg-gray-800 dark:hover:bg-gray-100">
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
            <div className="flex flex-col gap-6">
              {lifecycleStages.map((stage) => (
                <div
                  key={stage.id}
                  className={`bg-white dark:bg-gray-900 border-2 rounded-lg overflow-hidden transition-all ${
                    expandedStage === stage.id
                      ? 'border-gray-900 dark:border-white'
                      : 'border-gray-200 dark:border-gray-800'
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between px-8 py-6 bg-transparent border-none cursor-pointer text-left transition-all hover:bg-gray-50 dark:hover:bg-gray-800 max-md:px-6 max-md:py-5"
                    onClick={() => toggleStage(stage.id)}
                  >
                    <div className="flex items-center gap-4">
                      <stage.icon className="w-10 h-10 flex-shrink-0 text-gray-900 dark:text-white max-md:w-8 max-md:h-8" />
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
                    <div className="px-8 pb-10 animate-[slideDown_0.3s_ease-out] max-md:px-6 max-md:pb-8">
                      <p className="text-base text-gray-600 dark:text-gray-400 mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">{stage.description}</p>

                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recommended Paths ({stage.paths.length})</h4>
                        <div className="flex flex-col gap-3">
                          {stage.paths.map((path) => (
                            <button
                              key={path.id}
                              className="flex items-center gap-3 px-5 py-4 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg cursor-pointer transition-all text-left w-full hover:border-gray-900 dark:hover:border-white hover:translate-x-1"
                              onClick={() => navigate(`/path/${path.id}`)}
                            >
                              <Map className="w-5 h-5 flex-shrink-0 text-gray-900 dark:text-white" />
                              <span className="text-base font-semibold text-gray-900 dark:text-white flex-1">{path.title}</span>
                              <span className="text-base text-gray-400 dark:text-gray-500">→</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mb-0">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Key Frameworks ({stage.frameworks.length})</h4>
                        <div className="flex flex-col gap-3">
                          {stage.frameworks.map((framework) => (
                            <button
                              key={framework.id}
                              className="flex items-center gap-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg cursor-pointer transition-all text-left w-full hover:border-gray-900 dark:hover:border-white hover:translate-x-1 group"
                              onClick={() => navigate(`/framework/${framework.id}`)}
                            >
                              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 font-mono flex-shrink-0">{framework.id}</span>
                              <span className="text-base text-gray-900 dark:text-white flex-1 font-medium">{framework.title}</span>
                              <span className="text-base text-gray-400 dark:text-gray-500 opacity-0 transition-opacity group-hover:opacity-100">→</span>
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
