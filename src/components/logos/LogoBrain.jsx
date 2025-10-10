function LogoBrain({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Brain/Mind map - AI thinking */}
      <g className="stroke-gray-900 dark:stroke-white" strokeWidth="2" strokeLinecap="round">
        {/* Left hemisphere */}
        <path d="M12 8 C10 8, 8 10, 8 12 L8 20 C8 22, 10 24, 12 24" fill="none" />
        <path d="M12 8 C14 8, 15 10, 15 12 L15 20 C15 22, 14 24, 12 24" fill="none" />

        {/* Right hemisphere */}
        <path d="M20 8 C18 8, 17 10, 17 12 L17 20 C17 22, 18 24, 20 24" fill="none" />
        <path d="M20 8 C22 8, 24 10, 24 12 L24 20 C24 22, 22 24, 20 24" fill="none" />

        {/* Neural connections */}
        <line x1="12" y1="12" x2="20" y2="12" opacity="0.5" strokeWidth="1" />
        <line x1="12" y1="16" x2="20" y2="16" opacity="0.5" strokeWidth="1" />
        <line x1="12" y1="20" x2="20" y2="20" opacity="0.5" strokeWidth="1" />
      </g>

      {/* Synapses */}
      <g className="fill-gray-900 dark:fill-white">
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="20" cy="12" r="1.5" />
        <circle cx="12" cy="16" r="1.5" />
        <circle cx="20" cy="16" r="1.5" />
        <circle cx="12" cy="20" r="1.5" />
        <circle cx="20" cy="20" r="1.5" />
      </g>
    </svg>
  );
}

export default LogoBrain;
