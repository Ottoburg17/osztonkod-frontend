import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/admin/stats")
      .then(res => setStats(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="pt-32 text-center text-gray-500">Betöltés…</div>;
  }

  if (!stats) {
    return <div className="pt-32 text-center text-red-600">Hiba</div>;
  }

  return (
    <div className="pt-10 pb-20 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-emerald-700 mb-8">
        📊 Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        <Stat
          title="Aktív előfizetések"
          value={stats.activeSubscriptions}
        />
        <Stat
          title="MRR"
          value={`${stats.mrr.toLocaleString("hu-HU")} Ft`}
        />
        <Stat
          title="Lejár 1 napon belül"
          value={stats.expiring1d}
          warn
        />
        <Stat
          title="Lejár 7 napon belül"
          value={stats.expiring7d}
        />
      </div>

      {/* 📦 LIFETIME BLOKK */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Stat
          title="Lifetime vásárlások"
          value={stats.lifetimeSales}
        />
        <Stat
          title="Lifetime bevétel"
          value={`${(stats.lifetimeRevenue || 0).toLocaleString("hu-HU")} Ft`}
        />
        <Stat
          title="StruggleBreaker vásárlók"
          value={stats.struggleBreakerUsers}
        />
      </div>

    </div>
  );
}

function Stat({ title, value, warn }) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-sm border
        ${warn ? "bg-red-50 border-red-200" : "bg-white border-emerald-200"}
      `}
    >
      <div className="text-sm text-gray-600 mb-2">{title}</div>
      <div className={`text-2xl font-bold ${warn ? "text-red-600" : "text-emerald-700"}`}>
        {value}
      </div>
    </div>
  );
}
