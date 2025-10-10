function LogoCompass({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle
        cx="16"
        cy="16"
        r="12"
        className="stroke-gray-900 dark:stroke-white"
        strokeWidth="2"
        fill="none"
      />

      {/* Compass needle - animated */}
      <g className="origin-center" style={{ transformOrigin: '16px 16px' }}>
        <g className="animate-[spin_8s_linear_infinite]" style={{ transformOrigin: '16px 16px' }}>
          {/* North needle (red/primary) */}
          <path
            d="M16 6 L18 16 L16 14 L14 16 Z"
            className="fill-gray-900 dark:fill-white"
          />
          {/* South needle */}
          <path
            d="M16 26 L14 16 L16 18 L18 16 Z"
            className="fill-gray-400 dark:fill-gray-600"
          />
        </g>
      </g>

      {/* Center dot */}
      <circle cx="16" cy="16" r="2" className="fill-gray-900 dark:fill-white" />

      {/* Cardinal points */}
      <g className="fill-gray-900 dark:fill-white text-[6px] font-bold">
        <text x="16" y="5" textAnchor="middle" className="fill-gray-900 dark:fill-white" fontSize="6" fontWeight="bold">N</text>
      </g>
    </svg>
  );
}

export default LogoCompass;
