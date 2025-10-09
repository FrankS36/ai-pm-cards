import { useNavigate } from 'react-router-dom';

function WorkWithMe() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-8 pb-16">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-5xl max-md:text-[2rem] font-extrabold bg-gradient-to-br from-primary to-purple bg-clip-text text-transparent mb-6">Collaborate</h1>
          <p className="text-2xl max-md:text-xl leading-relaxed text-gray-900 dark:text-white mb-6 font-medium">
            Let's apply these frameworks to ship AI products that users adopt.
          </p>
          <p className="text-lg leading-[1.7] text-gray-700 dark:text-gray-300 max-w-[700px] mx-auto max-md:text-base">
            If your team is facing AI product challenges—user adoption, risk assessment,
            strategic direction—I'd love to explore how we can work together.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-[2rem] font-bold text-gray-900 dark:text-white mb-8 text-center max-md:text-2xl">How I Help</h2>

          <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 mb-6 transition-all duration-300 hover:border-primary hover:-translate-y-0.5 hover:shadow-md max-md:p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 max-md:text-xl">AI Product Strategy</h3>
            <p className="text-lg leading-[1.7] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
              Validate opportunities, de-risk approaches, build execution roadmaps using
              battle-tested frameworks.
            </p>
            <ul className="list-none pl-0">
              <li className="pl-8 mb-3 relative text-gray-900 dark:text-white text-base leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-primary before:font-bold before:text-lg max-md:text-[0.9375rem]">Opportunity assessment and validation</li>
              <li className="pl-8 mb-3 relative text-gray-900 dark:text-white text-base leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-primary before:font-bold before:text-lg max-md:text-[0.9375rem]">Risk identification and mitigation planning</li>
              <li className="pl-8 mb-3 relative text-gray-900 dark:text-white text-base leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-primary before:font-bold before:text-lg max-md:text-[0.9375rem]">Roadmap development with clear milestones</li>
              <li className="pl-8 mb-3 relative text-gray-900 dark:text-white text-base leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-primary before:font-bold before:text-lg max-md:text-[0.9375rem] last:mb-0">Framework application from AI PM Cards</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 mb-6 transition-all duration-300 hover:border-primary hover:-translate-y-0.5 hover:shadow-md max-md:p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 max-md:text-xl">Team Training</h3>
            <p className="text-lg leading-[1.7] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
              Level up your PMs on AI product fundamentals through workshops and applied learning.
            </p>
            <ul className="list-none pl-0">
              <li className="pl-8 mb-3 relative text-gray-900 dark:text-white text-base leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-primary before:font-bold before:text-lg max-md:text-[0.9375rem]">Interactive workshops using real scenarios</li>
              <li className="pl-8 mb-3 relative text-gray-900 dark:text-white text-base leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-primary before:font-bold before:text-lg max-md:text-[0.9375rem]">Framework application exercises</li>
              <li className="pl-8 mb-3 relative text-gray-900 dark:text-white text-base leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-primary before:font-bold before:text-lg max-md:text-[0.9375rem]">Best practices from building AI/ML products</li>
              <li className="pl-8 mb-3 relative text-gray-900 dark:text-white text-base leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-primary before:font-bold before:text-lg max-md:text-[0.9375rem] last:mb-0">Ongoing support and resources</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 mb-6 transition-all duration-300 hover:border-primary hover:-translate-y-0.5 hover:shadow-md max-md:p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 max-md:text-xl">Product Audits</h3>
            <p className="text-lg leading-[1.7] text-gray-700 dark:text-gray-300 mb-6 max-md:text-base">
              Review AI features against proven frameworks, identify gaps and opportunities.
            </p>
            <ul className="list-none pl-0">
              <li className="pl-8 mb-3 relative text-gray-900 dark:text-white text-base leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-primary before:font-bold before:text-lg max-md:text-[0.9375rem]">Comprehensive feature evaluation</li>
              <li className="pl-8 mb-3 relative text-gray-900 dark:text-white text-base leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-primary before:font-bold before:text-lg max-md:text-[0.9375rem]">User experience and adoption analysis</li>
              <li className="pl-8 mb-3 relative text-gray-900 dark:text-white text-base leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-primary before:font-bold before:text-lg max-md:text-[0.9375rem]">Risk and compliance assessment</li>
              <li className="pl-8 mb-3 relative text-gray-900 dark:text-white text-base leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-primary before:font-bold before:text-lg max-md:text-[0.9375rem] last:mb-0">Actionable recommendations prioritized by impact</li>
            </ul>
          </div>
        </div>

        <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 max-md:p-6">
          <h2 className="text-[1.75rem] font-bold text-gray-900 dark:text-white mb-6 max-md:text-2xl">How We'll Work Together</h2>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 mb-4 max-md:text-base">
            Every engagement is grounded in the frameworks from AI PM Cards—approaches I've
            tested building AI/ML products at Dell Technologies. No theory. Just practical,
            applicable methods that help teams ship AI products users trust and adopt.
          </p>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 m-0 max-md:text-base">
            I focus on three outcomes: user adoption, manageable risk, and sustainable execution.
            If your AI features are technically sound but users aren't adopting them, let's talk.
          </p>
        </div>

        <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 max-md:p-6">
          <h2 className="text-[1.75rem] font-bold text-gray-900 dark:text-white mb-6 max-md:text-2xl">Let's Start a Conversation</h2>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 m-0 italic max-md:text-base">
            I work with teams where there's strong alignment on goals and approach. The best
            partnerships start with understanding your unique challenges and exploring if these
            frameworks are the right fit.
          </p>
        </div>

        <div className="text-center py-12 px-8 bg-gradient-to-br from-primary/[0.05] to-purple/[0.05] rounded-[20px] border-2 border-gray-200 dark:border-gray-700 mb-8 max-md:py-8 max-md:px-6">
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
              className="px-8 py-4 rounded-xl text-base font-semibold cursor-pointer transition-all duration-200 no-underline inline-block border-none bg-gradient-to-br from-primary to-purple text-white hover:from-primary-light hover:to-purple-light hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(30,58,138,0.3)] max-md:w-full"
            >
              Connect on LinkedIn
            </a>
            <button
              className="px-8 py-4 rounded-xl text-base font-semibold cursor-pointer transition-all duration-200 inline-block border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-0.5 max-md:w-full"
              onClick={() => navigate('/about')}
            >
              Learn More About Me
            </button>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-base text-gray-700 dark:text-gray-300">
            Want to see the frameworks in action first?{' '}
            <button className="bg-transparent border-none text-primary underline cursor-pointer text-base p-0 transition-opacity duration-200 hover:opacity-70" onClick={() => navigate('/browse')}>
              Explore AI PM Cards
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkWithMe;
