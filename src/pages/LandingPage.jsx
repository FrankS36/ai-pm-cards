import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-8">
        <header className="text-center pt-16 pb-12 px-8">
          <h1 className="text-[3.5rem] font-extrabold text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
            156 Battle-Tested Frameworks for Shipping AI Products Users Actually Adopt
          </h1>
          <p className="text-[1.375rem] text-gray-600 dark:text-gray-400 max-w-[700px] mx-auto mb-10 leading-relaxed">
            The tactical frameworks I used at Dell Technologies to increase AI feature adoption from 8% to 47% in 6 weeks.
            Built for Product Managers shipping their first AI features.
          </p>

          <div className="flex items-center justify-center gap-4 mx-auto mb-10 max-w-[500px]">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-purple text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
              FS
            </div>
            <div className="text-left">
              <div className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                Frank Sellhausen
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 leading-snug">
                AI/ML Product Manager at Dell Technologies
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mb-8">
            <button
              className="bg-gradient-to-br from-primary to-purple text-white border-none py-5 px-12 text-xl font-semibold rounded-xl cursor-pointer transition-all duration-200 shadow-[0_4px_12px_rgba(30,58,138,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(30,58,138,0.4)]"
              onClick={() => navigate('/start')}
            >
              Find Your Framework →
            </button>
            <button
              className="bg-transparent border-none text-gray-500 dark:text-gray-400 text-[0.9375rem] cursor-pointer underline transition-colors duration-200 hover:text-primary dark:hover:text-primary-light"
              onClick={() => navigate('/browse')}
            >
              or browse all 156 frameworks
            </button>
          </div>

          <div className="text-gray-400 dark:text-gray-500 text-sm flex gap-2 justify-center items-center flex-wrap">
            <span>156 frameworks</span>
            <span>•</span>
            <span>20 curated paths</span>
            <span>•</span>
            <span>Free forever</span>
          </div>
        </header>

        <section className="mt-16 px-8">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 max-w-[1000px] mx-auto">
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-primary dark:hover:border-primary-light">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-[1.375rem] font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                Not Months. Minutes.
              </h3>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 m-0">
                Find the framework you need in 30 seconds. Apply it in 2 minutes. No courses, no theory—just the answer you need right now.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-primary dark:hover:border-primary-light">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-[1.375rem] font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                Not Theory. Battle Scars.
              </h3>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 m-0">
                These frameworks drove 8% → 47% adoption at Dell Technologies. From shipping to 100K+ users, not from textbooks.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-primary dark:hover:border-primary-light">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-[1.375rem] font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                Not a Course. A Field Guide.
              </h3>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 m-0">
                Built for PMs in the trenches. Keep it on your desk. Return to it every time you hit a wall. No sequential lessons required.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 py-12 px-8 bg-gradient-to-br from-[rgba(220,38,38,0.03)] to-[rgba(239,68,68,0.03)] dark:from-[rgba(220,38,38,0.08)] dark:to-[rgba(239,68,68,0.08)] rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">
            Sound Familiar?
          </h2>
          <div className="max-w-[700px] mx-auto mb-8 flex flex-col gap-5">
            <div className="flex items-start gap-4 text-left">
              <span className="text-2xl flex-shrink-0">❌</span>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed m-0">
                Your exec said "add AI" but gave no roadmap
              </p>
            </div>
            <div className="flex items-start gap-4 text-left">
              <span className="text-2xl flex-shrink-0">❌</span>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed m-0">
                You're Googling "AI product strategy" and getting blog posts
              </p>
            </div>
            <div className="flex items-start gap-4 text-left">
              <span className="text-2xl flex-shrink-0">❌</span>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed m-0">
                You have no idea if 85% accuracy is good enough
              </p>
            </div>
            <div className="flex items-start gap-4 text-left">
              <span className="text-2xl flex-shrink-0">❌</span>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed m-0">
                Your users don't trust the AI recommendations
              </p>
            </div>
            <div className="flex items-start gap-4 text-left">
              <span className="text-2xl flex-shrink-0">❌</span>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed m-0">
                You feel like everyone else knows something you don't
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[600px] mx-auto mt-10 leading-relaxed">
            You don't need more theory. <strong className="text-primary dark:text-primary-light font-bold">You need tactics from someone who's shipped this.</strong>
          </p>
        </section>

        <section className="mt-16 py-12 px-8 bg-gradient-to-br from-[rgba(124,58,237,0.03)] to-[rgba(30,58,138,0.03)] dark:from-[rgba(124,58,237,0.08)] dark:to-[rgba(30,58,138,0.08)] rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Wait. Are You Solving the Right Problem?
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-[700px] mx-auto mb-12 leading-[1.7]">
            Before you build AI features, validate you're solving a problem users actually have.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-[1000px] mx-auto my-12">
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Write a Clear Problem Statement
              </h3>
              <p className="text-[0.9375rem] text-gray-500 dark:text-gray-400 leading-relaxed m-0">
                Frame the user problem you're solving before jumping to AI solutions
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🎤</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Conduct Customer Discovery
              </h3>
              <p className="text-[0.9375rem] text-gray-500 dark:text-gray-400 leading-relaxed m-0">
                Run interviews that uncover real problems, not what users think you want to hear
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Jobs to Be Done Framework
              </h3>
              <p className="text-[0.9375rem] text-gray-500 dark:text-gray-400 leading-relaxed m-0">
                Understand what users are really hiring your product to do
              </p>
            </div>
          </div>
          <div className="mt-8">
            <button
              className="bg-white dark:bg-gray-800 text-purple dark:text-purple-light border-2 border-purple dark:border-purple-light py-4 px-8 text-base font-semibold rounded-xl cursor-pointer transition-all duration-200 hover:bg-purple dark:hover:bg-purple hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(124,58,237,0.3)]"
              onClick={() => navigate('/path/problem-discovery')}
            >
              Explore Problem Discovery Path →
            </button>
          </div>
        </section>

        <section className="mt-16 py-12 px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Battle-Tested in Production, Not Theory
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-[700px] mx-auto mb-12 leading-[1.7]">
            Real outcomes from shipping AI features at Dell Technologies to 100K+ users. Same models, better product thinking.
          </p>
          <div className="max-w-[1000px] mx-auto mb-12">
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-8 items-center p-10 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl">
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold mb-2">
                  The Problem
                </span>
                <h3 className="text-lg text-gray-900 dark:text-white font-semibold leading-snug">
                  8% adoption - users ignored our AI recommendations
                </h3>
              </div>
              <div className="text-[2rem] text-purple dark:text-purple-light font-bold">
                →
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold mb-2">
                  The Framework
                </span>
                <div className="bg-gradient-to-br from-[rgba(30,58,138,0.05)] to-[rgba(124,58,237,0.05)] dark:from-[rgba(30,58,138,0.15)] dark:to-[rgba(124,58,237,0.15)] border-2 border-gray-200 dark:border-gray-600 rounded-xl p-6 text-left">
                  <span className="bg-gradient-to-br from-primary to-purple text-white py-1 px-3 rounded-md text-xs font-semibold inline-block mb-3">
                    UX & Design
                  </span>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                    Progressive Disclosure + Explainability
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 m-0">
                    Applied 3 trust-building patterns
                  </p>
                </div>
              </div>
              <div className="text-[2rem] text-purple dark:text-purple-light font-bold">
                →
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold mb-2">
                  The Outcome
                </span>
                <h3 className="text-lg text-gray-900 dark:text-white font-semibold leading-snug">
                  47% adoption in 6 weeks
                </h3>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-[800px] mx-auto">
            <div className="p-8 bg-gradient-to-br from-[rgba(30,58,138,0.03)] to-[rgba(124,58,237,0.03)] dark:from-[rgba(30,58,138,0.08)] dark:to-[rgba(124,58,237,0.08)] rounded-xl">
              <div className="text-5xl font-extrabold bg-gradient-to-br from-primary to-purple bg-clip-text text-transparent leading-none mb-2">
                156
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                Frameworks
              </div>
            </div>
            <div className="p-8 bg-gradient-to-br from-[rgba(30,58,138,0.03)] to-[rgba(124,58,237,0.03)] dark:from-[rgba(30,58,138,0.08)] dark:to-[rgba(124,58,237,0.08)] rounded-xl">
              <div className="text-5xl font-extrabold bg-gradient-to-br from-primary to-purple bg-clip-text text-transparent leading-none mb-2">
                20
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                Curated Paths
              </div>
            </div>
            <div className="p-8 bg-gradient-to-br from-[rgba(30,58,138,0.03)] to-[rgba(124,58,237,0.03)] dark:from-[rgba(30,58,138,0.08)] dark:to-[rgba(124,58,237,0.08)] rounded-xl">
              <div className="text-5xl font-extrabold bg-gradient-to-br from-primary to-purple bg-clip-text text-transparent leading-none mb-2">
                3
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                Specialized Decks
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 py-12 px-8 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Find Your Framework in 30 Seconds
          </h2>
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-8 max-w-[1000px] mx-auto items-center">
            <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg mb-2 text-gray-900 dark:text-white font-semibold">
                Tell us where you're stuck
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-[0.9375rem] leading-normal m-0">
                Quick diagnostic or browse paths
              </p>
            </div>
            <div className="text-[2rem] text-gray-400 dark:text-gray-500 font-bold">
              →
            </div>
            <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg mb-2 text-gray-900 dark:text-white font-semibold">
                Get your framework
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-[0.9375rem] leading-normal m-0">
                2-minute read with real examples
              </p>
            </div>
            <div className="text-[2rem] text-gray-400 dark:text-gray-500 font-bold">
              →
            </div>
            <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg mb-2 text-gray-900 dark:text-white font-semibold">
                Ship the feature
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-[0.9375rem] leading-normal m-0">
                Follow related cards to complete
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center py-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            See a Framework in Action
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-[700px] mx-auto mb-12 leading-[1.7]">
            No theory. No fluff. Every framework shows the problem, the tactical solution, and a real example from production.
          </p>
          <div
            className="max-w-[800px] mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-10 text-left transition-all duration-300 cursor-pointer hover:border-purple dark:hover:border-purple-light hover:shadow-[0_12px_40px_rgba(124,58,237,0.15)] dark:hover:shadow-[0_12px_40px_rgba(124,58,237,0.3)] hover:-translate-y-1"
            onClick={() => navigate('/framework/EXEC-025')}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="bg-gradient-to-br from-primary to-purple text-white py-2 px-4 rounded-lg text-sm font-semibold">
                UX & Design
              </span>
              <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">
                EXEC-025
              </span>
            </div>
            <h3 className="text-[1.75rem] font-bold text-gray-900 dark:text-white mb-8">
              Design Progressive Disclosure
            </h3>

            <div className="mb-7">
              <h4 className="text-sm font-bold text-primary dark:text-primary-light uppercase tracking-wider mb-3">
                The Problem
              </h4>
              <p className="text-base leading-[1.7] text-gray-600 dark:text-gray-400 m-0">
                Your AI feature has 20 configuration options. If you show them all upfront, users freeze. If you hide them, power users complain.
              </p>
            </div>

            <div className="mb-7">
              <h4 className="text-sm font-bold text-primary dark:text-primary-light uppercase tracking-wider mb-3">
                The Framework
              </h4>
              <p className="text-base leading-[1.7] text-gray-600 dark:text-gray-400 m-0">
                Layer 1 (default): Show only what 80% of users need. Layer 2 (optional): Hide advanced controls behind "Show more." Layer 3 (expert): Technical settings behind "Advanced mode."
              </p>
            </div>

            <div className="mb-7">
              <h4 className="text-sm font-bold text-primary dark:text-primary-light uppercase tracking-wider mb-3">
                Real Example
              </h4>
              <p className="text-base leading-[1.7] text-gray-600 dark:text-gray-400 m-0">
                An AI writing assistant had 15 configuration options. We showed 3 by default (tone, length, audience). Click "Advanced" revealed 8 more. Click "Expert mode" unlocked the rest. Result: 90% of users never needed Layer 2.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
              <span className="text-purple dark:text-purple-light font-semibold text-base inline-flex items-center gap-2">
                Click to explore full framework →
              </span>
            </div>
          </div>
        </section>

        <section className="mt-16 py-12 px-8 bg-gradient-to-br from-[rgba(30,58,138,0.03)] to-[rgba(124,58,237,0.03)] dark:from-[rgba(30,58,138,0.08)] dark:to-[rgba(124,58,237,0.08)] rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            The Frameworks I Wish I Had When I Started
          </h2>
          <div className="flex items-center gap-12 max-w-[900px] mx-auto">
            <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-primary to-purple text-white flex items-center justify-center text-5xl font-bold flex-shrink-0">
              FS
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                Frank Sellhausen
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-6">
                AI/ML Product Manager at Dell Technologies
              </p>
              <p className="text-lg leading-[1.7] text-gray-600 dark:text-gray-400 italic mb-6 pl-6 border-l-4 border-purple dark:border-purple-light">
                "I've shipped AI features that flopped and ones that scaled. These aren't theories from blog posts—they're battle-tested patterns from shipping AI products to 100K+ users. The stuff that actually worked in production."
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-600">
                  📈 Increased AI adoption by 40%+ avg
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-600">
                  🏢 Leading AI initiatives at Fortune 50
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-600">
                  📚 156 frameworks from 5+ years shipping
                </span>
              </div>
              <button
                className="bg-transparent border-none text-gray-500 dark:text-gray-400 text-[0.9375rem] cursor-pointer underline transition-colors duration-200 hover:text-primary dark:hover:text-primary-light"
                onClick={() => navigate('/about')}
              >
                Read full story →
              </button>
            </div>
          </div>
        </section>

        <section className="mt-16 py-16 px-8 text-center bg-gradient-to-br from-[rgba(30,58,138,0.05)] to-[rgba(124,58,237,0.05)] dark:from-[rgba(30,58,138,0.1)] dark:to-[rgba(124,58,237,0.1)] rounded-2xl">
          <h2 className="text-[2.5rem] font-extrabold text-gray-900 dark:text-white mb-4">
            Start Shipping AI Products Users Actually Adopt
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-[700px] mx-auto mb-10 leading-relaxed">
            Take the 30-second diagnostic and get matched to the frameworks you need right now.
          </p>
          <button
            className="bg-gradient-to-br from-primary to-purple text-white border-none py-5 px-12 text-xl font-semibold rounded-xl cursor-pointer transition-all duration-200 shadow-[0_4px_12px_rgba(30,58,138,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(30,58,138,0.4)]"
            onClick={() => navigate('/start')}
          >
            Find Your Framework →
          </button>
          <div className="mt-6 text-gray-400 dark:text-gray-500 text-sm">
            156 frameworks • 20 paths • Free forever
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
