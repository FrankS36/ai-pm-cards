function LogoFlowchart({ className = "" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Flowchart/Process diagram style */}
      <g className="stroke-gray-900 dark:stroke-white" strokeWidth="1.5">
        {/* Connecting arrows */}
        <line x1="16" y1="9" x2="16" y2="13" />
        <line x1="16" y1="17" x2="16" y2="21" />

        {/* Diamond decision arrows */}
        <line x1="12" y1="25" x2="8" y2="29" />
        <line x1="20" y1="25" x2="24" y2="29" />

        {/* Arrow heads */}
        <path d="M16 13 L14.5 11.5 M16 13 L17.5 11.5" strokeLinecap="round" />
        <path d="M16 21 L14.5 19.5 M16 21 L17.5 19.5" strokeLinecap="round" />
      </g>

      {/* Start node - rounded rectangle */}
      <rect
        x="11"
        y="4"
        width="10"
        height="5"
        rx="2.5"
        className="fill-gray-900 dark:fill-white"
      />

      {/* Process node - rectangle */}
      <rect
        x="11"
        y="13"
        width="10"
        height="4"
        rx="0.5"
        className="fill-gray-900 dark:fill-white"
      />

      {/* Decision node - diamond */}
      <g className="fill-gray-900 dark:fill-white">
        <path d="M16 21 L12 25 L16 29 L20 25 Z" />
      </g>

      {/* End nodes - circles */}
      <circle cx="8" cy="29" r="2" className="fill-gray-900 dark:fill-white" />
      <circle cx="24" cy="29" r="2" className="fill-gray-900 dark:fill-white" />

      {/* Inner details for contrast */}
      <g className="fill-white dark:fill-black">
        <rect x="13" y="5.5" width="6" height="2" rx="1" />
        <rect x="13" y="14" width="6" height="2" rx="0.25" />
        <circle cx="16" cy="25" r="1.5" />
      </g>
    </svg>
  );
}

export default LogoFlowchart;
