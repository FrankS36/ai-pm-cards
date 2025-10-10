function LogoGears({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Large gear - rotating */}
      <g className="animate-[spin_6s_linear_infinite]" style={{ transformOrigin: '12px 16px' }}>
        <circle cx="12" cy="16" r="6" className="fill-gray-900 dark:fill-white" />
        <circle cx="12" cy="16" r="3" className="fill-white dark:fill-black" />
        {/* Teeth */}
        <rect x="11" y="9" width="2" height="2" className="fill-gray-900 dark:fill-white" />
        <rect x="17" y="15" width="2" height="2" className="fill-gray-900 dark:fill-white" />
        <rect x="11" y="21" width="2" height="2" className="fill-gray-900 dark:fill-white" />
        <rect x="5" y="15" width="2" height="2" className="fill-gray-900 dark:fill-white" />
      </g>

      {/* Small gear - counter-rotating */}
      <g className="animate-[spin_4s_linear_infinite_reverse]" style={{ transformOrigin: '22px 14px' }}>
        <circle cx="22" cy="14" r="4" className="fill-gray-900 dark:fill-white" />
        <circle cx="22" cy="14" r="2" className="fill-white dark:fill-black" />
        {/* Teeth */}
        <rect x="21" y="9" width="2" height="1.5" className="fill-gray-900 dark:fill-white" />
        <rect x="25" y="13" width="1.5" height="2" className="fill-gray-900 dark:fill-white" />
        <rect x="21" y="17" width="2" height="1.5" className="fill-gray-900 dark:fill-white" />
        <rect x="17" y="13" width="1.5" height="2" className="fill-gray-900 dark:fill-white" />
      </g>
    </svg>
  );
}

export default LogoGears;
