import { useState } from 'react';
import './ShareButton.css';

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
    <div className="share-button-container">
      <button className="share-button" onClick={handleShare} title={label}>
        <span className="share-icon">🔗</span>
        <span className="share-label">{label}</span>
      </button>
      {showFeedback && (
        <div className="share-feedback">
          {feedbackMessage}
        </div>
      )}
    </div>
  );
}

export default ShareButton;
