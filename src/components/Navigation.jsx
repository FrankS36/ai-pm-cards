import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navigation.css';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo / Home */}
          <button
            className="nav-logo"
            onClick={() => navigate('/')}
          >
            <span className="nav-logo-icon">🎴</span>
            <span className="nav-logo-text">AI PM Cards</span>
          </button>

          {/* Main Navigation Links */}
          <div className="nav-links">
            <button
              className={`nav-link ${isActive('/browse') ? 'active' : ''}`}
              onClick={() => navigate('/browse')}
            >
              Browse
            </button>
            <button
              className={`nav-link ${isActive('/paths') ? 'active' : ''}`}
              onClick={() => navigate('/paths')}
            >
              Paths
            </button>
            <button
              className={`nav-link ${isActive('/resources') ? 'active' : ''}`}
              onClick={() => navigate('/resources')}
            >
              Resources
            </button>
            <button
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => navigate('/about')}
            >
              About
            </button>
            <button
              className={`nav-link ${isActive('/collaborate') ? 'active' : ''}`}
              onClick={() => navigate('/collaborate')}
            >
              Collaborate
            </button>
          </div>

          {/* Right side actions */}
          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <span className="theme-icon">
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
