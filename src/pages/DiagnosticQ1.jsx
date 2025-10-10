import { useNavigate } from 'react-router-dom';

function DiagnosticQ1() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-12 relative">
          <button
            className="absolute left-0 top-0 bg-transparent border-none text-gray-600 dark:text-gray-300 text-base cursor-pointer py-2 px-4 transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
            onClick={() => navigate('/')}
          >
            ← Back
          </button>
          <h2 className="text-4xl text-gray-900 dark:text-white mt-4 font-bold max-md:text-[2rem]">Find Your Framework in 30 Seconds</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 max-md:text-base">Tell us where you're stuck and we'll match you to the right tactical frameworks. No theory, just what worked in production.</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 max-w-[800px] mx-auto mb-8">
          <div
            className="relative bg-gradient-to-br from-primary/[0.05] to-purple/[0.05] py-12 px-8 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] cursor-pointer transition-all duration-200 text-center border-2 border-purple before:content-['⭐_Start_Here'] before:absolute before:top-4 before:right-4 before:bg-gradient-to-br before:from-primary before:to-purple before:text-white before:py-1 before:px-3 before:rounded-xl before:text-xs before:font-semibold hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            onClick={() => navigate('/path/problem-discovery')}
          >
            <div className="text-6xl mb-6">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Is AI Even the Right Solution?</h3>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">Validate you're solving a real problem before building anything</p>
          </div>

          <div
            className="bg-white dark:bg-gray-900 py-12 px-8 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] cursor-pointer transition-all duration-200 text-center border-2 border-transparent hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-primary"
            onClick={() => navigate('/start/planning')}
          >
            <div className="text-6xl mb-6">📋</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Planning an AI initiative</h3>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">Strategy, feasibility assessment, roadmap, or business case</p>
          </div>

          <div
            className="bg-white dark:bg-gray-900 py-12 px-8 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] cursor-pointer transition-all duration-200 text-center border-2 border-transparent hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-primary"
            onClick={() => navigate('/start/building')}
          >
            <div className="text-6xl mb-6">🔨</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Building or launching AI</h3>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">Writing specs, testing, deploying, or going to production</p>
          </div>

          <div
            className="bg-white dark:bg-gray-900 py-12 px-8 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] cursor-pointer transition-all duration-200 text-center border-2 border-transparent hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-primary"
            onClick={() => navigate('/start/problem')}
          >
            <div className="text-6xl mb-6">🚨</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Solving a specific problem</h3>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">Performance issues, risks, trust, compliance, or fixing what's broken</p>
          </div>

          <div
            className="bg-white dark:bg-gray-900 py-12 px-8 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] cursor-pointer transition-all duration-200 text-center border-2 border-transparent hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-primary"
            onClick={() => navigate('/path/ai-pm-fundamentals')}
          >
            <div className="text-6xl mb-6">🌱</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">New to AI Product Management</h3>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">I'm learning the fundamentals or just getting started</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="text-primary dark:text-primary-light text-base underline transition-opacity duration-200 hover:opacity-70"
            onClick={(e) => { e.preventDefault(); navigate('/browse'); }}
          >
            I just want to explore all paths
          </a>
        </div>
      </div>
    </div>
  );
}

export default DiagnosticQ1;
