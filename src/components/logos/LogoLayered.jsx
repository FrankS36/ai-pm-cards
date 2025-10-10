function LogoLayered({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Back card - subtle */}
      <rect
        x="4"
        y="8"
        width="20"
        height="20"
        rx="3"
        className="fill-gray-300 dark:fill-gray-700"
        opacity="0.4"
      />

      {/* Middle card */}
      <rect
        x="6"
        y="6"
        width="20"
        height="20"
        rx="3"
        className="fill-gray-400 dark:fill-gray-600"
        opacity="0.6"
      />

      {/* Front card - main */}
      <rect
        x="8"
        y="4"
        width="20"
        height="20"
        rx="3"
        className="fill-gray-900 dark:fill-white stroke-gray-900 dark:stroke-white"
        strokeWidth="0.5"
      />

      {/* AI Circuit pattern on front card */}
      <g className="fill-white dark:fill-black" opacity="0.9">
        {/* Neural network nodes */}
        <circle cx="13" cy="10" r="1.2" />
        <circle cx="18" cy="10" r="1.2" />
        <circle cx="23" cy="10" r="1.2" />

        <circle cx="13" cy="14" r="1.2" />
        <circle cx="18" cy="14" r="1.2" />
        <circle cx="23" cy="14" r="1.2" />

        <circle cx="15.5" cy="18" r="1.2" />
        <circle cx="20.5" cy="18" r="1.2" />

        {/* Connection lines */}
        <line x1="13" y1="10" x2="13" y2="14" className="stroke-white dark:stroke-black" strokeWidth="0.8" opacity="0.6" />
        <line x1="18" y1="10" x2="18" y2="14" className="stroke-white dark:stroke-black" strokeWidth="0.8" opacity="0.6" />
        <line x1="23" y1="10" x2="23" y2="14" className="stroke-white dark:stroke-black" strokeWidth="0.8" opacity="0.6" />

        <line x1="13" y1="14" x2="15.5" y2="18" className="stroke-white dark:stroke-black" strokeWidth="0.8" opacity="0.6" />
        <line x1="18" y1="14" x2="15.5" y2="18" className="stroke-white dark:stroke-black" strokeWidth="0.8" opacity="0.6" />
        <line x1="18" y1="14" x2="20.5" y2="18" className="stroke-white dark:stroke-black" strokeWidth="0.8" opacity="0.6" />
        <line x1="23" y1="14" x2="20.5" y2="18" className="stroke-white dark:stroke-black" strokeWidth="0.8" opacity="0.6" />
      </g>
    </svg>
  );
}

export default LogoLayered;
