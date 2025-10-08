import { useState, useEffect } from 'react';
import './KeyboardHelp.css';

function KeyboardHelp() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Toggle help modal with '?' key
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      // Close with Escape
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  return (
    <>
      {/* Floating help button */}
      <button
        className="keyboard-help-button"
        onClick={() => setIsOpen(true)}
        title="Keyboard shortcuts (press ?)"
      >
        ?
      </button>

      {/* Help modal */}
      {isOpen && (
        <div className="keyboard-help-overlay" onClick={() => setIsOpen(false)}>
          <div className="keyboard-help-modal" onClick={(e) => e.stopPropagation()}>
            <button className="keyboard-help-close" onClick={() => setIsOpen(false)}>
              ×
            </button>

        <h2>⌨️ Keyboard Shortcuts</h2>

        <div className="keyboard-help-section">
          <h3>Path Navigation</h3>
          <div className="keyboard-help-shortcuts">
            <div className="keyboard-shortcut">
              <kbd>←</kbd>
              <span>Previous card</span>
            </div>
            <div className="keyboard-shortcut">
              <kbd>→</kbd>
              <span>Next card</span>
            </div>
            <div className="keyboard-shortcut">
              <kbd>Space</kbd>
              <span>Flip card</span>
            </div>
          </div>
        </div>

        <div className="keyboard-help-section">
          <h3>Browse View</h3>
          <div className="keyboard-help-shortcuts">
            <div className="keyboard-shortcut">
              <kbd>Esc</kbd>
              <span>Close card modal</span>
            </div>
          </div>
        </div>

        <div className="keyboard-help-section">
          <h3>Mobile</h3>
          <div className="keyboard-help-shortcuts">
            <div className="keyboard-shortcut">
              <span className="gesture">Swipe left</span>
              <span>Next card</span>
            </div>
            <div className="keyboard-shortcut">
              <span className="gesture">Swipe right</span>
              <span>Previous card</span>
            </div>
            <div className="keyboard-shortcut">
              <span className="gesture">Tap</span>
              <span>Flip card</span>
            </div>
          </div>
        </div>

        <div className="keyboard-help-footer">
          Press <kbd>?</kbd> to toggle this help
        </div>
          </div>
        </div>
      )}
    </>
  );
}

export default KeyboardHelp;
