function LogoPulse({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Pulsing rings */}
      <circle
        cx="16"
        cy="16"
        r="10"
        className="stroke-gray-900 dark:stroke-white animate-ping"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
      />
      <circle
        cx="16"
        cy="16"
        r="7"
        className="stroke-gray-900 dark:stroke-white"
        strokeWidth="2"
        fill="none"
        style={{
          animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
          animationDelay: '0.5s'
        }}
        opacity="0.5"
      />

      {/* Center core */}
      <circle
        cx="16"
        cy="16"
        r="4"
        className="fill-gray-900 dark:fill-white"
      />

      {/* Inner pulse */}
      <circle
        cx="16"
        cy="16"
        r="2"
        className="fill-white dark:fill-black animate-pulse"
      />

      {/* Data points */}
      <g className="fill-gray-900 dark:fill-white">
        <circle cx="16" cy="8" r="1" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <circle cx="24" cy="16" r="1" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
        <circle cx="16" cy="24" r="1" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
        <circle cx="8" cy="16" r="1" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
      </g>
    </svg>
  );
}

export default LogoPulse;
