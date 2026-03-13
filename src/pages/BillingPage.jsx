import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/useAuth";

export default function BillingPage() {
  // eslint-disable-next-line no-unused-vars
  const { user } = useAuth();
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.get("/subscriptions/my");
        setSubscriptions(res.data.subscriptions || []);
      } catch (e) {
        console.error("Billing load error", e);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return <div className="pt-32 text-center">Betöltés…</div>;
  }

  if (!subscriptions.length) {
    return (
      <div className="pt-32 text-center text-gray-500">
        Nincs aktív előfizetésed.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto pt-32 px-4 space-y-6">
      <h1 className="text-2xl font-bold text-green-600">
        Számlák / Előfizetések
      </h1>

      {subscriptions.map((sub) => (
        <SubscriptionCard key={sub.product_slug} sub={sub} />
      ))}
    </div>
  );
}

/* ===================================================== */

function SubscriptionCard({ sub }) {
  const [busy, setBusy] = useState(false);

  const expiresAt = sub.expires_at
    ? new Date(sub.expires_at).toLocaleDateString("hu-HU")
    : null;

  const handleStripePortal = async () => {
    setBusy(true);
    try {
      const res = await api.post("/subscriptions/stripe/portal");
      window.location.href = res.data.url;
    } finally {
      setBusy(false);
    }
  };

  const handlePaypalCancel = async () => {
    if (!confirm("Biztosan lemondod az előfizetést?")) return;
    setBusy(true);
    try {
      await api.post("/subscriptions/cancel");
      window.location.reload();
    } finally {
      setBusy(false);
    }
  };

  const handleInvoiceDownload = async () => {
    const res = await api.get(
      `/subscriptions/invoice/${sub.product_slug}`
    );
    window.open(res.data.url, "_blank");
  };

  return (
    <div className="border rounded-xl p-5 space-y-3 bg-white shadow">
      <h2 className="font-semibold text-lg">
        {sub.product_slug}
      </h2>

      <p className="text-sm text-gray-600">
        Státusz: <strong>{sub.status}</strong>
      </p>

      {expiresAt && (
        <p className="text-sm text-gray-600">
          Aktív eddig: {expiresAt}
        </p>
      )}

      {/* STRIPE */}
      {sub.provider === "stripe" && sub.status === "active" && (
        <button
          onClick={handleStripePortal}
          disabled={busy}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Előfizetés kezelése (Stripe)
        </button>
      )}

      {/* PAYPAL */}
      {sub.provider === "paypal" && sub.status === "active" && (
        <button
          onClick={handlePaypalCancel}
          disabled={busy}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Előfizetés lemondása
        </button>
      )}

      {/* SZÁMLA */}
      {sub.invoice_status === "invoiced" && (
        <button
          onClick={handleInvoiceDownload}
          className="text-sm underline text-gray-600"
        >
          Számla letöltése
        </button>
      )}
    </div>
  );
}
