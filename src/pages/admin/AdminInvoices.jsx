import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function AdminInvoices() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      setLoading(true);
      const res = await api.get("/admin/invoices"); 
      setItems(res.data || []);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Nem sikerült betölteni a számlákat.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) return <div className="pt-32 text-center">Betöltés…</div>;
  if (error) return <div className="pt-32 text-center text-red-600">{error}</div>;

  return (
    <div className="pt-28 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🧾 Számlák (Stripe)</h1>

        <div className="bg-white rounded-xl border overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Felhasználó</th>
                <th className="p-3">Számlaszám</th>
                <th className="p-3">Dátum</th>
                <th className="p-3">Státusz</th>
                <th className="p-3">PDF</th>
                <th className="p-3">Összeg</th>
              </tr>
            </thead>
             <tbody>
                {items.length === 0 && (
                  <tr>
                    <td colSpan="6" className="p-6 text-center text-gray-500">
                      Nincs kiállított számla.
                    </td>
                  </tr>
                )}

              {items.map((i) => (
                <tr key={i.id} className="border-t">
                  <td className="p-3">{i.email}</td>
                  <td className="p-3">{i.invoice_number}</td>
                  <td className="p-3">
                    {i.invoice_date
                    ? new Date(i.invoice_date).toLocaleDateString("hu-HU")
                    : "—"}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${
                          i.invoice_status === "issued"
                            ? "bg-emerald-100 text-emerald-700"
                            : i.invoice_status === "sent"
                            ? "bg-blue-100 text-blue-700"
                            : i.invoice_status === "paid"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-600"
                        }`}
                    >
                      {i.invoice_status}
                    </span>
                  </td>
                  <td className="p-3">
                    {i.invoice_pdf_url ? (
                      <a
                        href={i.invoice_pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 underline"
                      >
                        PDF
                      </a>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="p-3">
                    {Number(i.total_amount).toLocaleString("hu-HU")} {i.currency}
                  </td>
                </tr>
              ))}
            </tbody>
                      
          </table>
        </div>
      </div>
    </div>
  );
}
