import { useNavigate } from "react-router-dom";
import { cn } from "../utils/cn";
import type { ClassCard, Theme } from "../types";
import { HeartFilledIcon, HeartIcon, UserIcon } from "../ui/icons";

function formatLKR(value: number): string {
  return `LKR ${value.toLocaleString("en-LK")}`;
}

export function ClassCardItem({
  card,
  theme,
  isWishlisted,
  onToggleWishlist,
}: {
  card: ClassCard;
  theme: Theme;
  index?: number;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}) {
  const navigate = useNavigate();

  const goToClass = () => navigate(`/classes/${card.id}`);

  return (
    <div className="group flex flex-col">
      {/* Poster — clickable, navigates to single class page */}
      <button
        type="button"
        onClick={goToClass}
        aria-label={`View ${card.title}`}
        className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-left"
        style={{ borderRadius: "1.25rem" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(96,165,250,0.45), transparent 50%), repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 16px), linear-gradient(180deg, #0f172a, #1e3a8a 45%, #0f172a)",
          }}
          aria-hidden
        />

        {/* Subject pill */}
        <div className="absolute left-3 top-3 z-10 inline-flex items-center rounded-full bg-sky-500 px-3.5 py-1 text-[11px] font-bold text-white shadow-md">
          {card.subject}
        </div>

        {/* WEBINAR heading */}
        <div className="absolute inset-x-0 top-12 z-10 flex flex-col items-center text-center text-white">
          <h3 className="font-black tracking-tight text-[26px] leading-none">WEBINAR</h3>
          <div className="mt-1 inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em]">
            <span>Live Streaming</span>
            <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-red-600 text-[8px] text-white">●</span>
          </div>
        </div>

        {/* Presenter */}
        <div className="absolute left-3 top-[95px] z-10 flex items-center gap-2 text-white">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-white/15 text-white">
            <UserIcon className="h-3 w-3" />
          </span>
          <div>
            <p className="text-[8px] uppercase tracking-widest text-white/70">Presenter</p>
            <p className="text-[10px] font-semibold leading-tight">{card.teacher}</p>
          </div>
        </div>

        {/* Date pill */}
        <div className="absolute left-3 bottom-24 z-10 flex items-center gap-2">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-slate-900 shadow-md">
            <div className="text-center leading-none">
              <p className="text-[13px] font-black">{card.day.split(" ")[1]}</p>
              <p className="text-[8px] font-bold uppercase tracking-widest">{card.day.split(" ")[0]}</p>
            </div>
          </div>
          <div className="rounded-md bg-sky-500 px-2.5 py-1 text-white shadow-md">
            <p className="text-[10px] font-bold uppercase leading-none">Pukul.</p>
            <p className="text-[10px] font-extrabold leading-tight">20.00 WIB</p>
            <p className="text-[8px] font-semibold uppercase opacity-90">Selesai</p>
          </div>
        </div>

        {/* Speaker illustration */}
        <div className="absolute bottom-0 right-3 z-0 h-1/2 w-1/2">
          <svg viewBox="0 0 200 260" className="h-full w-full" preserveAspectRatio="xMidYMax meet" aria-hidden>
            <defs>
              <linearGradient id={`suitGrad-${card.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <path d="M30 260 L30 180 Q30 130 70 120 L130 120 Q170 130 170 180 L170 260 Z" fill={`url(#suitGrad-${card.id})`} />
            <path d="M85 120 L100 145 L115 120 L100 130 Z" fill="white" />
            <path d="M97 130 L103 130 L107 175 L100 195 L93 175 Z" fill="#1d4ed8" />
            <circle cx="100" cy="85" r="32" fill="#f1c6a0" />
            <path d="M68 82 Q68 52 100 50 Q132 52 132 82 L128 77 Q118 62 100 62 Q82 62 72 77 Z" fill="#3a2418" />
            <circle cx="90" cy="88" r="2" fill="#1e293b" />
            <circle cx="110" cy="88" r="2" fill="#1e293b" />
          </svg>
        </div>

        {/* BUSINESS CONFERENCE banner */}
        <div className="absolute inset-x-3 bottom-3 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-3 py-1.5 shadow-lg">
          <div className="flex-1">
            <p className="text-[13px] font-black uppercase tracking-tight text-white leading-none">Business</p>
            <p className="text-[11px] font-black uppercase tracking-tight text-white/90 leading-none">Conference</p>
          </div>
          <div className="h-7 w-px bg-white/40" />
          <div className="text-right">
            <p className="text-[8px] font-bold uppercase text-white/90 leading-tight">Business</p>
            <p className="text-[8px] font-bold uppercase text-white/90 leading-tight">Training</p>
            <p className="text-[8px] font-bold uppercase text-white/90 leading-tight">Start-Up</p>
            <p className="text-[8px] font-bold uppercase text-white/90 leading-tight">Strategies</p>
          </div>
        </div>

        {/* Wishlist button - stop propagation so it doesn't trigger card navigation */}
        <span
          role="button"
          tabIndex={0}
          aria-label="Toggle wishlist"
          onClick={(event) => {
            event.stopPropagation();
            onToggleWishlist();
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.stopPropagation();
              onToggleWishlist();
            }
          }}
          className={cn(
            "absolute right-3 top-3 z-20 grid h-8 w-8 cursor-pointer place-items-center rounded-full bg-white/95 text-sky-600 shadow-md transition-all duration-300",
            "lg:invisible lg:opacity-0 lg:translate-y-1 lg:group-hover:visible lg:group-hover:opacity-100 lg:group-hover:translate-y-0",
            "opacity-100 translate-y-0",
            isWishlisted ? "bg-sky-600 text-white" : "hover:bg-sky-50",
          )}
        >
          {isWishlisted ? <HeartFilledIcon className="h-4 w-4" /> : <HeartIcon className="h-4 w-4" />}
        </span>
      </button>

      {/* Body — clickable too */}
      <button
        type="button"
        onClick={goToClass}
        className={cn("mt-2 text-left", theme === "light" ? "bg-white" : "bg-slate-900")}
      >
        <p className={cn("text-[12px] font-medium", theme === "light" ? "text-slate-500" : "text-slate-400")}>
          {card.teacher}
        </p>
        <p
          className={cn(
            "mt-1 text-[16px] font-extrabold leading-snug sm:text-[17px]",
            theme === "light" ? "text-slate-900" : "text-white",
          )}
        >
          {card.title}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className={cn("text-[14px] font-extrabold", theme === "light" ? "text-sky-600" : "text-sky-400")}>
            {formatLKR(card.price)}
          </span>
          <span className={cn("text-[12px] font-medium line-through", theme === "light" ? "text-slate-400" : "text-slate-500")}>
            {formatLKR(card.oldPrice)}
          </span>
        </div>
      </button>
    </div>
  );
}
