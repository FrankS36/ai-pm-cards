function LogoPeak({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Mountain peak - reaching goals */}

      {/* Mountain layers */}
      <g className="fill-gray-900 dark:fill-white">
        {/* Back mountain */}
        <path d="M4 24 L11 14 L18 24 Z" opacity="0.4" />

        {/* Middle mountain */}
        <path d="M12 24 L20 10 L28 24 Z" opacity="0.6" />

        {/* Front mountain - main peak */}
        <path d="M8 24 L16 6 L24 24 Z" />
      </g>

      {/* Peak highlight */}
      <path
        d="M16 6 L13 12 L19 12 Z"
        className="fill-white dark:fill-black"
        opacity="0.5"
      />

      {/* Flag at summit */}
      <g className="stroke-gray-900 dark:stroke-white" strokeWidth="1.5">
        <line x1="16" y1="6" x2="16" y2="3" />
      </g>
      <path
        d="M16 3 L20 4 L16 5 Z"
        className="fill-gray-900 dark:fill-white"
      />

      {/* Base line */}
      <line
        x1="4"
        y1="24"
        x2="28"
        y2="24"
        className="stroke-gray-900 dark:stroke-white"
        strokeWidth="2"
      />
    </svg>
  );
}

export default LogoPeak;
