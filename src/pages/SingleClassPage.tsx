import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "../utils/cn";
import { classCardList } from "../data";
import type { Theme } from "../types";
import { useTheme } from "../components/ThemeContext";
import { WaterTexture } from "../components/WaterTexture";

type OverviewItem = {
  id: string;
  title: string;
  content: string[];
};

const OVERVIEW_ITEMS: OverviewItem[] = [
  {
    id: "item-1",
    title: "Lorem Ipsum",
    content: ["Lorem Ipsum is simply dummy", "Lorem Ipsum is simply dummy"],
  },
  {
    id: "item-2",
    title: "Lorem Ipsum",
    content: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    ],
  },
  {
    id: "item-3",
    title: "Lorem Ipsum",
    content: [
      "It was popularised in the 1960s with the release of Letraset sheets.",
      "More recently with desktop publishing software like Aldus PageMaker.",
    ],
  },
  {
    id: "item-4",
    title: "Lorem Ipsum",
    content: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    ],
  },
];

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="h-4 w-4">
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="h-4 w-4">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <circle cx="9" cy="21" r="1.5" />
      <circle cx="18" cy="21" r="1.5" />
      <path d="M3 3h2l2.4 12.3a2 2 0 0 0 2 1.7h8.7a2 2 0 0 0 2-1.6L21 8H6" />
    </svg>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function ShareIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.47 2.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H10.5A6.75 6.75 0 0 0 3.75 14.5v2a.75.75 0 0 1-1.5 0v-2a8.25 8.25 0 0 1 8.25-8.25h5.69l-2.72-2.72a.75.75 0 0 1 0-1.06Z" />
    </svg>
  );
}

function DetailsColumn({
  theme,
  title,
  price,
  oldPrice,
  isWishlisted,
  onToggleWishlist,
}: {
  theme: Theme;
  title: string;
  price: number;
  oldPrice: number;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}) {
  return (
    <div className="w-full">
      <h1
        className={cn(
          "font-['Montserrat'] text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl",
          theme === "light" ? "text-slate-800" : "text-white",
        )}
      >
        {title}
      </h1>
      <p className={cn("mt-2 font-['Montserrat'] text-base font-medium sm:text-lg", theme === "light" ? "text-slate-600" : "text-slate-300")}>
        Class Subtitle Or Something
      </p>
      <p className={cn("mt-4 max-w-[620px] font-['Montserrat'] text-sm font-medium leading-relaxed", theme === "light" ? "text-slate-600" : "text-slate-300")}>
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
        Industry's Standard Dummy Text Ever Since The 1500s.
      </p>

      <div className="mt-6 flex items-baseline gap-3">
        <span className={cn("font-['Montserrat'] text-2xl font-extrabold sm:text-3xl", theme === "light" ? "text-slate-800" : "text-white")}>
          LKR {price.toLocaleString("en-LK")}
        </span>
        <span className="font-['Montserrat'] text-base font-bold text-slate-500 line-through">
          LKR {oldPrice.toLocaleString("en-LK")}
        </span>
        <span className="font-['Montserrat'] text-base font-bold text-[#1a7be8]">
          ({Math.round(((oldPrice - price) / oldPrice) * 100)}%)
        </span>
      </div>

      <div className="mt-6 flex flex-nowrap items-center gap-3">
        <button
          type="button"
          className="group inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#1a7be8] px-6 font-['Montserrat'] font-bold text-white shadow-[0_4px_14px_rgba(26,123,232,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#1567c9] hover:shadow-[0_10px_24px_rgba(26,123,232,0.55)] active:translate-y-0 min-[665px]:h-10 min-[665px]:px-4 min-[665px]:text-[11px] min-[711px]:h-11 min-[711px]:px-6 min-[711px]:text-sm min-[801px]:text-[11px] sm:h-12 sm:px-8 sm:text-base"
        >
          <CartIcon />
          ADD TO CART
        </button>

        <button
          type="button"
          onClick={onToggleWishlist}
          className={cn(
            "grid h-11 w-11 place-items-center rounded-full border-2 border-[#1a7be8] transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 min-[665px]:h-10 min-[665px]:w-10 min-[711px]:h-11 min-[711px]:w-11 sm:h-12 sm:w-12",
            isWishlisted
              ? "bg-[#1a7be8] text-white shadow-[0_4px_14px_rgba(26,123,232,0.35)]"
              : theme === "light"
                ? "bg-white text-[#1a7be8] hover:bg-sky-50"
                : "bg-slate-900 text-sky-400 hover:bg-slate-800",
          )}
          aria-label="Add to wishlist"
        >
          <HeartIcon filled={isWishlisted} />
        </button>

        <button
          type="button"
          className={cn(
            "group inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-transparent px-2 font-['Montserrat'] text-sm font-bold text-[#1a7be8] transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 sm:h-12 sm:px-3 sm:text-base",
            theme === "light" ? "hover:bg-sky-50" : "hover:bg-slate-800",
          )}
        >
          <span className="flex h-7 w-7 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110 sm:h-8 sm:w-8">
            <ShareIcon className="h-5 w-5 text-[#1a7be8] sm:h-6 sm:w-6" />
          </span>
          <span className="inline max-[430px]:hidden min-[665px]:max-[801px]:hidden">Share</span>
        </button>
      </div>
    </div>
  );
}

function OverviewList({ theme, openItemId, onToggle }: { theme: Theme; openItemId: string; onToggle: (id: string) => void }) {
  return (
    <div>
      <h2 className={cn("pb-3 font-['Montserrat'] text-lg font-extrabold tracking-wide", theme === "light" ? "text-slate-800" : "text-white")}>
        Overview
      </h2>
      <div className={cn("h-[2px] w-full rounded-full", theme === "light" ? "bg-slate-300" : "bg-slate-700")} />

      <ul className="mt-4 divide-y divide-slate-300">
        {OVERVIEW_ITEMS.map((item) => {
          const isOpen = openItemId === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onToggle(item.id)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 py-3 text-left font-['Montserrat'] text-sm font-semibold transition-colors duration-200 sm:text-base",
                  theme === "light" ? "text-slate-800 hover:text-[#1a7be8]" : "text-white hover:text-sky-400",
                )}
              >
                <span className="truncate">{item.title}</span>
                <span
                  className={cn(
                    "grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 transition-all duration-300 ease-out",
                    isOpen ? "border-[#1a7be8] bg-[#1a7be8] text-white" : "border-slate-400 bg-transparent text-slate-500",
                  )}
                >
                  {isOpen ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>

              <div
                className={cn(
                  "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="min-h-0 overflow-hidden">
                  <ul
                    className={cn(
                      "space-y-2 pb-4 pl-1 font-['Montserrat'] text-[13px] font-medium leading-relaxed sm:text-sm",
                      theme === "light" ? "text-slate-600" : "text-slate-300",
                    )}
                  >
                    {item.content.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function SingleClassPage() {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [openItemId, setOpenItemId] = useState<string>(OVERVIEW_ITEMS[0].id);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Look up the class from the catalog so refreshing /classes/:id shows matching data.
  const allClasses = useMemo(() => classCardList(), []);
  const classData = useMemo(() => allClasses.find((c) => c.id === id) ?? allClasses[0], [allClasses, id]);

  const toggleItem = (itemId: string) => {
    setOpenItemId((current) => (current === itemId ? "" : itemId));
  };

  if (!classData) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-lg font-semibold text-slate-700">Class not found.</p>
        <button type="button" onClick={() => navigate("/classes")} className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white">
          Back to Classes
        </button>
      </main>
    );
  }

  return (
    <main className={cn("min-h-screen", theme === "light" ? "bg-slate-100 text-slate-800" : "bg-slate-950 text-white")}>
      <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[220px] overflow-hidden" aria-hidden="true">
          <WaterTexture className="h-full w-full" />
        </div>

        <div className="relative mx-auto w-full max-w-[1180px]">
          {/* 0-819px stacked / two-col layout */}
          <div className="grid grid-cols-1 items-center gap-8 min-[665px]:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] min-[665px]:gap-10 min-[820px]:hidden">
            <div className="mx-auto w-full max-w-[360px] min-[665px]:mx-0 min-[665px]:max-w-none">
              <div className="relative aspect-square w-full overflow-hidden rounded-[clamp(14px,1.6vw,20px)] bg-slate-900 shadow-[0_14px_36px_rgba(26,123,232,0.25)]">
                <div className="absolute inset-0" style={{ background: classData.cover }} />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                  <p className="font-['Montserrat'] text-2xl font-black uppercase tracking-tight">{classData.subject}</p>
                </div>
              </div>
            </div>

            <DetailsColumn
              theme={theme}
              title={classData.title}
              price={classData.price}
              oldPrice={classData.oldPrice}
              isWishlisted={isWishlisted}
              onToggleWishlist={() => setIsWishlisted((c) => !c)}
            />
          </div>

          <div className="mt-10 min-[820px]:hidden">
            <OverviewList theme={theme} openItemId={openItemId} onToggle={toggleItem} />
          </div>

          {/* 820px+ single row */}
          <div className="hidden min-[820px]:grid min-[820px]:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] min-[820px]:items-center min-[820px]:gap-14">
            <div className="mx-auto w-full max-w-none">
              <div className="relative aspect-square w-full overflow-hidden rounded-[clamp(14px,1.6vw,20px)] bg-slate-900 shadow-[0_14px_36px_rgba(26,123,232,0.25)]">
                <div className="absolute inset-0" style={{ background: classData.cover }} />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                  <p className="font-['Montserrat'] text-2xl font-black uppercase tracking-tight">{classData.subject}</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <DetailsColumn
                theme={theme}
                title={classData.title}
                price={classData.price}
                oldPrice={classData.oldPrice}
                isWishlisted={isWishlisted}
                onToggleWishlist={() => setIsWishlisted((c) => !c)}
              />
              <div className="mt-10">
                <OverviewList theme={theme} openItemId={openItemId} onToggle={toggleItem} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DescriptionSection theme={theme} />
      <AboutTeacherSection theme={theme} teacherName={classData.teacher} />
    </main>
  );
}

function DescriptionSection({ theme }: { theme: Theme }) {
  return (
    <section className={cn("w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14", theme === "light" ? "bg-slate-100" : "bg-slate-950")}>
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className={cn("pb-4 font-['Montserrat'] text-xl font-extrabold tracking-wide sm:text-2xl", theme === "light" ? "text-slate-800" : "text-white")}>
          Description
        </h2>
        <div className={cn("h-[2px] w-full rounded-full", theme === "light" ? "bg-slate-300" : "bg-slate-700")} />

        <div className={cn("mt-6 space-y-6 font-['Montserrat'] text-sm font-medium leading-relaxed sm:text-base", theme === "light" ? "text-slate-600" : "text-slate-300")}>
          <p>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
            Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And
            Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap
            Into Electronic Typesetting, Remaining Essentially Unchanged.
          </p>
          <p>
            It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages,
            And More Recently With Desktop Publishing Software Like Aldus PageMaker Including Versions Of Lorem
            Ipsum.
          </p>
          <p>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
            Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And
            Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap
            Into Electronic Typesetting, Remaining Essentially Unchanged.
          </p>
          <p>
            It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages,
            And More Recently With Desktop Publishing Software Like Aldus PageMaker Including Versions Of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutTeacherSection({ theme, teacherName }: { theme: Theme; teacherName: string }) {
  return (
    <section className={cn("w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14", theme === "light" ? "bg-white" : "bg-slate-900")}>
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="flex items-center gap-3">
          <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#1a7be8] text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[60%] w-[60%]" aria-hidden="true">
              <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" />
              <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z" transform="rotate(45 12 12)" />
            </svg>
          </span>
          <span className="whitespace-nowrap font-['Montserrat'] text-xs font-extrabold uppercase tracking-[0.28em] text-[#1a7be8] sm:text-sm">
            About Us
          </span>
          <div className="h-[1.5px] w-[clamp(120px,28vw,260px)] bg-gradient-to-r from-[#1a7be8] to-transparent" />
        </div>

        <h2 className={cn("mt-4 pb-4 font-['Montserrat'] text-2xl font-extrabold tracking-wide sm:text-3xl", theme === "light" ? "text-slate-800" : "text-white")}>
          About The Teacher
        </h2>

        <div className="mt-6 grid grid-cols-1 items-start gap-6 min-[650px]:grid-cols-[minmax(0,260px)_minmax(0,1fr)] min-[650px]:gap-8 lg:gap-12">
          <div className="aspect-square w-full max-w-[320px] overflow-hidden rounded-[clamp(14px,1.6vw,20px)] bg-slate-200 min-[650px]:max-w-none">
            <img
              src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600"
              alt="Teacher portrait"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="w-full">
            <h3 className={cn("font-['Montserrat'] text-xl font-extrabold sm:text-2xl", theme === "light" ? "text-slate-800" : "text-white")}>
              {teacherName}
            </h3>
            <div className="mt-3 space-y-1">
              <p className="font-['Montserrat'] text-sm font-bold text-[#1a7be8] sm:text-base">Bachelor Of Science (BS/BSc)</p>
              <p className="font-['Montserrat'] text-sm font-bold text-[#1a7be8] sm:text-base">Master Of Science (MS)</p>
            </div>

            <div className={cn("mt-5 space-y-4 font-['Montserrat'] text-sm font-medium leading-relaxed sm:text-base", theme === "light" ? "text-slate-600" : "text-slate-300")}>
              <p>
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
                Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
                And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also
                The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.
              </p>
              <p>
                It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum
                Passages, And More Recently With Desktop Publishing Software Like Aldus PageMaker Including
                Versions Of Lorem Ipsum.
              </p>
            </div>

            <div className="mt-6 ml-auto h-[2px] w-[clamp(140px,28vw,280px)] bg-gradient-to-l from-[#1a7be8] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}