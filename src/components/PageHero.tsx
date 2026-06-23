import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import { useTheme } from "./ThemeContext";
import { WaterTexture } from "./WaterTexture";

type PageHeroProps = {
  title: ReactNode;
  tagline: string;
  /** Tailwind responsive font-size classes for the title, e.g. "text-[14vw] sm:text-[86px] md:text-[108px] lg:text-[150px]" */
  titleSizeClassName?: string;
  /** Max width of the inner content wrapper. Defaults to 1400px to match the Classes page. */
  maxWidthClassName?: string;
};

/**
 * Standard top banner used across every page: a deep-to-bright blue gradient
 * with a soft, silky water/wave texture layered on top, a large page title,
 * and a wide pill with an italic tagline underneath.
 */
export function PageHero({
  title,
  tagline,
  titleSizeClassName = "text-[16vw] sm:text-[120px] md:text-[150px] lg:text-[170px]",
  maxWidthClassName = "max-w-[1400px]",
}: PageHeroProps) {
  const theme = useTheme();

  return (
    <WaterTexture>
      <div className={cn("relative mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:px-8", maxWidthClassName)}>
        <div className="text-center">
          <h1 className={cn("font-black leading-none tracking-tight", titleSizeClassName, theme === "light" ? "text-slate-800" : "text-white")}>
            {title}
          </h1>
          <div
            className={cn(
              "mx-auto -mt-6 inline-flex w-full max-w-[760px] items-center justify-center rounded-full border-2 px-6 py-2 sm:-mt-8 sm:px-8 sm:py-3 backdrop-blur-sm",
              theme === "light" ? "border-sky-200 bg-white/85 text-slate-700" : "border-blue-700 bg-slate-950/70 text-white",
            )}
          >
            <p className="font-serif italic text-base sm:text-lg md:text-xl">{tagline}</p>
          </div>
        </div>
      </div>
    </WaterTexture>
  );
}