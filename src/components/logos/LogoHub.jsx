function LogoHub({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Network hub - central node connected to others */}

      {/* Connection lines */}
      <g className="stroke-gray-900 dark:stroke-white" strokeWidth="1.5" opacity="0.3">
        <line x1="16" y1="16" x2="8" y2="8" />
        <line x1="16" y1="16" x2="16" y2="6" />
        <line x1="16" y1="16" x2="24" y2="8" />
        <line x1="16" y1="16" x2="26" y2="16" />
        <line x1="16" y1="16" x2="24" y2="24" />
        <line x1="16" y1="16" x2="16" y2="26" />
        <line x1="16" y1="16" x2="8" y2="24" />
        <line x1="16" y1="16" x2="6" y2="16" />
      </g>

      {/* Outer nodes */}
      <g className="fill-gray-900 dark:fill-white">
        <circle cx="8" cy="8" r="2" />
        <circle cx="16" cy="6" r="2" />
        <circle cx="24" cy="8" r="2" />
        <circle cx="26" cy="16" r="2" />
        <circle cx="24" cy="24" r="2" />
        <circle cx="16" cy="26" r="2" />
        <circle cx="8" cy="24" r="2" />
        <circle cx="6" cy="16" r="2" />
      </g>

      {/* Central hub - larger and with detail */}
      <circle
        cx="16"
        cy="16"
        r="5"
        className="fill-gray-900 dark:fill-white"
      />
      <circle
        cx="16"
        cy="16"
        r="2.5"
        className="fill-white dark:fill-black"
      />
    </svg>
  );
}

export default LogoHub;
