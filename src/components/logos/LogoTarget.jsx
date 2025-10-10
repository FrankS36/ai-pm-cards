function LogoTarget({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Concentric circles */}
      <circle
        cx="16"
        cy="16"
        r="12"
        className="stroke-gray-900 dark:stroke-white"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="16"
        cy="16"
        r="8"
        className="stroke-gray-900 dark:stroke-white"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="16"
        cy="16"
        r="4"
        className="fill-gray-900 dark:fill-white"
      />

      {/* Crosshairs */}
      <g className="stroke-gray-900 dark:stroke-white" strokeWidth="1.5">
        <line x1="16" y1="2" x2="16" y2="30" opacity="0.4" />
        <line x1="2" y1="16" x2="30" y2="16" opacity="0.4" />
      </g>

      {/* Bullseye with pulse */}
      <circle
        cx="16"
        cy="16"
        r="2"
        className="fill-white dark:fill-black animate-ping"
        opacity="0.5"
      />
    </svg>
  );
}

export default LogoTarget;
