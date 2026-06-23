import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../utils/cn";
import { ChevronLeftIcon, ChevronRightIcon } from "../ui/icons";
import type { Theme } from "../types";
import { useTheme } from "../components/ThemeContext";
import { PageHero } from "../components/PageHero";

const feedbacks = [
  {
    name: "Name Of The Tutor",
    topic: "Sub Topic Or Something",
    rating: 4,
    text:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.",
  },
  {
    name: "Name Of The Tutor",
    topic: "Sub Topic Or Something",
    rating: 5,
    text:
      "Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s. When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book, It Continued To Shape Clear And Readable Sample Content For Many Years.",
  },
  {
    name: "Name Of The Tutor",
    topic: "Sub Topic Or Something",
    rating: 4,
    text:
      "It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry And Is Still Used As Sample Copy.",
  },
];

const GOOGLE_FORM_URL = "https://forms.google.com";

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index < rating;
        return (
          <svg
            key={index}
            viewBox="0 0 24 24"
            className={cn("h-5 w-5", filled ? "fill-amber-400 text-amber-400" : "fill-transparent text-amber-400")}
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="m12 2.5 2.9 5.88 6.49.94-4.69 4.57 1.1 6.46L12 17.3l-5.8 3.05 1.1-6.46-4.69-4.57 6.49-.94L12 2.5Z" />
          </svg>
        );
      })}
    </div>
  );
}

export function BecomeATutorPage() {
  const theme = useTheme();
  const [activeFeedback, setActiveFeedback] = useState(0);
  const feedback = feedbacks[activeFeedback];

  const showPreviousFeedback = () => {
    setActiveFeedback((current) => (current === 0 ? feedbacks.length - 1 : current - 1));
  };

  const showNextFeedback = () => {
    setActiveFeedback((current) => (current === feedbacks.length - 1 ? 0 : current + 1));
  };

  return (
    <main className={cn("min-h-screen overflow-hidden", theme === "light" ? "bg-slate-100" : "bg-slate-950")}>
      {/* Hero / Title */}
      <PageHero
        title="Start Tutoring"
        tagline="Give All You Can..."
        titleSizeClassName="text-[16vw] sm:text-[120px] lg:text-[150px]"
      />

      {/* Tutor feedback carousel */}
      <section
        className={cn(
          "relative overflow-hidden px-4 pb-10 pt-8 sm:px-6 sm:pb-14 lg:px-8",
          theme === "light" ? "text-slate-800" : "text-white",
        )}
      >
        <div className="relative mx-auto max-w-[980px]">
          <div
            className={cn(
              "rounded-lg border px-6 py-8 shadow-md backdrop-blur-sm sm:px-10 lg:px-16",
              theme === "light" ? "border-sky-300 bg-white/80 shadow-sky-800/20" : "border-slate-700 bg-slate-900/80 shadow-black/20",
            )}
          >
            <div className="grid items-center gap-8 md:grid-cols-[300px_1fr] lg:grid-cols-[330px_1fr]">
              <div className="space-y-3">
                <div>
                  <h2 className={cn("text-xl font-extrabold tracking-wide", theme === "light" ? "text-slate-700" : "text-slate-200")}>{feedback.name}</h2>
                  <p className={cn("mt-1 text-sm font-semibold tracking-[0.35em]", theme === "light" ? "text-slate-500" : "text-slate-400")}>{feedback.topic}</p>
                </div>
                <RatingStars rating={feedback.rating} />
              </div>

              <p className={cn("max-w-[560px] text-justify text-[13px] font-medium leading-relaxed tracking-wide", theme === "light" ? "text-slate-600" : "text-slate-300")}>
                {feedback.text}
              </p>
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-2">
            <button
              type="button"
              aria-label="Previous tutor"
              onClick={showPreviousFeedback}
              className="grid h-7 w-12 place-items-center rounded-l-full rounded-r-none bg-blue-600 text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-500 active:scale-95"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next tutor"
              onClick={showNextFeedback}
              className="grid h-7 w-12 place-items-center rounded-l-none rounded-r-full bg-blue-600 text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-500 active:scale-95"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <MagicalSection theme={theme} />
      <JoinFormSection theme={theme} />
      <VideoCardSection theme={theme} />
      <ContactSection />
    </main>
  );
}

function MagicalSection({ theme }: { theme: Theme }) {
  const steps = [
    { num: "01", left: "6%", top: "82%" },
    { num: "02", left: "17%", top: "57%" },
    { num: "03", left: "28%", top: "32%" },
  ];
  return (
    <section className={cn("relative px-4 py-8 sm:px-6 lg:px-8 lg:py-10", theme === "light" ? "text-slate-800" : "text-white")}>
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 min-[700px]:grid-cols-2 min-[700px]:gap-8 lg:gap-12">
        <div>
          <div className="flex flex-nowrap items-center gap-3">
            <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#1a7be8] text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[62%] w-[62%]" aria-hidden="true">
                <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" />
                <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" transform="rotate(45 12 12)" />
              </svg>
            </span>
            <span className="whitespace-nowrap font-['Montserrat'] text-xs font-extrabold uppercase tracking-[0.28em] text-[#1a7be8] sm:text-sm">
              Join With Us
            </span>
            <div className="h-[1.5px] min-w-0 flex-1 max-w-[clamp(120px,28vw,260px)] bg-gradient-to-r from-[#1a7be8] to-transparent" />
          </div>

          <h2 className="mt-[clamp(12px,1.6vw,18px)] font-['Montserrat'] text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#2d3649] sm:text-3xl md:text-4xl">
            How The Magical Happens
          </h2>

          <div
            className={cn(
              "mt-[clamp(16px,1.8vw,28px)] space-y-[clamp(10px,1vw,16px)] font-['Montserrat'] font-medium leading-[1.7] text-sm",
              theme === "light" ? "text-[#4a5769]" : "text-slate-300",
            )}
          >
            <p>
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
              Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
              And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The
              Leap Into Electronic Typesetting, Remaining Essentially Unchanged.
            </p>
            <p>
              It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages,
              And More Recently With Desktop Publishing Software Like Aldus PageMaker Including Versions Of Lorem
              Ipsum.
            </p>
          </div>

          <div className="ml-auto mt-[clamp(24px,2.8vw,40px)] h-[2px] w-[clamp(220px,36vw,340px)] bg-gradient-to-l from-[#1a7be8] via-[#1a7be8]/50 to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <svg viewBox="0 0 400 360" className="h-auto w-full select-none" aria-hidden="true">
            <defs>
              <linearGradient id="ladderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bfe0ff" />
                <stop offset="100%" stopColor="#1a7be8" />
              </linearGradient>
            </defs>
            <rect x="40" y="40" width="320" height="280" rx="24" fill="url(#ladderGrad)" opacity="0.15" />
            <path d="M70 300 L150 200 L230 240 L320 100" stroke="#1a7be8" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="2 10" />
            <circle cx="320" cy="100" r="30" fill="#ffd866" />
            <circle cx="320" cy="100" r="16" fill="#fff7e0" />
          </svg>
          <div className="pointer-events-none absolute inset-0">
            {steps.map((step) => (
              <div key={step.num} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: step.left, top: step.top }}>
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-sky-500 bg-white text-xs font-extrabold text-sky-600 shadow-md sm:h-11 sm:w-11 sm:text-sm">
                  {step.num}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JoinFormSection({ theme }: { theme: Theme }) {
  return (
    <section className={cn("relative px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14", theme === "light" ? "text-slate-800" : "text-white")}>
      <div className="mx-auto grid w-[86%] max-w-[860px] items-center gap-8 min-[700px]:w-[94%] min-[700px]:grid-cols-[0.9fr_1fr] min-[700px]:gap-10 min-[734px]:w-[86%] lg:gap-14">
        <div className="flex w-full max-w-[560px] flex-col items-start text-left min-[700px]:justify-self-end">
          <h2 className="font-['Montserrat'] text-2xl font-extrabold tracking-[-0.02em] text-[#2d3649] sm:text-3xl">
            Wants To Join?
          </h2>
          <p className="ml-[clamp(24px,8vw,96px)] mt-6 font-['Montserrat'] text-base font-medium tracking-[0.35em] text-[#3f4b5b] sm:text-lg">
            Please Fill Out This Google Form
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex h-11 items-center justify-center rounded-full bg-[#1a7be8] px-8 font-['Montserrat'] text-base font-bold text-white shadow-[0_4px_14px_rgba(26,123,232,0.28)] transition hover:bg-[#1567c9] sm:h-12 sm:px-10 sm:text-lg"
          >
            Click Here To Redirect
          </a>
        </div>

        <div className="mx-auto w-full max-w-[360px] min-[700px]:max-w-[430px] lg:max-w-[470px]">
          <svg viewBox="0 0 300 300" className="h-auto w-full select-none object-contain" aria-hidden="true">
            <circle cx="150" cy="150" r="130" fill="#e2f0ff" />
            <text x="150" y="190" textAnchor="middle" fontSize="140" fontWeight="900" fill="#1a7be8" fontFamily="Montserrat, sans-serif">
              ?
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}

function FeatureStar() {
  return (
    <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#1a7be8] text-white">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[62%] w-[62%]" aria-hidden="true">
        <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" />
        <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" transform="rotate(45 12 12)" />
      </svg>
    </span>
  );
}

function VideoCardSection({ theme }: { theme: Theme }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const sampleVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

  return (
    <section className={cn("relative px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14", theme === "light" ? "text-slate-800" : "text-white")}>
      <div className="mx-auto w-full max-w-[1180px]">
        <article className="rounded-[clamp(22px,2.6vw,32px)] bg-[#e2f0ff] px-[clamp(22px,2.6vw,34px)] py-[clamp(26px,3vw,40px)] min-[700px]:grid min-[700px]:grid-cols-[45fr_55fr] min-[700px]:items-center min-[700px]:gap-[clamp(18px,2.6vw,36px)]">
          <div className="text-left">
            <div className="flex items-center gap-3">
              <FeatureStar />
              <span className="font-['Montserrat'] text-xs font-extrabold uppercase tracking-[0.28em] text-[#1a7be8] sm:text-sm">
                Lorem Ipsum
              </span>
              <div className="h-[1.5px] flex-1 bg-gradient-to-r from-[#1a7be8] to-transparent" />
            </div>
            <h3 className="mt-[clamp(10px,1.4vw,14px)] font-['Montserrat'] text-xl font-extrabold leading-tight text-[#2d3649] sm:text-2xl">
              Lorem Ipsum
            </h3>
            <p className="mt-[clamp(10px,1.2vw,14px)] max-w-[460px] font-['Montserrat'] text-sm font-medium leading-snug text-[#415062]">
              It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages
              It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages
            </p>
          </div>

          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="relative mt-[clamp(18px,2vw,26px)] aspect-[16/10] w-full overflow-hidden rounded-[clamp(14px,1.6vw,20px)] bg-black shadow-[0_14px_36px_rgba(0,0,0,0.25)] min-[700px]:mt-0"
            aria-label="Play video"
          >
            <img
              src="https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
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
          <div className="relative w-full max-w-[1000px]" onClick={(e) => e.stopPropagation()} style={{ animation: "modal-pop 0.3s cubic-bezier(0.16,1,0.3,1)" }}>
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
  );
}

function ContactSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-[640px] w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20"
      style={{
        background: "linear-gradient(135deg, #1a7be8 0%, #0d4ea0 100%)",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1180px]">
        <div className="grid grid-cols-1 items-start gap-10 min-[700px]:grid-cols-2 min-[700px]:gap-8 lg:gap-14">
          <div className="order-1 flex flex-col items-end text-right min-[700px]:order-2 min-[700px]:mt-[clamp(80px,10vw,140px)]">
            <div className="flex items-center gap-3">
              <div className="h-[1.5px] w-[clamp(120px,14vw,180px)] bg-gradient-to-l from-white/70 to-transparent" />
              <span className="whitespace-nowrap font-['Montserrat'] text-xs font-extrabold uppercase tracking-[0.28em] text-white sm:text-sm">
                Lorem Ipsum
              </span>
              <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-white text-[#1a7be8]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[60%] w-[60%]" aria-hidden="true">
                  <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" />
                  <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" transform="rotate(45 12 12)" />
                </svg>
              </span>
            </div>

            <h2 className="mt-[clamp(12px,1.6vw,18px)] font-['Montserrat'] text-2xl font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-3xl md:text-4xl">
              Have Any Questions
            </h2>

            <p className="mt-[clamp(14px,1.8vw,24px)] max-w-[460px] font-['Montserrat'] text-sm font-medium leading-snug text-white/90">
              It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages,
              And More Recently With Desktop Publishing Software Like Aldus PageMaker Including Versions Of Lorem
              Ipsum.
            </p>

            <div className="mt-[clamp(14px,1.8vw,24px)] mr-auto h-[1.5px] w-[clamp(120px,14vw,180px)] bg-gradient-to-r from-white/70 to-transparent" />
          </div>

          <div className="order-2 w-full min-[700px]:order-1">
            <div className="grid grid-cols-1 gap-[clamp(14px,2vw,22px)] min-[560px]:grid-cols-2">
              <div>
                <label className="mb-2 block font-['Montserrat'] text-[13px] font-semibold tracking-wide text-white/90">Full Name</label>
                <input
                  type="text"
                  className="h-[clamp(40px,4.2vw,48px)] w-full rounded-[12px] bg-white/15 px-4 font-['Montserrat'] text-sm text-white placeholder-white/50 outline-none ring-1 ring-white/20 backdrop-blur-sm transition focus:bg-white/25 focus:ring-white/40"
                />
              </div>
              <div>
                <label className="mb-2 block font-['Montserrat'] text-[13px] font-semibold tracking-wide text-white/90">Mobile Number</label>
                <input
                  type="tel"
                  className="h-[clamp(40px,4.2vw,48px)] w-full rounded-[12px] bg-white/15 px-4 font-['Montserrat'] text-sm text-white placeholder-white/50 outline-none ring-1 ring-white/20 backdrop-blur-sm transition focus:bg-white/25 focus:ring-white/40"
                />
              </div>
            </div>

            <div className="mt-[clamp(14px,2vw,22px)]">
              <label className="mb-2 block font-['Montserrat'] text-[13px] font-semibold tracking-wide text-white/90">Email Address</label>
              <input
                type="email"
                className="h-[clamp(40px,4.2vw,48px)] w-full rounded-[12px] bg-white/15 px-4 font-['Montserrat'] text-sm text-white placeholder-white/50 outline-none ring-1 ring-white/20 backdrop-blur-sm transition focus:bg-white/25 focus:ring-white/40"
              />
            </div>

            <div className="mt-[clamp(14px,2vw,22px)]">
              <label className="mb-2 block font-['Montserrat'] text-[13px] font-semibold tracking-wide text-white/90">Message</label>
              <textarea
                rows={6}
                className="w-full rounded-[12px] bg-white/15 px-4 py-3 font-['Montserrat'] text-sm leading-relaxed text-white placeholder-white/50 outline-none ring-1 ring-white/20 backdrop-blur-sm transition focus:bg-white/25 focus:ring-white/40"
              />
            </div>

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="group mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-white px-7 font-['Montserrat'] text-[15px] font-extrabold tracking-wide text-[#1a7be8] shadow-[0_4px_14px_rgba(26,123,232,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#1a7be8] hover:text-white hover:shadow-[0_10px_24px_rgba(26,123,232,0.55)] active:translate-y-0"
            >
              SEND
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1">
                <path d="M22 2 11 13" />
                <path d="m22 2-7 20-4-9-9-4 20-7Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
