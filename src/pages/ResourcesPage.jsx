import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResourcesPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // TODO: Replace with actual ConvertKit/Beehiiv API integration
    // For now, trigger downloads immediately
    setTimeout(() => {
      // Trigger download of all templates
      templates.forEach((template) => {
        const link = document.createElement('a');
        link.href = template.downloadUrl;
        link.download = template.downloadUrl.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });

      setIsSubmitted(true);
      setIsSubmitting(false);

      // TODO: When API is integrated:
      // 1. Call email service API
      // 2. Send email with download links
      // 3. Show success message
    }, 500);
  };

  const templates = [
    {
      id: 'progressive-disclosure',
      title: 'Progressive Disclosure Design Worksheet',
      description: 'Step-by-step guide to designing AI features that don\'t overwhelm users. Includes wireframe templates and user testing questions.',
      pages: '2 pages',
      format: 'PDF',
      relatedCard: 'design-progressive-disclosure',
      downloadUrl: '/templates/progressive-disclosure-worksheet.pdf', // TODO: Add actual file
    },
    {
      id: 'risk-scorecard',
      title: 'AI Risk Assessment Scorecard',
      description: 'Evaluate and score risks before building. Covers bias, privacy, performance, and UX risks with mitigation planning.',
      pages: '1 page',
      format: 'PDF',
      relatedCard: 'plan-model-risk-mitigation',
      downloadUrl: '/templates/risk-assessment-scorecard.pdf', // TODO: Add actual file
    },
    {
      id: 'opportunity-canvas',
      title: 'AI Opportunity Canvas',
      description: 'One-page template for assessing whether an AI feature is worth building. Includes go/no-go decision framework.',
      pages: '1 page',
      format: 'PDF',
      relatedCard: 'identify-ai-opportunities',
      downloadUrl: '/templates/ai-opportunity-canvas.pdf', // TODO: Add actual file
    },
  ];

  return (
    <div className="min-h-screen py-8 pb-16">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl max-md:text-[2rem] font-extrabold bg-gradient-to-br from-primary to-purple bg-clip-text text-transparent mb-4">Free AI PM Templates</h1>
          <p className="text-xl max-md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Battle-tested templates to apply these frameworks to your AI products.
            Enter your email to download all three templates instantly.
          </p>
        </div>

        {!isSubmitted ? (
          <>
            <div className="mb-12">
              <div className="bg-gradient-to-br from-primary/[0.05] to-purple/[0.05] border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-10 text-center max-md:p-6">
                <h2 className="text-[2rem] max-md:text-2xl font-bold text-gray-900 dark:text-white mb-4">Download All Templates</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-md:text-base">
                  Enter your email to instantly download all 3 templates.
                  I'll also send you one AI PM framework per week (unsubscribe anytime).
                </p>
                <form onSubmit={handleSubmit} className="flex gap-3 max-w-[500px] mx-auto mb-4 max-md:flex-col">
                  <input
                    type="email"
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg text-base bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors focus:outline-none focus:border-primary"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 rounded-lg text-base font-semibold bg-gradient-to-br from-primary to-purple text-white border-none cursor-pointer transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed hover:from-primary-light hover:to-purple-light max-md:w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Templates'}
                  </button>
                </form>
                {error && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{error}</p>}
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  No spam. Unsubscribe anytime. Your email stays private.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-12">
              {templates.map((template) => (
                <div key={template.id} className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:border-primary hover:-translate-y-0.5 hover:shadow-md max-md:p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{template.title}</h3>
                    <div className="flex gap-3 text-sm">
                      <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light rounded-md font-semibold">{template.format}</span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md font-medium">{template.pages}</span>
                    </div>
                  </div>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{template.description}</p>
                  <button
                    onClick={() => navigate(`/framework/${template.relatedCard}`)}
                    className="text-primary dark:text-primary-light font-medium text-base bg-transparent border-none cursor-pointer p-0 transition-opacity duration-200 hover:opacity-70 hover:underline"
                  >
                    View Related Framework →
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h2 className="text-[2rem] max-md:text-2xl font-bold text-gray-900 dark:text-white mb-8">Why These Templates?</h2>
              <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:gap-4">
                <div className="text-center">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Immediately Actionable</h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">Don't just read about frameworks—apply them today with fill-in-the-blank templates.</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Battle-Tested</h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">Used at Dell Technologies to ship AI/ML products. Real-world proven, not theoretical.</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Team-Ready</h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">Share with your team, use in workshops, adapt to your needs. No attribution required.</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-[600px] mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-700 rounded-2xl p-10 text-center max-md:p-6">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-emerald-600 text-white rounded-full text-4xl font-bold">✓</div>
              <h2 className="text-[2rem] max-md:text-2xl font-bold text-gray-900 dark:text-white mb-4">Templates Downloaded!</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 max-md:text-base">
                Your 3 templates should be downloading now. Check your downloads folder!
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-8">
                Didn't download?{' '}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary dark:text-primary-light underline bg-transparent border-none cursor-pointer font-medium transition-opacity duration-200 hover:opacity-70"
                >
                  try again
                </button>
              </p>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-left">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">What You're Getting:</h3>
                <ul className="list-none pl-0 space-y-2">
                  {templates.map((template) => (
                    <li key={template.id} className="pl-6 relative text-gray-900 dark:text-white before:content-['✓'] before:absolute before:left-0 before:text-emerald-600 before:font-bold">{template.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResourcesPage;
