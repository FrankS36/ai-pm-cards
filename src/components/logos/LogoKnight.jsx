function LogoKnight({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Chess knight - strategic thinking */}

      {/* Knight base */}
      <rect
        x="10"
        y="22"
        width="12"
        height="3"
        rx="1"
        className="fill-gray-900 dark:fill-white"
      />

      {/* Knight piece body */}
      <path
        d="M12 22 L12 18 C12 14, 14 12, 16 10 C17 9, 18 8, 19 7 L20 8 C20 10, 19 12, 18 14 L20 16 C21 16, 22 17, 22 18 L22 22 Z"
        className="fill-gray-900 dark:fill-white"
      />

      {/* Knight head details */}
      <g className="fill-white dark:fill-black">
        {/* Eye */}
        <circle cx="18" cy="11" r="1" />

        {/* Mane */}
        <path d="M16 9 L15 11 L16 13 L17 11 Z" opacity="0.7" />
      </g>

      {/* Ear */}
      <path
        d="M19 7 L20 6 L20.5 7 Z"
        className="fill-gray-900 dark:fill-white"
      />
    </svg>
  );
}

export default LogoKnight;
