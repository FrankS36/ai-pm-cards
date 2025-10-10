function LogoLightbulb({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bulb glass */}
      <path
        d="M16 6 C12 6, 10 9, 10 12 C10 14, 11 16, 12 18 L12 21 L20 21 L20 18 C21 16, 22 14, 22 12 C22 9, 20 6, 16 6 Z"
        className="fill-gray-900 dark:fill-white stroke-gray-900 dark:stroke-white"
        strokeWidth="1.5"
      />

      {/* Filament - animated glow */}
      <g className="animate-pulse">
        <path
          d="M14 12 L16 14 L18 12"
          className="stroke-white dark:stroke-black"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="16" cy="14" r="1.5" className="fill-white dark:fill-black" />
      </g>

      {/* Base */}
      <rect x="13" y="21" width="6" height="2" rx="0.5" className="fill-gray-900 dark:fill-white" />
      <rect x="14" y="23" width="4" height="2" rx="0.5" className="fill-gray-900 dark:fill-white" />
      <rect x="14.5" y="25" width="3" height="1" className="fill-gray-900 dark:fill-white" />

      {/* Light rays - animated */}
      <g className="stroke-gray-900 dark:stroke-white animate-pulse" strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <line x1="16" y1="6" x2="16" y2="3" />
        <line x1="24" y1="10" x2="27" y2="7" />
        <line x1="8" y1="10" x2="5" y2="7" />
      </g>
    </svg>
  );
}

export default LogoLightbulb;
