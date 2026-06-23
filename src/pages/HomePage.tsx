import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "../components/Counter";
import { cn } from "../utils/cn";
import { useTheme } from "../components/ThemeContext";

/**
 * Home page: marketing landing page with hero, marquee, about, stats,
 * feature grid, steps + video, and testimonials sections.
 * Reached via the "Home" nav link (separate from the Classes catalog).
 */
export default function HomePage() {
  const theme = useTheme();
  const navigate = useNavigate();

  const ARC_W = 1400;
  const ARC_H = 520;

  const marqueeItems = Array.from({ length: 8 }, (_, i) => i);

  const TapIcon = () => (
    <svg
      className="h-[55%] w-[55%] text-white"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="30" y="6" width="24" height="24" rx="2" />
      <path d="M 42 6 L 42 30 L 54 30" />
      <path d="M 22 38 L 22 58 Q 22 62 26 62 L 42 62 Q 46 62 46 58 L 46 44" />
      <path d="M 22 46 L 8 46 Q 4 46 4 42 L 4 30 Q 4 26 8 26 L 22 26" />
    </svg>
  );

  const MarqueeItem = ({ idx: _idx }: { idx: number }) => (
    <div className="marquee-item group flex w-[clamp(110px,15vw,180px)] shrink-0 flex-col items-center text-center">
      <div className="flex h-[clamp(48px,6vw,78px)] w-[clamp(48px,6vw,78px)] items-center justify-center rounded-full bg-[#a3c8f7] shadow-[inset_0_-3px_6px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-out group-hover:scale-110">
        <TapIcon />
      </div>
      <p
        className="mt-[clamp(5px,0.7vw,8px)] font-extrabold uppercase tracking-[0.08em] text-white/90 leading-tight"
        style={{ fontSize: "clamp(9px, 0.95vw, 12px)" }}
      >
        Lorem Ipsum Is
        <br />
        Simply
      </p>
    </div>
  );

  const sampleFeatureImage =
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800";

  const ImageSlot = ({ className = "" }: { className?: string }) => (
    <img src={sampleFeatureImage} alt="Placeholder" className={`h-full w-full object-cover ${className}`} />
  );

  const FeatureStar = () => (
    <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#1a7be8] text-white">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[62%] w-[62%]" aria-hidden="true">
        <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" />
        <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" transform="rotate(45 12 12)" />
      </svg>
    </span>
  );

  const ChooseIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-[52%] w-[52%]">
      <rect x="18" y="6" width="14" height="14" rx="1.5" />
      <path d="M25 6 L25 20 L34 20" />
      <path d="M12 28 L12 42 Q12 44 14 44 L22 44 Q24 44 24 42 L24 34" />
      <path d="M12 34 L6 34 Q4 34 4 32 L4 24 Q4 22 6 22 L12 22" />
    </svg>
  );
  const PreviewIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-[52%] w-[52%]">
      <rect x="8" y="6" width="18" height="24" rx="1.5" />
      <path d="M12 12 L22 12" />
      <path d="M12 17 L22 17" />
      <circle cx="28" cy="32" r="10" />
      <circle cx="28" cy="32" r="3.5" />
      <path d="M22 38 L18 42" />
    </svg>
  );
  const PayIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-[52%] w-[52%]">
      <rect x="6" y="14" width="30" height="20" rx="2" />
      <path d="M6 20 L36 20" />
      <path d="M26 32 Q30 36 34 34" />
      <path d="M30 32 L30 40" />
      <path d="M26 40 L34 40" />
    </svg>
  );

  const [videoOpen, setVideoOpen] = useState(false);
  const sampleVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

  const TestimonialCard = ({ long = false }: { long?: boolean }) => (
    <article className="tcard rounded-[clamp(18px,2vw,26px)] bg-[#e7f1ff] dark:bg-slate-800 px-[clamp(18px,2vw,26px)] py-[clamp(20px,2.2vw,28px)]">
      <div className="flex items-center gap-[clamp(12px,1.4vw,18px)]">
        <div className="aspect-square w-[clamp(54px,5vw,72px)] shrink-0 overflow-hidden rounded-full bg-[#2f7df0]">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200"
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-['Montserrat'] font-extrabold leading-tight text-[#2d3649] dark:text-white" style={{ fontSize: "clamp(16px, 1.6vw, 20px)" }}>
            Lorem Ipsum
          </h3>
          <p className="mt-1 font-['Montserrat'] font-medium text-[#5a6678] dark:text-slate-400" style={{ fontSize: "clamp(11px, 1vw, 13px)" }}>
            It Was Popularised In The
          </p>
        </div>
      </div>
      <p
        className="mt-[clamp(16px,2vw,26px)] font-['Montserrat'] font-medium leading-relaxed text-[#3f4b5b] dark:text-slate-300"
        style={{ fontSize: "clamp(11px, 1vw, 13px)" }}
      >
        It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages
        {long ? " It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages" : " It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages"}
      </p>
      <div className="mt-[clamp(16px,2vw,24px)] text-right">
        <p className="font-['Montserrat'] font-extrabold text-[#2d3649] dark:text-white" style={{ fontSize: "clamp(12px, 1.1vw, 14px)" }}>
          Country
        </p>
        <p className="mt-1 font-['Montserrat'] font-bold text-[#1a7be8]" style={{ fontSize: "clamp(12px, 1.1vw, 14px)" }}>
          Exam Board
        </p>
      </div>
    </article>
  );

  return (
    <main
      className={cn("relative w-full overflow-hidden")}
      style={{
        background: theme === "light"
          ? "linear-gradient(to bottom, #F5F9FF 5%, #1877F2 15%,  #f0f7ff 50%)"
          : "linear-gradient(to bottom, #0A1929 5%, #1877F2 15%,  #070b18 50%)"
      }}
    >
      <section className="relative mx-auto w-full max-w-[1680px]">
        {/* ============ HEADING ============ */}
        <div className="relative z-20 flex items-center justify-center px-4" style={{ paddingTop: "clamp(28px, 4.5vw, 80px)" }}>
          <h1
            className="flex flex-wrap items-baseline justify-center gap-x-[clamp(4px,1.5vw,20px)] gap-y-0 whitespace-nowrap font-['Montserrat'] font-extrabold leading-[0.9] tracking-[0.06em]"
            style={{ fontSize: "clamp(26px, 8.5vw, 128px)" }}
          >
            <span className="bg-gradient-to-r from-[#2d3649] via-[#166bc5] via-60% to-[#8fd0f4] bg-clip-text text-transparent">
              EXPERT
            </span>
            <span className="bg-gradient-to-r from-[#d7ecff] via-[#2589df] via-55% to-[#2d3545] bg-clip-text text-transparent">
              CURATED
            </span>
          </h1>
        </div>

        {/* ============ ARC + CONTENT ============ */}
        <div className="relative left-1/2 mx-auto w-[150vw] -translate-x-1/2 aspect-auto max-[349px]:left-auto max-[349px]:w-full max-[349px]:-translate-x-0 max-[349px]:!aspect-auto max-[349px]:mt-[-12px] min-[350px]:mt-[clamp(16px,4vw,64px)] min-[700px]:left-auto min-[700px]:w-full min-[700px]:translate-x-0 min-[700px]:aspect-[1400/520] md:w-[90%] lg:w-[80%]">
          <svg className="absolute inset-0 h-full w-full max-[349px]:hidden" viewBox={`0 0 ${ARC_W} ${ARC_H}`} preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="arc-stroke-fade" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={theme === "light" ? "#2b83e5" : "#3b8ff0"} stopOpacity="0" />
                <stop offset="15%" stopColor={theme === "light" ? "#2b83e5" : "#3b8ff0"} stopOpacity="1" />
                <stop offset="85%" stopColor={theme === "light" ? "#2b83e5" : "#3b8ff0"} stopOpacity="1" />
                <stop offset="100%" stopColor={theme === "light" ? "#2b83e5" : "#3b8ff0"} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`M 0 ${ARC_H} A ${ARC_W / 2} ${ARC_H} 0 0 1 ${ARC_W} ${ARC_H} Z`}
              fill={theme === "light" ? "#E3F2FD" : "#0E263E"}
              stroke="url(#arc-stroke-fade)"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div
            className="relative z-20 mx-auto flex w-full max-w-[920px] max-[699px]:max-w-[calc(100vw-32px)] flex-col items-center px-6 text-center sm:px-8"
            style={{ paddingTop: "clamp(72px, 12vw, 180px)", paddingBottom: "clamp(36px, 5vw, 60px)" }}
          >
            <h2 className="font-['Great_Vibes'] leading-none text-[#334151] dark:text-slate-100" style={{ fontSize: "clamp(24px, 3.8vw, 48px)" }}>
              Lorem Ipsum Is Simply Dummy Text
            </h2>

            <p
              className="mt-[clamp(14px,2vw,36px)] max-w-[820px] font-semibold leading-snug tracking-[-0.02em] text-[#404a56] dark:text-slate-200"
              style={{ fontSize: "clamp(12px, 1.4vw, 17px)" }}
            >
              <span className="min-[700px]:block">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has{" "}
              </span>
              <span className="min-[700px]:block">been the industry&apos;s standard dummy text ever since the 1500s</span>
            </p>

            <div className="bg-[#c5d1dc] dark:bg-white/25" style={{ marginTop: "clamp(18px, 2vw, 36px)", height: "2px", width: "clamp(180px, 32vw, 480px)" }} />

            <div className="flex flex-wrap items-center justify-center" style={{ marginTop: "clamp(16px, 2vw, 32px)", gap: "clamp(8px, 1vw, 14px)" }}>
              <button
                onClick={() => navigate("/classes")}
                className="rounded-full bg-[#137ee7] font-bold leading-none text-white shadow-[0_2px_6px_rgba(31,109,207,0.35)] transition hover:bg-[#0d70d2]"
                style={{
                  height: "clamp(36px, 3.6vw, 50px)",
                  paddingLeft: "clamp(20px, 2.5vw, 36px)",
                  paddingRight: "clamp(20px, 2.5vw, 36px)",
                  fontSize: "clamp(13px, 1.45vw, 20px)",
                }}
              >
                Explore Classes
              </button>
              <button
                onClick={() => navigate("/tutors")}
                className="rounded-full border-[2.5px] border-[#137ee7] bg-transparent font-bold leading-none text-[#1477d5] transition hover:bg-[#137ee7] hover:text-white"
                style={{
                  height: "clamp(36px, 3.6vw, 50px)",
                  paddingLeft: "clamp(20px, 2.5vw, 36px)",
                  paddingRight: "clamp(20px, 2.5vw, 36px)",
                  fontSize: "clamp(13px, 1.45vw, 20px)",
                }}
              >
                Our Tutors
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INFINITE MARQUEE BAR ============ */}
      <div
        className="marquee-wrap relative w-full overflow-hidden py-[clamp(12px,1.4vw,20px)]"
        style={{ background: "linear-gradient(180deg, #1a7be8 0%, #2b8aef 50%, #1a7be8 100%)" }}
      >
        <div className="marquee-track flex w-max items-center">
          {marqueeItems.map((idx) => (
            <MarqueeItem key={`a-${idx}`} idx={idx} />
          ))}
          {marqueeItems.map((idx) => (
            <MarqueeItem key={`b-${idx}`} idx={idx} />
          ))}
        </div>
      </div>

      {/* ============ ABOUT US SECTION ============ */}
      <section className={cn("relative w-full py-[clamp(48px,6vw,96px)] about-section", theme === "light" ? "bg-[#f7f9fc]" : "bg-slate-900")}>
        <div className="mx-auto w-full max-w-[1400px] px-[clamp(16px,4vw,48px)]">
          <div className="about-grid grid grid-cols-1 items-center gap-[clamp(40px,5vw,80px)] lg:grid-cols-2">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <FeatureStar />
                <span className="font-['Montserrat'] font-extrabold uppercase tracking-[0.22em] text-[#1a7be8]" style={{ fontSize: "clamp(12px, 1.1vw, 15px)" }}>
                  About Us
                </span>
                <div className="h-[1.5px] flex-1 bg-gradient-to-r from-[#1a7be8]/70 to-transparent" />
              </div>

              <h2
                className="about-heading mt-[clamp(12px,1.4vw,22px)] font-['Montserrat'] font-extrabold leading-[1.05] tracking-[-0.01em] text-[#2d3649] dark:text-white"
                style={{ fontSize: "clamp(24px, 3.2vw, 44px)" }}
              >
                Lorem Ipsum Is Simply Dummy Text
              </h2>

              <div className="mt-[clamp(16px,1.8vw,28px)] space-y-[clamp(10px,1vw,16px)]">
                <p className="font-['Montserrat'] font-medium leading-[1.7] text-[#4a5769] dark:text-slate-300" style={{ fontSize: "clamp(11px, 1.05vw, 13.5px)" }}>
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
                  Industry&apos;s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of
                  Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But
                  Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.
                </p>
                <p className="font-['Montserrat'] font-medium leading-[1.7] text-[#4a5769] dark:text-slate-300" style={{ fontSize: "clamp(11px, 1.05vw, 13.5px)" }}>
                  It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum
                  Passages, And More Recently With Desktop Publishing Software Like Aldus PageMaker Including
                  Versions Of Lorem Ipsum.
                </p>
              </div>

              <div className="about-rule mt-[clamp(24px,2.8vw,40px)] ml-auto h-[2px] bg-gradient-to-l from-[#1a7be8] to-transparent" style={{ width: "clamp(260px, 42vw, 460px)" }} />

              <div className="mt-[clamp(18px,2.2vw,32px)] flex justify-end">
                <button
                  onClick={() => navigate("/about")}
                  className="rounded-full bg-[#1a7be8] px-[clamp(28px,3vw,44px)] font-['Montserrat'] font-bold text-white shadow-[0_4px_14px_rgba(26,123,232,0.35)] transition hover:bg-[#1567c9]"
                  style={{ height: "clamp(44px, 4vw, 56px)", fontSize: "clamp(14px, 1.3vw, 17px)" }}
                >
                  Read More
                </button>
              </div>
            </div>

            <div className="about-image-wrap relative mx-auto w-full max-w-[520px]">
              <div className="about-image-bottom relative aspect-[4/5] w-[88%] ml-auto overflow-hidden rounded-[clamp(14px,1.8vw,20px)] shadow-[0_20px_60px_rgba(26,123,232,0.18)]">
                <img
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Developer working on code"
                  className="h-full w-full object-cover"
                />
              </div>

              <div
                className="about-image-top absolute left-0 top-[clamp(8px,1.2vw,20px)] w-[clamp(170px,34vw,280px)] rotate-[-4deg] overflow-hidden rounded-[clamp(12px,1.6vw,18px)] border-[4px] border-white shadow-[0_14px_36px_rgba(0,0,0,0.22)]"
                style={{ aspectRatio: "4 / 3" }}
              >
                <img
                  src="https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="AI Robot with holographic interface"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS SECTION ============ */}
      <section
        className="relative w-full overflow-hidden py-[clamp(12px,1.4vw,20px)]"
        style={{ background: "linear-gradient(90deg, #1a7be8 0%, #2b8aef 50%, #1a7be8 100%)" }}
      >
        <div className="mx-auto w-full max-w-[1400px] px-[clamp(16px,4vw,48px)]">
          <div className="grid grid-cols-1 gap-[clamp(14px,2vw,24px)] min-[500px]:grid-cols-2 min-[500px]:gap-[clamp(12px,1.8vw,22px)] sm:grid-cols-3">
            {[
              {
                value: 45,
                suffix: "+",
                label: "Lorem Ipsum Is Simply",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-[50%] w-[50%] text-white">
                    <rect x="8" y="6" width="14" height="14" rx="1.5" />
                    <path d="M14 13 L14 28 L24 28" />
                    <path d="M28 32 Q34 28 40 34" />
                    <path d="M18 28 L16 38 Q15 42 19 42 L24 42 Q27 42 28 38 L28 34" />
                    <path d="M18 34 L10 34 Q7 34 7 30 L7 22 Q7 20 9 20 L18 20" />
                  </svg>
                ),
              },
              {
                value: 4,
                suffix: "k+",
                label: "Lorem Ipsum Is Simply",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-[50%] w-[50%] text-white">
                    <rect x="8" y="8" width="22" height="30" rx="1.5" />
                    <path d="M30 14 L38 14 L38 36 L30 36" />
                    <circle cx="23" cy="28" r="5" />
                    <circle cx="23" cy="28" r="1.5" fill="currentColor" />
                    <path d="M14 14 L24 14" />
                    <path d="M14 18 L24 18" />
                  </svg>
                ),
              },
              {
                value: 5.8,
                suffix: "",
                label: "Lorem Ipsum Is Simply",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-[50%] w-[50%] text-white">
                    <rect x="8" y="14" width="28" height="20" rx="2" />
                    <path d="M8 18 L36 18" />
                    <path d="M20 30 Q24 36 30 34" />
                    <path d="M24 30 L24 38" />
                    <path d="M20 38 L28 38" />
                  </svg>
                ),
              },
            ].map((stat, i) => (
              <div
                key={i}
                className={
                  "relative flex items-center gap-[clamp(12px,1.6vw,22px)] text-white px-[clamp(8px,1.2vw,18px)] py-[clamp(4px,0.5vw,8px)] justify-center " +
                  (i === 2 ? "min-[500px]:col-span-2 min-[500px]:justify-self-center min-[500px]:max-w-[70%] " : "") +
                  "sm:border-r sm:border-white/25 sm:last:border-r-0 sm:col-span-1 sm:max-w-none sm:justify-self-auto"
                }
              >
                <div
                  className="flex shrink-0 items-center justify-center rounded-full bg-white/20"
                  style={{ height: "clamp(48px, 6vw, 72px)", width: "clamp(48px, 6vw, 72px)" }}
                >
                  {stat.icon}
                </div>
                <div className="min-w-0">
                  <div className="font-['Montserrat'] font-bold leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 4vw, 52px)" }}>
                    <Counter target={stat.value} suffix={stat.suffix} decimals={stat.value % 1 === 0 ? 0 : 1} />
                  </div>
                  <p className="mt-[clamp(4px,0.6vw,8px)] font-['Montserrat'] font-medium leading-tight text-white/85" style={{ fontSize: "clamp(11px, 1.1vw, 14px)" }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURE GRID SECTION ============ */}
      <section className={cn("relative w-full py-[clamp(44px,6vw,86px)]", theme === "light" ? "bg-[#f7f9fc]" : "bg-slate-900")}>
        <div className="mx-auto w-full max-w-[1180px] px-[clamp(16px,3vw,54px)]">
          <div className="flex w-full flex-col items-end text-right">
            <div className="flex w-full max-w-[430px] items-center justify-end gap-3">
              <div className="h-[1.5px] flex-1 bg-gradient-to-l from-[#1a7be8] to-transparent" />
              <span className="font-['Montserrat'] font-extrabold uppercase tracking-[0.28em] text-[#1a7be8]" style={{ fontSize: "clamp(10px, 1vw, 12px)" }}>
                Lorem Ipsum
              </span>
              <FeatureStar />
            </div>
            <h2 className="mt-[clamp(12px,1.6vw,18px)] font-['Montserrat'] font-extrabold leading-tight tracking-[-0.02em] text-[#2d3649] dark:text-white" style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}>
              Lorem Ipsum Is Simply Dummy Text
            </h2>
            <p className="mt-[clamp(10px,1.2vw,14px)] max-w-[1080px] font-['Montserrat'] font-medium leading-snug text-[#3f4b5b] dark:text-slate-300" style={{ fontSize: "clamp(11px, 1vw, 13px)" }}>
              It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages,
              And More Recently With Desktop Publishing Software Like Aldus PageMaker Including Versions Of Lorem
              Ipsum.
            </p>
          </div>

          <div className="mt-[clamp(18px,2.4vw,28px)] h-[2px] w-[clamp(160px,20vw,260px)] bg-gradient-to-r from-[#1a7be8] to-transparent" />

          {/* Top 3 cards */}
          <div className="mt-[clamp(24px,3vw,36px)] grid grid-cols-1 gap-[clamp(18px,2vw,28px)] min-[550px]:grid-cols-2 min-[700px]:grid-cols-3">
            {[0, 1, 2].map((item) => (
              <article
                key={item}
                className={`rounded-[clamp(22px,2.6vw,32px)] bg-[#e2f0ff] dark:bg-slate-800 px-[clamp(20px,2.6vw,28px)] py-[clamp(24px,3vw,34px)] ${item === 2 ? "min-[550px]:max-[699px]:col-span-2 min-[550px]:max-[699px]:mx-auto min-[550px]:max-[699px]:max-w-[50%]" : ""
                  }`}
              >
                <div className="mx-auto w-full max-w-[260px] pt-[18px]">
                  <div className="relative">
                    <div className="absolute -top-[14px] left-1/2 h-[clamp(34px,4vw,46px)] w-[82%] -translate-x-1/2 overflow-hidden rounded-t-[18px] rounded-b-[10px]">
                      <ImageSlot />
                    </div>
                    <div className="relative aspect-[2.35/1] overflow-hidden rounded-[clamp(12px,1.4vw,16px)] shadow-[0_8px_18px_rgba(26,123,232,0.14)]">
                      <ImageSlot />
                    </div>
                  </div>
                </div>
                <h3 className="mt-[clamp(22px,2.5vw,32px)] font-['Montserrat'] font-extrabold leading-tight text-[#2d3649] dark:text-white" style={{ fontSize: "clamp(18px, 1.8vw, 23px)" }}>
                  Lorem Ipsum Is Simply
                </h3>
                <p className="mt-[clamp(10px,1.2vw,14px)] max-w-[300px] font-['Montserrat'] font-medium leading-snug text-[#415062] dark:text-slate-300" style={{ fontSize: "clamp(11px, 1vw, 13px)" }}>
                  It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum
                  Passages
                </p>
              </article>
            ))}
          </div>

          {/* Bottom 2 wide cards */}
          <div className="mt-[clamp(18px,2vw,28px)] grid grid-cols-1 gap-[clamp(18px,2vw,28px)] min-[550px]:grid-cols-2">
            <article className="flex flex-col gap-4 rounded-[clamp(22px,2.6vw,32px)] bg-[#e2f0ff] dark:bg-slate-800 px-[clamp(22px,2.6vw,30px)] py-[clamp(24px,2.6vw,30px)] min-[1100px]:flex-row min-[1100px]:items-center min-[1100px]:justify-between">
              <div className="text-left min-[1100px]:flex-1">
                <h3 className="font-['Montserrat'] font-extrabold leading-[1.15] text-[#2d3649] dark:text-white" style={{ fontSize: "clamp(20px, 2.2vw, 26px)" }}>
                  Lorem Ipsum Is Simply
                </h3>
                <p className="mt-[clamp(10px,1.2vw,14px)] max-w-[280px] font-['Montserrat'] font-medium leading-snug text-[#415062] dark:text-slate-300" style={{ fontSize: "clamp(11px, 1vw, 13px)" }}>
                  It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum
                  Passages
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-center gap-[clamp(6px,0.8vw,10px)] self-end min-[1100px]:self-auto">
                <div className="flex gap-[clamp(6px,0.8vw,10px)]">
                  {[0, 1, 2].map((circle) => (
                    <div key={circle} className="aspect-square w-[clamp(50px,6.5vw,72px)] overflow-hidden rounded-full shadow-[0_6px_13px_rgba(26,123,232,0.18)]">
                      <ImageSlot />
                    </div>
                  ))}
                </div>
                <div className="flex gap-[clamp(6px,0.8vw,10px)]">
                  {[3, 4].map((circle) => (
                    <div key={circle} className="aspect-square w-[clamp(50px,6.5vw,72px)] overflow-hidden rounded-full shadow-[0_6px_13px_rgba(26,123,232,0.18)]">
                      <ImageSlot />
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="flex flex-col gap-4 rounded-[clamp(22px,2.6vw,32px)] bg-[#e2f0ff] dark:bg-slate-800 px-[clamp(22px,2.6vw,30px)] py-[clamp(24px,2.6vw,30px)] min-[1100px]:flex-row min-[1100px]:items-center min-[1100px]:justify-between">
              <div className="text-left min-[1100px]:flex-1">
                <h3 className="font-['Montserrat'] font-extrabold leading-[1.15] text-[#2d3649] dark:text-white" style={{ fontSize: "clamp(20px, 2.2vw, 26px)" }}>
                  Lorem Ipsum Is Simply
                </h3>
                <p className="mt-[clamp(10px,1.2vw,14px)] max-w-[280px] font-['Montserrat'] font-medium leading-snug text-[#415062] dark:text-slate-300" style={{ fontSize: "clamp(11px, 1vw, 13px)" }}>
                  It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum
                  Passages
                </p>
              </div>
              <div className="flex shrink-0 items-center self-end min-[1100px]:self-auto">
                {[0, 1, 2, 3, 4].map((circle) => (
                  <div
                    key={circle}
                    className="aspect-square w-[clamp(54px,8.2vw,82px)] overflow-hidden rounded-full border-[2px] border-[#e2f0ff] shadow-[0_7px_14px_rgba(0,0,0,0.2)]"
                    style={{ marginLeft: circle === 0 ? 0 : "clamp(-26px, -3vw, -18px)" }}
                  >
                    <ImageSlot />
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* Pills */}
          <div className="mx-auto mt-[clamp(26px,3vw,38px)] flex max-w-[900px] flex-wrap items-center justify-center gap-x-[clamp(8px,0.9vw,12px)] gap-y-[clamp(8px,0.9vw,11px)]">
            {Array.from({ length: 9 }, (_, i) => (
              <div
                key={i}
                className="flex h-[clamp(34px,3.4vw,40px)] items-center justify-center gap-[6px] rounded-[10px] bg-[#e2f0ff] dark:bg-slate-800 px-[clamp(12px,1.4vw,18px)] font-['Montserrat'] font-semibold text-[#425066] dark:text-slate-300"
                style={{ fontSize: "clamp(10px, 0.95vw, 12px)" }}
              >
                <FeatureStar />
                <span>Lorem Ipsum</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STEPS + VIDEO SECTION ============ */}
      <section className={cn("relative w-full py-[clamp(44px,6vw,86px)]", theme === "light" ? "bg-[#f7f9fc]" : "bg-slate-900")}>
        <div className="mx-auto w-full max-w-[1180px] px-[clamp(16px,3vw,54px)]">
          <div className="flex w-full flex-col items-start text-left">
            <div className="flex w-full max-w-[430px] items-center gap-3">
              <FeatureStar />
              <span className="font-['Montserrat'] font-extrabold uppercase tracking-[0.28em] text-[#1a7be8]" style={{ fontSize: "clamp(10px, 1vw, 12px)" }}>
                Lorem Ipsum
              </span>
              <div className="h-[1.5px] flex-1 bg-gradient-to-r from-[#1a7be8] to-transparent" />
            </div>
            <h2 className="mt-[clamp(12px,1.6vw,18px)] font-['Montserrat'] font-extrabold leading-tight tracking-[-0.02em] text-[#2d3649] dark:text-white" style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}>
              Lorem Ipsum Is Simply Dummy Text
            </h2>
            <p className="mt-[clamp(10px,1.2vw,14px)] max-w-[1080px] font-['Montserrat'] font-medium leading-snug text-[#3f4b5b] dark:text-slate-300" style={{ fontSize: "clamp(11px, 1vw, 13px)" }}>
              It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages,
              And More Recently With Desktop Publishing Software Like Aldus PageMaker Including Versions Of Lorem
              Ipsum.
            </p>
          </div>

          <div className="mt-[clamp(18px,2.4vw,28px)] ml-auto h-[2px] w-[clamp(160px,20vw,260px)] bg-gradient-to-r from-transparent to-[#1a7be8]" />

          <div className="mt-[clamp(24px,3vw,36px)] grid grid-cols-1 gap-[clamp(18px,2vw,28px)] min-[550px]:grid-cols-2 min-[700px]:grid-cols-3">
            {[
              { title: "Choose", icon: <ChooseIcon /> },
              { title: "Preview", icon: <PreviewIcon /> },
              { title: "Pay", icon: <PayIcon /> },
            ].map((step, i) => (
              <article
                key={i}
                className={`rounded-[clamp(22px,2.6vw,32px)] bg-[#e2f0ff] dark:bg-slate-800 px-[clamp(20px,2.6vw,28px)] py-[clamp(24px,3vw,34px)] ${i === 2 ? "step-card-last" : ""}`}
              >
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    height: "clamp(80px, 9vw, 110px)",
                    width: "clamp(80px, 9vw, 110px)",
                    background: "linear-gradient(135deg, #cde0ff 0%, #9ec0f2 100%)",
                    color: "#1a7be8",
                  }}
                >
                  {step.icon}
                </div>
                <h3 className="mt-[clamp(18px,2vw,24px)] font-['Montserrat'] font-extrabold leading-tight text-[#2d3649] dark:text-white" style={{ fontSize: "clamp(18px, 1.8vw, 23px)" }}>
                  {step.title}
                </h3>
                <p className="mt-[clamp(10px,1.2vw,14px)] max-w-[300px] font-['Montserrat'] font-medium leading-snug text-[#415062] dark:text-slate-300" style={{ fontSize: "clamp(11px, 1vw, 13px)" }}>
                  It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum
                  Passages
                </p>
              </article>
            ))}
          </div>

          {/* Video card */}
          <article className="mt-[clamp(18px,2vw,28px)] rounded-[clamp(22px,2.6vw,32px)] bg-[#e2f0ff] dark:bg-slate-800 px-[clamp(22px,2.6vw,34px)] py-[clamp(26px,3vw,40px)] min-[700px]:grid min-[700px]:grid-cols-[45fr_55fr] min-[700px]:items-center min-[700px]:gap-[clamp(18px,2.6vw,36px)]">
            <div className="text-left">
              <div className="flex items-center gap-3">
                <FeatureStar />
                <span className="font-['Montserrat'] font-extrabold uppercase tracking-[0.28em] text-[#1a7be8]" style={{ fontSize: "clamp(10px, 1vw, 12px)" }}>
                  Lorem Ipsum
                </span>
                <div className="h-[1.5px] flex-1 bg-gradient-to-r from-[#1a7be8] to-transparent" />
              </div>
              <h3 className="mt-[clamp(10px,1.4vw,14px)] font-['Montserrat'] font-extrabold leading-tight text-[#2d3649] dark:text-white" style={{ fontSize: "clamp(20px, 2.2vw, 26px)" }}>
                Lorem Ipsum
              </h3>
              <p className="mt-[clamp(10px,1.2vw,14px)] max-w-[460px] font-['Montserrat'] font-medium leading-snug text-[#415062] dark:text-slate-300" style={{ fontSize: "clamp(11px, 1vw, 13px)" }}>
                It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum
                Passages It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem
                Ipsum Passages
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="mt-[clamp(18px,2vw,24px)] rounded-full bg-[#1a7be8] px-[clamp(22px,2.4vw,32px)] font-['Montserrat'] font-bold text-white shadow-[0_4px_14px_rgba(26,123,232,0.35)] transition hover:bg-[#1567c9]"
                style={{ height: "clamp(38px, 3.8vw, 46px)", fontSize: "clamp(12px, 1.15vw, 14px)" }}
              >
                Lorem Ipsum
              </button>
            </div>

            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="relative mt-[clamp(18px,2vw,26px)] aspect-[16/10] w-full overflow-hidden rounded-[clamp(14px,1.6vw,20px)] bg-black shadow-[0_14px_36px_rgba(0,0,0,0.25)] min-[700px]:mt-0"
              aria-label="Play video"
            >
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Video preview"
                className="absolute inset-0 h-full w-full object-cover opacity-85"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="pulse-ring absolute h-[clamp(70px,9vw,110px)] w-[clamp(70px,9vw,110px)] rounded-full bg-[#1a7be8]/60" />
                <span className="pulse-ring delay absolute h-[clamp(70px,9vw,110px)] w-[clamp(70px,9vw,110px)] rounded-full bg-[#5aa6f5]/50" />
              </span>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="relative z-10 flex h-[clamp(50px,7vw,80px)] w-[clamp(50px,7vw,80px)] items-center justify-center rounded-full bg-[#1a7be8] shadow-[0_6px_22px_rgba(26,123,232,0.55)]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-[45%] w-[45%] text-white" aria-hidden="true">
                    <path d="M6 4 L20 12 L6 20 Z" />
                  </svg>
                </span>
              </span>
            </button>
          </article>
        </div>

        {videoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            style={{ animation: "modal-fade 0.25s ease-out" }}
            onClick={() => setVideoOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full max-w-[1000px]"
              onClick={(e) => e.stopPropagation()}
              style={{ animation: "modal-pop 0.3s cubic-bezier(0.16,1,0.3,1)" }}
            >
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="group absolute -top-[clamp(38px,6vw,52px)] right-0 flex items-center gap-2 text-white/80 transition hover:text-white"
                aria-label="Close video"
              >
                <span className="hidden font-['Montserrat'] text-sm font-semibold tracking-wide sm:inline">Close</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 transition duration-300 group-hover:rotate-90 group-hover:border-white/60 group-hover:bg-white/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="h-[18px] w-[18px]">
                    <path d="M6 6 L18 18 M18 6 L6 18" />
                  </svg>
                </span>
              </button>

              <div className="relative overflow-hidden rounded-2xl bg-black shadow-[0_30px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/10" style={{ aspectRatio: "16 / 9" }}>
                <iframe
                  src={sampleVideoUrl}
                  title="Demo video"
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ============ TESTIMONIALS SCROLL SECTION ============ */}
      <section className={cn("relative w-full py-[clamp(44px,6vw,86px)]", theme === "light" ? "bg-[#f7f9fc]" : "bg-slate-900")}>
        <div className="mx-auto w-full max-w-[1180px] px-[clamp(16px,3vw,54px)]">
          <div className="flex w-full flex-col items-end text-right">
            <div className="flex w-full max-w-[430px] items-center justify-end gap-3">
              <div className="h-[1.5px] flex-1 bg-gradient-to-l from-[#1a7be8] to-transparent" />
              <span className="font-['Montserrat'] font-extrabold uppercase tracking-[0.28em] text-[#1a7be8]" style={{ fontSize: "clamp(10px, 1vw, 12px)" }}>
                Lorem Ipsum
              </span>
              <FeatureStar />
            </div>
            <h2 className="mt-[clamp(12px,1.6vw,18px)] font-['Montserrat'] font-extrabold leading-tight tracking-[-0.02em] text-[#2d3649] dark:text-white" style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}>
              Lorem Ipsum Is Simply Dummy Text
            </h2>
            <p className="mt-[clamp(10px,1.2vw,14px)] max-w-[1080px] font-['Montserrat'] font-medium leading-snug text-[#3f4b5b] dark:text-slate-300" style={{ fontSize: "clamp(11px, 1vw, 13px)" }}>
              It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages,
              And More Recently With Desktop Publishing Software Like Aldus PageMaker Including Versions Of Lorem
              Ipsum.
            </p>
          </div>

          <div className="mt-[clamp(18px,2.4vw,28px)] h-[2px] w-[clamp(160px,20vw,260px)] bg-gradient-to-r from-[#1a7be8] to-transparent" />

          <div className="mt-[clamp(24px,3vw,36px)] grid grid-cols-1 gap-[clamp(18px,2vw,28px)] min-[900px]:grid-cols-3" style={{ ["--tgap" as string]: "22px" }}>
            <div className="tcol relative max-h-[640px] overflow-hidden min-[900px]:[mask-image:linear-gradient(to_bottom,transparent,#000_8%,#000_92%,transparent)]">
              <div className="tcol-track tcol-up">
                {[0, 1, 2, 3].map((n) => (
                  <TestimonialCard key={`c1-${n}`} />
                ))}
                {[0, 1, 2, 3].map((n) => (
                  <TestimonialCard key={`c1b-${n}`} />
                ))}
              </div>
            </div>

            <div className="tcol relative max-h-[640px] overflow-hidden min-[900px]:[mask-image:linear-gradient(to_bottom,transparent,#000_8%,#000_92%,transparent)]">
              <div className="tcol-track tcol-down">
                {[0, 1, 2, 3].map((n) => (
                  <TestimonialCard key={`c2-${n}`} long />
                ))}
                {[0, 1, 2, 3].map((n) => (
                  <TestimonialCard key={`c2b-${n}`} long />
                ))}
              </div>
            </div>

            <div className="tcol relative max-h-[640px] overflow-hidden min-[900px]:[mask-image:linear-gradient(to_bottom,transparent,#000_8%,#000_92%,transparent)]">
              <div className="tcol-track tcol-up">
                {[0, 1, 2, 3].map((n) => (
                  <TestimonialCard key={`c3-${n}`} />
                ))}
                {[0, 1, 2, 3].map((n) => (
                  <TestimonialCard key={`c3b-${n}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}