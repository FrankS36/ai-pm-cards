import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 py-24">

        {/* Hero Section */}
        <header className="mb-32">
          <div className="inline-block px-5 py-2 mb-12 border-3 border-black dark:border-white bg-yellow-300 dark:bg-yellow-400 -rotate-1 transform">
            <span className="text-sm font-mono uppercase tracking-[0.2em] text-black font-bold">Battle-Tested • Production-Ready</span>
          </div>

          <h1 className="text-[3.5rem] sm:text-7xl lg:text-8xl font-black mb-16 leading-[0.9] tracking-[-0.02em]">
            <span className="block text-black dark:text-white mb-3">156 FRAMEWORKS</span>
            <span className="block text-black dark:text-white mb-3">FOR SHIPPING</span>
            <span className="block mt-6 text-6xl sm:text-7xl lg:text-8xl bg-black dark:bg-white text-white dark:text-black px-6 py-4 inline-block -rotate-1 transform">
              AI PRODUCTS
            </span>
          </h1>

          <div className="max-w-3xl mb-16">
            <p className="text-2xl sm:text-3xl text-black dark:text-white leading-tight font-bold mb-8">
              From{' '}
              <mark className="bg-red-500 text-white px-3 py-1.5 font-black">8%</mark>
              {' '}to{' '}
              <mark className="bg-emerald-500 text-white px-3 py-1.5 font-black">47%</mark>
              {' '}adoption in 6 weeks at Dell Technologies.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              Real frameworks from shipping AI to 100K+ users. No theory, no courses—just what actually worked in production.
            </p>
          </div>

          <div className="flex items-center gap-5 mb-16">
            <div className="w-20 h-20 border-4 border-black dark:border-white bg-yellow-300 dark:bg-yellow-400 flex items-center justify-center">
              <span className="text-3xl font-black text-black">FS</span>
            </div>
            <div>
              <div className="text-xl font-black text-black dark:text-white mb-1">
                FRANK SELLHAUSEN
              </div>
              <div className="text-base font-mono text-gray-600 dark:text-gray-400">
                AI/ML Product Manager, Dell Technologies
              </div>
            </div>
          </div>

          <button
            className="bg-black dark:bg-white text-white dark:text-black border-4 border-black dark:border-white py-6 px-16 text-2xl font-black uppercase cursor-pointer transition-all duration-150 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white hover:translate-x-1 hover:translate-y-1 shadow-[12px_12px_0_0_#000] dark:shadow-[12px_12px_0_0_#fff] hover:shadow-[6px_6px_0_0_#000] dark:hover:shadow-[6px_6px_0_0_#fff]"
            onClick={() => navigate('/start')}
          >
            Find Your Framework →
          </button>
        </header>

        {/* Value Props */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-4 border-black dark:border-white p-10 bg-yellow-100 dark:bg-yellow-900/30 hover:translate-y-[-4px] transition-transform duration-200">
              <div className="text-7xl mb-6">⚡</div>
              <h3 className="text-3xl font-black text-black dark:text-white mb-5 uppercase leading-tight">
                MINUTES<br />NOT MONTHS
              </h3>
              <p className="text-lg font-medium text-black dark:text-white leading-relaxed">
                Find what you need in 30 seconds. Apply it in 2 minutes. No courses—just answers.
              </p>
            </div>

            <div className="border-4 border-black dark:border-white p-10 bg-blue-100 dark:bg-blue-900/30 hover:translate-y-[-4px] transition-transform duration-200">
              <div className="text-7xl mb-6">🎯</div>
              <h3 className="text-3xl font-black text-black dark:text-white mb-5 uppercase leading-tight">
                BATTLE-TESTED<br />NOT THEORY
              </h3>
              <p className="text-lg font-medium text-black dark:text-white leading-relaxed">
                From shipping to 100K+ users at Dell Technologies, not textbooks.
              </p>
            </div>

            <div className="border-4 border-black dark:border-white p-10 bg-pink-100 dark:bg-pink-900/30 hover:translate-y-[-4px] transition-transform duration-200">
              <div className="text-7xl mb-6">📖</div>
              <h3 className="text-3xl font-black text-black dark:text-white mb-5 uppercase leading-tight">
                FIELD GUIDE<br />NOT COURSE
              </h3>
              <p className="text-lg font-medium text-black dark:text-white leading-relaxed">
                Keep it on your desk. Return when stuck. No sequential lessons.
              </p>
            </div>
          </div>
        </section>

        {/* Sound Familiar */}
        <section className="mb-32 py-20 border-8 border-black dark:border-white bg-red-50 dark:bg-red-950/30">
          <h2 className="text-6xl font-black text-black dark:text-white mb-16 uppercase text-center">
            SOUND FAMILIAR?
          </h2>

          <div className="max-w-4xl mx-auto mb-16 space-y-6">
            <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-7">
              <p className="text-xl font-bold text-black dark:text-white m-0">
                ❌ Your exec said "add AI" but gave no roadmap
              </p>
            </div>
            <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-7">
              <p className="text-xl font-bold text-black dark:text-white m-0">
                ❌ You're Googling "AI product strategy" and getting blog posts
              </p>
            </div>
            <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-7">
              <p className="text-xl font-bold text-black dark:text-white m-0">
                ❌ You have no idea if 85% accuracy is good enough
              </p>
            </div>
            <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-7">
              <p className="text-xl font-bold text-black dark:text-white m-0">
                ❌ Your users don't trust the AI recommendations
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-yellow-300 dark:bg-yellow-400 border-4 border-black dark:border-white px-10 py-8 -rotate-1 transform">
              <p className="text-4xl font-black text-black uppercase leading-tight m-0">
                You Need Tactics<br />From Someone<br />Who's Shipped This
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="border-4 border-black dark:border-white p-12 bg-white dark:bg-black">
              <div className="text-7xl font-black text-black dark:text-white mb-4">156</div>
              <div className="text-xl font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400">Frameworks</div>
            </div>
            <div className="border-4 border-black dark:border-white p-12 bg-white dark:bg-black">
              <div className="text-7xl font-black text-black dark:text-white mb-4">20</div>
              <div className="text-xl font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400">Learning Paths</div>
            </div>
            <div className="border-4 border-black dark:border-white p-12 bg-white dark:bg-black">
              <div className="text-7xl font-black text-black dark:text-white mb-4">$0</div>
              <div className="text-xl font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400">Free Forever</div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-24 py-20 border-4 border-black dark:border-white bg-gray-50 dark:bg-gray-900">
          <h2 className="text-5xl font-black text-black dark:text-white mb-8 uppercase text-center leading-tight">
            STOP GOOGLING.<br />START SHIPPING.
          </h2>
          <p className="text-2xl text-center text-gray-700 dark:text-gray-300 font-bold mb-12 max-w-3xl mx-auto">
            156 frameworks used at Dell Technologies to ship AI products users actually adopt.
          </p>
          <div className="text-center">
            <button
              className="bg-black dark:bg-white text-white dark:text-black border-4 border-black dark:border-white py-6 px-16 text-2xl font-black uppercase cursor-pointer transition-all duration-150 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white hover:translate-x-1 hover:translate-y-1 shadow-[12px_12px_0_0_#000] dark:shadow-[12px_12px_0_0_#fff] hover:shadow-[6px_6px_0_0_#000] dark:hover:shadow-[6px_6px_0_0_#fff]"
              onClick={() => navigate('/start')}
            >
              Get Started →
            </button>
            <div className="mt-8">
              <button
                className="text-black dark:text-white text-lg font-mono underline decoration-2 underline-offset-4 hover:bg-yellow-300 dark:hover:bg-yellow-400 px-4 py-2 transition-colors"
                onClick={() => navigate('/browse')}
              >
                Browse all 156 frameworks
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default LandingPage;
