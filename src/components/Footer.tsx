import { useNavigate } from "react-router-dom";
import { cn } from "../utils/cn";
import { FOOTER_LINKS } from "../data";
import type { Theme } from "../types";
import { LogoMark, SOCIAL_ICONS } from "../ui/icons";

export function Footer({ theme }: { theme: Theme }) {
  const navigate = useNavigate();

  return (
    <footer
      className={cn(
        "mt-4 border-t transition-colors duration-300",
        theme === "light" ? "border-slate-200 bg-slate-50 text-slate-900" : "border-slate-800 bg-black text-white",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
          <button type="button" onClick={() => navigate("/classes")} className="flex items-center gap-3">
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-2xl",
                theme === "light" ? "bg-sky-50 text-sky-600" : "bg-slate-900 text-sky-400",
              )}
            >
              <LogoMark className="h-8 w-8" />
            </div>
            <div className="text-left">
              <div className={cn("text-xl font-black tracking-tight", theme === "light" ? "text-sky-600" : "text-sky-400")}>
                Learnex.LK
              </div>
              <p className={cn("text-[11px] font-medium", theme === "light" ? "text-slate-500" : "text-slate-400")}>
                Learn Smarter • Achieve Greater
              </p>
            </div>
          </button>

          <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-5">
            {FOOTER_LINKS.map((link, index) => (
              <div key={link.label} className="flex items-center gap-3 sm:gap-5">
                <button
                  type="button"
                  onClick={() => navigate(link.path)}
                  className={cn(
                    "text-sm font-medium transition",
                    theme === "light" ? "text-slate-700 hover:text-sky-600" : "text-slate-200 hover:text-sky-400",
                  )}
                >
                  {link.label}
                </button>
                {index < FOOTER_LINKS.length - 1 && (
                  <span className={cn("h-5 w-px", theme === "light" ? "bg-slate-300" : "bg-slate-700")} />
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SOCIAL_ICONS.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                onClick={(event) => event.preventDefault()}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-white transition hover:bg-sky-500"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "mt-8 flex flex-col items-center gap-2 border-t pt-6 text-sm sm:flex-row sm:justify-between",
            theme === "light" ? "border-slate-200" : "border-slate-800",
          )}
        >
          <p className={cn("font-medium", theme === "light" ? "text-slate-700" : "text-slate-300")}>2025 Learnex.lk</p>
          <p className={cn("font-medium", theme === "light" ? "text-slate-700" : "text-slate-300")}>
            Design and Develop By{" "}
            <span className={cn("font-bold", theme === "light" ? "text-sky-600" : "text-sky-400")}>Learnex Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
