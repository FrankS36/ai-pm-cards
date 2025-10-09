import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-[1000] shadow-sm transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Home */}
          <button
            className="flex items-center gap-2 bg-transparent border-none cursor-pointer p-2 -ml-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800"
            onClick={() => navigate('/')}
          >
            <span className="text-2xl">🎴</span>
            <span className="text-lg font-bold bg-gradient-to-br from-primary to-purple bg-clip-text text-transparent max-[480px]:hidden">AI PM Cards</span>
          </button>

          {/* Main Navigation Links */}
          <div className="flex gap-2 items-center max-md:gap-1">
            <button
              className={`px-4 py-2 bg-transparent border-none rounded-lg text-[0.9375rem] font-medium cursor-pointer transition-all duration-200 whitespace-nowrap max-md:px-3 max-md:text-sm max-[480px]:px-2.5 max-[480px]:text-[0.8125rem] ${
                isActive('/browse')
                  ? 'bg-gradient-to-br from-primary/10 to-purple/10 text-primary dark:text-primary-light font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
              onClick={() => navigate('/browse')}
            >
              Browse
            </button>
            <button
              className={`px-4 py-2 bg-transparent border-none rounded-lg text-[0.9375rem] font-medium cursor-pointer transition-all duration-200 whitespace-nowrap max-md:px-3 max-md:text-sm max-[480px]:px-2.5 max-[480px]:text-[0.8125rem] ${
                isActive('/paths')
                  ? 'bg-gradient-to-br from-primary/10 to-purple/10 text-primary dark:text-primary-light font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
              onClick={() => navigate('/paths')}
            >
              Paths
            </button>
            <button
              className={`px-4 py-2 bg-transparent border-none rounded-lg text-[0.9375rem] font-medium cursor-pointer transition-all duration-200 whitespace-nowrap max-md:px-3 max-md:text-sm max-[480px]:px-2.5 max-[480px]:text-[0.8125rem] ${
                isActive('/resources')
                  ? 'bg-gradient-to-br from-primary/10 to-purple/10 text-primary dark:text-primary-light font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
              onClick={() => navigate('/resources')}
            >
              Resources
            </button>
            <button
              className={`px-4 py-2 bg-transparent border-none rounded-lg text-[0.9375rem] font-medium cursor-pointer transition-all duration-200 whitespace-nowrap max-md:px-3 max-md:text-sm max-[480px]:px-2.5 max-[480px]:text-[0.8125rem] ${
                isActive('/about')
                  ? 'bg-gradient-to-br from-primary/10 to-purple/10 text-primary dark:text-primary-light font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
              onClick={() => navigate('/about')}
            >
              About
            </button>
            <button
              className={`px-4 py-2 bg-transparent border-none rounded-lg text-[0.9375rem] font-medium cursor-pointer transition-all duration-200 whitespace-nowrap max-md:px-3 max-md:text-sm max-[480px]:px-2.5 max-[480px]:text-[0.8125rem] ${
                isActive('/collaborate')
                  ? 'bg-gradient-to-br from-primary/10 to-purple/10 text-primary dark:text-primary-light font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
              onClick={() => navigate('/collaborate')}
            >
              Collaborate
            </button>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <button
              className="flex items-center justify-center w-10 h-10 bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-full cursor-pointer transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary dark:hover:border-primary-light hover:rotate-[20deg]"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <span className="text-xl flex items-center justify-center">
                {theme === 'light' ? '🌙' : '☀️'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
