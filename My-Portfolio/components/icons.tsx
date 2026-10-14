import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { name?: string };
export function Icon({ name = "arrow", ...props }: Props) {
  const paths: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M12 5l7 7-7 7" />
      </>
    ),
    northeast: (
      <>
        <path d="M6 18 18 6M6 6h12v12" />
      </>
    ),
    down: (
      <>
        <path d="M12 4v16m-6-6 6 6 6-6" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    code: (
      <>
        <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />
      </>
    ),
    window: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18m-14-2h.01M10 7h.01" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="12" height="13" rx="2" />
        <path d="M16 8V3H3v13h5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    github: (
      <>
        <path d="M9 19c-4 1-4-2-6-2m12 4v-3.4c0-1 .1-1.5-.5-2.1 3.3-.4 6.5-1.6 6.5-7a5.5 5.5 0 0 0-1.5-3.8A5.1 5.1 0 0 0 19.4 1S18.2.6 15.5 2.5a13 13 0 0 0-7 0C5.8.6 4.6 1 4.6 1a5.1 5.1 0 0 0-.1 3.7A5.5 5.5 0 0 0 3 8.5c0 5.4 3.2 6.6 6.5 7-.6.6-.6 1.4-.5 2.1V21" />
      </>
    ),
    linkedin: (
      <>
        <path d="M5 9v12M5 4v.01M10 21V9h5v2c1-3 6-3 6 2v8m-6-8v8" />
      </>
    ),
    ball: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m12 8 4 3-1.5 5h-5L8 11l4-3Zm0 0V3m4 8 5-2m-6.5 7 3 3.5M9.5 16l-3 3.5M8 11 3 9" />
      </>
    ),
    game: (
      <>
        <path d="M7 7h10c3 0 6 12 3 13-2 1-4-4-5-4H9c-1 0-3 5-5 4C1 19 4 7 7 7Z" />
        <path d="M8 10v5m-2.5-2.5h5M16 11h.01M18 14h.01" />
      </>
    ),
    book: (
      <>
        <path d="M12 5v16M3 3c4-1 7 0 9 2 2-2 5-3 9-2v15c-4-1-7 0-9 3-2-3-5-4-9-3V3Z" />
      </>
    ),
  };
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}

export function Spark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 2v36M2 20h36M7.3 7.3l25.4 25.4M7.3 32.7 32.7 7.3"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}
