function LogoShield({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield outline */}
      <path
        d="M16 4 L24 8 L24 16 C24 22, 20 26, 16 28 C12 26, 8 22, 8 16 L8 8 Z"
        className="fill-gray-900 dark:fill-white stroke-gray-900 dark:stroke-white"
        strokeWidth="1.5"
      />

      {/* Inner shield details */}
      <path
        d="M16 7 L21 10 L21 16 C21 20, 19 23, 16 25 C13 23, 11 20, 11 16 L11 10 Z"
        className="fill-white dark:fill-black"
      />

      {/* AI checkmark */}
      <g className="stroke-gray-900 dark:stroke-white" strokeWidth="2" strokeLinecap="round">
        <path d="M13 16 L15 18 L19 13" fill="none" />
      </g>

      {/* Risk assessment dots */}
      <g className="fill-gray-900 dark:fill-white">
        <circle cx="13" cy="12" r="0.8" />
        <circle cx="16" cy="11" r="0.8" />
        <circle cx="19" cy="12" r="0.8" />
      </g>
    </svg>
  );
}

export default LogoShield;
