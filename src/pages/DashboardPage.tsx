import { useNavigate } from "react-router-dom";
import { cn } from "../utils/cn";
import { useTheme } from "../components/ThemeContext";

type DashboardCard = {
  title: string;
  description: string;
  meta: string;
};

const DASHBOARD_CARDS: DashboardCard[] = [
  {
    title: "Wishlist count",
    description: "Saved items are surfaced with a notification badge for instant awareness.",
    meta: "2 saved items",
  },
  {
    title: "Cart count",
    description: "The cart badge shows a pending checkout state from anywhere in the site.",
    meta: "1 active item",
  },
  {
    title: "Account controls",
    description: "Open wishlist, cart, or sign out from the profile menu in the header.",
    meta: "Account menu ready",
  },
];

export default function DashboardPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section
        className={cn(
          "overflow-hidden rounded-[2rem] border p-6 shadow-xl transition-colors duration-300 lg:p-10",
          theme === "light" ? "border-slate-200 bg-white shadow-slate-200/70" : "border-slate-800 bg-slate-900 shadow-black/20",
        )}
      >
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]",
                  theme === "light" ? "bg-sky-50 text-sky-600" : "bg-slate-950 text-sky-400",
                )}
              >
                Member dashboard
              </span>
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  theme === "light" ? "bg-slate-100 text-slate-600" : "bg-slate-950 text-slate-300",
                )}
              >
                Signed in view
              </span>
            </div>

            <h1 className="mt-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              A signed-in experience centered on quick actions
            </h1>
            <p className={cn("mt-4 max-w-2xl text-base leading-7 sm:text-lg", theme === "light" ? "text-slate-600" : "text-slate-300")}>
              Once authenticated, the header prioritizes shopping and account access with wishlist, cart, and
              dashboard shortcuts.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigate("/classes")}
                className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
              >
                Browse Classes
              </button>
              <button
                type="button"
                onClick={() => navigate("/wishlist")}
                className={cn(
                  "rounded-full border px-6 py-3 text-sm font-semibold transition",
                  theme === "light" ? "border-slate-200 text-slate-900 hover:bg-slate-50" : "border-slate-800 text-white hover:bg-slate-950",
                )}
              >
                View Wishlist
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { label: "Saved items", value: "2" },
              { label: "In cart", value: "1" },
              { label: "Theme", value: theme === "light" ? "Light" : "Dark" },
            ].map((item) => (
              <div
                key={item.label}
                className={cn("rounded-3xl border p-4", theme === "light" ? "border-slate-200 bg-slate-50" : "border-slate-800 bg-slate-950")}
              >
                <p className={cn("text-xs font-bold uppercase tracking-[0.2em]", theme === "light" ? "text-slate-400" : "text-slate-500")}>
                  {item.label}
                </p>
                <p className="mt-3 text-base font-semibold sm:text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        {DASHBOARD_CARDS.map((card) => (
          <article
            key={card.title}
            className={cn(
              "rounded-[1.75rem] border p-5 transition-colors duration-300",
              theme === "light" ? "border-slate-200 bg-white" : "border-slate-800 bg-slate-900",
            )}
          >
            <p className={cn("text-xs font-bold uppercase tracking-[0.2em]", theme === "light" ? "text-sky-600" : "text-sky-400")}>
              {card.meta}
            </p>
            <h2 className="mt-3 text-xl font-bold">{card.title}</h2>
            <p className={cn("mt-3 text-sm leading-7", theme === "light" ? "text-slate-600" : "text-slate-300")}>{card.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
