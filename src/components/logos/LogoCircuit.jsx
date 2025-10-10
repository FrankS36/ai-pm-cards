function LogoCircuit({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circuit board paths */}
      <g className="stroke-gray-900 dark:stroke-white" strokeWidth="2" strokeLinecap="round">
        {/* Horizontal lines */}
        <line x1="4" y1="12" x2="28" y2="12" />
        <line x1="4" y1="20" x2="28" y2="20" />

        {/* Vertical connectors */}
        <line x1="10" y1="8" x2="10" y2="24" />
        <line x1="16" y1="8" x2="16" y2="24" />
        <line x1="22" y1="8" x2="22" y2="24" />
      </g>

      {/* Nodes with animated pulse */}
      <g className="fill-gray-900 dark:fill-white">
        <circle cx="10" cy="12" r="2" className="animate-pulse" style={{ animationDelay: '0s' }} />
        <circle cx="16" cy="12" r="2" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <circle cx="22" cy="12" r="2" className="animate-pulse" style={{ animationDelay: '0.4s' }} />

        <circle cx="10" cy="20" r="2" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
        <circle cx="16" cy="20" r="2" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
        <circle cx="22" cy="20" r="2" className="animate-pulse" style={{ animationDelay: '1s' }} />
      </g>

      {/* Chip outline */}
      <rect
        x="13"
        y="14"
        width="6"
        height="4"
        rx="0.5"
        className="fill-gray-900 dark:fill-white"
      />
      <rect
        x="14"
        y="15"
        width="4"
        height="2"
        className="fill-white dark:fill-black"
      />
    </svg>
  );
}

export default LogoCircuit;
