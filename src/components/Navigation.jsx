import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { LogoHub as Logo } from './logos';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const toolsDropdownRef = useRef(null);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isToolsActive = () => {
    return isActive('/templates') || isActive('/prompts');
  };

  const handleNavClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toolsDropdownRef.current && !toolsDropdownRef.current.contains(event.target)) {
        setToolsDropdownOpen(false);
      }
    };

    if (toolsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [toolsDropdownOpen]);

  return (
    <nav className="sticky top-0 left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-[1000] shadow-sm transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Home */}
          <button
            className="flex items-center gap-3 bg-transparent border-none cursor-pointer p-2 -ml-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 group"
            onClick={() => handleNavClick('/')}
          >
            <div className="transition-transform duration-200 group-hover:scale-110">
              <Logo />
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-white max-md:hidden">
              PM Autopilot
            </span>
            <span className="text-xs font-bold px-2 py-1 bg-emerald-500 text-white rounded max-md:hidden">
              FREE
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-2 items-center">
            <button
              className={`px-4 py-2 rounded-lg text-base font-semibold cursor-pointer transition-all duration-200 whitespace-nowrap border-2 ${
                isActive('/agents')
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                  : 'bg-white dark:bg-black text-gray-900 dark:text-white border-gray-900 dark:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black'
              }`}
              onClick={() => navigate('/agents')}
            >
              AI Agents
            </button>
            <button
              className={`px-4 py-2 bg-transparent border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-200 whitespace-nowrap ${
                isActive('/browse')
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
              onClick={() => navigate('/browse')}
            >
              Frameworks
            </button>
            <button
              className={`px-4 py-2 bg-transparent border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-200 whitespace-nowrap ${
                isActive('/paths')
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
              onClick={() => navigate('/paths')}
            >
              Paths
            </button>
            <div className="relative" ref={toolsDropdownRef}>
              <button
                className={`px-4 py-2 bg-transparent border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-200 whitespace-nowrap flex items-center gap-1 ${
                  isToolsActive()
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
              >
                Tools
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${toolsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {toolsDropdownOpen && (
                <div className="absolute top-full mt-1 left-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg min-w-[180px] py-1 z-50">
                  <button
                    className={`w-full px-4 py-2 text-left text-base font-medium cursor-pointer transition-all duration-200 ${
                      isActive('/templates')
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                    onClick={() => handleNavClick('/templates')}
                  >
                    Templates
                  </button>
                  <button
                    className={`w-full px-4 py-2 text-left text-base font-medium cursor-pointer transition-all duration-200 ${
                      isActive('/prompts')
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                    onClick={() => handleNavClick('/prompts')}
                  >
                    Prompts
                  </button>
                </div>
              )}
            </div>
            <button
              className={`px-4 py-2 bg-transparent border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-200 whitespace-nowrap ${
                isActive('/resources')
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
              onClick={() => navigate('/resources')}
            >
              Resources
            </button>
            <button
              className={`px-4 py-2 bg-transparent border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-200 whitespace-nowrap ${
                isActive('/about')
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
              onClick={() => navigate('/about')}
            >
              About
            </button>
            <button
              className={`px-4 py-2 bg-transparent border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-200 whitespace-nowrap ${
                isActive('/collaborate')
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
              onClick={() => navigate('/collaborate')}
            >
              Collaborate
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent border-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col gap-1">
              <button
                className={`px-4 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all duration-200 text-center border-2 ${
                  isActive('/agents')
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                    : 'bg-white dark:bg-black text-gray-900 dark:text-white border-gray-900 dark:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black'
                }`}
                onClick={() => handleNavClick('/agents')}
              >
                AI Agents
              </button>
              <button
                className={`px-4 py-3 bg-transparent border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-200 text-left ${
                  isActive('/browse')
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
                onClick={() => handleNavClick('/browse')}
              >
                Frameworks
              </button>
              <button
                className={`px-4 py-3 bg-transparent border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-200 text-left ${
                  isActive('/paths')
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
                onClick={() => handleNavClick('/paths')}
              >
                Paths
              </button>
              <div>
                <button
                  className={`w-full px-4 py-3 bg-transparent border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-200 text-left flex items-center justify-between ${
                    isToolsActive()
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                  onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                >
                  Tools
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${toolsDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {toolsDropdownOpen && (
                  <div className="pl-4 py-1 space-y-1">
                    <button
                      className={`w-full px-4 py-2 bg-transparent border-none rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 text-left ${
                        isActive('/templates')
                          ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                      }`}
                      onClick={() => handleNavClick('/templates')}
                    >
                      Templates
                    </button>
                    <button
                      className={`w-full px-4 py-2 bg-transparent border-none rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 text-left ${
                        isActive('/prompts')
                          ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                      }`}
                      onClick={() => handleNavClick('/prompts')}
                    >
                      Prompts
                    </button>
                  </div>
                )}
              </div>
              <button
                className={`px-4 py-3 bg-transparent border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-200 text-left ${
                  isActive('/resources')
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
                onClick={() => handleNavClick('/resources')}
              >
                Resources
              </button>
              <button
                className={`px-4 py-3 bg-transparent border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-200 text-left ${
                  isActive('/about')
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
                onClick={() => handleNavClick('/about')}
              >
                About
              </button>
              <button
                className={`px-4 py-3 bg-transparent border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-200 text-left ${
                  isActive('/collaborate')
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
                onClick={() => handleNavClick('/collaborate')}
              >
                Collaborate
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
