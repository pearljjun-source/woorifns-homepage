export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-label="(주)우리푸드앤드서비스 로고"
      role="img"
    >
      {/* Icon mark - original style */}
      <rect x="0" y="0" width="48" height="48" rx="4" fill="#1A5C2A" />
      <line x1="5" y1="13" x2="32" y2="13" stroke="#FFFFFF" strokeWidth="1.8" />
      <text
        x="6"
        y="32"
        fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
        fontSize="17"
        fontWeight="900"
        fill="#8BC34A"
        letterSpacing="-0.5"
      >
        woori
      </text>
      <text
        x="6"
        y="41"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontSize="5.5"
        fontWeight="400"
        fill="#A8D86C"
      >
        food and service Inc.
      </text>
    </svg>
  );
}

