import { useState } from "react";
import { cn } from "../utils/cn";
import { Counter } from "../components/Counter";
import { useTheme } from "../components/ThemeContext";
import { PageHero } from "../components/PageHero";
import type { Theme } from "../types";

type MissionTab = "mission" | "vision" | "goal";

export default function AboutPage() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState<MissionTab>("mission");
  const [animKey, setAnimKey] = useState(0);

  const handleTabClick = (id: MissionTab) => {
    setActiveTab(id);
    setAnimKey((k) => k + 1);
  };

  const tabs: Array<{ id: MissionTab; label: string; title: string }> = [
    { id: "mission", label: "OUR MISSION", title: "Our Company Mission" },
    { id: "vision", label: "OUR VISION", title: "Our Company Vision" },
    { id: "goal", label: "OUR GOAL", title: "Our Company Goal" },
  ];

  const activeTitle = tabs.find((t) => t.id === activeTab)?.title;

  return (
    <main className={cn("min-h-screen overflow-hidden", theme === "light" ? "bg-slate-100 text-slate-800" : "bg-slate-950 text-white")}>
      <PageHero
        title="About Us"
        tagline="Give All You Can..."
        titleSizeClassName="text-[16vw] sm:text-[120px] lg:text-[150px]"
      />

      {/* About - Second Section */}
      <section className="relative px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-[1180px] items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="relative aspect-[4/3] w-[82%] overflow-hidden rounded-[18px] shadow-[0_20px_50px_rgba(26,123,232,0.18)]">
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Developer working with code"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute right-[-4%] top-[6%] z-10 w-[clamp(145px,29%,195px)] bg-transparent text-white">
              <svg className="absolute inset-0 h-full w-full drop-shadow-[0_12px_30px_rgba(26,123,232,0.45)]" viewBox="0 0 200 220" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M 20 0 L 178 0 Q 196 0 192 18 L 166 204 Q 163 220 148 220 L 20 220 Q 0 220 0 200 L 0 20 Q 0 0 20 0 Z"
                  fill="#1a7be8"
                />
              </svg>
              <div className="relative px-5 py-5">
                <p className="text-3xl font-black leading-none sm:text-4xl">45+</p>
                <p className="mt-2 text-[13px] font-bold leading-snug sm:text-[15px]">
                  Years
                  <br />
                  Of Experience
                </p>
              </div>
            </div>

            <div className="relative -mt-[18%] ml-auto aspect-[4/3] w-[62%] overflow-hidden rounded-[18px] border-[5px] border-white shadow-[0_18px_44px_rgba(0,0,0,0.22)]">
              <img
                src="https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="AI robot with holographic interface"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="font-['Montserrat']">
            <div className="flex items-center gap-3">
              <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#1a7be8] text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[62%] w-[62%]" aria-hidden="true">
                  <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" />
                  <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" transform="rotate(45 12 12)" />
                </svg>
              </span>
              <span className="shrink-0 whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#1a7be8]">
                About Us
              </span>
              <div className="h-[1.5px] w-[40%] bg-gradient-to-r from-[#1a7be8] to-transparent" />
            </div>

            <h2 className={cn("mt-4 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl", theme === "light" ? "text-[#2d3649]" : "text-white")}>
              Lorem Ipsum Is Simply Dummy Text
            </h2>

            <div className={cn("mt-4 space-y-3 text-[13px] font-medium leading-relaxed", theme === "light" ? "text-[#4a5769]" : "text-slate-300")}>
              <p>
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
                Industry&apos;s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of
                Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But
                Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.
              </p>
              <p>
                It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum
                Passages, And More Recently With Desktop Publishing Software Like Aldus PageMaker Including
                Versions Of Lorem Ipsum.
              </p>
            </div>

            <h3 className={cn("mt-6 text-lg font-extrabold sm:text-xl", theme === "light" ? "text-[#2d3649]" : "text-white")}>Lorem Ipsum Is Simply Dummy Text</h3>

            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#1a7be8] text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[62%] w-[62%]" aria-hidden="true">
                      <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" />
                      <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" transform="rotate(45 12 12)" />
                    </svg>
                  </span>
                  <span className={cn("text-[13px] font-medium", theme === "light" ? "text-[#4a5769]" : "text-slate-300")}>Lorem Ipsum Is Simply Dummy Text</span>
                </div>
              ))}
            </div>

            <div className="mt-6 ml-auto h-[2px] w-[60%] bg-gradient-to-l from-[#1a7be8] to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-[50%] w-[50%]">
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
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-[50%] w-[50%]">
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
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-[50%] w-[50%]">
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
                  className="flex shrink-0 items-center justify-center rounded-full bg-white/20 text-white"
                  style={{ height: "clamp(48px, 6vw, 72px)", width: "clamp(48px, 6vw, 72px)" }}
                >
                  {stat.icon}
                </div>
                <div className="min-w-0">
                  <div className="font-extrabold leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 4vw, 52px)" }}>
                    <Counter target={stat.value} suffix={stat.suffix} decimals={stat.value % 1 === 0 ? 0 : 1} />
                  </div>
                  <p className="mt-[clamp(4px,0.6vw,8px)] font-medium leading-tight text-white/90" style={{ fontSize: "clamp(11px, 1.1vw, 14px)" }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Goal Section */}
      <section className={cn("relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8", theme === "light" ? "bg-white" : "bg-slate-900")}>
        <div className="mx-auto grid max-w-[1200px] items-center gap-8 min-[850px]:grid-cols-2 min-[850px]:gap-12">
          <div className="font-['Montserrat']">
            <div className="flex items-center gap-3">
              <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#1a7be8] text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[62%] w-[62%]" aria-hidden="true">
                  <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" />
                  <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" transform="rotate(45 12 12)" />
                </svg>
              </span>
              <span className="shrink-0 whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#1a7be8]">
                About Us
              </span>
              <div className="h-[1.5px] w-[40%] bg-gradient-to-r from-[#1a7be8] to-transparent" />
            </div>

            <h2 className={cn("mt-4 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl", theme === "light" ? "text-[#2d3649]" : "text-white")}>
              Lorem Ipsum Is Simply Dummy Text
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabClick(tab.id)}
                    className={cn(
                      "relative inline-flex h-10 items-center justify-center rounded-full px-5 text-[11px] font-extrabold uppercase tracking-wide transition-all duration-300 sm:text-xs",
                      isActive
                        ? "bg-[#1a7be8] text-white shadow-[0_4px_16px_rgba(26,123,232,0.4)]"
                        : "bg-[#eaf3ff] text-[#1a7be8] shadow-[inset_0_0_0_2px_#1a7be8] hover:bg-[#d9eaff]",
                    )}
                    style={isActive ? { animation: "bounce-in 0.5s ease-out" } : undefined}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div key={animKey} className="mt-5" style={{ animation: "fade-slide 0.35s ease-out both" }}>
              <h3 className={cn("text-lg font-extrabold sm:text-xl", theme === "light" ? "text-[#2d3649]" : "text-white")}>{activeTitle}</h3>
              <div className={cn("mt-3 space-y-3 text-[13px] font-medium leading-relaxed", theme === "light" ? "text-[#4a5769]" : "text-slate-300")}>
                <p>
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been
                  The Industry&apos;s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A
                  Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five
                  Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.
                </p>
                <p>
                  It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum
                  Passages, And More Recently With Desktop Publishing Software Like Aldus PageMaker Including
                  Versions Of Lorem Ipsum.
                </p>
              </div>

              <div className="mt-6 ml-auto h-[2px] w-[60%] bg-gradient-to-l from-[#1a7be8] to-transparent" />
            </div>
          </div>

          <div className="mx-auto w-full max-w-[540px] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(26,123,232,0.2)] min-[850px]:ml-auto min-[850px]:max-w-none">
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Technology and AI"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <TestimonialSection theme={theme} />
    </main>
  );
}

function TestimonialSection({ theme }: { theme: Theme }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animKey, setAnimKey] = useState(0);

  const testimonials = [
    {
      name: "Lorem Ipsum",
      role: "Lorem Ipsum",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
      text:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.",
    },
    {
      name: "Lorem Ipsum",
      role: "Lorem Ipsum",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
      text:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.",
    },
    {
      name: "Lorem Ipsum",
      role: "Lorem Ipsum",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
      text:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.",
    },
    {
      name: "Lorem Ipsum",
      role: "Lorem Ipsum",
      image: "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
      text:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.",
    },
  ];

  const total = testimonials.length;

  const goPrev = () => {
    setDirection("prev");
    setAnimKey((k) => k + 1);
    setActiveIdx((i) => (i - 1 + total) % total);
  };
  const goNext = () => {
    setDirection("next");
    setAnimKey((k) => k + 1);
    setActiveIdx((i) => (i + 1) % total);
  };

  const card1 = testimonials[activeIdx];
  const card2 = testimonials[(activeIdx + 1) % total];

  return (
    <section className={cn("relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8", theme === "light" ? "bg-[#e2f0ff]" : "bg-slate-900")}>
      <div className="mx-auto max-w-[1200px]">
        <div className="flex w-full flex-col items-center text-center">
          <div className="flex w-full max-w-[460px] items-center justify-center gap-3">
            <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent to-[#1a7be8]" />
            <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#1a7be8] text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[62%] w-[62%]" aria-hidden="true">
                <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" />
                <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" transform="rotate(45 12 12)" />
              </svg>
            </span>
            <span className="font-['Montserrat'] text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#1a7be8]">
              About Us
            </span>
            <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#1a7be8] text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[62%] w-[62%]" aria-hidden="true">
                <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" />
                <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" transform="rotate(45 12 12)" />
              </svg>
            </span>
            <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent to-[#1a7be8]" />
          </div>
          <h2 className={cn("mt-4 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl", theme === "light" ? "text-[#2d3649]" : "text-white")}>
            Lorem Ipsum Is Simply Dummy Text
          </h2>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-1 gap-5 min-[700px]:grid-cols-2">
            {[card1, card2].map((card, idx) => (
              <article
                key={`${card.name}-${animKey}-${idx}`}
                className={cn(
                  "rounded-[clamp(18px,2vw,26px)] bg-[#1a7be8] p-6 text-white shadow-[0_10px_30px_rgba(26,123,232,0.25)]",
                  idx === 1 && "hidden min-[700px]:block",
                )}
                style={{ animation: `${direction === "next" ? "slide-from-right" : "slide-from-left"} 0.65s cubic-bezier(0.22,1,0.36,1) both` }}
              >
                <p className="text-[13px] font-medium leading-relaxed text-white/95">{card.text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white/80 bg-white">
                    <img src={card.image} alt={card.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight">{card.name}</p>
                    <p className="mt-1 text-xs font-semibold text-white/80">{card.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-1">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous"
            className="flex h-9 w-12 items-center justify-center rounded-l-full rounded-r-none bg-[#1a7be8] text-white shadow-[0_4px_12px_rgba(26,123,232,0.35)] transition hover:bg-[#1567c9] active:scale-95"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M15 18 9 12l6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next"
            className="flex h-9 w-12 items-center justify-center rounded-l-none rounded-r-full bg-[#1a7be8] text-white shadow-[0_4px_12px_rgba(26,123,232,0.35)] transition hover:bg-[#1567c9] active:scale-95"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
