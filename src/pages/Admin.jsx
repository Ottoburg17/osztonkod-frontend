import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) =>
  location.pathname.startsWith(path)
    ? "bg-emerald-600 text-white"
    : "bg-gray-200 hover:bg-gray-300";


  return (
    <div className="pt-22 pb-20 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white border border-emerald-300 rounded-2xl shadow p-8">

        {/* 🔐 ADMIN MENÜ */}
        <div className="flex gap-4 mb-10 flex-wrap">

          <button
            onClick={() => navigate("/admin/dashboard")}
            className={`px-6 py-3 rounded-xl font-semibold ${isActive("/admin/dashboard")}`}
          >
            📊 Dashboard
          </button>

          <button
            onClick={() => navigate("/admin/orders")}
            className={`px-6 py-3 rounded-xl font-semibold ${isActive("/admin/orders")}`}
          >
            📦 Rendelések
          </button>


          <button
            onClick={() => navigate("/admin/subscriptions")}
            className={`px-6 py-3 rounded-xl font-semibold ${isActive("/admin/subscriptions")}`}
          >
            🔁 Előfizetések
          </button>

          <button
            onClick={() => navigate("/admin/invoices")}
            className={`px-6 py-3 rounded-xl font-semibold ${isActive("/admin/invoices")}`}
          >
            🧾 Stripe számlák
          </button>

          {/* 🆕 SZÁMLÁK LISTÁJA */}
          <button
            onClick={() => navigate("/admin/invoices-list")}
            className={`px-6 py-3 rounded-xl font-semibold ${isActive("/admin/invoices-list")}`}
          >
            💰 Belső Számlák
          </button>

        </div>

        {/* ⬇️ IDE JÖN BE A TARTALOM */}
        <Outlet />
      </div>
    </div>
  );
}
