import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cardDataJson from '../data/cardData.json';
import './PathsDirectory.css';

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
    <div className="paths-directory">
      <div className="container">
        <div className="paths-header">
          <h2>Journey Paths</h2>
          <p className="paths-subtitle">20 curated sequences of frameworks for specific situations. Each path takes ~20 minutes and walks you through battle-tested tactics in the right order.</p>
        </div>

        {/* View Toggle */}
        <div className="view-toggle">
          <button
            className={`toggle-btn ${viewMode === 'topic' ? 'active' : ''}`}
            onClick={() => setViewMode('topic')}
          >
            📚 Browse by Topic
          </button>
          <button
            className={`toggle-btn ${viewMode === 'lifecycle' ? 'active' : ''}`}
            onClick={() => setViewMode('lifecycle')}
          >
            🎯 Browse by Lifecycle Stage
          </button>
        </div>

        {/* Topic View */}
        {viewMode === 'topic' && (
          <>
            {/* Category Filter */}
        <div className="category-filter">
          <button
            className={selectedCategory === 'all' ? 'category-btn active' : 'category-btn'}
            onClick={() => setSelectedCategory('all')}
          >
            All Paths ({allPaths.length})
          </button>
          <button
            className={selectedCategory === 'strategy' ? 'category-btn active' : 'category-btn'}
            onClick={() => setSelectedCategory('strategy')}
          >
            🔭 Strategy ({pathCategories.strategy.length})
          </button>
          <button
            className={selectedCategory === 'risk' ? 'category-btn active' : 'category-btn'}
            onClick={() => setSelectedCategory('risk')}
          >
            🛡️ Risk ({pathCategories.risk.length})
          </button>
          <button
            className={selectedCategory === 'execution' ? 'category-btn active' : 'category-btn'}
            onClick={() => setSelectedCategory('execution')}
          >
            🚀 Execution ({pathCategories.execution.length})
          </button>
          <button
            className={selectedCategory === 'crosscutting' ? 'category-btn active' : 'category-btn'}
            onClick={() => setSelectedCategory('crosscutting')}
          >
            ⭐ Cross-Cutting ({pathCategories.crosscutting.length})
          </button>
        </div>

        {/* Results */}
        <div className="results-count">
          Showing {filteredPaths.length} {filteredPaths.length === 1 ? 'path' : 'paths'}
        </div>

        {/* Path Grid */}
        <div className="paths-grid">
          {filteredPaths.map(path => (
            <div
              key={path.id}
              className="path-card"
              onClick={() => navigate(`/path/${path.id}`)}
            >
              <div className="path-card-header">
                <span className="path-category">
                  {getCategoryIcon(path.id)} {getCategoryLabel(path.id)}
                </span>
                {path.difficulty && (
                  <span className={`path-difficulty ${path.difficulty}`}>
                    {path.difficulty}
                  </span>
                )}
              </div>

              <h3>{path.title}</h3>
              <p className="path-description">{path.description}</p>

              <div className="path-meta">
                <div className="path-meta-item">
                  <span className="meta-icon">📚</span>
                  <span>{path.cardIds.length} cards</span>
                </div>
                {path.duration && (
                  <div className="path-meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>{path.duration}</span>
                  </div>
                )}
              </div>

              {path.targetAudience && (
                <div className="path-audience">
                  <strong>For:</strong> {path.targetAudience}
                </div>
              )}

              <button className="btn-start-path">
                Start Path →
              </button>
            </div>
          ))}
        </div>
          </>
        )}

        {/* Lifecycle View */}
        {viewMode === 'lifecycle' && (
          <div className="lifecycle-view">
            <p className="lifecycle-intro">
              Find frameworks and paths based on where you are in your AI product journey.
            </p>
            <div className="lifecycle-stages">
              {lifecycleStages.map((stage) => (
                <div
                  key={stage.id}
                  className={`stage-accordion ${expandedStage === stage.id ? 'expanded' : ''}`}
                >
                  <button
                    className="stage-header"
                    onClick={() => toggleStage(stage.id)}
                  >
                    <div className="stage-header-left">
                      <span className="stage-icon">{stage.icon}</span>
                      <div className="stage-title-group">
                        <h3 className="stage-title">{stage.title}</h3>
                        <span className="stage-subtitle">{stage.subtitle}</span>
                      </div>
                    </div>
                    <div className="stage-header-right">
                      <span className="stage-count">
                        {stage.frameworks.length} frameworks • {stage.paths.length} paths
                      </span>
                      <span className="stage-chevron">
                        {expandedStage === stage.id ? '▼' : '▶'}
                      </span>
                    </div>
                  </button>

                  {expandedStage === stage.id && (
                    <div className="stage-content">
                      <p className="stage-description">{stage.description}</p>

                      <div className="stage-section">
                        <h4>Recommended Paths ({stage.paths.length})</h4>
                        <div className="path-list-lifecycle">
                          {stage.paths.map((path) => (
                            <button
                              key={path.id}
                              className="path-item-lifecycle"
                              onClick={() => navigate(`/path/${path.id}`)}
                            >
                              <span className="path-icon-lifecycle">🗺️</span>
                              <span className="path-title-lifecycle">{path.title}</span>
                              <span className="path-arrow-lifecycle">→</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="stage-section">
                        <h4>Key Frameworks ({stage.frameworks.length})</h4>
                        <div className="framework-list">
                          {stage.frameworks.map((framework) => (
                            <button
                              key={framework.id}
                              className="framework-item"
                              onClick={() => navigate(`/framework/${framework.id}`)}
                            >
                              <span className="framework-id">{framework.id}</span>
                              <span className="framework-title">{framework.title}</span>
                              <span className="framework-arrow">→</span>
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
