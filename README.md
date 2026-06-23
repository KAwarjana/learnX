# Learnex.LK

A React + TypeScript + Tailwind CSS e-learning marketplace front-end, built with Vite and React Router.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── main.tsx                 # App entry point (mounts BrowserRouter)
├── App.tsx                  # All route definitions
├── index.css                # Tailwind directives + shared keyframes/animations
├── types.ts                 # Shared TypeScript types
├── data.ts                  # Shared constants: nav items, category groups, sample data
├── components/
│   ├── Layout.tsx            # Wraps every page with Header + Footer, owns theme/auth state
│   ├── Header.tsx            # Top navigation: logo, nav links, categories, search, cart/wishlist, theme
│   ├── Footer.tsx            # Site footer with policy links and socials
│   ├── Counter.tsx           # Animated number counter (used in stats sections)
│   ├── FilterOptions.tsx     # Sidebar filters (shared by Classes & Our Tutors pages)
│   ├── ClassCardItem.tsx     # Class card — clicking navigates to the Single Class page
│   └── TutorCardItem.tsx     # Tutor card used on the Our Tutors page
├── ui/
│   └── icons.tsx              # All SVG icon components + social icon set
├── utils/
│   └── cn.ts                  # Tiny classnames helper
└── pages/
    ├── ClassesPage.tsx         # DEFAULT / LANDING PAGE — class catalog with filters, sort, pagination
    ├── SingleClassPage.tsx     # Reached by clicking a class card (route: /classes/:id)
    ├── HomePage.tsx            # Marketing landing page (route: /home, reached via "Home" nav link)
    ├── AboutPage.tsx           # About page with mission/vision/goal tabs
    ├── ContactPage.tsx         # Contact form + map
    ├── DashboardPage.tsx       # Signed-in account hub
    ├── WishlistPage.tsx        # Wishlist with selection, pricing summary
    ├── CartPage.tsx            # Cart with quantity controls, checkout summary
    ├── TutorsPage.tsx          # Our Tutors catalog page
    ├── BecomeATutorPage.tsx    # Tutor registration / "Start Tutoring" page
    └── PoliciesPage.tsx        # Privacy Policy / Terms / FAQ tabs (reads ?tab= from the URL)
```

## Navigation behavior (as specified)

| Action                          | Result                                            |
| -------------------------------- | -------------------------------------------------- |
| App loads (`/`)                  | Redirects to `/classes` (Classes catalog is default) |
| Header nav bar                   | Only shows **Home / About / Contact / Dashboard**  |
| Logo click                       | Navigates to `/classes`                            |
| Categories dropdown → **All**    | Navigates to `/classes`                            |
| Categories dropdown → other item | Navigates to `/classes`                            |
| "Home" nav link                  | Navigates to `/home` (separate marketing page)      |
| Click a class card                | Navigates to `/classes/:id` (Single Class page)     |
| Footer policy links               | Navigate to `/policies?tab=privacy` / `terms` / `faq` |

Theme (light/dark) and sign-in state are persisted in `localStorage` and managed in `components/Layout.tsx`.

## Notes

- All previously inline/placeholder images (`/images/...`) have been swapped for hosted stock photos so the project runs immediately without needing local image assets.
- Wishlist/cart counts and content are static demo data — wire them up to a real API/state store as needed.
- Tailwind's custom screens `xs` (420px) and `nav` (1024px) are defined in `tailwind.config.js` to match the original breakpoints used throughout the designs.
