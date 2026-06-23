import { useState } from "react";
import { cn } from "../utils/cn";
import { useTheme } from "../components/ThemeContext";
import { PageHero } from "../components/PageHero";

export default function ContactPage() {
  const theme = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <main className={cn("min-h-screen overflow-hidden font-['Montserrat']", theme === "light" ? "bg-slate-100 text-slate-800" : "bg-slate-950 text-white")}>
      {/* Hero / Title */}
      <PageHero
        title="Contact Us"
        tagline="Give All You Can..."
        titleSizeClassName="text-[14vw] sm:text-[86px] md:text-[108px] lg:text-[150px]"
      />

      {/* Contact Card */}
      <section className="relative px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
        <div className="relative mx-auto w-full max-w-[1100px]">
          <div className={cn("overflow-hidden rounded-2xl border shadow-[0_6px_24px_rgba(26,123,232,0.15)]", theme === "light" ? "border-sky-200 bg-white" : "border-slate-800 bg-slate-900")}>
            <div className="grid grid-cols-1 md:grid-cols-[4fr_6fr]">
              {/* Left: Get In Touch */}
              <div className={cn("relative p-5 sm:p-6 md:p-7", theme === "light" ? "bg-[#e8f2ff]" : "bg-slate-950")}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#1a7be8] text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[62%] w-[62%]" aria-hidden="true">
                      <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" />
                      <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" transform="rotate(45 12 12)" />
                    </svg>
                  </span>
                  <span className="shrink-0 whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#1a7be8]">
                    Sub Topic
                  </span>
                  <div className="h-[1.5px] min-w-0 flex-1 bg-gradient-to-r from-[#1a7be8] to-transparent" />
                </div>

                <h2 className={cn("text-xl font-extrabold sm:text-2xl", theme === "light" ? "text-slate-800" : "text-white")}>Get In Touch</h2>
                <p className={cn("mt-2 text-sm font-medium leading-relaxed", theme === "light" ? "text-slate-600" : "text-slate-300")}>
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
                </p>

                <ul className="mt-7 space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#1a7be8] text-white shadow-md shadow-blue-500/20">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div>
                      <h3 className={cn("text-sm font-bold sm:text-base", theme === "light" ? "text-slate-800" : "text-white")}>Visit Us</h3>
                      <p className={cn("mt-0.5 text-sm", theme === "light" ? "text-slate-600" : "text-slate-300")}>Lorem Ipsum Is Simply Dummy Text</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#1a7be8] text-white shadow-md shadow-blue-500/20">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-10 6L2 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className={cn("text-sm font-bold sm:text-base", theme === "light" ? "text-slate-800" : "text-white")}>Email Us</h3>
                      <p className={cn("mt-0.5 text-sm", theme === "light" ? "text-slate-600" : "text-slate-300")}>Lorem Ipsum Is Simply Dummy Text</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#1a7be8] text-white shadow-md shadow-blue-500/20">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <div>
                      <h3 className={cn("text-sm font-bold sm:text-base", theme === "light" ? "text-slate-800" : "text-white")}>Call Us</h3>
                      <p className={cn("mt-0.5 text-sm", theme === "light" ? "text-slate-600" : "text-slate-300")}>Lorem Ipsum Is Simply Dummy Text</p>
                    </div>
                  </li>
                </ul>

                <div className={cn("mt-8 border-t pt-6", theme === "light" ? "border-sky-200" : "border-slate-800")}>
                  <h3 className={cn("text-sm font-bold sm:text-base", theme === "light" ? "text-slate-800" : "text-white")}>Follow Our Social Media</h3>
                  <div className="mt-3 flex items-center gap-3">
                    {[
                      { label: "FB", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                      {
                        label: "TW",
                        path:
                          "M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z",
                      },
                      {
                        label: "WA",
                        path:
                          "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
                      },
                      { label: "TK", path: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" },
                    ].map((icon) => (
                      <button
                        key={icon.label}
                        className="grid h-9 w-9 place-items-center rounded-full bg-[#1a7be8] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#1567c9]"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                          <path d={icon.path} />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-6 ml-auto h-[2px] w-[60%] bg-gradient-to-l from-[#1a7be8] to-transparent" />
              </div>

              {/* Right: Send Us A Message */}
              <div className={cn("p-6 sm:p-8 md:p-10", theme === "light" ? "bg-white" : "bg-slate-900")}>
                <h2 className={cn("text-xl font-extrabold sm:text-2xl", theme === "light" ? "text-slate-800" : "text-white")}>Send Us A Message</h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={cn("mb-2 block text-xs font-semibold sm:text-sm", theme === "light" ? "text-slate-600" : "text-slate-300")}>First Name</label>
                    <div className={cn("rounded-full border-2 border-[#1a7be8] px-4", theme === "light" ? "bg-[#e8f2ff]" : "bg-slate-950")}>
                      <input type="text" placeholder="First Name" className={cn("h-10 w-full bg-transparent text-sm outline-none", theme === "dark" && "text-white placeholder:text-slate-500")} />
                    </div>
                  </div>
                  <div>
                    <label className={cn("mb-2 block text-xs font-semibold sm:text-sm", theme === "light" ? "text-slate-600" : "text-slate-300")}>Last Name</label>
                    <div className={cn("rounded-full border-2 border-[#1a7be8] px-4", theme === "light" ? "bg-[#e8f2ff]" : "bg-slate-950")}>
                      <input type="text" placeholder="Last Name" className={cn("h-10 w-full bg-transparent text-sm outline-none", theme === "dark" && "text-white placeholder:text-slate-500")} />
                    </div>
                  </div>
                  <div>
                    <label className={cn("mb-2 block text-xs font-semibold sm:text-sm", theme === "light" ? "text-slate-600" : "text-slate-300")}>Mobile Number</label>
                    <div className={cn("rounded-full border-2 border-[#1a7be8] px-4", theme === "light" ? "bg-[#e8f2ff]" : "bg-slate-950")}>
                      <input type="tel" placeholder="Mobile Number" className={cn("h-10 w-full bg-transparent text-sm outline-none", theme === "dark" && "text-white placeholder:text-slate-500")} />
                    </div>
                  </div>
                  <div>
                    <label className={cn("mb-2 block text-xs font-semibold sm:text-sm", theme === "light" ? "text-slate-600" : "text-slate-300")}>Email Address</label>
                    <div className={cn("rounded-full border-2 border-[#1a7be8] px-4", theme === "light" ? "bg-[#e8f2ff]" : "bg-slate-950")}>
                      <input type="email" placeholder="Email Address" className={cn("h-10 w-full bg-transparent text-sm outline-none", theme === "dark" && "text-white placeholder:text-slate-500")} />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <label className={cn("mb-2 block text-xs font-semibold sm:text-sm", theme === "light" ? "text-slate-600" : "text-slate-300")}>Subject</label>
                  <div className={cn("rounded-full border-2 border-[#1a7be8] px-4", theme === "light" ? "bg-[#e8f2ff]" : "bg-slate-950")}>
                    <input type="text" placeholder="Subject" className={cn("h-10 w-full bg-transparent text-sm outline-none", theme === "dark" && "text-white placeholder:text-slate-500")} />
                  </div>
                </div>
                <div className="mt-4">
                  <label className={cn("mb-2 block text-xs font-semibold sm:text-sm", theme === "light" ? "text-slate-600" : "text-slate-300")}>Message</label>
                  <div className={cn("rounded-2xl border-2 border-[#1a7be8] p-4", theme === "light" ? "bg-[#e8f2ff]" : "bg-slate-950")}>
                    <textarea rows={6} placeholder="Message" className={cn("w-full resize-none bg-transparent text-sm outline-none", theme === "dark" && "text-white placeholder:text-slate-500")} />
                  </div>
                </div>
                <div className="mt-6 flex justify-center sm:justify-start">
                  <button
                    type="button"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="group relative inline-flex h-11 min-w-[200px] items-center justify-center overflow-hidden rounded-full bg-[#1a7be8] px-8 text-sm font-extrabold tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#1567c9] active:scale-[0.98]"
                  >
                    <span
                      className={cn(
                        "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out",
                        hovered && "translate-x-full",
                      )}
                    />
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 uppercase">Send Message</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="relative z-10 ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1"
                    >
                      <path d="M22 2 11 13" />
                      <path d="m22 2-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map - Full Width */}
      <div className="w-full overflow-hidden">
        <div className={cn("relative aspect-[16/6] w-full sm:aspect-[24/7] lg:aspect-[32/8]", theme === "light" ? "bg-[#e8f2ff]" : "bg-slate-900")}>
          <iframe
            title="Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.05%2C40.70%2C-73.92%2C40.82&amp;layer=mapnik&amp;marker=40.7580%2C-73.9855"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}
