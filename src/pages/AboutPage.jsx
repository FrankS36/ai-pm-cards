import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-8 pb-16">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl max-md:text-[2rem] font-extrabold bg-gradient-to-br from-primary to-purple bg-clip-text text-transparent mb-4">About AI PM Cards</h1>
          <p className="text-xl max-md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Practical frameworks for building AI products that users actually adopt
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-[2rem] max-md:text-2xl font-bold text-gray-900 dark:text-white mb-6">Why I Built This</h2>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
            Two years ago, I watched a team spend 9 months building an AI recommendation engine for an enterprise product.
            The model was brilliant—94% accuracy. Launch day: 3% adoption.
          </p>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
            The problem wasn't the algorithm. It was everything else: trust, explainability, user experience,
            progressive disclosure. We rebuilt the UX using frameworks I'd learned shipping AI products at a Fortune 50
            company. 6 weeks later: 47% adoption. Same model, different product thinking.
          </p>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
            That's when I started documenting what actually works. Not theory—tactical frameworks from shipping
            AI features to 100K+ users across enterprise products. The patterns that drive adoption, build trust,
            and prevent failures.
          </p>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
            AI PM Cards is those frameworks. 156 of them, organized into Strategy, Risk, and Execution. Each one
            answers a specific question you'll face when building AI products.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-[2rem] max-md:text-2xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 max-md:p-6">
            <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
              I'm <strong className="text-gray-900 dark:text-white">Frank Sellhausen</strong>, an AI/ML Product Manager leading product initiatives at Dell Technologies.
              Over 5+ years, I've shipped AI features to 100K+ enterprise users and learned what drives adoption (and what kills it).
            </p>
            <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
              My background combines technical depth with product thinking. I write Python, understand the algorithms,
              and know how to package them into products users trust. That's rare—most PMs are one or the other.
            </p>
            <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
              These frameworks come from real experience: features that flopped, features that scaled, late-night
              debugging sessions, user interviews that changed everything, and launches that taught hard lessons.
            </p>
            <p className="text-xl max-md:text-lg italic text-gray-900 dark:text-white text-center p-6 bg-gradient-to-br from-primary/[0.05] to-purple/[0.05] rounded-xl border-l-4 border-primary mt-8 max-md:p-4">
              <em>
                "The best AI products don't showcase their intelligence—they make users feel more intelligent."
              </em>
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-[2rem] max-md:text-2xl font-bold text-gray-900 dark:text-white mb-6">About the Project</h2>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
            AI PM Cards is completely free and built with:
          </p>
          <ul className="list-none pl-0 my-6">
            <li className="pl-8 mb-4 relative text-gray-900 dark:text-white text-lg leading-[1.7] before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold before:text-xl max-md:text-base"><strong>156 frameworks</strong> covering every scenario you'll face</li>
            <li className="pl-8 mb-4 relative text-gray-900 dark:text-white text-lg leading-[1.7] before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold before:text-xl max-md:text-base"><strong>20 curated learning paths</strong> for different situations</li>
            <li className="pl-8 mb-4 relative text-gray-900 dark:text-white text-lg leading-[1.7] before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold before:text-xl max-md:text-base"><strong>3 specialized decks:</strong> Strategy, Risk, and Execution</li>
            <li className="pl-8 mb-4 relative text-gray-900 dark:text-white text-lg leading-[1.7] before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold before:text-xl max-md:text-base last:mb-0"><strong>Battle-tested</strong> frameworks from shipping AI products at scale</li>
          </ul>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
            Each framework follows a consistent structure: when to use it, step-by-step application,
            pro tips from experience, and related frameworks. No theory, no fluff—just what works.
          </p>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
            The project is <a href="https://github.com/FrankS36/ai-pm-cards" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light underline transition-opacity duration-200 hover:opacity-70">open source on GitHub</a>,
            built with React, and demonstrates both product thinking and technical execution.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-[2rem] max-md:text-2xl font-bold text-gray-900 dark:text-white mb-6">Who This Is For</h2>
          <p className="text-center text-lg mb-8 max-w-[700px] mx-auto text-gray-700 dark:text-gray-300 max-md:text-base">
            Built primarily for <strong className="text-gray-900 dark:text-white">Product Managers shipping their first AI features</strong>.
            Also valuable for product leaders building AI teams and founders shipping AI products.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-8 max-md:grid-cols-1 max-md:gap-4">
            <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary max-md:p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Product Managers</h3>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 m-0">Entering AI product development and need tactical frameworks to ship with confidence</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary max-md:p-6">
              <div className="text-5xl mb-4">👩‍💼</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Product Leaders</h3>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 m-0">Building AI teams and need frameworks for consistent execution across products</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary max-md:p-6">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Founders</h3>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 m-0">Shipping AI features fast and want to avoid the mistakes everyone else makes</p>
            </div>
          </div>
        </div>

        <div className="text-center py-12 px-8 bg-gradient-to-br from-primary/[0.05] to-purple/[0.05] rounded-[20px] border-2 border-gray-200 dark:border-gray-700 max-md:py-8 max-md:px-6">
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
              className="px-8 py-4 rounded-xl text-base font-semibold cursor-pointer transition-all duration-200 no-underline inline-block border-none bg-gradient-to-br from-primary to-purple text-white hover:from-primary-light hover:to-purple-light hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(30,58,138,0.3)] max-md:w-full"
            >
              Connect on LinkedIn
            </a>
            <button
              className="px-8 py-4 rounded-xl text-base font-semibold cursor-pointer transition-all duration-200 inline-block border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-0.5 max-md:w-full"
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
