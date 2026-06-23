import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { ClassesPage } from "./pages/ClassesPage";
import { SingleClassPage } from "./pages/SingleClassPage";
import { TutorsPage } from "./pages/TutorsPage";
import { BecomeATutorPage } from "./pages/BecomeATutorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import PoliciesPage from "./pages/PoliciesPage";

/**
 * Routing summary (per project spec):
 * - Default route ("/") redirects to "/classes" — the Classes catalog is the app's landing page.
 * - Nav bar only shows Home / About / Contact / Dashboard.
 * - Logo and "Categories > All" always go to "/classes".
 * - "/home" is a separate marketing page (only reachable via the Home nav link).
 * - Clicking a class card goes to "/classes/:id" (Single Class page).
 */
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Navigate to="/classes" replace />
          </Layout>
        }
      />
      <Route
        path="/classes"
        element={
          <Layout>
            <ClassesPage />
          </Layout>
        }
      />
      <Route
        path="/classes/:id"
        element={
          <Layout>
            <SingleClassPage />
          </Layout>
        }
      />
      <Route
        path="/home"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutPage />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <DashboardPage />
          </Layout>
        }
      />
      <Route
        path="/wishlist"
        element={
          <Layout>
            <WishlistPage />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <CartPage />
          </Layout>
        }
      />
      <Route
        path="/tutors"
        element={
          <Layout>
            <TutorsPage />
          </Layout>
        }
      />
      <Route
        path="/become-a-tutor"
        element={
          <Layout>
            <BecomeATutorPage />
          </Layout>
        }
      />
      <Route
        path="/policies"
        element={
          <Layout>
            <PoliciesPage />
          </Layout>
        }
      />
      {/* Fallback: unknown routes go back to the Classes catalog */}
      <Route path="*" element={<Navigate to="/classes" replace />} />
    </Routes>
    </>
  );
}
