import type { SVGProps } from 'react';

export function AlphaVisionLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 40"
      width="100"
      height="20"
      aria-label="Alpha Vision Logo"
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
        ALPHA
      </text>
      <text
        x="95"
        y="28"
        fontFamily="var(--font-headline), sans-serif"
        fontSize="24"
        fontWeight="400"
        fill="currentColor"
        letterSpacing="1"
      >
        VISION
      </text>
    </svg>
  );
}
