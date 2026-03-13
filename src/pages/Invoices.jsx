import { useEffect, useState } from "react";
import api from "../api/axios";

/* ================================
   STÁTUSZ MAGYAROSÍTÁS
================================ */
const statusLabel = {
  issued: "Kiállítva",
  sent: "Elküldve",
  paid: "Fizetve",
};

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadInvoices = async () => {
      try {
        const res = await api.get("/user/invoices");
        setInvoices(res.data || []);
      } catch (err) {
        console.error(err);
        setError("Nem sikerült betölteni a számlákat.");
      } finally {
        setLoading(false);
      }
    };

    loadInvoices();
  }, []);

  /* ================================
     ÁLLAPOTOK
  ================================ */
  if (loading) {
    return (
      <div className="pt-32 text-center text-gray-500">
        Számlák betöltése…
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-32 text-center text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  /* ================================
     UI
  ================================ */
  return (
    <div className="pt-28 pb-20 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto bg-white border border-emerald-200 rounded-2xl shadow p-8">
        <h1 className="text-4xl font-bold text-green-600 mb-8">
          🧾 Számláim
        </h1>

        {invoices.length === 0 && (
          <div className="bg-emerald-100 border border-emerald-200 p-6 rounded-2xl text-emerald-700 font-semibold">
            Még nincs kiállított számlád.
          </div>
        )}

        <div className="space-y-4">
          {invoices.map((inv) => (
            <div
              key={inv.id}
              className="bg-white border rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              {/* BAL OLDAL */}
              <div className="space-y-1">
                <div className="font-semibold text-lg">
                  {inv.service_name}
                </div>

                <div className="text-sm text-gray-600">
                  Számlaszám:{" "}
                  <span className="font-medium text-gray-900">
                    {inv.invoice_number}
                  </span>
                </div>

                <div className="text-sm text-gray-600">
                  Dátum:{" "}
                  {new Date(inv.invoice_date).toLocaleDateString("hu-HU")}
                </div>

                <div className="text-sm text-gray-600">
                  Összeg:{" "}
                  <strong>
                    {Number(inv.total_amount).toLocaleString("hu-HU")}{" "}
                    {inv.currency}
                  </strong>
                </div>
              </div>

              {/* JOBB OLDAL */}
              <div className="mt-4 sm:mt-0 flex flex-col items-start sm:items-end gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold
                    ${
                      inv.invoice_status === "issued"
                        ? "bg-emerald-100 text-emerald-700"
                        : inv.invoice_status === "sent"
                        ? "bg-blue-100 text-blue-700"
                        : inv.invoice_status === "paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                >
                  {statusLabel[inv.invoice_status] || inv.invoice_status}
                </span>

                {inv.invoice_pdf_url && (
                  <a
                    href={inv.invoice_pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 font-semibold hover:underline"
                  >
                    📄 PDF letöltése
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
