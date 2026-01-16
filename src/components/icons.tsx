import type { SVGProps } from 'react';

export function VisionXLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130 40"
      width="80"
      height="20"
      aria-label="VisionX Logo"
      {...props}
    >
      <text
        x="10"
        y="28"
        fontFamily="var(--font-headline), sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor"
        letterSpacing="1"
      >
        VISION
      </text>
      <text
        x="98"
        y="28"
        fontFamily="var(--font-headline), sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor"
      >
        X
      </text>
    </svg>
  );
}
