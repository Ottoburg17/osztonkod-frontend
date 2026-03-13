import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function AdminSubscriptions() {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [sendingId, setSendingId] = useState(null);

  /* ===============================
     BETÖLTÉS
     =============================== */
  useEffect(() => {
    api
      .get("/subscriptions/admin/all")
      .then((res) => setSubs(res.data))
      .catch(() =>
        setError("Nem sikerült betölteni az előfizetéseket.")
      )
      .finally(() => setLoading(false));
  }, []);

  /* ===============================
     EMAIL ÚJRAKÜLDÉS
     =============================== */
  const resendEmail = async (id) => {
    if (!window.confirm("Biztosan újraküldöd az emailt?")) return;

    try {
      setSendingId(id);
      await api.post(`/subscriptions/admin/${id}/resend-email`);
      alert("Email sikeresen elküldve.");
    } catch {
      alert("Email küldése sikertelen.");
    } finally {
      setSendingId(null);
    }
  };

  /* ===============================
     SZŰRÉS
     =============================== */
  const filteredSubs = subs.filter((s) => {
    if (filter === "all") return true;
    return s.status === filter;
  });

  /* ===============================
     LEJÁRAT BADGE
     =============================== */
  const getExpiryBadge = (expiresAt) => {
    if (!expiresAt) return null;

    const daysLeft = Math.ceil(
      (new Date(expiresAt) - new Date()) / (1000 * 60 * 60 * 24)
    );

    if (daysLeft <= 1) {
      return (
        <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">
          🔴 {daysLeft} nap
        </span>
      );
    }

    if (daysLeft <= 7) {
      return (
        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">
          🟡 {daysLeft} nap
        </span>
      );
    }

    return (
      <span className="text-gray-500 text-xs">
        {daysLeft} nap
      </span>
    );
  };

  /* ===============================
     SOR SZÍNEZÉS
     =============================== */
  const getRowClass = (s) => {
    if (s.status === "expired") return "bg-gray-100 text-gray-400";
    if (s.status === "cancelled") return "bg-gray-50 text-gray-500";

    if (s.expires_at) {
      const daysLeft = Math.ceil(
        (new Date(s.expires_at) - new Date()) / (1000 * 60 * 60 * 24)
      );

      if (daysLeft <= 1) return "bg-red-50";
      if (daysLeft <= 7) return "bg-yellow-50";
    }

    return "";
  };

  /* ===============================
     LOADING / ERROR
     =============================== */
  if (loading) {
    return <div className="pt-32 text-center">Betöltés…</div>;
  }

  if (error) {
    return (
      <div className="pt-32 text-center text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  /* ===============================
     RENDER
     =============================== */
  return (
    <div className="pt-28 pb-20 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-emerald-700 mb-6">
          Admin – Előfizetések (Stripe)
        </h1>

        {/* SZŰRŐK */}
        <div className="flex gap-2 mb-6">
          {["all", "active", "cancelled", "expired", "past_due"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded text-sm font-semibold ${
                filter === f
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        {filteredSubs.length === 0 ? (
          <p className="text-gray-600">Nincs előfizetés.</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-2xl shadow border border-emerald-300">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-4">Felhasználó</th>
                  <th className="p-4">Termék</th>
                  <th className="p-4">Státusz</th>
                  <th className="p-4">Lejárat</th>
                  <th className="p-4">Cancel flag</th>
                  <th className="p-4">Indulás</th>
                  <th className="p-4">Rendszer</th>
                  <th className="p-4">Művelet</th>
                </tr>
              </thead>

              <tbody>
                {filteredSubs.map((s) => (
                  <tr
                    key={s.id}
                    className={`border-t ${getRowClass(s)}`}
                  >
                    <td className="p-4">
                      <div className="font-medium">{s.email}</div>
                      <div className="text-xs text-gray-500">
                        user #{s.user_id}
                      </div>
                    </td>

                    <td className="p-4">{s.product_slug}</td>

                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold
                          ${
                            s.status === "active"
                              ? "bg-green-100 text-green-700"
                              : s.status === "cancelled"
                              ? "bg-yellow-100 text-yellow-700"
                              : s.status === "past_due"
                              ? "bg-red-100 text-red-700"
                              : "bg-gray-200 text-gray-600"
                          }`}
                      >
                        {s.status}
                      </span>
                    </td>

                    <td className="p-4">
                      {s.expires_at ? (
                        <div className="flex items-center gap-2">
                          <span>
                            {new Date(s.expires_at).toLocaleDateString()}
                          </span>
                          {getExpiryBadge(s.expires_at)}
                        </div>
                      ) : (
                        "—"
                      )}
                    </td>

                    <td className="p-4">
                      {s.cancel_at_period_end ? (
                        <span className="text-yellow-600 font-semibold">
                          period end
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>

                    <td className="p-4">
                      {new Date(s.started_at).toLocaleDateString()}
                    </td>

                    <td className="p-4 text-xs text-emerald-600 font-semibold">
                      Stripe
                    </td>

                    <td className="p-4 text-sm">
                      <button
                        onClick={() => resendEmail(s.id)}
                        disabled={sendingId === s.id}
                        className="underline disabled:opacity-50"
                      >
                        {sendingId === s.id
                          ? "Küldés…"
                          : "📤 Email újraküldése"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
