import { useNavigate } from 'react-router-dom';

function DiagnosticBuilding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-12 relative">
          <button
            className="absolute left-0 top-0 bg-transparent border-none text-gray-600 dark:text-gray-400 text-base cursor-pointer py-2 px-4 transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
            onClick={() => navigate('/start')}
          >
            ← Back
          </button>
          <h2 className="text-4xl text-gray-900 dark:text-white mt-4 font-bold max-md:text-[2rem]">What execution challenge are you facing?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-md:text-base">Select the statement that best matches your situation</p>
        </div>

        <div className="space-y-4 max-w-[700px] mx-auto">
          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/scoping-first-feature')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"I need to write specs or requirements for an AI feature"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Product specs, success metrics, acceptance criteria, edge cases</p>
          </button>

          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/data-pipelines')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"I'm setting up data infrastructure and pipelines"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Data collection, labeling workflows, versioning, quality validation</p>
          </button>

          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/model-to-production')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"I'm taking AI from prototype to production"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Model iteration, testing, deployment, monitoring, feedback loops</p>
          </button>

          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/ai-ux-design')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"I'm designing user experiences for AI features"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Loading states, errors, confidence scores, explanations, feedback</p>
          </button>

          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/testing-qa')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"I need to establish AI testing practices"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Test strategy, edge cases, A/B testing, shadow mode, fairness testing</p>
          </button>

          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/launching-safely')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"I'm preparing to launch AI to production"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Phased rollouts, monitoring dashboards, incident response, fallbacks</p>
          </button>

          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/end-to-end-launch')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"I'm launching a new AI product from scratch"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Complete end-to-end journey from concept through production (8-12 weeks)</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiagnosticBuilding;
