import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-signature">
          Created by <strong>Frank Sellhausen</strong>
        </p>
        <p className="footer-title">
          Product Manager, Dell Technologies | AI/ML Products
        </p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/frank-sellhausen/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <span className="footer-separator">•</span>
          <a
            href="https://github.com/FrankS36/ai-pm-cards"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <span className="footer-separator">•</span>
          <a
            href="/collaborate"
            className="footer-link"
          >
            Collaborate
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
