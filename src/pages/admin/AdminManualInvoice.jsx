import { useState } from "react";
import api from "../../api/axios";

export default function AdminManualInvoice() {
  const [email, setEmail] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("user_email", email);
      formData.append("invoice_number", invoiceNumber);
      formData.append("service_name", serviceName);
      formData.append("invoice_date", invoiceDate);
      formData.append("total_amount", totalAmount);

      if (file) {
        formData.append("pdf", file);
      }

      await api.post("/admin/manual-invoice", formData);

      alert("Számla sikeresen rögzítve!");
      setEmail("");
      setInvoiceNumber("");
      setServiceName("");
      setInvoiceDate("");
      setTotalAmount("");
      setFile(null);

    } catch (err) {
      console.error(err);
      alert("Hiba történt a mentés során.");
    }
  };

  return (
    <div className="pt-28 px-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow border border-emerald-100">

        <h1 className="text-2xl font-bold mb-6">
          🧾 Manuális számla rögzítése
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Felhasználó email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Számlaszám"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Szolgáltatás neve"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="date"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Összeg (HUF)"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full"
          />

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded font-semibold"
          >
            Számla mentése
          </button>

        </form>
      </div>
    </div>
  );
}