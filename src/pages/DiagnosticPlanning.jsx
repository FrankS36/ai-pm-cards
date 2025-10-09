import { useNavigate } from 'react-router-dom';

function DiagnosticPlanning() {
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
          <h2 className="text-4xl text-gray-900 dark:text-white mt-4 font-bold max-md:text-[2rem]">What planning challenge are you facing?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-md:text-base">Select the statement that best matches your situation</p>
        </div>

        <div className="space-y-4 max-w-[700px] mx-auto">
          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/problem-discovery')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"I need to validate I'm solving the right problem"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Problem statements, customer discovery, JTBD, validation before building</p>
          </button>

          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/first-business-case')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"I need to convince leadership to invest in AI"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Building ROI projections, quantifying benefits, securing budget</p>
          </button>

          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/choosing-ai-approach')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"I'm deciding whether to build, buy, or use APIs"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Evaluating technical feasibility and architectural decisions</p>
          </button>

          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/roadmap-planning')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"I need to create a 6-12 month AI roadmap"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Prioritizing features, sequencing work, planning tech debt</p>
          </button>

          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/pricing-ai-product')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"I'm figuring out how to price and monetize AI"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Pricing strategy, packaging, cost containment, unit economics</p>
          </button>

          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/enterprise-guide')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"I'm navigating enterprise AI complexity"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Large org constraints, procurement, compliance, change management</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiagnosticPlanning;
