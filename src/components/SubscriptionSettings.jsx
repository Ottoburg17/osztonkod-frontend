import { useState } from "react";
import { useAuth } from "../context/useAuth";

export default function SubscriptionSettings() {
  const {
    goToStripePortal,
    subscriptions,
  } = useAuth();

  const [loading, setLoading] = useState(false);

  // 🔎 Dopamine Cycle előfizetés
  const subscription = subscriptions?.find(
    (s) => s.product_slug === "dopamine-cycle"
  );

  if (!subscription) {
    return (
      <div className="text-sm text-gray-500">
        Nincs aktív előfizetés.
      </div>
    );
  }

  const {
    status,
    expires_at,
    invoice_pdf,
  } = subscription;

  const expiresAt = expires_at
    ? new Date(expires_at).toLocaleDateString("hu-HU")
    : null;

  const nextBillingInfo =
    status === "active"
      ? "Havonta automatikusan"
      : expiresAt;

  /* ===============================
     STRIPE CUSTOMER PORTAL
     =============================== */
  const handleStripePortal = async () => {
    setLoading(true);
    try {
      await goToStripePortal();
    } catch {
      alert("Nem sikerült megnyitni a Stripe felületet.");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">
        Előfizetés állapota
      </h3>

      {/* AKTÍV */}
      {status === "active" && (
        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-emerald-800 text-sm">
          <p className="font-medium">✔ Előfizetés aktív</p>

          {expiresAt && (
            <p className="mt-1 text-xs">
              Aktív eddig: <strong>{expiresAt}</strong>
            </p>
          )}

          <p className="mt-1 text-xs">
            Következő terhelés: <strong>{nextBillingInfo}</strong>
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Az előfizetés a Stripe biztonságos felületén kezelhető.
          </p>
        </div>
      )}

      {/* LEMONDOTT */}
      {status === "cancelled" && (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl text-yellow-800 text-sm">
          <p className="font-medium">Előfizetés lemondva</p>

          {expiresAt && (
            <p className="mt-1 text-xs">
              Hozzáférés eddig él: <strong>{expiresAt}</strong>
            </p>
          )}

          <p className="text-xs mt-2">
            Újabb terhelés nem történik.
          </p>
        </div>
      )}

      {/* SZÁMLA */}
      {invoice_pdf && (
        <a
          href={invoice_pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm"
        >
          🧾 Számla letöltése (PDF)
        </a>
      )}

      {/* STRIPE GOMB */}
      {status === "active" && (
        <button
          onClick={handleStripePortal}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg"
        >
          {loading ? "Megnyitás…" : "Előfizetés kezelése (Stripe)"}
        </button>
      )}
    </div>
  );
}
