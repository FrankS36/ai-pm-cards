import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, Copy, Check, Bot, ExternalLink } from 'lucide-react';

const agents = [
  {
    id: 'ai-roi-calculator',
    name: 'ROI Calculator',
    icon: '💰',
    description: 'Build data-driven business cases that get budget approved. 3-scenario analysis with conservative estimates that CFOs trust.',
    useCase: 'Use when you need to justify AI investments to executives with rigorous financial projections and sensitivity analysis',
    timeToValue: '2 hours',
    examples: [
      'Building ROI model for AI email classification',
      'Justifying cost of AI search feature',
      'Quantifying value of recommendation engine'
    ],
    tags: ['ROI', 'Business Case', 'Budget', 'Finance'],
    relatedPaths: [
      { id: 'first-business-case', title: 'Get Your AI Budget Approved' },
      { id: 'pricing-ai-product', title: 'Price Your AI Product' }
    ],
    fileName: 'ai-roi-calculator.md'
  },
  {
    id: 'ai-risk-auditor',
    name: 'Risk Auditor',
    icon: '🛡️',
    description: 'Comprehensive pre-launch risk audits across model performance, data privacy, bias, security, and compliance.',
    useCase: 'Use before launching AI features to identify safety, compliance, and reputational risks with actionable mitigation plans',
    timeToValue: '1 afternoon',
    examples: [
      'Pre-launch risk assessment for content moderation',
      'GDPR and AI Act compliance review',
      'Bias audit for hiring AI'
    ],
    tags: ['Risk', 'Compliance', 'Safety', 'Ethics', 'GDPR'],
    relatedPaths: [
      { id: 'prevent-failures', title: 'Launch Without Getting Fired' },
      { id: 'compliance-ethics', title: 'Navigate Compliance & Ethics' }
    ],
    fileName: 'ai-risk-auditor.md'
  },
  {
    id: 'ai-pm-value-scout',
    name: 'Value Scout',
    icon: '🔍',
    description: 'Competitive intelligence and positioning analysis. Understand what competitors are doing and how to differentiate.',
    useCase: 'Use when you need to analyze market landscape, competitive positioning, or value proposition design',
    timeToValue: 'Minutes',
    examples: [
      'Competitive analysis for AI chatbot launch',
      'Positioning strategy for ML feature',
      'Value hierarchy assessment for product'
    ],
    tags: ['Strategy', 'Competitive Intelligence', 'Positioning', 'Market Analysis'],
    relatedPaths: [
      { id: 'concept-to-strategy', title: 'Stop Stalling on Your AI Idea' },
      { id: 'choosing-ai-approach', title: 'Choose the Right AI Approach' }
    ],
    fileName: 'ai-pm-value-scout.md'
  },
  {
    id: 'ui-ux-design-auditor',
    name: 'UX Auditor',
    icon: '✨',
    description: 'Comprehensive UX/UI analysis, accessibility audits, and design system evaluation with actionable recommendations.',
    useCase: 'Use when you need to evaluate user experience, identify friction points, or improve AI product design',
    timeToValue: '1 hour',
    examples: [
      'UX audit for AI recommendation interface',
      'Accessibility review for ML-powered dashboard',
      'Design system evaluation for AI chatbot'
    ],
    tags: ['UX', 'UI', 'Design', 'Accessibility', 'Usability'],
    relatedPaths: [
      { id: 'ai-ux-design', title: 'Design AI UX That Users Trust' },
      { id: 'building-trust', title: 'Build User Trust in AI' }
    ],
    fileName: 'ui-ux-design-auditor.md'
  },
  {
    id: 'ai-prd-writer',
    name: 'PRD Writer',
    icon: '📝',
    description: 'Write comprehensive Product Requirement Documents (PRDs) for AI-powered features with success criteria, failure modes, edge cases.',
    useCase: 'Use when you need to spec out AI features with all the AI-specific considerations (model performance, graceful degradation, edge cases)',
    timeToValue: '2-3 hours',
    examples: [
      'Writing a PRD for smart email categorization',
      'Spec\'ing AI-powered search improvements',
      'Documenting AI recommendation engine requirements'
    ],
    tags: ['PRD', 'Requirements', 'Documentation', 'Specifications'],
    relatedPaths: [
      { id: 'scoping-first-feature', title: 'Ship Your First AI Feature' },
      { id: 'model-to-production', title: 'Get Your Model Into Production' }
    ],
    fileName: 'ai-prd-writer.md'
  },
  {
    id: 'ai-success-metrics',
    name: 'Success Metrics Designer',
    icon: '📊',
    description: 'Define comprehensive success metrics and monitoring plans for AI features across model performance, user experience, and business impact.',
    useCase: 'Use when you need to define what success looks like for AI features with measurable KPIs, thresholds, and dashboards',
    timeToValue: '1-2 hours',
    examples: [
      'Defining metrics for recommendation engine',
      'Creating monitoring dashboard for AI chatbot',
      'Setting success criteria for AI search'
    ],
    tags: ['Metrics', 'KPIs', 'Monitoring', 'Analytics'],
    relatedPaths: [
      { id: 'launching-safely', title: 'Launch Safely with Monitoring' },
      { id: 'fixing-underperforming', title: 'Fix Underperforming AI' }
    ],
    fileName: 'ai-success-metrics.md'
  },
  {
    id: 'ai-pm-card-generator',
    name: 'Framework Generator',
    icon: '🃏',
    description: 'Generate new tactical framework cards for your team\'s specific AI PM challenges and processes.',
    useCase: 'Use when you need to document your team\'s unique AI PM processes or create custom frameworks',
    timeToValue: '30 minutes',
    examples: [
      'Creating framework for team\'s model review process',
      'Documenting AI feature prioritization approach',
      'Building custom risk assessment checklist'
    ],
    tags: ['Frameworks', 'Documentation', 'Process', 'Templates'],
    relatedPaths: [
      { id: 'end-to-end-launch', title: 'Your Complete Launch Checklist' },
      { id: 'enterprise-guide', title: 'Enterprise AI Product Guide' }
    ],
    fileName: 'ai-pm-card-generator.md'
  }
];

function AgentsPage() {
  const navigate = useNavigate();
  const [copiedAgent, setCopiedAgent] = useState(null);
  const [expandedAgent, setExpandedAgent] = useState(null);

  const handleCopy = async (agentId, fileName) => {
    try {
      // In production, this would fetch the actual file content
      // For now, we'll just copy installation instructions
      const installText = `# How to Install ${agents.find(a => a.id === agentId).name}

1. Download ${fileName} from: https://github.com/yourusername/ai-pm-cards/tree/main/.claude/agents/${fileName}
2. Create a .claude/agents/ directory in your project root if it doesn't exist
3. Copy ${fileName} into .claude/agents/
4. The agent will now be available in Claude Code

To use: Just ask Claude Code to use the agent by name, or Claude will suggest it when appropriate.`;

      await navigator.clipboard.writeText(installText);
      setCopiedAgent(agentId);
      setTimeout(() => setCopiedAgent(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = (fileName) => {
    // In production, this would trigger actual file download
    window.open(`https://github.com/yourusername/ai-pm-cards/raw/main/.claude/agents/${fileName}`, '_blank');
  };

  return (
    <div className="min-h-screen py-16 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
            <Bot className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">Claude Code Agents</span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Shareable AI PM Agents
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Production-ready Claude Code agents that help you write PRDs, calculate ROI, audit risks, and define metrics for AI features. Copy them to your .claude/agents/ folder and start using them immediately.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://docs.claude.com/en/docs/claude-code/agents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Learn About Claude Code Agents
            </a>
            <a
              href="https://github.com/yourusername/ai-pm-cards/tree/main/.claude/agents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-black text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* What Are Claude Code Agents? */}
        <div className="mb-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            What Are Claude Code Agents?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Claude Code agents are specialized AI assistants that help you with specific tasks. Think of them as expert consultants you can summon instantly—an AI PRD writer, an ROI calculator, a risk auditor, or a metrics designer.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            These agents are based on the 156 tactical frameworks in this site. They're built from real experience launching AI products at Dell Technologies and contain the same systematic approaches, templates, and checklists.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="space-y-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-900 dark:hover:border-white transition-all"
            >
              {/* Agent Header */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">{agent.icon}</span>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {agent.name}
                      </h2>
                      <span className="ml-auto text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-full">
                        ⏱️ {agent.timeToValue}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                      {agent.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {agent.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Use Case */}
                    <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded">
                      <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1">
                        When to Use
                      </p>
                      <p className="text-sm text-blue-800 dark:text-blue-400">
                        {agent.useCase}
                      </p>
                    </div>

                    {/* Examples Toggle */}
                    <button
                      onClick={() => setExpandedAgent(expandedAgent === agent.id ? null : agent.id)}
                      className="text-sm font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors mb-4"
                    >
                      {expandedAgent === agent.id ? '▼' : '▶'} Example Use Cases
                    </button>

                    {expandedAgent === agent.id && (
                      <ul className="ml-6 space-y-2 mb-6">
                        {agent.examples.map((example, idx) => (
                          <li key={idx} className="text-gray-700 dark:text-gray-300 list-disc">
                            {example}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Related Learning Paths */}
                    {agent.relatedPaths && agent.relatedPaths.length > 0 && (
                      <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500 rounded">
                        <p className="text-sm font-semibold text-purple-900 dark:text-purple-300 mb-3">
                          🗺️ Related Learning Paths
                        </p>
                        <div className="space-y-2">
                          {agent.relatedPaths.map((path) => (
                            <button
                              key={path.id}
                              onClick={() => navigate(`/path/${path.id}`)}
                              className="block w-full text-left px-3 py-2 text-sm text-purple-800 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded transition-colors"
                            >
                              → {path.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 flex-wrap">
                  <button
                    onClick={() => handleCopy(agent.id, agent.fileName)}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    {copiedAgent === agent.id ? (
                      <>
                        <Check className="w-5 h-5" />
                        Copied Instructions!
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        Copy Install Instructions
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleDownload(agent.fileName)}
                    className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-black text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-800 rounded-lg font-bold hover:border-gray-900 dark:hover:border-white transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Download Agent
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Installation Instructions */}
        <div className="mt-16 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            How to Install Agents
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Step 1: Create Agent Directory
              </h3>
              <div className="bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-sm text-gray-100 mb-2">
                mkdir -p .claude/agents
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Create a .claude/agents/ folder in your project root if it doesn't exist yet
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Step 2: Download Agent Files
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Click "Download Agent" above or clone the repo:
              </p>
              <div className="bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-sm text-gray-100 mb-2">
                git clone https://github.com/yourusername/ai-pm-cards.git<br />
                cp ai-pm-cards/.claude/agents/*.md .claude/agents/
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Step 3: Use the Agent
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Open Claude Code and ask:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500 mb-2">
                <p className="text-gray-900 dark:text-gray-100 italic">
                  "Use the ai-prd-writer agent to help me write a PRD for an AI email classifier"
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Claude will automatically detect and use the agent, or suggest it when appropriate
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl border-2 border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Want the Frameworks Behind These Agents?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Each agent is based on battle-tested frameworks from Dell Technologies. Explore 156 tactical frameworks with real-world applications.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => window.location.href = '/browse'}
              className="bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Browse All Frameworks →
            </button>
            <button
              onClick={() => window.location.href = '/prompts'}
              className="bg-white dark:bg-black text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              View AI Prompts →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentsPage;
