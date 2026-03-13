import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";




export default function AdminOrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get(`/orders/admin/${id}`)
      .then(res => setOrder(res.data))
      .catch(() => setError("Nem sikerült betölteni a rendelést."));
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!order) return <p>Betöltés...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-20 space-y-6">
      <h1 className="text-3xl font-bold">Rendelés #{order.id}</h1>

      {/* Alapadatok */}
      <div className="border p-4 rounded">
        <p><b>Felhasználó ID:</b> {order.user_id}</p>
        <p><b>Összeg:</b> {order.total_price} €</p>
        <p><b>Státusz:</b> {order.status}</p>
        <p><b>Létrehozva:</b> {new Date(order.created_at).toLocaleString()}</p>
      </div>

      {/* 🛡️ JOGI ELFÓGADÁS */}
      <div className="border p-4 rounded bg-green-50">
        <h2 className="font-semibold mb-2">Jogi elfogadás</h2>

        {order.accepted_legal ? (
          <>
            <p className="text-green-700 font-medium">
              ✔ Elfogadva
            </p>
            <p>
              <b>Dátum:</b>{" "}
              {new Date(order.accepted_legal_at).toLocaleString()}
            </p>
            <p>
              <b>IP cím:</b> {order.accepted_legal_ip}
            </p>
          </>
        ) : (
          <p className="text-red-600">❌ Nincs elfogadva</p>
        )}
      </div>

      {/* Tételek */}
      <div className="border p-4 rounded">
        <h2 className="font-semibold mb-2">Tételek</h2>
        {order.items.map((item, i) => (
          <div key={i} className="text-sm">
            {item.slug_snapshot} – {item.quantity} × {item.price_snapshot} €
          </div>
        ))}
      </div>
    </div>
  );
}
