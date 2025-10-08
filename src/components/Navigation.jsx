import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

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
              Browse Cards
            </button>
            <button
              className={`nav-link ${isActive('/paths') ? 'active' : ''}`}
              onClick={() => navigate('/paths')}
            >
              Browse Paths
            </button>
          </div>

          {/* Right side - could add user actions later */}
          <div className="nav-actions">
            {/* Help button is handled by KeyboardHelp component */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
