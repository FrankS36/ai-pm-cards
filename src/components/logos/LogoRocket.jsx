function LogoRocket({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g className="animate-bounce" style={{ animation: 'bounce 3s ease-in-out infinite' }}>
        {/* Rocket body */}
        <path
          d="M16 4 L18 12 L18 20 L16 24 L14 20 L14 12 Z"
          className="fill-gray-900 dark:fill-white stroke-gray-900 dark:stroke-white"
          strokeWidth="1"
        />

        {/* Window */}
        <circle cx="16" cy="10" r="2" className="fill-white dark:fill-black" />

        {/* Fins */}
        <path d="M14 16 L10 20 L14 20 Z" className="fill-gray-900 dark:fill-white" />
        <path d="M18 16 L22 20 L18 20 Z" className="fill-gray-900 dark:fill-white" />

        {/* Nose cone */}
        <path d="M16 4 L12 8 L20 8 Z" className="fill-gray-900 dark:fill-white" />
      </g>

      {/* Animated flames */}
      <g className="animate-pulse" opacity="0.7">
        <path d="M14 24 L13 28 L15 26 Z" className="fill-gray-600 dark:fill-gray-400" />
        <path d="M16 24 L16 29 Z" className="stroke-gray-600 dark:stroke-gray-400" strokeWidth="2" />
        <path d="M18 24 L19 28 L17 26 Z" className="fill-gray-600 dark:fill-gray-400" />
      </g>
    </svg>
  );
}

export default LogoRocket;
