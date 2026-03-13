import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const res = await api.get("/orders/all");
      setOrders(res.data);
    } catch (err) {
      console.error(err);
      setError("Nincs jogosultságod vagy hiba történt.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Betöltés…</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 font-semibold">{error}</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">
        Admin – Rendelések
      </h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">Nincs még rendelés.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              onClick={() => navigate(`/admin/orders/${order.id}`)}
              className="bg-white p-6 rounded-2xl shadow border
                         hover:bg-emerald-50 cursor-pointer transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">
                    Rendelés #{order.id}
                  </h2>
                  <p className="text-sm text-gray-500">
                    User ID: {order.user_id}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold">{order.total_price} Ft</p>
                  <span
                    className={`text-xs px-2 py-1 rounded font-medium
                      ${
                        order.status === "paid"
                          ? "bg-green-100 text-green-700"
                          : order.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-2">
                {new Date(order.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
