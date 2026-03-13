import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../api/axios";
import { ArrowLeft, Package } from "lucide-react";

/* ===== STÁTUSZOK ===== */
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

/* ===== TERMÉK NEVEK ===== */
const PRODUCT_LABELS = {
  brainmap: "🧠 BrainMap",
  "emotional-brainmap": "💚 Érzelmi Agytérkép",
  perception: "👁️ Perception",
};

export default function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ===== ADAT LEKÉRÉS ===== */
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`/orders/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setOrder(res.data);
      } catch (err) {
        console.error(err);
        setError("Nem található ez a rendelés.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  /* ===== ÁLLAPOTOK ===== */
  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 pt-24">
        <p className="text-gray-500">Betöltés…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-4 pt-24 text-red-500">
        {error}
      </div>
    );
  }

  if (!order) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 pt-24 pb-10 space-y-8">

      {/* ===== VISSZA ===== */}
      <Link
        to="/orders"
        className="inline-flex items-center gap-2 text-green-600 hover:underline"
      >
        <ArrowLeft size={16} />
        Vissza a rendeléseimhez
      </Link>

      {/* ===== RENDELÉS FEJLÉC ===== */}
      <div className="border rounded-xl p-6 bg-white space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">
            Rendelés #{order.id}
          </h1>

          <span
            className={`
              px-3 py-1 rounded-full text-sm font-medium
              ${STATUS_COLORS[order.status]}
            `}
          >
            {STATUS_LABELS[order.status]}
          </span>
        </div>

        <p className="text-gray-500 text-sm">
          Dátum:{" "}
          {new Date(order.created_at).toLocaleDateString("hu-HU")}
        </p>

        <p className="font-semibold">
          Összesen:{" "}
          {order.total_price.toLocaleString("hu-HU")} Ft
        </p>
      </div>

      {/* ===== TERMÉKEK ===== */}
      <div className="border rounded-xl p-6 bg-white">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <Package size={18} />
          Megvásárolt termékek
        </h2>

        {order.items && order.items.length > 0 ? (
          <ul className="space-y-4">
            {order.items.map((item, i) => (
              <li
                key={i}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <div className="font-medium">
                    {PRODUCT_LABELS[item.slug_snapshot] ||
                      item.slug_snapshot}
                  </div>

                  <div className="text-sm text-gray-500">
                    {item.quantity} ×{" "}
                    {item.price_snapshot.toLocaleString("hu-HU")} Ft
                  </div>
                </div>

                <Link
                  to={`/${item.slug_snapshot}`}
                  className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-green-700"
                >
                  Megnyitás →
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">
            Ehhez a rendeléshez nem tartozik termék.
          </p>
        )}
      </div>
    </div>
  );
}
