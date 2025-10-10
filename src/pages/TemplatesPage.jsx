import { useNavigate } from 'react-router-dom';
import { Calculator, FileText, Download, ExternalLink, Sparkles, Clock, Target } from 'lucide-react';

function TemplatesPage() {
  const navigate = useNavigate();

  const templates = [
    {
      id: 'roi-calculator',
      title: 'AI ROI Calculator',
      description: 'Build data-driven ROI models to justify AI investments to executives',
      type: 'interactive',
      icon: Calculator,
      color: 'from-blue-500 to-purple-600',
      timeToComplete: '15 minutes',
      cardId: 'STRAT-014',
      path: '/tools/roi-calculator',
      features: [
        'Calculate cost savings from time saved',
        'Project revenue impact from conversion lift',
        'Compare conservative, expected, and optimistic scenarios',
        'Export results to CSV for presentations'
      ]
    },
    {
      id: 'model-capability-mapping',
      title: 'Model Capability Mapping Template',
      description: 'Map AI model capabilities to product features and user needs',
      type: 'download',
      icon: FileText,
      color: 'from-emerald-500 to-teal-600',
      timeToComplete: '30-45 minutes',
      cardId: 'EXEC-002',
      downloadPath: '/templates/model-capability-mapping.md',
      features: [
        'Define user needs and success criteria',
        'Specify required AI capabilities',
        'Compare build vs. buy vs. API options',
        'Decision matrix with weighted scoring'
      ]
    },
    {
      id: 'business-case',
      title: 'AI Business Case Template',
      description: 'Complete business case template to secure AI project approval',
      type: 'download',
      icon: FileText,
      color: 'from-orange-500 to-red-600',
      timeToComplete: '2-4 hours',
      cardId: 'STRAT-008',
      downloadPath: '/templates/ai-business-case-template.md',
      features: [
        'Executive summary with ROI highlights',
        '3-year financial analysis with scenarios',
        'Risk assessment and mitigation strategies',
        'Implementation plan with milestones'
      ]
    }
  ];

  const handleTemplateAction = (template) => {
    if (template.type === 'interactive') {
      navigate(template.path);
    } else {
      // Download the file
      const link = document.createElement('a');
      link.href = template.downloadPath;
      link.download = template.downloadPath.split('/').pop(); // Get filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen py-16 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">Free Templates</span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready-to-Use AI PM Templates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Skip the blank page. Use these battle-tested templates to build business cases, calculate ROI, and scope AI features.
          </p>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Save Hours</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Pre-filled sections and examples so you're not starting from scratch
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Battle-Tested</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Used at Dell Technologies to ship AI to 100K+ users
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
              <Download className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Truly Free</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              No email required. No hidden upsells. Just download and use.
            </p>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="space-y-8">
          {templates.map((template) => {
            const Icon = template.icon;
            return (
              <div
                key={template.id}
                className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-gray-900 dark:hover:border-white transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Icon & Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 bg-gradient-to-br ${template.color} rounded-xl flex-shrink-0`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {template.title}
                          </h2>
                          {template.type === 'interactive' && (
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-bold rounded-full uppercase">
                              Interactive
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {template.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {template.timeToComplete}
                          </span>
                          <span className="flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            {template.cardId}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-3">
                        What's Included
                      </h3>
                      <ul className="space-y-2">
                        {template.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                            <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex flex-col justify-between">
                    <div className="space-y-3">
                      <button
                        onClick={() => handleTemplateAction(template)}
                        className="w-full bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                      >
                        {template.type === 'interactive' ? (
                          <>
                            <ExternalLink className="w-5 h-5" />
                            Open Tool
                          </>
                        ) : (
                          <>
                            <Download className="w-5 h-5" />
                            Download Template
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => navigate(`/framework/${template.cardId}`)}
                        className="w-full bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold border-2 border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white transition-colors"
                      >
                        View Framework Card
                      </button>
                    </div>

                    {template.type === 'download' && (
                      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          <strong>Format:</strong> Markdown (.md)<br />
                          <strong>Compatible with:</strong> Notion, Obsidian, VS Code, any text editor
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming Soon */}
        <div className="mt-16 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            More Templates Coming Soon
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We're building templates for PRDs, technical specs, testing checklists, and more. Check back soon.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <span className="text-gray-500 dark:text-gray-400 text-sm">🎯 AI PRD Template</span>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <span className="text-gray-500 dark:text-gray-400 text-sm">✅ Testing Checklist</span>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <span className="text-gray-500 dark:text-gray-400 text-sm">📊 Metrics Dashboard</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Want the frameworks behind these templates?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Explore 156 tactical frameworks used at Dell Technologies
          </p>
          <button
            onClick={() => navigate('/browse')}
            className="bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Browse All Frameworks →
          </button>
        </div>
      </div>
    </div>
  );
}

export default TemplatesPage;
