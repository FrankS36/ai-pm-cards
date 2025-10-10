function LogoCards({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stack of index cards - literal representation */}

      {/* Back cards - staggered */}
      <rect
        x="6"
        y="10"
        width="18"
        height="14"
        rx="2"
        className="fill-gray-300 dark:fill-gray-700"
        opacity="0.4"
      />
      <rect
        x="7"
        y="9"
        width="18"
        height="14"
        rx="2"
        className="fill-gray-400 dark:fill-gray-600"
        opacity="0.6"
      />

      {/* Front card */}
      <rect
        x="8"
        y="8"
        width="18"
        height="14"
        rx="2"
        className="fill-gray-900 dark:fill-white stroke-gray-900 dark:stroke-white"
        strokeWidth="1"
      />

      {/* Card content - AI symbol */}
      <g className="fill-white dark:fill-black">
        {/* Three dots representing frameworks */}
        <circle cx="12" cy="13" r="1.5" />
        <circle cx="17" cy="13" r="1.5" />
        <circle cx="22" cy="13" r="1.5" />

        {/* Text lines */}
        <rect x="11" y="16" width="10" height="1" rx="0.5" />
        <rect x="11" y="18.5" width="7" height="1" rx="0.5" />
      </g>
    </svg>
  );
}

export default LogoCards;
