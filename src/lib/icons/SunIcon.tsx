export default function SunIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="hover:cursor-pointer"
      onClick={onClick}
      width={30}
      height={30}
      stroke="currentColor"
      style={{ cursor: "pointer" }}
    >
      <circle cx={12} cy={32} r={6} fill="currentColor">
        <animate
          fill="freeze"
          attributeName="cy"
          dur="0.6s"
          values="32;12"
        ></animate>
      </circle>
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray={2}
        strokeDashoffset={2}
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path d="M0 0">
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.7s"
            dur="0.2s"
            values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.2s"
            values="2;0"
          ></animate>
        </path>
        <path d="M0 0">
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.9s"
            dur="0.2s"
            values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.9s"
            dur="0.2s"
            values="2;0"
          ></animate>
        </path>
        <animateTransform
          attributeName="transform"
          dur="30s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        ></animateTransform>
      </g>
    </svg>
  );
}
