import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-primary/[0.03] to-purple/[0.03]">
      <div className="text-center max-w-[600px]">
        <div className="text-[5rem] mb-4 animate-float">🎴</div>
        <h1 className="text-[6rem] max-md:text-[4rem] font-extrabold m-0 bg-gradient-to-br from-primary to-purple bg-clip-text text-transparent leading-none">404</h1>
        <h2 className="text-[2rem] max-md:text-2xl font-bold text-gray-900 dark:text-white my-4">Card Not Found</h2>
        <p className="text-lg max-md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
          Looks like this card isn't in the deck. Let's get you back on track.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          <button
            className="px-8 py-4 max-md:px-6 max-md:py-3.5 rounded-xl text-base max-md:text-[0.9375rem] font-semibold bg-gradient-to-br from-primary to-purple text-white border-none cursor-pointer transition-all duration-200 hover:from-primary-light hover:to-purple-light hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(30,58,138,0.3)]"
            onClick={() => navigate('/')}
          >
            Go Home
          </button>
          <button
            className="px-8 py-4 max-md:px-6 max-md:py-3.5 rounded-xl text-base max-md:text-[0.9375rem] font-semibold border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 cursor-pointer transition-all duration-200 hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            onClick={() => navigate('/paths')}
          >
            Browse Paths
          </button>
          <button
            className="px-8 py-4 max-md:px-6 max-md:py-3.5 rounded-xl text-base max-md:text-[0.9375rem] font-semibold border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 cursor-pointer transition-all duration-200 hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            onClick={() => navigate('/browse')}
          >
            Browse Frameworks
          </button>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-400 dark:text-gray-500 text-sm m-0">
            Need help? Press <kbd className="inline-block py-1 px-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded font-mono text-sm text-gray-700 dark:text-gray-300 mx-1">?</kbd> for keyboard shortcuts
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
