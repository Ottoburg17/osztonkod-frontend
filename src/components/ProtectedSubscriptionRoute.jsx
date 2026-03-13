import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function ProtectedSubscriptionRoute({ slug, children }) {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const normalizedSlug = slug?.toLowerCase().trim();

  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    let active = true;

    async function checkAccess() {
      // ⏳ Auth még tölt
      if (authLoading) return;

      // 👑 ADMIN BYPASS
      if (isAdmin) {
        if (!active) return;
        setHasAccess(true);
        setLoading(false);
        return;
      }

      // 🚪 nincs user → nincs access
      if (!user || !normalizedSlug) {
        if (!active) return;
        setHasAccess(false);
        setLoading(false);
        return;
      }

      try {
        const res = await api.get(
          `/subscriptions/has-access/${normalizedSlug}`
        );

        if (!active) return;
        setHasAccess(res.data.hasAccess === true);
      } catch (err) {
        console.error("Subscription check error:", err);
        if (!active) return;
        setHasAccess(false);
      } finally {
        if (active) setLoading(false);
      }
    }

    checkAccess();

    return () => {
      active = false;
    };
  }, [normalizedSlug, user, isAdmin, authLoading]);

  /* ================================
     ⏳ BETÖLTÉS
     ================================ */
  if (loading || authLoading) {
    return (
      <div className="pt-32 text-center text-gray-500">
        Jogosultság ellenőrzése…
      </div>
    );
  }

  /* ================================
     🔐 NINCS HOZZÁFÉRÉS
     ================================ */
  if (!hasAccess) {
    // 👤 nincs bejelentkezve
    if (!user) {
      return (
        <div className="pt-32 text-center">
          <h1 className="text-xl font-semibold mb-4">
            A folytatáshoz jelentkezz be
          </h1>

          <button
            onClick={() => window.toggleAuthModal("login")}
            className="bg-gray-800 text-white px-6 py-3 rounded-xl"
          >
            Bejelentkezés
          </button>
        </div>
      );
    }

    // 💳 van user, de nincs előfizetés
    return (
      <div className="pt-32 text-center">
        <h1 className="text-xl font-semibold mb-4">
          Nincs hozzáférésed ehhez a tartalomhoz
        </h1>

        <button
          onClick={() => navigate("/plan")}
          className="bg-emerald-600 text-white px-6 py-3 rounded-xl"
        >
          Megvásárolom
        </button>
      </div>
    );
  }

  /* ================================
     ✅ VAN HOZZÁFÉRÉS
     ================================ */
  return children;
}
