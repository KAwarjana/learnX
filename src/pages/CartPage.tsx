import { useState } from "react";
import { cn } from "../utils/cn";
import { useTheme } from "../components/ThemeContext";
import { PageHero } from "../components/PageHero";

type CartItem = {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  rating: number;
};

const initialCartItems: CartItem[] = [
  {
    id: 1,
    title: "Masterclass in Digital Marketing",
    subtitle: "Business Conference",
    price: 10000,
    originalPrice: 15000,
    quantity: 1,
    rating: 5,
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Leadership & Strategy Workshop",
    subtitle: "Business Conference",
    price: 12500,
    quantity: 1,
    rating: 4,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Public Speaking Fundamentals",
    subtitle: "Business Conference",
    price: 8500,
    originalPrice: 10000,
    quantity: 1,
    rating: 5,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Finance for Non-Finance Managers",
    subtitle: "Business Conference",
    price: 9000,
    quantity: 1,
    rating: 4,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
];

function formatLKR(value: number) {
  return `Rs.${value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-4 w-4", filled ? "fill-amber-400 text-amber-400" : "fill-transparent text-amber-400")}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m12 2.5 2.9 5.88 6.49.94-4.69 4.57 1.1 6.46L12 17.3l-5.8 3.05 1.1-6.46-4.69-4.57 6.49-.94L12 2.5Z" />
    </svg>
  );
}

export default function CartPage() {
  const theme = useTheme();
  const [items, setItems] = useState<CartItem[]>(initialCartItems);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set(initialCartItems.map((i) => i.id)));
  const [agreed, setAgreed] = useState(false);

  const allSelected = items.length > 0 && selectedIds.size === items.length;

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(items.map((i) => i.id)));
    }
  };

  const toggleItem = (id: number) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const deleteSelected = () => {
    setItems((prev) => prev.filter((i) => !selectedIds.has(i.id)));
    setSelectedIds(new Set());
  };

  const deleteItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)));
  };

  const selectedItems = items.filter((i) => selectedIds.has(i.id));
  const total = selectedItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const savings = selectedItems.reduce((sum, i) => sum + ((i.originalPrice ?? i.price) - i.price) * i.quantity, 0);

  return (
    <main className={cn("min-h-screen overflow-hidden", theme === "light" ? "bg-slate-100 text-slate-800" : "bg-slate-950 text-white")}>
      {/* Hero / Title */}
      <PageHero
        title="My Cart"
        tagline="Give All You Need..."
        titleSizeClassName="text-[14vw] sm:text-[86px] md:text-[108px] lg:text-[150px]"
      />

      {/* Cart content */}
      <section className="relative px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="relative mx-auto w-full max-w-[1180px]">
          {/* Cart header */}
          <div className={cn("rounded-2xl border px-4 py-4 shadow-[0_3px_10px_rgba(15,23,42,0.12)] sm:px-6 sm:py-5 md:px-7 md:py-6", theme === "light" ? "border-slate-200 bg-white" : "border-slate-800 bg-slate-900")}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <h2 className={cn("text-base font-bold sm:text-lg md:text-xl", theme === "light" ? "text-slate-800" : "text-white")}>Cart ({items.length} Items)</h2>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <label className={cn("inline-flex cursor-pointer items-center gap-2 text-sm font-semibold", theme === "light" ? "text-slate-700" : "text-slate-200")}>
                  <input type="checkbox" checked={allSelected} onChange={toggleSelectAll} className="peer sr-only" />
                  <span
                    className={cn(
                      "grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition",
                      allSelected ? "border-[#1a7be8] bg-[#1a7be8]" : "border-[#1a7be8] bg-white",
                    )}
                  >
                    {allSelected && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    )}
                  </span>
                  <span className="whitespace-nowrap">Select All Items</span>
                </label>
                <button
                  type="button"
                  onClick={deleteSelected}
                  disabled={selectedIds.size === 0}
                  className="whitespace-nowrap text-sm font-semibold text-[#1a7be8] underline underline-offset-2 transition hover:text-[#1567c9] disabled:cursor-not-allowed disabled:text-slate-400 disabled:no-underline"
                >
                  Delete Selected Items
                </button>
              </div>
            </div>
          </div>

          {/* Items + Summary */}
          <div className="mt-5 grid grid-cols-1 gap-5 sm:mt-6 sm:gap-6 lg:grid-cols-[1fr_360px]">
            {/* Items column */}
            <div className={cn("overflow-hidden rounded-2xl border shadow-[0_3px_10px_rgba(15,23,42,0.12)]", theme === "light" ? "border-slate-200 bg-white" : "border-slate-800 bg-slate-900")}>
              <div className="p-4 sm:p-6">
                <div className={cn("hidden grid-cols-[1fr_180px_180px] gap-4 border-b pb-3 text-sm font-bold tracking-wide md:grid", theme === "light" ? "border-slate-200 text-slate-700" : "border-slate-700 text-slate-200")}>
                  <div>Product</div>
                  <div className="text-center">Quantity</div>
                  <div className="text-right">Total</div>
                </div>

                {items.length === 0 ? (
                  <div className={cn("py-14 text-center sm:py-16", theme === "light" ? "text-slate-500" : "text-slate-400")}>
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sky-50 text-sky-400">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      </svg>
                    </div>
                    <p className={cn("mt-4 text-base font-semibold sm:text-lg", theme === "light" ? "text-slate-700" : "text-slate-200")}>Your cart is empty</p>
                    <p className="mt-1 text-sm">Add some classes to get started.</p>
                  </div>
                ) : (
                  <ul className={cn("divide-y", theme === "light" ? "divide-slate-200" : "divide-slate-800")}>
                    {items.map((item) => {
                      const checked = selectedIds.has(item.id);
                      const hasDiscount = item.originalPrice && item.originalPrice > item.price;
                      return (
                        <li
                          key={item.id}
                          className="grid grid-cols-1 gap-4 py-4 sm:py-5 md:grid-cols-[1fr_180px_180px] md:items-center md:gap-4 md:py-5"
                        >
                          {/* Product */}
                          <div className="flex items-start gap-3 sm:gap-4 md:min-w-0">
                            <label className="mt-1.5 inline-flex shrink-0 cursor-pointer items-center sm:mt-2">
                              <input type="checkbox" checked={checked} onChange={() => toggleItem(item.id)} className="peer sr-only" />
                              <span
                                className={cn(
                                  "grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition",
                                  checked ? "border-[#1a7be8] bg-[#1a7be8]" : "border-[#1a7be8] bg-white",
                                )}
                              >
                                {checked && (
                                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                                    <path d="M5 12l5 5L20 7" />
                                  </svg>
                                )}
                              </span>
                            </label>

                            <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 sm:h-24 sm:w-24 md:h-28 md:w-28">
                                <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                                <div className="pointer-events-none absolute inset-x-1.5 top-1.5 flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-white sm:inset-x-2 sm:top-2 sm:text-[10px]">
                                  <span className="rounded-md bg-sky-500/90 px-1.5 py-0.5">Free</span>
                                  <span className="rounded-md bg-slate-900/70 px-1.5 py-0.5">Webinar</span>
                                </div>
                                <div className="pointer-events-none absolute inset-x-1.5 bottom-1.5 rounded-md bg-slate-900/70 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white sm:inset-x-2 sm:bottom-2 sm:px-2 sm:py-1 sm:text-[10px]">
                                  {item.subtitle}
                                </div>
                              </div>
                              <div className="min-w-0">
                                <p className={cn("truncate text-sm font-bold sm:text-base md:text-lg", theme === "light" ? "text-slate-800" : "text-white")}>{item.title}</p>
                                <div className="mt-0.5 flex items-center gap-1 sm:mt-1">
                                  {Array.from({ length: 5 }, (_, i) => (
                                    <Star key={i} filled={i < item.rating} />
                                  ))}
                                </div>
                                <div className="mt-1 flex items-center gap-2">
                                  <span className="text-xs font-semibold text-slate-500 sm:text-sm">{formatLKR(item.price)}</span>
                                  {hasDiscount && (
                                    <span className="text-xs font-semibold text-slate-400 line-through">{formatLKR(item.originalPrice!)}</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Quantity */}
                          <div className="flex items-center justify-between md:justify-center">
                            <span className="text-xs font-semibold text-slate-500 md:hidden">Quantity</span>
                            <div className="flex items-center">
                              <div className={cn("flex items-center overflow-hidden rounded-md border shadow-sm", theme === "light" ? "border-slate-300 bg-white text-slate-700" : "border-slate-700 bg-slate-950 text-slate-200")}>
                                <button
                                  type="button"
                                  aria-label="Decrease quantity"
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="grid h-8 w-8 place-items-center text-base font-bold transition hover:bg-slate-100 active:scale-95 sm:h-9 sm:w-9 sm:text-lg"
                                >
                                  −
                                </button>
                                <span className={cn("grid h-8 w-9 place-items-center border-x text-xs font-semibold sm:h-9 sm:w-10 sm:text-sm", theme === "light" ? "border-slate-200" : "border-slate-700")}>
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  aria-label="Increase quantity"
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="grid h-8 w-8 place-items-center text-base font-bold transition hover:bg-slate-100 active:scale-95 sm:h-9 sm:w-9 sm:text-lg"
                                >
                                  +
                                </button>
                              </div>
                              <button
                                type="button"
                                aria-label="Remove item"
                                onClick={() => deleteItem(item.id)}
                                className="ml-2 grid h-8 w-8 place-items-center rounded-md text-red-500 transition hover:bg-red-50 active:scale-95 sm:ml-3 sm:h-9 sm:w-9"
                              >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5">
                                  <path d="M3 6h18" />
                                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                  <path d="M10 11v6" />
                                  <path d="M14 11v6" />
                                </svg>
                              </button>
                            </div>
                          </div>

                          {/* Total */}
                          <div className="flex items-center justify-between md:justify-end">
                            <span className="text-xs font-semibold text-slate-500 md:hidden">Total</span>
                            <span className={cn("text-sm font-bold sm:text-base md:text-lg", theme === "light" ? "text-slate-800" : "text-white")}>{formatLKR(item.price * item.quantity)}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <aside className="md:ml-auto md:max-w-[420px] lg:sticky lg:top-6 lg:ml-0 lg:max-w-none lg:self-start">
              <div className={cn("rounded-2xl border p-5 shadow-[0_3px_10px_rgba(15,23,42,0.12)] sm:p-6", theme === "light" ? "border-slate-200 bg-white" : "border-slate-800 bg-slate-900")}>
                <h3 className={cn("border-b pb-3 text-base font-bold sm:text-lg", theme === "light" ? "border-slate-200 text-slate-800" : "border-slate-700 text-white")}>Order Summary</h3>

                <div className="mt-5 flex items-center justify-between">
                  <span className={cn("text-sm font-semibold sm:text-base", theme === "light" ? "text-slate-600" : "text-slate-300")}>Selected Items</span>
                  <span className={cn("text-sm font-bold sm:text-base", theme === "light" ? "text-slate-800" : "text-white")}>{selectedItems.length}</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className={cn("text-sm font-semibold sm:text-base", theme === "light" ? "text-slate-600" : "text-slate-300")}>Investment</span>
                  <span className={cn("text-sm font-bold sm:text-base", theme === "light" ? "text-slate-800" : "text-white")}>{formatLKR(total)}</span>
                </div>

                {savings > 0 && (
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-emerald-600 sm:text-base">You Save</span>
                    <span className="text-sm font-bold text-emerald-600 sm:text-base">−{formatLKR(savings)}</span>
                  </div>
                )}

                <div className={cn("mt-4 flex items-center justify-between border-t pt-4", theme === "light" ? "border-slate-200" : "border-slate-700")}>
                  <span className={cn("text-base font-bold sm:text-lg", theme === "light" ? "text-slate-800" : "text-white")}>Total</span>
                  <span className="text-base font-bold text-[#1a7be8] sm:text-lg">{formatLKR(total)}</span>
                </div>

                <p className={cn("mt-2 text-xs", theme === "light" ? "text-slate-500" : "text-slate-400")}>
                  Total of {selectedItems.length} item{selectedItems.length === 1 ? "" : "s"}
                </p>

                <label className={cn("mt-6 flex cursor-pointer items-start gap-2 text-sm font-medium", theme === "light" ? "text-slate-700" : "text-slate-200")}>
                  <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="peer sr-only" />
                  <span
                    className={cn(
                      "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-sm border-2 transition",
                      agreed ? "border-[#1a7be8] bg-[#1a7be8]" : "border-slate-400 bg-white",
                    )}
                  >
                    {agreed && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    )}
                  </span>
                  <span>
                    I agree with the{" "}
                    <a href="#" className="font-semibold text-[#1a7be8] underline-offset-2 hover:underline">
                      Terms & conditions
                    </a>
                  </span>
                </label>

                <button
                  type="button"
                  disabled={!agreed || selectedItems.length === 0}
                  className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#1a7be8] text-sm font-bold text-white shadow-[0_6px_16px_rgba(26,123,232,0.35)] transition hover:bg-[#1567c9] active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none sm:h-12 sm:text-base"
                >
                  Checkout
                </button>

                <button
                  type="button"
                  className={cn(
                    "mt-3 inline-flex h-11 w-full items-center justify-center rounded-full border-2 border-[#1a7be8] text-sm font-bold text-[#1a7be8] transition active:scale-[0.99] sm:h-12 sm:text-base",
                    theme === "light" ? "bg-white hover:bg-[#eaf3ff]" : "bg-slate-900 text-sky-400 hover:bg-slate-800",
                  )}
                >
                  Continue Shopping
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
