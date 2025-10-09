import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LifecyclePage.css';

function LifecyclePage() {
  const navigate = useNavigate();
  const [expandedStage, setExpandedStage] = useState('discovery');

  const stages = [
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
      template: 'AI Opportunity Canvas',
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
        { id: 'STRAT-015', title: 'Budget for AI Projects' },
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
        { id: 'EXEC-008', title: 'Design Training Pipeline' },
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
        { id: 'RISK-045', title: 'Handle Model Failures' },
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
        { id: 'EXEC-050', title: 'Scale AI Infrastructure' },
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
    <div className="lifecycle-page">
      <div className="container">
        <div className="lifecycle-header">
          <h1>The AI Product Lifecycle</h1>
          <p className="lifecycle-intro">
            Where are you in your AI journey? Jump to your stage to see relevant frameworks and paths.
          </p>
          <p className="lifecycle-note">
            Your journey isn't linear—use this to quickly find what you need right now.
          </p>
        </div>

        <div className="lifecycle-stages">
          {stages.map((stage) => (
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
                    <h2 className="stage-title">{stage.title}</h2>
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
                    <h3>Key Frameworks ({stage.frameworks.length})</h3>
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

                  <div className="stage-section">
                    <h3>Recommended Paths ({stage.paths.length})</h3>
                    <div className="path-list">
                      {stage.paths.map((path) => (
                        <button
                          key={path.id}
                          className="path-item"
                          onClick={() => navigate(`/path/${path.id}`)}
                        >
                          <span className="path-icon">🗺️</span>
                          <span className="path-title">{path.title}</span>
                          <span className="path-arrow">→</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {stage.template && (
                    <div className="stage-section">
                      <h3>Downloadable Template</h3>
                      <button
                        className="template-item"
                        onClick={() => navigate('/resources')}
                      >
                        <span className="template-icon">📄</span>
                        <span className="template-title">{stage.template}</span>
                        <span className="template-arrow">→</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="lifecycle-footer">
          <div className="lifecycle-cta">
            <h2>Not sure where to start?</h2>
            <p>Take our 30-second diagnostic to get matched to the right frameworks.</p>
            <button
              className="btn-cta-primary"
              onClick={() => navigate('/start')}
            >
              Find Your Framework →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifecyclePage;
