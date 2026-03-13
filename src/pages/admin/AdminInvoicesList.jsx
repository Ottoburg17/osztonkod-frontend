import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios";


// Magyar státusz feliratok
const statusLabel = {
  issued: "Kiállítva",
  sent: "Elküldve",
  paid: "Fizetve",
};


export default function AdminInvoicesList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔎 szűrők
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  // ----------------------------------
  // BETÖLTÉS (STÁTUSZ SZŰRŐVEL)
  // ----------------------------------
  const load = async () => {
    setLoading(true);
    setError("");

    try {
      const query =
        statusFilter === "all"
          ? "/admin/invoices"
          : `/admin/invoices?status=${statusFilter}`;

      const res = await api.get(query);
      setItems(res.data || []);
    } catch (err) {
      console.error(err);
      setError("Nem sikerült betölteni a számlákat.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [statusFilter]);

  // ----------------------------------
  // FIZETETTRE ÁLLÍTÁS
  // ----------------------------------
  const markPaid = async (invoiceId) => {
    if (!window.confirm("Biztosan fizetettre állítod ezt a számlát?")) return;

    try {
      await api.post(`/admin/invoices/${invoiceId}/mark-paid`);
      await load();
    } catch (err) {
      console.error(err);
      alert("❌ Nem sikerült fizetettre állítani a számlát");
    }
  };

  // ----------------------------------
  // SZŰRT LISTA (KERESÉS + DÁTUM)
  // ----------------------------------
  const filteredItems = items.filter((i) => {
    const q = search.toLowerCase();

    const matchesSearch =
      i.email?.toLowerCase().includes(q) ||
      i.invoice_number?.toLowerCase().includes(q);

    const invoiceDate = new Date(i.invoice_date);
    const fromOk = dateFrom ? invoiceDate >= new Date(dateFrom) : true;
    const toOk = dateTo ? invoiceDate <= new Date(dateTo) : true;

    return matchesSearch && fromOk && toOk;
  });

  // ----------------------------------
  // CSV EXPORT (KÖNYVELÉS)
  // ----------------------------------
  const exportCSV = () => {
    const header = [
      "Számlaszám",
      "Email",
      "Dátum",
      "Összeg",
      "Pénznem",
      "Státusz",
    ];

    const rows = filteredItems.map((i) => [
      i.invoice_number,
      i.email,
      i.invoice_date,
      i.total_amount,
      i.currency,
      statusLabel[i.invoice_status] || i.invoice_status,
    ]);

    const csvContent =
      [header, ...rows]
        .map((row) => row.join(";"))
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "szamlak_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ----------------------------------
  // ÁLLAPOTOK
  // ----------------------------------
  if (loading) {
    return <div className="pt-32 text-center text-gray-500">Betöltés…</div>;
  }

  if (error) {
    return (
      <div className="pt-32 text-center text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  // ----------------------------------
  // UI
  // ----------------------------------
  return (
    <div className="pt-10 pb-24">
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">
        💰 Számlák
      </h1>

      <Link
        to="/admin/manual-invoice"
        className="px-4 py-2  bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 "
      >
        ➕ Új számla
      </Link>



      {/* 🔘 STÁTUSZ SZŰRŐ */}
      <div className="pt-10 flex gap-2 mb-8 ">
        {[
          { key: "all", label: "Összes" },
          { key: "issued", label: "🧾 Kiállítva" },
          { key: "paid", label: "💰 Fizetve" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setStatusFilter(f.key)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold
              ${
                statusFilter === f.key
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* 🔍 KERESÉS */}
      <input
        type="text"
        placeholder="🔍 Keresés email vagy számlaszám alapján"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-4 py-2 rounded-xl border"
      />

      {/* 📆 DÁTUM SZŰRÉS */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <input
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          className="px-3 py-2 rounded-lg border"
        />
        <input
          type="date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          className="px-3 py-2 rounded-lg border"
        />

        <button
          onClick={exportCSV}
          className="ml-auto px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          📤 CSV export
        </button>
      </div>

      {filteredItems.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl text-yellow-700 font-semibold">
          Nincs találat a megadott feltételekre.
        </div>
      )}

      <div className="space-y-4">
        {filteredItems.map((i) => (
          <div
            key={i.id}
            className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* BAL */}
              <div>
                <p className="text-sm text-gray-600">{i.email}</p>
                <div className="mt-2 text-sm">
                  Számlaszám: <strong>{i.invoice_number}</strong><br />
                  Dátum: {new Date(i.invoice_date).toLocaleDateString()}<br />
                  Összeg:{" "}
                  <strong>
                    {Number(i.total_amount).toLocaleString("hu-HU")} {i.currency}
                  </strong>
                </div>
              </div>

              {/* JOBB */}
              <div className="flex flex-col items-end justify-between">
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-100">
                  {statusLabel[i.invoice_status]}
                </span>

                {i.invoice_pdf_url && (
                  <a
                    href={i.invoice_pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-emerald-600 font-semibold hover:underline"
                  >
                    📄 PDF megnyitása
                  </a>
                )}

                {i.invoice_status !== "paid" ? (
                  <button
                    onClick={() => markPaid(i.id)}
                    className="mt-4 px-5 py-2 rounded-lg text-sm font-semibold bg-green-600 text-white hover:bg-green-700"
                  >
                    💰 Fizetve
                  </button>
                ) : (
                  <span className="mt-4 text-green-700 font-semibold">
                    ✔ Lezárva
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
