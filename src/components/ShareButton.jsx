import { useState } from 'react';

function ShareButton({ onShare, label = 'Share' }) {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleShare = async () => {
    try {
      const result = await onShare();

      if (result.success) {
        if (result.method === 'clipboard') {
          setFeedbackMessage('Link copied to clipboard!');
          setShowFeedback(true);
          setTimeout(() => setShowFeedback(false), 2000);
        }
        // For native share, no feedback needed as the OS handles it
      } else if (!result.cancelled) {
        setFeedbackMessage('Failed to share');
        setShowFeedback(true);
        setTimeout(() => setShowFeedback(false), 2000);
      }
    } catch (error) {
      console.error('Share error:', error);
      setFeedbackMessage('Failed to share');
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 2000);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-400 cursor-pointer transition-all duration-200 hover:border-primary hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-px max-md:px-3.5 max-md:text-[0.8125rem]"
        onClick={handleShare}
        title={label}
      >
        <span className="text-base">🔗</span>
        <span className="text-sm max-md:hidden">{label}</span>
      </button>
      {showFeedback && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap animate-fade-in-out pointer-events-none z-[1000] after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0 after:border-l-4 after:border-l-transparent after:border-r-4 after:border-r-transparent after:border-t-4 after:border-t-gray-900">
          {feedbackMessage}
        </div>
      )}
    </div>
  );
}

export default ShareButton;
