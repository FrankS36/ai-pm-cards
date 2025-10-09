import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResourcesPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('checklist');
  const [checklistProgress, setChecklistProgress] = useState({});
  const [decisionTreeStep, setDecisionTreeStep] = useState(0);
  const [decisionTreeResult, setDecisionTreeResult] = useState(null);
  const [copiedTemplate, setCopiedTemplate] = useState(null);

  // Launch Readiness Checklist Items
  const checklistItems = [
    {
      category: 'Pre-Launch Risk Assessment',
      items: [
        { id: 'risk-categories', text: 'Reviewed all 7 AI risk categories (model, data, UX, ops, legal, security, business)', framework: 'RISK-001' },
        { id: 'bias-testing', text: 'Completed bias testing across key demographic groups', framework: 'RISK-007' },
        { id: 'performance-thresholds', text: 'Defined minimum acceptable performance thresholds', framework: 'RISK-011' },
        { id: 'failure-modes', text: 'Documented all failure modes and mitigation plans', framework: 'RISK-019' },
      ]
    },
    {
      category: 'Production Readiness',
      items: [
        { id: 'phased-rollout', text: 'Planned phased rollout strategy (1% → 5% → 25% → 100%)', framework: 'EXEC-039' },
        { id: 'monitoring', text: 'Set up real-time monitoring and alerting', framework: 'EXEC-040' },
        { id: 'rollback-plan', text: 'Created rollback plan for critical failures', framework: 'EXEC-041' },
        { id: 'load-testing', text: 'Completed load testing at 3x expected traffic', framework: 'EXEC-044' },
      ]
    },
    {
      category: 'User Experience',
      items: [
        { id: 'trust-design', text: 'Designed trust indicators and transparency features', framework: 'EXEC-024' },
        { id: 'error-states', text: 'Designed all error states and fallback UX', framework: 'EXEC-017' },
        { id: 'user-testing', text: 'Completed user testing with diverse user groups', framework: 'EXEC-006' },
      ]
    },
    {
      category: 'Stakeholder Alignment',
      items: [
        { id: 'exec-signoff', text: 'Obtained executive sign-off on launch plan and risk assessment', framework: 'STRAT-008' },
        { id: 'legal-review', text: 'Completed legal and compliance review', framework: 'RISK-023' },
        { id: 'support-trained', text: 'Trained support team on common issues and escalation paths', framework: 'EXEC-045' },
        { id: 'comms-plan', text: 'Finalized launch communication plan', framework: 'STRAT-017' },
      ]
    },
  ];

  // Decision Tree Data
  const decisionTree = [
    {
      question: "Can you clearly articulate the user problem you're solving?",
      yes: 1,
      no: 'stop',
      noMessage: "Stop. Go back to user research. AI won't save a poorly understood problem.",
      noFramework: 'STRAT-026'
    },
    {
      question: "Can this problem be solved WITHOUT AI?",
      yes: 'stop',
      no: 2,
      yesMessage: "Consider the simpler solution first. AI adds complexity, cost, and risk. Only use it when necessary.",
      yesFramework: 'STRAT-027'
    },
    {
      question: "Is your success metric clear and measurable?",
      yes: 3,
      no: 'stop',
      noMessage: "Define your metric first. Without it, you can't validate if the AI is working.",
      noFramework: 'STRAT-008'
    },
    {
      question: "Do you have (or can you get) the training data you need?",
      yes: 4,
      no: 'stop',
      noMessage: "Data is the foundation. Without quality training data, your model will fail. Explore data acquisition options first.",
      noFramework: 'STRAT-015'
    },
    {
      question: "Can you tolerate occasional errors? (Even 95% accuracy means 1 in 20 failures)",
      yes: 5,
      no: 'stop',
      noMessage: "AI is probabilistic, not deterministic. If your use case requires 100% accuracy, AI isn't the right tool.",
      noFramework: 'RISK-001'
    },
    {
      question: "Do you have budget and resources for ongoing monitoring and maintenance?",
      yes: 'build',
      no: 'stop',
      buildMessage: "✅ You're ready to build! Start with STRAT-001 (Map Model Capabilities) to scope your feature.",
      buildFramework: 'STRAT-001',
      noMessage: "AI products require continuous monitoring, retraining, and maintenance. Budget for 20-30% of development cost annually.",
      noFramework: 'EXEC-040'
    },
  ];

  // Communication Templates
  const communicationTemplates = [
    {
      id: 'delay-launch',
      title: 'Delaying Launch Due to Quality Issues',
      subject: 'AI Feature Launch Timeline Update',
      body: `Hi [Name],

I wanted to update you on the [Feature Name] launch timeline.

During our final testing phase, we discovered [specific issue: model accuracy below threshold / bias in edge cases / performance degradation under load]. Our current metrics show [specific numbers/data].

Given our commitment to launching a high-quality experience, we're pushing the launch date from [original date] to [new date]. This gives us time to:

1. [Specific fix needed]
2. [Specific fix needed]
3. Complete additional testing

While this is disappointing, launching with known issues would risk [user impact / brand damage / regulatory issues].

I'll send weekly updates on our progress. Happy to discuss in more detail.

[Your Name]`,
      frameworks: ['RISK-019', 'EXEC-041'],
      context: 'When quality metrics don\'t meet launch thresholds'
    },
    {
      id: 'explain-accuracy',
      title: 'Explaining Why 85% Accuracy Is/Isn\'t Good Enough',
      subject: '[Feature Name] Performance Expectations',
      body: `Hi [Name],

I wanted to provide context on the [Feature Name] model performance numbers we discussed.

Our model is currently achieving [X]% accuracy. Here's what that means in practice:

✅ Good news: This meets/exceeds industry benchmarks for [use case type]
✅ For users, this means [positive outcome X out of Y times]

⚠️ Important context:
- [X]% accuracy means [Y] incorrect predictions per [Z] users
- For our use case, this is [acceptable/concerning] because [specific reason]
- We're mitigating errors by [specific UX strategy]

Comparable products: [Competitor A] at [X]%, [Competitor B] at [Y]%

For our launch criteria, we set the bar at [threshold]% because [reasoning based on user impact].

Let me know if you'd like to discuss trade-offs between accuracy and [speed/cost/coverage].

[Your Name]`,
      frameworks: ['RISK-011', 'EXEC-004'],
      context: 'When stakeholders question model performance'
    },
    {
      id: 'budget-request',
      title: 'Requesting Additional Budget for AI Infrastructure',
      subject: 'Additional Budget Request: [Feature Name] Infrastructure',
      body: `Hi [Name],

I'm requesting an additional [$X] for [Feature Name] infrastructure to ensure we can scale reliably.

What changed:
Our initial estimates assumed [original assumption]. In production testing, we learned [new information about traffic/latency/costs].

Breakdown:
- API costs: [$X] (increased due to [reason])
- Infrastructure: [$X] (needed for [specific capability])
- Monitoring tools: [$X] (critical for catching issues before users)

Without this budget:
❌ Performance will degrade at [X] concurrent users
❌ Response time will exceed [X]s (vs. target of [Y]s)
❌ We risk [specific failure mode]

Timeline: Need decision by [date] to avoid launch delays.

I've explored cost optimization options ([specific strategies tried]) but these are the minimums for our target performance.

Happy to walk through the numbers in detail.

[Your Name]`,
      frameworks: ['STRAT-007', 'STRAT-016'],
      context: 'When actual AI costs exceed initial estimates'
    },
    {
      id: 'bias-found',
      title: 'Reporting Bias Discovered in Testing',
      subject: 'URGENT: Bias Issue Found in [Feature Name]',
      body: `Hi [Name],

We discovered a bias issue in [Feature Name] that requires immediate attention.

What we found:
The model performs significantly worse for [demographic group / edge case]. Specifically:
- [Group A]: [X]% accuracy
- [Group B]: [Y]% accuracy (target: [Z]%)

Impact:
- Affects approximately [X]% of users
- Could result in [specific unfair outcome]
- Regulatory risk: [relevant regulations if applicable]

Root cause:
[Training data imbalance / feature engineering issue / other]

Our plan:
1. Pause rollout immediately ✅ (done)
2. [Specific remediation action] (ETA: [date])
3. Re-test across all groups (ETA: [date])
4. Resume phased launch (ETA: [date])

I take full responsibility for this escaping into testing. We're implementing [process change] to prevent this going forward.

Let's discuss next steps [today/this week].

[Your Name]`,
      frameworks: ['RISK-007', 'RISK-042'],
      context: 'When bias testing reveals fairness issues'
    },
    {
      id: 'pivot-from-ai',
      title: 'Recommending Non-AI Solution After Investigation',
      subject: 'Alternative Approach for [Feature Name]',
      body: `Hi [Name],

After investigating the AI approach for [Feature Name], I'm recommending we pursue a [non-AI alternative] instead.

Why the pivot:
Through our feasibility work, we learned:
- [Specific technical limitation / data constraint / accuracy ceiling]
- Cost would be [$X] vs. [$Y] for non-AI approach
- Time to acceptable quality: [X months] vs. [Y weeks]

What we'd lose:
- [AI capability that won't be possible]

What we'd gain:
✅ Launch [X weeks/months] sooner
✅ Predictable performance (no probabilistic errors)
✅ [X]% lower operating costs
✅ Simpler to maintain and troubleshoot

The non-AI approach will solve [X]% of the original problem, which covers the highest-value use cases.

I know this is different from our original plan, but I believe it's the right call for users and the business. Happy to walk through the analysis in detail.

[Your Name]`,
      frameworks: ['STRAT-027', 'STRAT-028'],
      context: 'When investigation reveals AI isn\'t the right solution'
    },
  ];

  const toggleChecklistItem = (id) => {
    setChecklistProgress(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getTotalProgress = () => {
    const totalItems = checklistItems.reduce((acc, cat) => acc + cat.items.length, 0);
    const completedItems = Object.values(checklistProgress).filter(Boolean).length;
    return Math.round((completedItems / totalItems) * 100);
  };

  const handleDecisionTreeAnswer = (answer) => {
    const currentNode = decisionTree[decisionTreeStep];
    const next = currentNode[answer];

    if (typeof next === 'number') {
      setDecisionTreeStep(next);
      setDecisionTreeResult(null);
    } else {
      // Reached an endpoint ('stop' or 'build')
      setDecisionTreeResult({
        type: next,
        message: next === 'build'
          ? currentNode.buildMessage
          : (answer === 'yes' ? currentNode.yesMessage : currentNode.noMessage),
        framework: next === 'build'
          ? currentNode.buildFramework
          : (answer === 'yes' ? currentNode.yesFramework : currentNode.noFramework)
      });
    }
  };

  const resetDecisionTree = () => {
    setDecisionTreeStep(0);
    setDecisionTreeResult(null);
  };

  const copyTemplate = (templateId, text) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(templateId);
    setTimeout(() => setCopiedTemplate(null), 2000);
  };

  return (
    <div className="min-h-screen pb-12 bg-white dark:bg-black">
      <div className="max-w-[1400px] mx-auto px-20 max-md:px-6">
        {/* Header */}
        <div className="text-center mt-4 mb-8 md:mt-4 md:mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tactical Tools
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Interactive tools to apply the 156 frameworks to your actual work. No signup required.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-3 justify-center mb-12 flex-wrap">
          <button
            className={`px-5 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all border-2 ${
              activeTab === 'checklist'
                ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                : 'bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => setActiveTab('checklist')}
          >
            Launch Readiness Checklist
          </button>
          <button
            className={`px-5 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all border-2 ${
              activeTab === 'decision-tree'
                ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                : 'bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => setActiveTab('decision-tree')}
          >
            Should You Build This?
          </button>
          <button
            className={`px-5 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all border-2 ${
              activeTab === 'templates'
                ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                : 'bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => setActiveTab('templates')}
          >
            Communication Templates
          </button>
        </div>

        {/* Launch Readiness Checklist */}
        {activeTab === 'checklist' && (
          <div>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Launch Readiness Checklist
                </h2>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {getTotalProgress()}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Complete</div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Use this checklist before launching any AI feature. Each item links to the relevant framework for details.
              </p>
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-900 dark:bg-white transition-all duration-500"
                  style={{ width: `${getTotalProgress()}%` }}
                />
              </div>
            </div>

            <div className="space-y-8">
              {checklistItems.map((category, catIndex) => (
                <div key={catIndex}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-4 transition-all hover:border-gray-900 dark:hover:border-white"
                      >
                        <div className="flex items-start gap-4">
                          <input
                            type="checkbox"
                            checked={checklistProgress[item.id] || false}
                            onChange={() => toggleChecklistItem(item.id)}
                            className="mt-1 w-5 h-5 cursor-pointer"
                          />
                          <div className="flex-1">
                            <p className={`text-base leading-relaxed ${
                              checklistProgress[item.id]
                                ? 'text-gray-500 dark:text-gray-500 line-through'
                                : 'text-gray-900 dark:text-white'
                            }`}>
                              {item.text}
                            </p>
                            <button
                              onClick={() => navigate(`/framework/${item.framework}`)}
                              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white underline mt-2"
                            >
                              View {item.framework} →
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Decision Tree */}
        {activeTab === 'decision-tree' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Should You Build This AI Feature?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Answer 6 questions to find out if AI is the right solution. Based on the "Is AI Even the Right Solution?" learning path.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-8">
              {!decisionTreeResult ? (
                <div>
                  <div className="mb-6">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Question {decisionTreeStep + 1} of {decisionTree.length}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      {decisionTree[decisionTreeStep].question}
                    </h3>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => handleDecisionTreeAnswer('yes')}
                      className="flex-1 px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-black border-2 border-gray-900 dark:border-white rounded-lg text-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleDecisionTreeAnswer('no')}
                      className="flex-1 px-6 py-4 bg-white dark:bg-black text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white rounded-lg text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
                    >
                      No
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-6">
                    {decisionTreeResult.type === 'build' ? '✅' : '⚠️'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {decisionTreeResult.message}
                  </h3>
                  <button
                    onClick={() => navigate(`/framework/${decisionTreeResult.framework}`)}
                    className="text-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white underline mb-6 inline-block"
                  >
                    View {decisionTreeResult.framework} →
                  </button>
                  <div>
                    <button
                      onClick={resetDecisionTree}
                      className="px-6 py-3 bg-white dark:bg-black text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white rounded-lg text-base font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
                    >
                      Start Over
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Communication Templates */}
        {activeTab === 'templates' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Stakeholder Communication Templates
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Copy-paste email templates for the toughest PM conversations. Customize with your specifics.
              </p>
            </div>

            <div className="space-y-6">
              {communicationTemplates.map((template) => (
                <div
                  key={template.id}
                  className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {template.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {template.context}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {template.frameworks.map((fw) => (
                          <button
                            key={fw}
                            onClick={() => navigate(`/framework/${fw}`)}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                          >
                            {fw}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => copyTemplate(template.id, `Subject: ${template.subject}\n\n${template.body}`)}
                      className="ml-4 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black border-2 border-gray-900 dark:border-white rounded-lg text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all whitespace-nowrap"
                    >
                      {copiedTemplate === template.id ? '✓ Copied!' : 'Copy Template'}
                    </button>
                  </div>

                  <div className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded p-4">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Subject: {template.subject}
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono">
                      {template.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResourcesPage;
