function LogoHexagon({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Clean hexagonal pattern - perfectly centered */}

      {/* Central hexagon - perfectly centered at (16, 16) */}
      <path
        d="M16 9 L22 12.5 L22 19.5 L16 23 L10 19.5 L10 12.5 Z"
        className="fill-gray-900 dark:fill-white stroke-gray-900 dark:stroke-white"
        strokeWidth="1.5"
      />

      {/* Inner hexagon for depth */}
      <path
        d="M16 12 L19.5 14 L19.5 18 L16 20 L12.5 18 L12.5 14 Z"
        className="fill-white dark:fill-black"
      />

      {/* Surrounding hexagons - cleaner and fewer */}
      <g className="fill-gray-900 dark:fill-white" opacity="0.4">
        {/* Top */}
        <path d="M16 3 L19 4.8 L19 8.2 L16 10 L13 8.2 L13 4.8 Z" />

        {/* Top right */}
        <path d="M24 9 L27 10.8 L27 14.2 L24 16 L21 14.2 L21 10.8 Z" />

        {/* Bottom right */}
        <path d="M24 23 L27 24.8 L27 28.2 L24 30 L21 28.2 L21 24.8 Z" />

        {/* Top left */}
        <path d="M8 9 L11 10.8 L11 14.2 L8 16 L5 14.2 L5 10.8 Z" />

        {/* Bottom left */}
        <path d="M8 23 L11 24.8 L11 28.2 L8 30 L5 28.2 L5 24.8 Z" />
      </g>
    </svg>
  );
}

export default LogoHexagon;
