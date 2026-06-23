import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { cn } from "../utils/cn";
import { useTheme } from "../components/ThemeContext";

const dummyText =
  "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.";

const privacyData = [
  {
    title: "Frequently Asked Questions Topic",
    blocks: [
      { title: "01. Lorem Ipsum Is Simply Dummy Text", text: dummyText },
      { title: "01. Lorem Ipsum Is Simply Dummy Text", text: dummyText },
      { title: "01. Lorem Ipsum Is Simply Dummy Text", text: dummyText },
    ],
  },
  {
    title: "Frequently Asked Questions Topic",
    blocks: [
      { title: "01. Lorem Ipsum Is Simply Dummy Text", text: dummyText },
      { title: "01. Lorem Ipsum Is Simply Dummy Text", text: dummyText },
      { title: "01. Lorem Ipsum Is Simply Dummy Text", text: dummyText },
    ],
  },
];

const faqData = [
  {
    title: "Frequently Asked Questions Topic",
    faqs: [
      { q: "01. Lorem Ipsum Is Simply Dummy Text", a: dummyText },
      { q: "01. Lorem Ipsum Is Simply Dummy Text", a: dummyText },
      { q: "01. Lorem Ipsum Is Simply Dummy Text", a: dummyText },
      { q: "01. Lorem Ipsum Is Simply Dummy Text", a: dummyText },
    ],
  },
];

type TabId = "privacy" | "terms" | "faq";

const tabs: { id: TabId; label: string; title: string; subtitle: string }[] = [
  { id: "privacy", label: "Privacy Policy", title: "Privacy Policy", subtitle: "Any Topic For Privacy Policies" },
  { id: "terms", label: "Terms & Conditions", title: "Terms & Conditions", subtitle: "Any Topic For Terms And Conditions" },
  { id: "faq", label: "FAQ", title: "FAQ", subtitle: "Frequently Asked Questions" },
];

function AccordionItem({ faq, defaultOpen = false, theme }: { faq: { q: string; a: string }; defaultOpen?: boolean; theme: "light" | "dark" }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-between p-4 text-left text-sm font-bold text-white transition-colors",
          isOpen ? "rounded-t-xl bg-[#1a7be8]" : "rounded-xl bg-[#1a7be8] hover:bg-[#1567c9]",
        )}
      >
        <span>{faq.q}</span>
        <span className="ml-4 shrink-0 text-xl font-normal leading-none">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <div
            className={cn(
              "rounded-b-xl border-x border-b p-5 text-[13px] leading-relaxed shadow-inner",
              theme === "light" ? "border-blue-200 bg-[#e2f0ff] text-slate-700" : "border-slate-700 bg-slate-800 text-slate-200",
            )}
          >
            {faq.a}
          </div>
        </div>
      </div>
    </div>
  );
}

function isValidTab(value: string | null): value is TabId {
  return value === "privacy" || value === "terms" || value === "faq";
}

export default function PoliciesPage() {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const initialTab: TabId = isValidTab(tabParam) ? tabParam : "privacy";
  const [activeTab, setActiveTab] = useState<TabId>(initialTab);
  const activeTabData = tabs.find((t) => t.id === activeTab)!;

  const handleTabChange = (id: TabId) => {
    setActiveTab(id);
    setSearchParams({ tab: id });
  };

  return (
    <main className={cn("relative min-h-screen pb-20 font-['Montserrat']", theme === "light" ? "bg-slate-50 text-slate-800" : "bg-slate-950 text-white")}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] overflow-hidden">
        <div className={cn("absolute inset-0 bg-gradient-to-b from-blue-500 via-sky-300 via-30%", theme === "light" ? "to-slate-50 to-80%" : "to-slate-950 to-80%")} />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-4 pt-8 sm:px-6 md:pt-14 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row lg:gap-10">
          <div className="w-fit max-w-full shrink-0 self-start md:w-[56px]">
            <div
              className={cn(
                "sticky top-8 flex w-max max-w-full flex-row overflow-x-auto rounded-full border p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] backdrop-blur-md md:w-full md:flex-col md:overflow-visible",
                theme === "light" ? "border-white/40 bg-white/60" : "border-slate-700/60 bg-slate-900/60",
              )}
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={cn(
                      "relative flex shrink-0 items-center justify-center transition-all duration-300 rounded-full px-5 py-2.5 text-sm font-bold tracking-wide md:h-[180px] md:w-full md:px-0 md:py-0 md:tracking-widest",
                      isActive
                        ? "bg-[#1a7be8] text-white shadow-md"
                        : theme === "light"
                          ? "text-slate-600 hover:bg-white/80 hover:text-[#1a7be8]"
                          : "text-slate-300 hover:bg-slate-800/80 hover:text-sky-400",
                    )}
                  >
                    <span className="md:hidden uppercase">{tab.label}</span>
                    <span className="hidden md:inline-block uppercase" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                      {tab.label}
                    </span>
                    {isActive && (
                      <svg className="absolute -right-3.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[#1a7be8] md:block" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 0L16 8L0 16Z" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={cn(
              "min-h-[700px] flex-1 rounded-3xl border-l-[6px] border-l-[#1a7be8] p-6 shadow-xl backdrop-blur-sm sm:p-10 lg:p-14",
              theme === "light" ? "bg-white/95" : "bg-slate-900/95",
            )}
          >
            <div className="mb-10 text-center">
              <h1 className="mb-2 font-serif text-4xl italic text-[#1a7be8] sm:text-5xl">{activeTabData.title}</h1>
              <p className={cn("text-[13px] font-bold tracking-widest uppercase", theme === "light" ? "text-slate-800" : "text-slate-200")}>
                {activeTabData.subtitle}
              </p>
            </div>
            <div className="mx-auto max-w-[900px]">
              {(activeTab === "privacy" || activeTab === "terms") &&
                privacyData.map((section, idx) => (
                  <div key={idx} className="mb-10 last:mb-0">
                    <h3 className={cn("mb-4 text-sm font-bold sm:text-base", theme === "light" ? "text-slate-700" : "text-slate-200")}>{section.title}</h3>
                    <div className="space-y-4">
                      {section.blocks.map((block, bIdx) => (
                        <div key={bIdx} className="rounded-xl bg-[#1a7be8] p-5 text-white shadow-md sm:p-6">
                          <h4 className="mb-2 text-sm font-bold sm:text-base">{block.title}</h4>
                          <p className="text-[13px] leading-relaxed text-white/90 sm:text-sm">{block.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              {activeTab === "faq" &&
                faqData.map((section, idx) => (
                  <div key={idx} className="mb-10 last:mb-0">
                    <h3 className={cn("mb-4 text-sm font-bold sm:text-base", theme === "light" ? "text-slate-700" : "text-slate-200")}>{section.title}</h3>
                    <div className="space-y-3">
                      {section.faqs.map((faq, fIdx) => (
                        <AccordionItem key={fIdx} faq={faq} defaultOpen={idx === 0 && fIdx === 0} theme={theme} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
