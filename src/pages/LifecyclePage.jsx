import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen py-8 pb-16">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl max-md:text-[2rem] font-extrabold bg-gradient-to-br from-primary to-purple bg-clip-text text-transparent mb-4">The AI Product Lifecycle</h1>
          <p className="text-xl max-md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Where are you in your AI journey? Jump to your stage to see relevant frameworks and paths.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 italic">
            Your journey isn't linear—use this to quickly find what you need right now.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between py-5 px-6 bg-transparent border-none cursor-pointer text-left transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => toggleStage(stage.id)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{stage.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white m-0">{stage.title}</h2>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{stage.subtitle}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400 max-md:hidden">
                    {stage.frameworks.length} frameworks • {stage.paths.length} paths
                  </span>
                  <span className="text-primary text-lg">
                    {expandedStage === stage.id ? '▼' : '▶'}
                  </span>
                </div>
              </button>

              {expandedStage === stage.id && (
                <div className="p-6 pt-0 animate-slide-down">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{stage.description}</p>

                  <div className="mb-6">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Key Frameworks ({stage.frameworks.length})</h3>
                    <div className="space-y-2">
                      {stage.frameworks.map((framework) => (
                        <button
                          key={framework.id}
                          className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-left cursor-pointer transition-all duration-200 hover:border-primary hover:bg-gray-100 dark:hover:bg-gray-700 hover:translate-x-1"
                          onClick={() => navigate(`/framework/${framework.id}`)}
                        >
                          <span className="text-xs font-mono text-gray-500 dark:text-gray-400 min-w-[80px]">{framework.id}</span>
                          <span className="flex-1 text-sm font-medium text-gray-900 dark:text-white mx-3">{framework.title}</span>
                          <span className="text-primary text-sm">→</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Recommended Paths ({stage.paths.length})</h3>
                    <div className="space-y-2">
                      {stage.paths.map((path) => (
                        <button
                          key={path.id}
                          className="w-full flex items-center justify-between py-3 px-4 bg-gradient-to-br from-primary/[0.05] to-purple/[0.05] border-2 border-primary/20 dark:border-primary/30 rounded-lg text-left cursor-pointer transition-all duration-200 hover:border-primary hover:translate-x-1"
                          onClick={() => navigate(`/path/${path.id}`)}
                        >
                          <span className="text-lg mr-3">🗺️</span>
                          <span className="flex-1 text-sm font-semibold text-gray-900 dark:text-white">{path.title}</span>
                          <span className="text-primary text-sm">→</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {stage.template && (
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Downloadable Template</h3>
                      <button
                        className="w-full flex items-center justify-between py-3 px-4 bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-700 rounded-lg text-left cursor-pointer transition-all duration-200 hover:border-emerald-600 hover:translate-x-1"
                        onClick={() => navigate('/resources')}
                      >
                        <span className="text-lg mr-3">📄</span>
                        <span className="flex-1 text-sm font-semibold text-gray-900 dark:text-white">{stage.template}</span>
                        <span className="text-emerald-600 dark:text-emerald-400 text-sm">→</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center py-12 px-8 bg-gradient-to-br from-primary/[0.05] to-purple/[0.05] rounded-[20px] border-2 border-gray-200 dark:border-gray-700 max-md:py-8 max-md:px-6">
          <h2 className="text-[2rem] max-md:text-2xl font-bold text-gray-900 dark:text-white mb-4">Not sure where to start?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-md:text-base">Take our 30-second diagnostic to get matched to the right frameworks.</p>
          <button
            className="px-8 py-4 rounded-xl text-base font-semibold bg-gradient-to-br from-primary to-purple text-white border-none cursor-pointer transition-all duration-200 hover:from-primary-light hover:to-purple-light hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(30,58,138,0.3)]"
            onClick={() => navigate('/start')}
          >
            Find Your Framework →
          </button>
        </div>
      </div>
    </div>
  );
}

export default LifecyclePage;
