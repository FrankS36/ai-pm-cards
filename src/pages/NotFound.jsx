import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="not-found-icon">🎴</div>
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Card Not Found</h2>
        <p className="not-found-message">
          Looks like this card isn't in the deck. Let's get you back on track.
        </p>

        <div className="not-found-actions">
          <button
            className="btn-not-found btn-not-found-primary"
            onClick={() => navigate('/')}
          >
            Go Home
          </button>
          <button
            className="btn-not-found"
            onClick={() => navigate('/paths')}
          >
            Browse Paths
          </button>
          <button
            className="btn-not-found"
            onClick={() => navigate('/browse')}
          >
            Browse Cards
          </button>
        </div>

        <div className="not-found-help">
          <p>Need help? Press <kbd>?</kbd> for keyboard shortcuts</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
