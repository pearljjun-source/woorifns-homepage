export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 290 80"
      fill="none"
      className={className}
      aria-label="우리푸드앤드서비스 로고"
      role="img"
    >
      {/* Dark green square background */}
      <rect x="0" y="0" width="80" height="80" rx="4" fill="#1A5C2A" />

      {/* White horizontal line */}
      <line x1="8" y1="22" x2="52" y2="22" stroke="#FFFFFF" strokeWidth="2.5" />

      {/* "woori" text inside the square */}
      <text
        x="10"
        y="52"
        fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
        fontSize="28"
        fontWeight="900"
        fill="#8BC34A"
        letterSpacing="-0.5"
      >
        woori
      </text>

      {/* "food and service Inc." below */}
      <text
        x="10"
        y="64"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontSize="8.5"
        fontWeight="400"
        fill="#A8D86C"
      >
        food and service Inc.
      </text>

      {/* Company name in Korean */}
      <text
        x="92"
        y="40"
        fontFamily="'Noto Sans KR', sans-serif"
        fontSize="20"
        fontWeight="700"
        fill="#1A5C2A"
      >
        우리푸드앤드서비스
      </text>

      {/* Tagline */}
      <text
        x="92"
        y="62"
        fontFamily="'Noto Sans KR', sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#3A3A3A"
      >
        신선한 식사, 건강한 내일
      </text>
    </svg>
  );
}
