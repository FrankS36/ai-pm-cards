import { useState, useEffect } from 'react';

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
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-purple text-white border-none text-2xl font-bold cursor-pointer shadow-[0_4px_12px_rgba(30,58,138,0.4)] flex items-center justify-center transition-all duration-200 z-[9999] hover:scale-110 hover:shadow-[0_6px_20px_rgba(30,58,138,0.5)] active:scale-95"
        onClick={() => setIsOpen(true)}
        title="Keyboard shortcuts (press ?)"
      >
        ?
      </button>

      {/* Help modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[10000] animate-fade-in" onClick={() => setIsOpen(false)}>
          <div className="bg-white dark:bg-gray-900 rounded-[20px] p-10 max-w-[600px] w-[90%] max-h-[80vh] overflow-y-auto shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative animate-slide-up max-md:p-8 max-md:px-6 max-md:w-[95%] max-md:max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 bg-transparent border-none text-[2rem] text-gray-600 dark:text-gray-300 cursor-pointer w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            <h2 className="m-0 mb-8 text-[1.75rem] text-gray-900 dark:text-white max-md:text-2xl max-md:mb-6 max-md:pr-8">⌨️ Keyboard Shortcuts</h2>

            <div className="mb-8 last:mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 m-0 mb-4">Path Navigation</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-[10px] border border-gray-200 dark:border-gray-700 max-md:py-2.5 max-md:px-3.5">
                  <kbd className="inline-block py-1.5 px-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 border-b-[3px] rounded-md font-mono text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm min-w-[40px] text-center max-md:text-[0.8125rem] max-md:py-[0.3125rem] max-md:px-2.5 max-md:min-w-[35px]">←</kbd>
                  <span className="text-gray-700 dark:text-gray-300 text-[0.95rem]">Previous card</span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-[10px] border border-gray-200 dark:border-gray-700 max-md:py-2.5 max-md:px-3.5">
                  <kbd className="inline-block py-1.5 px-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 border-b-[3px] rounded-md font-mono text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm min-w-[40px] text-center max-md:text-[0.8125rem] max-md:py-[0.3125rem] max-md:px-2.5 max-md:min-w-[35px]">→</kbd>
                  <span className="text-gray-700 dark:text-gray-300 text-[0.95rem]">Next card</span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-[10px] border border-gray-200 dark:border-gray-700 max-md:py-2.5 max-md:px-3.5">
                  <kbd className="inline-block py-1.5 px-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 border-b-[3px] rounded-md font-mono text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm min-w-[40px] text-center max-md:text-[0.8125rem] max-md:py-[0.3125rem] max-md:px-2.5 max-md:min-w-[35px]">Space</kbd>
                  <span className="text-gray-700 dark:text-gray-300 text-[0.95rem]">Flip card</span>
                </div>
              </div>
            </div>

            <div className="mb-8 last:mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 m-0 mb-4">Browse View</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-[10px] border border-gray-200 dark:border-gray-700 max-md:py-2.5 max-md:px-3.5">
                  <kbd className="inline-block py-1.5 px-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 border-b-[3px] rounded-md font-mono text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm min-w-[40px] text-center max-md:text-[0.8125rem] max-md:py-[0.3125rem] max-md:px-2.5 max-md:min-w-[35px]">Esc</kbd>
                  <span className="text-gray-700 dark:text-gray-300 text-[0.95rem]">Close card modal</span>
                </div>
              </div>
            </div>

            <div className="mb-8 last:mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 m-0 mb-4">Mobile</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-[10px] border border-gray-200 dark:border-gray-700 max-md:py-2.5 max-md:px-3.5">
                  <span className="inline-block py-1.5 px-3 bg-gradient-to-br from-primary to-purple text-white rounded-md text-sm font-semibold min-w-[100px] text-center max-md:text-[0.8125rem] max-md:py-[0.3125rem] max-md:px-2.5">Swipe left</span>
                  <span className="text-gray-700 dark:text-gray-300 text-[0.95rem]">Next card</span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-[10px] border border-gray-200 dark:border-gray-700 max-md:py-2.5 max-md:px-3.5">
                  <span className="inline-block py-1.5 px-3 bg-gradient-to-br from-primary to-purple text-white rounded-md text-sm font-semibold min-w-[100px] text-center max-md:text-[0.8125rem] max-md:py-[0.3125rem] max-md:px-2.5">Swipe right</span>
                  <span className="text-gray-700 dark:text-gray-300 text-[0.95rem]">Previous card</span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-[10px] border border-gray-200 dark:border-gray-700 max-md:py-2.5 max-md:px-3.5">
                  <span className="inline-block py-1.5 px-3 bg-gradient-to-br from-primary to-purple text-white rounded-md text-sm font-semibold min-w-[100px] text-center max-md:text-[0.8125rem] max-md:py-[0.3125rem] max-md:px-2.5">Tap</span>
                  <span className="text-gray-700 dark:text-gray-300 text-[0.95rem]">Flip card</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300 text-sm">
              Press <kbd className="inline-block py-1.5 px-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 border-b-[3px] rounded-md font-mono text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm min-w-[40px] text-center mx-1">?</kbd> to toggle this help
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default KeyboardHelp;
