import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../utils/cn";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  SlidersIcon,
} from "../ui/icons";
import { FilterOptions } from "../components/FilterOptions";
import { TutorCardItem } from "../components/TutorCardItem";
import { tutorCardList, TABS } from "../data";
import type { TabKey } from "../types";
import { useTheme } from "../components/ThemeContext";
import { PageHero } from "../components/PageHero";

export function TutorsPage() {
  const theme = useTheme();
  const [tab, setTab] = useState<TabKey>("popular");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState("Default Sorting");
  const [activeFilters, setActiveFilters] = useState<string[]>(["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]);
  const [selectedFilterCheckboxes, setSelectedFilterCheckboxes] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [page, setPage] = useState(1);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const filterRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  const tutors = useMemo(() => tutorCardList(), []);
  const totalItems = 500;
  const itemsPerPage = 15;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageTutors = useMemo(() => tutors.slice(0, itemsPerPage), [tutors]);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (sortRef.current && !sortRef.current.contains(target)) setSortOpen(false);
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isFilterDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFilterDrawerOpen]);

  const toggleWishlist = (id: string) => {
    setWishlist((current) => ({ ...current, [id]: !current[id] }));
  };

  const toggleCheckbox = (option: string) => {
    setSelectedFilterCheckboxes((current) =>
      current.includes(option) ? current.filter((item) => item !== option) : [...current, option],
    );
  };

  const removeActiveFilter = (index: number) => {
    setActiveFilters((current) => current.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* Hero */}
      <PageHero
        title="Our Tutors"
        tagline="Give All You Need…"
        titleSizeClassName="text-[16vw] sm:text-[120px] md:text-[160px] lg:text-[180px]"
      />

      {/* Catalog */}
      <section className="w-full px-4 py-6 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mx-auto grid gap-4 rounded-[1.5rem] border p-4 shadow-lg sm:p-5 lg:grid-cols-[240px_1fr]",
            theme === "light" ? "border-slate-200 bg-white shadow-slate-200/60" : "border-slate-800 bg-slate-900 shadow-black/20",
          )}
        >
          {/* Filter panel */}
          <aside
            ref={filterRef}
            className={cn("hidden pr-2 lg:sticky lg:top-6 lg:block lg:max-h-[calc(100vh-80px)] lg:self-start lg:overflow-y-auto")}
          >
            <FilterOptions
              theme={theme}
              selectedFilterCheckboxes={selectedFilterCheckboxes}
              onToggleCheckbox={toggleCheckbox}
              variant="tutors"
            />
          </aside>

          {/* Content panel */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <button
                  type="button"
                  onClick={() => setIsFilterDrawerOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-600/20 transition hover:bg-sky-500 lg:hidden"
                >
                  <SlidersIcon className="h-4 w-4" />
                  Filters
                  {selectedFilterCheckboxes.length > 0 && (
                    <span className="grid h-5 min-w-5 place-items-center rounded-full bg-white px-1 text-[11px] font-black text-sky-600">
                      {selectedFilterCheckboxes.length}
                    </span>
                  )}
                </button>
                <span className={cn("font-medium", theme === "light" ? "text-slate-700" : "text-slate-300")}>
                  Showing 1 - 10 of {totalItems.toLocaleString()} results
                </span>
              </div>

              <div ref={sortRef} className="relative flex items-center gap-2 text-sm">
                <span className={cn("font-medium", theme === "light" ? "text-slate-700" : "text-slate-300")}>Sort by :</span>
                <button
                  type="button"
                  onClick={() => setSortOpen((current) => !current)}
                  className={cn(
                    "inline-flex min-w-[180px] items-center justify-between gap-3 rounded-full border px-4 py-2 text-sm font-medium",
                    theme === "light" ? "border-slate-200 bg-white text-slate-800" : "border-slate-700 bg-slate-950 text-white",
                  )}
                >
                  {sortValue}
                  <ChevronDownIcon className={cn("h-4 w-4 transition", sortOpen && "rotate-180")} />
                </button>

                {sortOpen && (
                  <div
                    className={cn(
                      "absolute right-0 top-full z-30 mt-2 w-64 overflow-hidden rounded-2xl border shadow-lg",
                      theme === "light" ? "border-slate-200 bg-white text-slate-900" : "border-slate-800 bg-slate-900 text-white",
                    )}
                  >
                    {["Default Sorting", "Name: A to Z", "Name: Z to A", "Newest First", "Most Popular"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setSortValue(option);
                          setSortOpen(false);
                        }}
                        className={cn(
                          "flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition",
                          sortValue === option
                            ? theme === "light"
                              ? "bg-sky-50 text-sky-600"
                              : "bg-slate-950 text-sky-400"
                            : theme === "light"
                              ? "hover:bg-slate-50"
                              : "hover:bg-slate-800",
                        )}
                      >
                        {option}
                        {sortValue === option && <ArrowRightIcon className="h-4 w-4" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Active Filters row */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className={cn("text-sm font-semibold", theme === "light" ? "text-slate-800" : "text-white")}>Active Filter</span>
              {activeFilters.map((filter, idx) => (
                <button
                  key={`active-${idx}`}
                  type="button"
                  onClick={() => removeActiveFilter(idx)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-sky-500"
                >
                  {filter}
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/20">
                    <CloseIcon className="h-3 w-3" />
                  </span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => setActiveFilters([])}
                className="text-sm font-semibold text-sky-600 transition hover:underline"
              >
                Clear All
              </button>
            </div>

            {/* 3 Tabs below active filters */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {TABS.slice(0, 3).map((tabDef) => {
                const isActive = tab === tabDef.key;
                return (
                  <button
                    key={tabDef.key}
                    type="button"
                    onClick={() => setTab(tabDef.key)}
                    className={cn(
                      "shrink-0 whitespace-nowrap rounded-full border px-5 py-1.5 text-xs font-semibold transition sm:text-sm",
                      isActive
                        ? "border-sky-500 bg-sky-500 text-white shadow-md shadow-sky-500/20"
                        : theme === "light"
                          ? "border-sky-500 bg-white text-sky-600 hover:bg-sky-50"
                          : "border-sky-500 bg-slate-950 text-sky-400 hover:bg-slate-900",
                    )}
                  >
                    {tabDef.label}
                  </button>
                );
              })}
            </div>

            {/* Card grid */}
            <div className="mt-6 grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 lg:gap-5 xl:grid-cols-4 2xl:grid-cols-5">
              {pageTutors.map((card, index) => (
                <TutorCardItem
                  key={card.id}
                  card={card}
                  index={index}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setPage(1)}
                className={cn(
                  "inline-flex h-9 items-center justify-center rounded-full px-3 text-sm font-semibold transition",
                  theme === "light"
                    ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    : "border border-slate-700 bg-slate-950 text-slate-300 hover:bg-slate-800",
                )}
              >
                First
              </button>
              <button
                type="button"
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center rounded-full transition",
                  theme === "light"
                    ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    : "border border-slate-700 bg-slate-950 text-slate-300 hover:bg-slate-800",
                )}
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 5).map((num) => {
                const isActive = page === num;
                return (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setPage(num)}
                    className={cn(
                      "inline-flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-sm font-semibold transition",
                      isActive
                        ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                        : theme === "light"
                          ? "text-slate-700 hover:bg-slate-100"
                          : "text-slate-300 hover:bg-slate-800",
                    )}
                  >
                    {num}
                  </button>
                );
              })}
              <span className={cn("px-2 text-sm", theme === "light" ? "text-slate-500" : "text-slate-400")}>...</span>
              {Array.from({ length: totalPages }, (_, i) => i + 1).slice(Math.max(5, totalPages - 3)).map((num) => {
                const isActive = page === num;
                return (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setPage(num)}
                    className={cn(
                      "inline-flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-sm font-semibold transition",
                      isActive
                        ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                        : theme === "light"
                          ? "text-slate-700 hover:bg-slate-100"
                          : "text-slate-300 hover:bg-slate-800",
                    )}
                  >
                    {num}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center rounded-full transition",
                  theme === "light"
                    ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    : "border border-slate-700 bg-slate-950 text-slate-300 hover:bg-slate-800",
                )}
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setPage(totalPages)}
                className={cn(
                  "inline-flex h-9 items-center justify-center rounded-full px-3 text-sm font-semibold transition",
                  theme === "light"
                    ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    : "border border-slate-700 bg-slate-950 text-slate-300 hover:bg-slate-800",
                )}
              >
                Last
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter drawer for 0-1023px */}
      <div className={cn("fixed inset-0 z-50 lg:hidden", isFilterDrawerOpen ? "pointer-events-auto" : "pointer-events-none")}>
        <div
          className={cn("absolute inset-0 bg-black/60 transition-opacity", isFilterDrawerOpen ? "opacity-100" : "opacity-0")}
          onClick={() => setIsFilterDrawerOpen(false)}
        />
        <aside
          className={cn(
            "absolute right-0 top-0 flex h-full w-full max-w-sm transform flex-col transition-transform duration-300",
            isFilterDrawerOpen ? "translate-x-0" : "translate-x-full",
            theme === "light" ? "bg-white text-slate-900" : "bg-slate-900 text-white",
          )}
        >
          <div className={cn("flex items-center justify-between border-b px-5 py-4", theme === "light" ? "border-slate-200" : "border-slate-800")}>
            <div>
              <p className="text-base font-bold">Filter Options</p>
              <p className={cn("text-xs", theme === "light" ? "text-slate-500" : "text-slate-400")}>Choose grade and subject</p>
            </div>
            <button
              type="button"
              onClick={() => setIsFilterDrawerOpen(false)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border",
                theme === "light" ? "border-slate-200 bg-white" : "border-slate-800 bg-slate-950",
              )}
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
            <FilterOptions
              theme={theme}
              selectedFilterCheckboxes={selectedFilterCheckboxes}
              onToggleCheckbox={toggleCheckbox}
              variant="tutors"
            />
          </div>

          <div className={cn("grid grid-cols-2 gap-3 border-t px-5 py-4", theme === "light" ? "border-slate-200" : "border-slate-800")}>
            <button
              type="button"
              onClick={() => setSelectedFilterCheckboxes([])}
              className={cn(
                "rounded-2xl border px-4 py-3 text-sm font-semibold transition",
                theme === "light"
                  ? "border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                  : "border-slate-800 bg-slate-950 text-white hover:bg-slate-800",
              )}
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => setIsFilterDrawerOpen(false)}
              className="rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              Apply Filters
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
