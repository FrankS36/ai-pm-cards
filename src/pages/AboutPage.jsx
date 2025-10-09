import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-12 bg-white dark:bg-black">
      <div className="max-w-[1400px] mx-auto px-20 max-md:px-6">
        <div className="text-center mt-4 mb-8 md:mt-4 md:mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About AI PM Cards</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Practical frameworks for building AI products that users actually adopt
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-[2rem] max-md:text-2xl font-bold text-gray-900 dark:text-white mb-6">Why I Built This</h2>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
            I've shipped multiple AI/ML products in a Fortune 50 enterprise. Some failed spectacularly. Some scaled to 100K+ users.
            The difference wasn't the algorithms—it was the product thinking around them.
          </p>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
            One project stands out: we rebuilt an AI recommendation engine's UX from the ground up. Same model, same accuracy—but adoption jumped from 8% to 47% in six weeks. The breakthrough? Trust design, progressive disclosure, and actually understanding what users needed to feel confident with AI predictions.
          </p>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
            That's when I realized most AI products fail for the same reasons. Not because the tech isn't ready—because PMs are figuring out trust patterns, risk frameworks, and launch strategies from scratch. Every. Single. Time.
          </p>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
            So I started documenting what actually works. Every late-night war room. Every failed A/B test. Every user interview that changed my assumptions. Every framework that moved adoption metrics.
          </p>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
            AI PM Cards is that knowledge distilled into 156 tactical frameworks. No theory. No blog spam. Just the patterns that work when shipping AI products in complex organizations.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-[2rem] max-md:text-2xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border-2 border-gray-200 dark:border-gray-800 max-md:p-6">
            <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
              I'm <strong className="text-gray-900 dark:text-white">Frank Sellhausen</strong>, an AI/ML Product Manager who's spent 5+ years shipping data products and AI features in a Fortune 50 enterprise. I've launched products to 100K+ users, navigated complex organizational politics, and learned what actually drives adoption at scale.
            </p>
            <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
              My background is unusual for PM: I write Python, understand how models work under the hood, and spent years learning UX design and product craft. I can debug a data pipeline, design a trust-building interface, and pitch to executives—all in the same week. That combination is what lets me bridge the gap between "this model is 94% accurate" and "users actually trust this thing."
            </p>
            <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
              I'm currently in Stanford Graduate School of Business's LEAD Executive Education Program, still learning how to ship better products. These frameworks aren't from a textbook—they're from features that failed, A/B tests that surprised me, user interviews that changed everything, and late-night war rooms where we had to decide whether to delay a launch.
            </p>
            <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
              The best part of shipping AI products? You learn fast. Users don't sugarcoat their feedback when an algorithm makes a bad prediction. That forcing function—ship it, measure it, fix it—taught me more than any course ever could.
            </p>
            <p className="text-xl max-md:text-lg italic text-gray-900 dark:text-white text-center p-6 bg-gray-50 dark:bg-black rounded-lg border-l-4 border-gray-900 dark:border-white mt-8 max-md:p-4">
              <em>
                "The best AI products don't showcase their intelligence—they make users feel more intelligent."
              </em>
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-[2rem] max-md:text-2xl font-bold text-gray-900 dark:text-white mb-6">About the Project</h2>
          <div className="space-y-4 my-6">
            <div className="flex gap-3 items-start">
              <div className="text-gray-900 dark:text-white font-bold text-lg flex-shrink-0">•</div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-[1.7] max-md:text-base m-0">
                <strong className="text-gray-900 dark:text-white">156 frameworks</strong> covering every scenario you'll face
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-gray-900 dark:text-white font-bold text-lg flex-shrink-0">•</div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-[1.7] max-md:text-base m-0">
                <strong className="text-gray-900 dark:text-white">20 curated learning paths</strong> for different situations
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-gray-900 dark:text-white font-bold text-lg flex-shrink-0">•</div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-[1.7] max-md:text-base m-0">
                <strong className="text-gray-900 dark:text-white">3 specialized decks:</strong> Strategy, Risk, and Execution
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-gray-900 dark:text-white font-bold text-lg flex-shrink-0">•</div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-[1.7] max-md:text-base m-0">
                <strong className="text-gray-900 dark:text-white">Battle-tested</strong> frameworks from shipping AI products at scale
              </p>
            </div>
          </div>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
            Each framework follows a consistent structure: when to use it, step-by-step application,
            pro tips from experience, and related frameworks. No theory, no fluff—just what works.
          </p>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
            The project is <a href="https://github.com/FrankS36/ai-pm-cards" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white underline hover:text-gray-600 dark:hover:text-gray-400">open source on GitHub</a>,
            built with React, and demonstrates both product thinking and technical execution.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-[2rem] max-md:text-2xl font-bold text-gray-900 dark:text-white mb-6">Who This Is For</h2>
          <p className="text-center text-lg mb-8 max-w-[700px] mx-auto text-gray-700 dark:text-gray-300 max-md:text-base">
            Built primarily for <strong className="text-gray-900 dark:text-white">Product Managers shipping their first AI features</strong>.
            Also valuable for product leaders building AI teams and founders shipping AI products.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-8 max-md:grid-cols-1 max-md:gap-4">
            <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center transition-all hover:border-gray-900 dark:hover:border-white max-md:p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Product Managers</h3>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 m-0">Entering AI product development and need tactical frameworks to ship with confidence</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center transition-all hover:border-gray-900 dark:hover:border-white max-md:p-6">
              <div className="text-5xl mb-4">👩‍💼</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Product Leaders</h3>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 m-0">Building AI teams and need frameworks for consistent execution across products</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center transition-all hover:border-gray-900 dark:hover:border-white max-md:p-6">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Founders</h3>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 m-0">Shipping AI features fast and want to avoid the mistakes everyone else makes</p>
            </div>
          </div>
        </div>

        <div className="text-center py-12 px-8 bg-white dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-800 max-md:py-8 max-md:px-6">
          <h2 className="text-[2rem] max-md:text-2xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-8 max-md:text-base">
            Questions about applying these frameworks? Want to discuss a specific AI product challenge?
            Connect with me on LinkedIn.
          </p>
          <div className="flex gap-4 justify-center flex-wrap max-md:flex-col">
            <a
              href="https://www.linkedin.com/in/frank-sellhausen/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg text-base font-semibold cursor-pointer transition-all no-underline inline-block bg-gray-900 dark:bg-white text-white dark:text-black border-2 border-gray-900 dark:border-white hover:bg-gray-800 dark:hover:bg-gray-100 max-md:w-full"
            >
              Connect on LinkedIn
            </a>
            <button
              className="px-8 py-4 rounded-lg text-base font-semibold cursor-pointer transition-all inline-block border-2 border-gray-900 dark:border-white bg-white dark:bg-black text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 max-md:w-full"
              onClick={() => navigate('/browse')}
            >
              Browse All Frameworks
            </button>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 italic">
            <strong className="text-gray-900 dark:text-white">These frameworks evolve.</strong> I update them regularly based on new experience and what I learn
            from shipping AI products. Last updated: January 2025.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
