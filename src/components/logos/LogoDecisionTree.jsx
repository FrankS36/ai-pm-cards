function LogoDecisionTree({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cleaner Decision Tree - balanced and minimal */}

      {/* Tree branches */}
      <g className="stroke-gray-900 dark:stroke-white" strokeWidth="2" strokeLinecap="round">
        {/* Root to Level 1 */}
        <line x1="16" y1="8" x2="10" y2="14" />
        <line x1="16" y1="8" x2="22" y2="14" />

        {/* Level 1 to Leaves */}
        <line x1="10" y1="14" x2="7" y2="22" />
        <line x1="10" y1="14" x2="13" y2="22" />
        <line x1="22" y1="14" x2="19" y2="22" />
        <line x1="22" y1="14" x2="25" y2="22" />
      </g>

      {/* Decision nodes */}
      <g className="fill-gray-900 dark:fill-white">
        {/* Root node - diamond shape for decision */}
        <path d="M16 4 L18.5 6.5 L16 9 L13.5 6.5 Z" />

        {/* Level 1 decision nodes - squares */}
        <rect x="8" y="12" width="4" height="4" rx="1" />
        <rect x="20" y="12" width="4" height="4" rx="1" />

        {/* Leaf nodes - circles for outcomes */}
        <circle cx="7" cy="23" r="2.5" />
        <circle cx="13" cy="23" r="2.5" />
        <circle cx="19" cy="23" r="2.5" />
        <circle cx="25" cy="23" r="2.5" />
      </g>

      {/* Inner details for visual interest */}
      <g className="fill-white dark:fill-black">
        <circle cx="16" cy="6.5" r="1" />
        <rect x="9" y="13" width="2" height="2" rx="0.5" />
        <rect x="21" y="13" width="2" height="2" rx="0.5" />
        <circle cx="7" cy="23" r="1" />
        <circle cx="13" cy="23" r="1" />
        <circle cx="19" cy="23" r="1" />
        <circle cx="25" cy="23" r="1" />
      </g>
    </svg>
  );
}

export default LogoDecisionTree;
