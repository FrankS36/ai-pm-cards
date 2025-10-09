import { useNavigate } from 'react-router-dom';

function WorkWithMe() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-12 bg-white dark:bg-black">
      <div className="max-w-[1400px] mx-auto px-20 max-md:px-6">
        <div className="text-center mt-4 mb-8 md:mt-4 md:mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Collaborate</h1>
          <p className="text-xl leading-relaxed text-gray-900 dark:text-white mb-6 font-medium max-md:text-lg">
            Let's apply these frameworks to ship AI products that users adopt.
          </p>
          <p className="text-lg leading-[1.7] text-gray-600 dark:text-gray-400 max-w-[700px] mx-auto max-md:text-base">
            If your team is facing AI product challenges—user adoption, risk assessment,
            strategic direction—I'd love to explore how we can work together.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-[2rem] font-bold text-gray-900 dark:text-white mb-8 text-center max-md:text-2xl">How I Help</h2>

          <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-8 mb-6 transition-all hover:border-gray-900 dark:hover:border-white max-md:p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 max-md:text-xl">AI Product Strategy</h3>
            <p className="text-lg leading-[1.7] text-gray-600 dark:text-gray-400 mb-6 max-md:text-base">
              Validate opportunities, de-risk approaches, build execution roadmaps using
              battle-tested frameworks.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="text-gray-900 dark:text-white font-bold flex-shrink-0">•</div>
                <p className="text-base text-gray-900 dark:text-white leading-[1.6] m-0 max-md:text-[0.9375rem]">Opportunity assessment and validation</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="text-gray-900 dark:text-white font-bold flex-shrink-0">•</div>
                <p className="text-base text-gray-900 dark:text-white leading-[1.6] m-0 max-md:text-[0.9375rem]">Risk identification and mitigation planning</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="text-gray-900 dark:text-white font-bold flex-shrink-0">•</div>
                <p className="text-base text-gray-900 dark:text-white leading-[1.6] m-0 max-md:text-[0.9375rem]">Roadmap development with clear milestones</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="text-gray-900 dark:text-white font-bold flex-shrink-0">•</div>
                <p className="text-base text-gray-900 dark:text-white leading-[1.6] m-0 max-md:text-[0.9375rem]">Framework application from AI PM Cards</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-8 mb-6 transition-all hover:border-gray-900 dark:hover:border-white max-md:p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 max-md:text-xl">Team Training</h3>
            <p className="text-lg leading-[1.7] text-gray-600 dark:text-gray-400 mb-6 max-md:text-base">
              Level up your PMs on AI product fundamentals through workshops and applied learning.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="text-gray-900 dark:text-white font-bold flex-shrink-0">•</div>
                <p className="text-base text-gray-900 dark:text-white leading-[1.6] m-0 max-md:text-[0.9375rem]">Interactive workshops using real scenarios</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="text-gray-900 dark:text-white font-bold flex-shrink-0">•</div>
                <p className="text-base text-gray-900 dark:text-white leading-[1.6] m-0 max-md:text-[0.9375rem]">Framework application exercises</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="text-gray-900 dark:text-white font-bold flex-shrink-0">•</div>
                <p className="text-base text-gray-900 dark:text-white leading-[1.6] m-0 max-md:text-[0.9375rem]">Best practices from building AI/ML products</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="text-gray-900 dark:text-white font-bold flex-shrink-0">•</div>
                <p className="text-base text-gray-900 dark:text-white leading-[1.6] m-0 max-md:text-[0.9375rem]">Ongoing support and resources</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-8 mb-6 transition-all hover:border-gray-900 dark:hover:border-white max-md:p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 max-md:text-xl">Product Audits</h3>
            <p className="text-lg leading-[1.7] text-gray-600 dark:text-gray-400 mb-6 max-md:text-base">
              Review AI features against proven frameworks, identify gaps and opportunities.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="text-gray-900 dark:text-white font-bold flex-shrink-0">•</div>
                <p className="text-base text-gray-900 dark:text-white leading-[1.6] m-0 max-md:text-[0.9375rem]">Comprehensive feature evaluation</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="text-gray-900 dark:text-white font-bold flex-shrink-0">•</div>
                <p className="text-base text-gray-900 dark:text-white leading-[1.6] m-0 max-md:text-[0.9375rem]">User experience and adoption analysis</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="text-gray-900 dark:text-white font-bold flex-shrink-0">•</div>
                <p className="text-base text-gray-900 dark:text-white leading-[1.6] m-0 max-md:text-[0.9375rem]">Risk and compliance assessment</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="text-gray-900 dark:text-white font-bold flex-shrink-0">•</div>
                <p className="text-base text-gray-900 dark:text-white leading-[1.6] m-0 max-md:text-[0.9375rem]">Actionable recommendations prioritized by impact</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 p-8 bg-white dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-800 max-md:p-6">
          <h2 className="text-[1.75rem] font-bold text-gray-900 dark:text-white mb-6 max-md:text-2xl">How We'll Work Together</h2>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-4 max-md:text-base">
            Every engagement is grounded in the frameworks from AI PM Cards—approaches I've
            tested building AI/ML products in a Fortune 50 enterprise. No theory. Just practical,
            applicable methods that help teams ship AI products users trust and adopt.
          </p>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 m-0 max-md:text-base">
            I focus on three outcomes: user adoption, manageable risk, and sustainable execution.
            If your AI features are technically sound but users aren't adopting them, let's talk.
          </p>
        </div>

        <div className="mb-20 p-8 bg-white dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-800 max-md:p-6">
          <h2 className="text-[1.75rem] font-bold text-gray-900 dark:text-white mb-6 max-md:text-2xl">Let's Start a Conversation</h2>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 m-0 italic max-md:text-base">
            I work with teams where there's strong alignment on goals and approach. The best
            partnerships start with understanding your unique challenges and exploring if these
            frameworks are the right fit.
          </p>
        </div>

        <div className="text-center py-12 px-8 bg-white dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-800 mb-8 max-md:py-8 max-md:px-6">
          <h2 className="text-[2rem] font-bold text-gray-900 dark:text-white mb-4 max-md:text-2xl">Get in Touch</h2>
          <p className="text-lg leading-[1.7] text-gray-700 dark:text-gray-300 mb-8 max-w-[600px] mx-auto max-md:text-base">
            Connect with me on LinkedIn and share a bit about what you're working on.
            I'd love to hear about your AI product challenges and explore how we might work together.
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
              onClick={() => navigate('/about')}
            >
              Learn More About Me
            </button>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-base text-gray-700 dark:text-gray-300">
            Want to see the frameworks in action first?{' '}
            <button className="bg-transparent border-none text-gray-900 dark:text-white underline cursor-pointer text-base p-0 transition-opacity duration-200 hover:opacity-70" onClick={() => navigate('/browse')}>
              Explore AI PM Cards
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkWithMe;
