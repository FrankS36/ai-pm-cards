import { useNavigate } from 'react-router-dom';

function DiagnosticQ2Problem() {
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
          <h2 className="text-4xl text-gray-900 dark:text-white mt-4 font-bold max-md:text-[2rem]">What problem are you trying to solve?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-md:text-base">Select the statement that best matches your situation</p>
        </div>

        <div className="space-y-4 max-w-[700px] mx-auto">
          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/fixing-underperforming')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"Our AI model isn't performing well or is degrading"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Poor accuracy, model drift, overfitting, data quality issues</p>
          </button>

          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/prevent-failures')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"I'm worried about AI failures before we launch"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Bias detection, harmful outputs, edge cases, fallback mechanisms</p>
          </button>

          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/building-trust')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"Users don't trust our AI or its recommendations"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">User skepticism, transparency, explainability, error communication</p>
          </button>

          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/compliance-ethics')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"I need to navigate regulations and ethical requirements"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">GDPR, fairness auditing, audit trails, responsible AI documentation</p>
          </button>

          <button
            className="w-full text-left p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => navigate('/path/cost-performance')}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"AI costs are too high or performance is too slow"</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">Unit economics, cost containment, latency optimization, efficiency</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiagnosticQ2Problem;
