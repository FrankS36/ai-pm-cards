import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cardDataJson from '../data/cardData.json';
import './PathsDirectory.css';

function PathsDirectory() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  return (
    <div className="paths-directory">
      <div className="container">
        <div className="paths-header">
          <button className="btn-back" onClick={() => navigate('/')}>
            ← Back
          </button>
          <h2>Journey Paths</h2>
          <p className="paths-subtitle">20 curated paths to guide you through common AI PM scenarios</p>
        </div>

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
      </div>
    </div>
  );
}

export default PathsDirectory;
