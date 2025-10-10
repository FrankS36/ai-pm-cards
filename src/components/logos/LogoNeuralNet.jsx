function LogoNeuralNet({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Simplified Neural Network - cleaner structure */}

      {/* Connection lines - more selective and cleaner */}
      <g className="stroke-gray-900 dark:stroke-white" strokeWidth="1.2" strokeLinecap="round" opacity="0.25">
        {/* Only key connections shown */}
        <line x1="8" y1="12" x2="16" y2="10" />
        <line x1="8" y1="12" x2="16" y2="16" />
        <line x1="8" y1="12" x2="16" y2="22" />

        <line x1="8" y1="20" x2="16" y2="10" />
        <line x1="8" y1="20" x2="16" y2="16" />
        <line x1="8" y1="20" x2="16" y2="22" />

        <line x1="16" y1="10" x2="24" y2="16" />
        <line x1="16" y1="16" x2="24" y2="16" />
        <line x1="16" y1="22" x2="24" y2="16" />
      </g>

      {/* Nodes with cleaner styling */}
      <g className="fill-gray-900 dark:fill-white">
        {/* Input Layer */}
        <circle cx="8" cy="12" r="2.5" />
        <circle cx="8" cy="20" r="2.5" />

        {/* Hidden Layer */}
        <circle cx="16" cy="10" r="2.5" />
        <circle cx="16" cy="16" r="2.5" />
        <circle cx="16" cy="22" r="2.5" />

        {/* Output Layer */}
        <circle cx="24" cy="16" r="3" />
      </g>

      {/* Inner details for depth */}
      <g className="fill-white dark:fill-black">
        <circle cx="8" cy="12" r="1" />
        <circle cx="8" cy="20" r="1" />
        <circle cx="16" cy="16" r="1" />
        <circle cx="24" cy="16" r="1.5" />
      </g>
    </svg>
  );
}

export default LogoNeuralNet;
