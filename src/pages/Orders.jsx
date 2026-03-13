import { useEffect, useState } from "react";
import { Package } from "lucide-react";
import axios from "../api/axios";

import { useNavigate } from "react-router-dom";



/* ================== SEGÉD KONSTANSOK ================== */
const STATUS_LABELS = {
  paid: "Kifizetve",
  pending: "Feldolgozás alatt",
  refunded: "Visszatérítve",
};

const STATUS_COLORS = {
  paid: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  refunded: "bg-red-100 text-red-700",
};

function formatDate(date) {
  return new Date(date).toLocaleDateString("hu-HU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatPrice(price) {
  return `${price.toLocaleString("hu-HU")} Ft`;
}

/* ================== OLDAL ================== */
export default function Orders() {
 

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("/orders/my", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setOrders(res.data);
      } catch (err) {
        console.error("Order fetch error:", err);
        setError("Nem sikerült betölteni a rendeléseket.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  /* ================== ÁLLAPOTOK ================== */
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-10">
        <p className="text-gray-500">Rendelések betöltése…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-10 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 pb-10 space-y-8">

      {/* ===== PAGE TITLE ===== */}
      <header className="text-center">
        <h1 className="text-2xl font-bold text-green-600">
          Rendeléseim
        </h1>
        <p className="text-gray-500 mt-1">
          Itt találod a korábbi rendeléseidet
        </p>
      </header>

      {/* ===== EMPTY STATE ===== */}
      {orders.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center py-20 border rounded-xl bg-white border border-emerald-200">
          <Package size={48} className="text-gray-400 mb-4" />
          <h2 className="text-lg font-semibold">
            Még nincs rendelésed
          </h2>
          <p className="text-gray-500 mt-1 max-w-sm">
            Amint leadod az első rendelésed, itt fog megjelenni.
          </p>
        </div>
      )}

      {/* ===== ORDERS LIST ===== */}
      {orders.length > 0 && (
        <div className="space-y-4">
          {orders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ================== KÁRTYA ================== */
function OrderCard({ order }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/orders/${order.id}`)}
      className="
        border rounded-xl p-5 bg-white
        flex flex-col sm:flex-row sm:items-center justify-between gap-4
        cursor-pointer
        hover:shadow-md hover:border-green-300
        transition
      "
    >
      {/* BAL OLDAL */}
      <div>
        <p className="text-sm text-gray-500">
          Rendelés dátuma
        </p>
        <p className="font-medium">
          {formatDate(order.created_at)}
        </p>
      </div>

      {/* JOBB OLDAL */}
      <div className="flex items-center gap-4">
        <span
          className={`
            px-3 py-1 rounded-full text-sm font-medium
            ${STATUS_COLORS[order.status] || "bg-gray-100 text-gray-600"}
          `}
        >
          {STATUS_LABELS[order.status] || order.status}
        </span>

        <p className="font-semibold">
          {formatPrice(order.total_price)}
        </p>
      </div>
    </div>
  );
}
