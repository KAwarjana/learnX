import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../utils/cn";
import { CATEGORY_GROUPS, NAV_ITEMS } from "../data";
import type { Theme } from "../types";
import {
  ArrowRightIcon,
  CartIcon,
  ChevronDownIcon,
  CloseIcon,
  GridIcon,
  HeartIcon,
  HelpIcon,
  LogoMark,
  MenuIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  UserIcon,
} from "../ui/icons";

type SearchItem = {
  label: string;
  description: string;
  path: string;
};

function TooltipIconButton({
  theme,
  label,
  onClick,
  children,
}: {
  theme: Theme;
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "group relative inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-200",
        theme === "light"
          ? "border-slate-200 bg-white text-sky-600 hover:border-sky-200 hover:bg-sky-50"
          : "border-slate-800 bg-black text-sky-400 hover:border-slate-700 hover:bg-slate-900",
      )}
    >
      {children}
      <span
        className={cn(
          "pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold opacity-0 shadow-sm transition duration-200 group-hover:opacity-100",
          theme === "light" ? "bg-slate-900 text-white" : "bg-white text-slate-900",
        )}
      >
        {label}
      </span>
    </button>
  );
}

export function Header({
  theme,
  onToggleTheme,
  isAuthenticated,
  onSignIn,
  onSignOut,
}: {
  theme: Theme;
  onToggleTheme: () => void;
  isAuthenticated: boolean;
  onSignIn: () => void;
  onSignOut: () => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const wishlistCount = 2;
  const cartCount = 1;

  const searchItems = useMemo<SearchItem[]>(() => {
    return [
      ...NAV_ITEMS.map((item) => ({ label: item.label, description: "Page", path: item.path })),
      { label: "Our Tutors", description: "Page", path: "/tutors" },
      { label: "Become A Tutor", description: "Page", path: "/become-a-tutor" },
      { label: "Help Center", description: "Support", path: "/policies?tab=faq" },
      ...CATEGORY_GROUPS.flatMap((group) => [
        { label: group.title, description: "Category", path: "/classes" },
        ...group.items.map((item) => ({ label: item, description: group.title, path: "/classes" })),
      ]),
    ];
  }, []);

  const filteredSearchItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return searchItems.slice(0, 7);
    return searchItems.filter((item) => `${item.label} ${item.description}`.toLowerCase().includes(query)).slice(0, 7);
  }, [searchItems, searchQuery]);

  useEffect(() => {
    if (!isSearchOpen) return;
    const timeout = window.setTimeout(() => searchInputRef.current?.focus(), 80);
    return () => window.clearTimeout(timeout);
  }, [isSearchOpen]);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (categoryRef.current && !categoryRef.current.contains(target)) setIsCategoryOpen(false);
      if (profileRef.current && !profileRef.current.contains(target)) setIsProfileOpen(false);
      if (searchRef.current && !searchRef.current.contains(target)) setIsSearchOpen(false);
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const go = (path: string) => {
    navigate(path);
    setIsCategoryOpen(false);
    setIsProfileOpen(false);
    setIsDrawerOpen(false);
    setIsSearchOpen(false);
  };

  const isNavItemActive = (path: string) => {
    const basePath = path.split("?")[0];
    return location.pathname === basePath || location.pathname.startsWith(`${basePath}/`);
  };

  const onSearchResultClick = (item: SearchItem) => {
    setSearchQuery(item.label);
    go(item.path);
  };

  const onCategoryClick = (item: string) => {
    setSearchQuery(item);
    // "All" (and every other category item) routes to the Classes catalog page.
    go("/classes");
  };

  const handleSignIn = () => {
    onSignIn();
    setIsProfileOpen(false);
    go("/dashboard");
  };

  const handleSignOut = () => {
    onSignOut();
    setIsProfileOpen(false);
    go("/classes");
  };

  return (
    <header className="sticky top-0 z-40">
      <div
        className={cn(
          "border-b transition-colors duration-300",
          theme === "light" ? "border-slate-200 bg-white/95 backdrop-blur" : "border-slate-800 bg-black/95 backdrop-blur",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo — always returns to the Classes catalog page */}
          <button type="button" onClick={() => go("/classes")} className="flex items-center gap-3 text-left">
            <div
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-2xl",
                theme === "light" ? "bg-sky-50 text-sky-600" : "bg-slate-900 text-sky-400",
              )}
            >
              <LogoMark className="h-9 w-9" />
            </div>
            <div>
              <div
                className={cn("text-2xl font-black tracking-tight sm:text-3xl", theme === "light" ? "text-sky-600" : "text-sky-400")}
              >
                Learnex.LK
              </div>
              <p className={cn("text-[11px] font-medium sm:text-xs", theme === "light" ? "text-slate-500" : "text-slate-400")}>
                Learn Smarter • Achieve Greater
              </p>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden flex-1 items-center justify-end gap-6 nav:flex lg:gap-8">
            <nav className="flex items-center gap-5 lg:gap-8">
              {NAV_ITEMS.map((item) => {
                const isActive = isNavItemActive(item.path);
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => go(item.path)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "group relative border-b-2 pb-1 text-sm font-semibold transition",
                      isActive
                        ? "border-sky-500"
                        : "border-transparent hover:border-sky-500/60",
                      isActive
                        ? theme === "light"
                          ? "text-sky-600"
                          : "text-sky-400"
                        : theme === "light"
                          ? "text-slate-700 hover:text-sky-600"
                          : "text-slate-200 hover:text-sky-400",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "pointer-events-none absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-sky-500 transition-opacity",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </button>
                );
              })}
            </nav>

            <button
              type="button"
              onClick={() => go("/contact")}
              className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500 lg:px-7 lg:py-3"
            >
              Contact Us
            </button>

            <div className={cn("h-8 w-px", theme === "light" ? "bg-slate-200" : "bg-slate-700")} />

            <div className="flex items-center gap-3">
              <TooltipIconButton theme={theme} label="Help" onClick={() => go("/policies?tab=faq")}>
                <HelpIcon className="h-5 w-5" />
              </TooltipIconButton>
              <TooltipIconButton theme={theme} label="Theme" onClick={onToggleTheme}>
                {theme === "light" ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
              </TooltipIconButton>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 nav:hidden">
            <TooltipIconButton theme={theme} label="Help" onClick={() => go("/policies?tab=faq")}>
              <HelpIcon className="h-5 w-5" />
            </TooltipIconButton>
            <TooltipIconButton theme={theme} label="Theme" onClick={onToggleTheme}>
              {theme === "light" ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
            </TooltipIconButton>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsDrawerOpen(true)}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border transition",
                theme === "light"
                  ? "border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                  : "border-slate-800 bg-black text-white hover:bg-slate-900",
              )}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Secondary bar */}
      <div className={cn(theme === "light" ? "bg-sky-500 text-white" : "bg-blue-700 text-white")}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div ref={categoryRef} className="relative">
            <button
              type="button"
              onClick={() => setIsCategoryOpen((current) => !current)}
              className="inline-flex items-center gap-2 text-sm font-semibold transition hover:opacity-90 sm:text-base"
            >
              <GridIcon className="h-5 w-5" />
              <span>Categories</span>
              <ChevronDownIcon className={cn("h-4 w-4 transition", isCategoryOpen && "rotate-180")} />
            </button>

            {isCategoryOpen && (
              <div
                className={cn(
                  "absolute left-0 top-full z-50 mt-3 w-[min(92vw,780px)] overflow-hidden rounded-3xl border shadow-2xl",
                  theme === "light" ? "border-slate-200 bg-white text-slate-900" : "border-slate-800 bg-slate-900 text-white",
                )}
              >
                <div className="grid gap-5 p-5 sm:grid-cols-2 xl:grid-cols-4">
                  {CATEGORY_GROUPS.map((group) => (
                    <div
                      key={group.title}
                      className={cn(
                        "rounded-2xl border p-4",
                        theme === "light" ? "border-slate-100 bg-slate-50" : "border-slate-800 bg-slate-950",
                      )}
                    >
                      <h3 className={cn("text-sm font-bold", theme === "light" ? "text-sky-600" : "text-sky-400")}>
                        {group.title}
                      </h3>
                      <div className="mt-3 space-y-2">
                        {group.items.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => onCategoryClick(item)}
                            className={cn(
                              "block text-left text-sm transition",
                              theme === "light" ? "text-slate-600 hover:text-sky-600" : "text-slate-300 hover:text-sky-400",
                            )}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <div ref={searchRef} className="relative">
              <button
                type="button"
                aria-label="Open search"
                onClick={() => setIsSearchOpen((current) => !current)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
              >
                <SearchIcon className="h-5 w-5" />
              </button>

              {isSearchOpen && (
                <div
                  className={cn(
                    "absolute right-0 top-full z-50 mt-3 w-[min(92vw,440px)] rounded-3xl border p-4 shadow-2xl",
                    theme === "light" ? "border-slate-200 bg-white text-slate-900" : "border-slate-800 bg-slate-900 text-white",
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center gap-3 rounded-2xl border px-4 py-3",
                      theme === "light" ? "border-slate-200 bg-slate-50" : "border-slate-800 bg-slate-950",
                    )}
                  >
                    <SearchIcon className={cn("h-5 w-5", theme === "light" ? "text-slate-400" : "text-slate-500")} />
                    <input
                      ref={searchInputRef}
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search pages, categories, or sub categories"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                    />
                    <button
                      type="button"
                      aria-label="Close search"
                      onClick={() => setIsSearchOpen(false)}
                      className={cn(
                        "inline-flex h-8 w-8 items-center justify-center rounded-full transition",
                        theme === "light" ? "text-slate-500 hover:bg-white" : "text-slate-300 hover:bg-slate-800",
                      )}
                    >
                      <CloseIcon className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-4">
                    <div className="mb-3 flex items-center justify-between">
                      <p
                        className={cn(
                          "text-xs font-semibold uppercase tracking-[0.2em]",
                          theme === "light" ? "text-slate-400" : "text-slate-500",
                        )}
                      >
                        Quick results
                      </p>
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => setSearchQuery("")}
                          className={cn("text-xs font-semibold", theme === "light" ? "text-sky-600" : "text-sky-400")}
                        >
                          Clear
                        </button>
                      )}
                    </div>

                    <div className="space-y-2">
                      {filteredSearchItems.length > 0 ? (
                        filteredSearchItems.map((item) => (
                          <button
                            key={`${item.label}-${item.description}`}
                            type="button"
                            onClick={() => onSearchResultClick(item)}
                            className={cn(
                              "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition",
                              theme === "light" ? "bg-slate-50 hover:bg-sky-50" : "bg-slate-950 hover:bg-slate-800",
                            )}
                          >
                            <div>
                              <p className="text-sm font-semibold">{item.label}</p>
                              <p className={cn("text-xs", theme === "light" ? "text-slate-500" : "text-slate-400")}>
                                {item.description}
                              </p>
                            </div>
                            <ArrowRightIcon className={cn("h-4 w-4", theme === "light" ? "text-sky-600" : "text-sky-400")} />
                          </button>
                        ))
                      ) : (
                        <div
                          className={cn(
                            "rounded-2xl border px-4 py-6 text-center text-sm",
                            theme === "light" ? "border-slate-200 text-slate-500" : "border-slate-800 text-slate-400",
                          )}
                        >
                          No results found for &ldquo;{searchQuery}&rdquo;.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {isAuthenticated && (
              <>
                <button
                  type="button"
                  onClick={() => go("/wishlist")}
                  aria-label="Open wishlist"
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                >
                  <HeartIcon className="h-5 w-5" />
                  <span className="absolute right-0.5 top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-white px-1 text-[10px] font-bold text-sky-600">
                    {wishlistCount}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => go("/cart")}
                  aria-label="Open cart"
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                >
                  <CartIcon className="h-5 w-5" />
                  <span className="absolute right-0.5 top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-white px-1 text-[10px] font-bold text-sky-600">
                    {cartCount}
                  </span>
                </button>
              </>
            )}

            <div className="hidden h-7 w-px bg-white/35 sm:block" />

            <div
              ref={profileRef}
              className="relative pb-3 -mb-3"
              onMouseEnter={() => setIsProfileOpen(true)}
              onMouseLeave={() => setIsProfileOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsProfileOpen((current) => !current)}
                className="inline-flex items-center gap-2 rounded-full px-2 py-1.5 text-white transition hover:bg-white/10"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/10">
                  <UserIcon className="h-4 w-4" />
                </span>
                {!isAuthenticated && <span className="hidden text-sm font-semibold sm:inline">Sign Up</span>}
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 top-full z-50 w-64 pt-3">
                  <div
                    className={cn(
                      "rounded-3xl border p-3 shadow-2xl",
                      theme === "light" ? "border-slate-200 bg-white text-slate-900" : "border-slate-800 bg-slate-900 text-white",
                    )}
                  >
                  {isAuthenticated ? (
                    <>
                      <div className={cn("mb-3 rounded-2xl px-4 py-3", theme === "light" ? "bg-slate-50" : "bg-slate-950")}>
                        <p className="text-sm font-semibold">Welcome back, Learner</p>
                        <p className={cn("text-xs", theme === "light" ? "text-slate-500" : "text-slate-400")}>
                          Manage your courses, saved items, and account.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <button
                          type="button"
                          onClick={() => go("/dashboard")}
                          className={cn(
                            "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition",
                            theme === "light" ? "hover:bg-slate-50" : "hover:bg-slate-950",
                          )}
                        >
                          Dashboard <ArrowRightIcon className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => go("/wishlist")}
                          className={cn(
                            "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition",
                            theme === "light" ? "hover:bg-slate-50" : "hover:bg-slate-950",
                          )}
                        >
                          Wishlist <ArrowRightIcon className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => go("/cart")}
                          className={cn(
                            "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition",
                            theme === "light" ? "hover:bg-slate-50" : "hover:bg-slate-950",
                          )}
                        >
                          Cart <ArrowRightIcon className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleSignOut}
                          className={cn(
                            "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition",
                            theme === "light" ? "text-rose-600 hover:bg-rose-50" : "text-rose-300 hover:bg-rose-950/30",
                          )}
                        >
                          Sign Out <ArrowRightIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={cn("mb-3 rounded-2xl px-4 py-3", theme === "light" ? "bg-slate-50" : "bg-slate-950")}>
                        <p className="text-sm font-semibold">Join Learnex.LK</p>
                        <p className={cn("text-xs", theme === "light" ? "text-slate-500" : "text-slate-400")}>
                          Sign up or sign in to unlock cart, wishlist, and dashboard features.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <button
                          type="button"
                          onClick={handleSignIn}
                          className="flex w-full items-center justify-between rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
                        >
                          Quick Sign Up <ArrowRightIcon className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleSignIn}
                          className={cn(
                            "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition",
                            theme === "light"
                              ? "border border-slate-200 text-slate-900 hover:bg-slate-50"
                              : "border border-slate-800 text-white hover:bg-slate-950",
                          )}
                        >
                          Sign In <ArrowRightIcon className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => go("/policies?tab=faq")}
                          className={cn(
                            "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition",
                            theme === "light" ? "hover:bg-slate-50" : "hover:bg-slate-950",
                          )}
                        >
                          Help Center <ArrowRightIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </>
                  )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={cn("fixed inset-0 z-50 nav:hidden", isDrawerOpen ? "pointer-events-auto" : "pointer-events-none")}>
        <div
          className={cn("absolute inset-0 bg-black/50 transition-opacity", isDrawerOpen ? "opacity-100" : "opacity-0")}
          onClick={() => setIsDrawerOpen(false)}
        />
        <aside
          className={cn(
            "absolute right-0 top-0 h-full w-full max-w-sm transform overflow-y-auto p-5 transition-transform duration-300",
            isDrawerOpen ? "translate-x-0" : "translate-x-full",
            theme === "light" ? "bg-white text-slate-900" : "bg-slate-900 text-white",
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-2xl",
                  theme === "light" ? "bg-sky-50 text-sky-600" : "bg-slate-950 text-sky-400",
                )}
              >
                <LogoMark className="h-8 w-8" />
              </div>
              <div>
                <p className={cn("text-lg font-black", theme === "light" ? "text-sky-600" : "text-sky-400")}>Learnex.LK</p>
                <p className={cn("text-xs", theme === "light" ? "text-slate-500" : "text-slate-400")}>Mobile navigation</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border",
                theme === "light" ? "border-slate-200 bg-white" : "border-slate-800 bg-slate-950",
              )}
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <div
            className={cn(
              "mt-6 flex items-center gap-3 rounded-2xl border px-4 py-3",
              theme === "light" ? "border-slate-200 bg-slate-50" : "border-slate-800 bg-slate-950",
            )}
          >
            <SearchIcon className={cn("h-5 w-5", theme === "light" ? "text-slate-400" : "text-slate-500")} />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search categories or pages"
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="mt-6 space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = isNavItemActive(item.path);
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => go(item.path)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition",
                    isActive
                      ? theme === "light"
                        ? "bg-sky-50 text-sky-600"
                        : "bg-slate-950 text-sky-400"
                      : theme === "light"
                        ? "hover:bg-slate-50"
                        : "hover:bg-slate-950",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <ArrowRightIcon className="h-4.5 w-4.5" />
                    {item.label}
                  </span>
                  {isActive ? (
                    <span className="h-2 w-2 rounded-full bg-sky-500" />
                  ) : (
                    <ArrowRightIcon className="h-4 w-4" />
                  )}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => go("/classes")}
              className={cn(
                "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition",
                theme === "light" ? "hover:bg-slate-50" : "hover:bg-slate-950",
              )}
            >
              <span className="flex items-center gap-3">
                <GridIcon className="h-4.5 w-4.5" />
                Classes
              </span>
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>

          <div
            className={cn(
              "mt-6 rounded-3xl border p-4",
              theme === "light" ? "border-slate-200 bg-slate-50" : "border-slate-800 bg-slate-950",
            )}
          >
            <button
              type="button"
              onClick={() => setIsMobileCategoryOpen((current) => !current)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="flex items-center gap-3 text-sm font-semibold">
                <GridIcon className="h-5 w-5" />
                Categories
              </span>
              <ChevronDownIcon className={cn("h-4 w-4 transition", isMobileCategoryOpen && "rotate-180")} />
            </button>

            {isMobileCategoryOpen && (
              <div className="mt-4 space-y-4">
                {CATEGORY_GROUPS.map((group) => (
                  <div key={group.title}>
                    <p className={cn("text-xs font-bold uppercase tracking-[0.2em]", theme === "light" ? "text-sky-600" : "text-sky-400")}>
                      {group.title}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => onCategoryClick(item)}
                          className={cn(
                            "rounded-full px-3 py-1.5 text-xs font-medium transition",
                            theme === "light"
                              ? "bg-white text-slate-700 hover:bg-sky-50 hover:text-sky-600"
                              : "bg-slate-900 text-slate-300 hover:text-sky-400",
                          )}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => go("/contact")}
              className="rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              Contact Us
            </button>
            {isAuthenticated ? (
              <button
                type="button"
                onClick={() => go("/dashboard")}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-semibold transition",
                  theme === "light"
                    ? "border border-slate-200 bg-white text-slate-900"
                    : "border border-slate-800 bg-slate-900 text-white",
                )}
              >
                Dashboard
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSignIn}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-semibold transition",
                  theme === "light"
                    ? "border border-slate-200 bg-white text-slate-900"
                    : "border border-slate-800 bg-slate-900 text-white",
                )}
              >
                Sign Up
              </button>
            )}
          </div>

          {isAuthenticated && (
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => go("/wishlist")}
                className={cn(
                  "rounded-2xl border px-4 py-3 text-sm font-semibold",
                  theme === "light" ? "border-slate-200 bg-white" : "border-slate-800 bg-slate-900",
                )}
              >
                Wishlist ({wishlistCount})
              </button>
              <button
                type="button"
                onClick={() => go("/cart")}
                className={cn(
                  "rounded-2xl border px-4 py-3 text-sm font-semibold",
                  theme === "light" ? "border-slate-200 bg-white" : "border-slate-800 bg-slate-900",
                )}
              >
                Cart ({cartCount})
              </button>
            </div>
          )}

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => go("/policies?tab=faq")}
              className={cn(
                "flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold",
                theme === "light" ? "border-slate-200 bg-white" : "border-slate-800 bg-slate-900",
              )}
            >
              <HelpIcon className={cn("h-4.5 w-4.5", theme === "light" ? "text-sky-600" : "text-sky-400")} />
              Help
            </button>
            <button
              type="button"
              onClick={onToggleTheme}
              className={cn(
                "flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold",
                theme === "light" ? "border-slate-200 bg-white" : "border-slate-800 bg-slate-900",
              )}
            >
              {theme === "light" ? (
                <>
                  <MoonIcon className="h-4.5 w-4.5 text-sky-600" />
                  Dark Mode
                </>
              ) : (
                <>
                  <SunIcon className="h-4.5 w-4.5 text-sky-400" />
                  Light Mode
                </>
              )}
            </button>
          </div>

          {isAuthenticated && (
            <button
              type="button"
              onClick={handleSignOut}
              className={cn(
                "mt-6 w-full rounded-2xl px-4 py-3 text-sm font-semibold",
                theme === "light" ? "bg-rose-50 text-rose-600" : "bg-rose-950/30 text-rose-300",
              )}
            >
              Sign Out
            </button>
          )}
        </aside>
      </div>
    </header>
  );
}
