import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ============================================
   BRAND / NAV
   ============================================ */

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path d="M8 18L32 8l24 10-24 10L8 18Z" fill="currentColor" opacity="0.95" />
      <path
        d="M18 25v14c0 7.18 6.27 13 14 13s14-5.82 14-13V25"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M56 18v17" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M56 35c-2.5 0-4.5 2.24-4.5 5s2 5 4.5 5 4.5-2.24 4.5-5-2-5-4.5-5Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...base}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  );
}

export function GridIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
    </svg>
  );
}

export function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...base}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

/* ============================================
   ACTIONS
   ============================================ */

export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...base}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4.35-4.35" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
    </svg>
  );
}

export function HeartFilledIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 20.5s-7-4.45-7-10.25C5 7.35 7.24 5 10 5c1.65 0 3.04.81 4 2.05C14.96 5.81 16.35 5 18 5c2.76 0 5 2.35 5 5.25 0 5.8-7 10.25-7 10.25H12Z" />
    </svg>
  );
}

export function CartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...base}>
      <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.55H18a2 2 0 0 0 1.96-1.61L21 8H7" />
      <circle cx="10" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.8-3.6 5-5.5 8-5.5S18.2 16.4 20 20" />
    </svg>
  );
}

export function HelpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.75 9.25a2.45 2.45 0 1 1 4.15 1.77c-.87.81-1.9 1.45-1.9 3" />
      <circle cx="12" cy="17.2" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.5 14.2A8.9 8.9 0 0 1 9.8 3.5 9 9 0 1 0 20.5 14.2Z" />
    </svg>
  );
}

export function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.55 1.55M17.75 17.75l1.55 1.55M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.55-1.55M17.75 6.25l1.55-1.55" />
    </svg>
  );
}

export function SlidersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="4" x2="4" y1="21" y2="14" />
      <line x1="4" x2="4" y1="10" y2="3" />
      <line x1="12" x2="12" y1="21" y2="12" />
      <line x1="12" x2="12" y1="8" y2="3" />
      <line x1="20" x2="20" y1="21" y2="16" />
      <line x1="20" x2="20" y1="12" y2="3" />
      <line x1="2" x2="6" y1="14" y2="14" />
      <line x1="10" x2="14" y1="8" y2="8" />
      <line x1="18" x2="22" y1="16" y2="16" />
    </svg>
  );
}

/* ============================================
   CHEVRONS / ARROWS / CLOSE
   ============================================ */

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

/* ============================================
   MISC
   ============================================ */

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="m12 2.5 2.9 6 6.6.95-4.8 4.65 1.15 6.65L12 17.5l-5.85 3.25L7.3 14.1 2.5 9.45l6.6-.95L12 2.5Z" />
    </svg>
  );
}

export function FeatureStarBadge({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <span className={cn("flex shrink-0 items-center justify-center rounded-full bg-[#1a7be8] text-white", className)}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[62%] w-[62%]" aria-hidden="true">
        <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" />
        <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" transform="rotate(45 12 12)" />
      </svg>
    </span>
  );
}

// Tiny local cn to avoid a circular import with utils/cn in this icons module
function cn(...values: Array<string | false | undefined>) {
  return values.filter(Boolean).join(" ");
}

/* ============================================
   SOCIAL — outline style (used in tutor cards)
   ============================================ */

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.71 3.71 0 0 1-1.38-.9 3.71 3.71 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.87 5.87 0 0 0-2.13 1.38A5.87 5.87 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.87 5.87 0 0 0 1.38 2.13c.66.66 1.32 1.07 2.13 1.38.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.87 5.87 0 0 0 2.13-1.38 5.87 5.87 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.38-2.13A5.87 5.87 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84ZM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm6.4-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

/* ============================================
   SOCIAL — solid circle style (used in footer)
   ============================================ */

export function FacebookCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path
        d="M13.2 16h-1.9v-5.4h1.7l.2-1.95h-1.9V7.3c0-.5.2-.8.9-.8h1V4.8c-.2 0-.8-.08-1.55-.08-1.6 0-2.65 1-2.65 2.8v1.15H9v1.95h1.9V16h2.3v-5.4Z"
        fill="white"
      />
    </svg>
  );
}

export function InstagramCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="1.8" />
      <rect x="6.5" y="6.5" width="11" height="11" rx="3" fill="none" stroke="white" strokeWidth="1.8" />
      <circle cx="16.8" cy="7.2" r="1.1" fill="white" />
    </svg>
  );
}

export function WhatsAppCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path
        d="M12.8 6.5a6.3 6.3 0 0 0-5.5 9.4l-.4 2.3 2.4-.6a6.3 6.3 0 1 0 3.5-11.1ZM15.5 14.2c-.2 0-1.2-.6-1.4-.6s-.2 0-.3.2c-.1.2-.4.6-.5.7-.1.1-.2.1-.3.08a2 2 0 0 1-.95-.5c-.9-.9-1.5-2-1.5-2.3 0-.2.1-.3.2-.4.1-.1.2-.2.3-.3.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.2-.3.3-.4.1-.1.2-.2.3-.2s.2 0 .3.1c.2.1.9 1.1 1.1 1.3.1.1.2.2.2.4 0 .2-.1.3-.2.5-.1.1-.2.2-.3.3-.1.1-.2.2-.3.3-.1.1-.2.3-.3.4-.1.1-.2.2-.3.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.2-.1.1-.1.2-.1.2-.1 0-.1 0-.1.1-.1 0 0 .2.1.3.1.1.2.3.4.6.2.3.5.7 1 1.2.6.6 1.2 1.1 1.6 1.4.4.2.7.4.9.5.4.2.8.3 1.1.2.4-.1 1.1-.5 1.2-1 .2-.5.2-.9.2-1 .1-.1.1-.2 0-.3-.1-.1-.2-.2-.3-.3Z"
        fill="white"
      />
    </svg>
  );
}

export function TikTokCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path
        d="M12.9 7.4c.2 1.4 1 2.5 2.3 2.8v1.9c-.9 0-1.7-.3-2.4-.8v4a3.8 3.8 0 1 1-3.8-3.8c.2 0 .5 0 .7.1v2a1.9 1.9 0 1 0 1.3 1.8V7.4h1.9Z"
        fill="white"
      />
    </svg>
  );
}

export const SOCIAL_ICONS: Array<{ label: string; Icon: ({ className }: { className?: string }) => ReactNode }> = [
  { label: "Facebook", Icon: FacebookCircleIcon },
  { label: "Instagram", Icon: InstagramCircleIcon },
  { label: "WhatsApp", Icon: WhatsAppCircleIcon },
  { label: "TikTok", Icon: TikTokCircleIcon },
];
