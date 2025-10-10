function LogoGraph({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Axes */}
      <g className="stroke-gray-900 dark:stroke-white" strokeWidth="2" strokeLinecap="round">
        <line x1="6" y1="26" x2="26" y2="26" />
        <line x1="6" y1="26" x2="6" y2="6" />
      </g>

      {/* Growth line with animation */}
      <g className="stroke-gray-900 dark:stroke-white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M6 24 L10 20 L14 18 L18 14 L22 12 L26 8"
          fill="none"
          className="animate-pulse"
        />
      </g>

      {/* Data points */}
      <g className="fill-gray-900 dark:fill-white">
        <circle cx="10" cy="20" r="2" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
        <circle cx="14" cy="18" r="2" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <circle cx="18" cy="14" r="2" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <circle cx="22" cy="12" r="2" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
        <circle cx="26" cy="8" r="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      </g>

      {/* Axis arrows */}
      <g className="stroke-gray-900 dark:stroke-white" strokeWidth="2" strokeLinecap="round">
        <path d="M26 26 L28 24" />
        <path d="M26 26 L28 28" />
        <path d="M6 6 L4 8" />
        <path d="M6 6 L8 8" />
      </g>
    </svg>
  );
}

export default LogoGraph;
