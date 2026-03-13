import { useState } from "react";
import api from "../api/axios";

export default function BillingForm({ onSuccess }) {
  const [isCompany, setIsCompany] = useState(false);
  const [error, setError] = useState("");

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 " +
    "placeholder-gray-400 bg-white transition " +
    "focus:border-emerald-600 " +
    "focus:outline focus:outline-2 focus:outline-emerald-500 focus:outline-offset-0";

  const [form, setForm] = useState({
    billing_name: "",
    billing_zip: "",
    billing_city: "",
    billing_address: "",
    billing_country: "Magyarország",
    billing_email: "", 

    billing_company_name: "",
    billing_tax_number: "",
    billing_company_zip: "",
    billing_company_city: "",
    billing_company_address: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 🇭🇺 MAGYAR ADÓSZÁM CHECKSUM VALIDÁCIÓ
  const validateHungarianTaxNumber = (taxNumber) => {
    const regex = /^(\d{8})-(\d)-(\d{2})$/;
    const match = taxNumber.match(regex);

    if (!match) return false;

    const digits = match[1].split("").map(Number);
    const checkDigit = digits[7];

    const weights = [9, 7, 3, 1, 9, 7, 3];
    let sum = 0;

    for (let i = 0; i < 7; i++) {
      sum += digits[i] * weights[i];
    }

    const calculated = (10 - (sum % 10)) % 10;

    return calculated === checkDigit;
  };

  const handleSubmit = async () => {
    setError("");

      // 📧 EMAIL VALIDÁCIÓ
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!form.billing_email || !emailRegex.test(form.billing_email)) {
    setError("Érvénytelen email cím.");
    return;
  }


    // 👤 MAGÁNSZEMÉLY VALIDÁCIÓ
    if (
      !isCompany &&
      (!form.billing_name ||
        !form.billing_zip ||
        !form.billing_city ||
        !form.billing_address ||
        !form.billing_email)
    ) {
      setError("Kérlek tölts ki minden kötelező mezőt.");
      return;
    }

    // 🏢 CÉGES KÖTELEZŐ MEZŐK
    if (
      isCompany &&
      (!form.billing_company_name ||
        !form.billing_tax_number ||
        !form.billing_company_zip ||
        !form.billing_company_city ||
        !form.billing_company_address ||
        !form.billing_email)
    ) {
      setError("Céges vásárláshoz minden céges adat kitöltése kötelező.");
      return;
    }

    // 🧾 ADÓSZÁM CHECKSUM VALIDÁCIÓ
    if (isCompany && !validateHungarianTaxNumber(form.billing_tax_number)) {
      setError("Érvénytelen magyar adószám.");
      return;
    }

    const billingPayload = {
      billing_name: isCompany
        ? form.billing_company_name
        : form.billing_name,

      billing_zip: isCompany
        ? form.billing_company_zip
        : form.billing_zip,

      billing_city: isCompany
        ? form.billing_company_city
        : form.billing_city,

      billing_address: isCompany
        ? form.billing_company_address
        : form.billing_address,

      billing_country: form.billing_country,
      billing_email: form.billing_email,

      billing_tax_number: isCompany
        ? form.billing_tax_number
        : null,

      billing_is_company: isCompany,
    };

    try {
      await api.post("/users/billing", billingPayload);
      onSuccess?.(billingPayload);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Hiba történt az adatok mentése közben.");
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border border-gray-200">
      <h2 className="text-xl text-center font-semibold mb-8 text-gray-800">
        Számlázási adatok
      </h2>
 
    <div className="mb-6">
      <input
        type="email"
        name="billing_email"
        placeholder="Számlázási email cím *"
        value={form.billing_email}
        onChange={handleChange}
        className={inputClass}
      />
    </div>

      {/* 👤 MAGÁNSZEMÉLY */}
      {!isCompany && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <input
            name="billing_name"
            placeholder="Számlázási név *"
            value={form.billing_name}
            onChange={handleChange}
            className={inputClass}
          />

          <input
            name="billing_zip"
            placeholder="Irányítószám *"
            value={form.billing_zip}
            onChange={handleChange}
            className={inputClass}
          />

          <input
            name="billing_city"
            placeholder="Város *"
            value={form.billing_city}
            onChange={handleChange}
            className={inputClass}
          />

          <input
            name="billing_address"
            placeholder="Cím, házszám *"
            value={form.billing_address}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      )}

      {/* 🏢 CÉG KAPCSOLÓ */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-gray-700">
          Cégként vásárolok
        </span>

        <button
          type="button"
          onClick={() => setIsCompany((prev) => !prev)}
          className={`w-12 h-6 rounded-full transition relative ${
            isCompany ? "bg-emerald-600" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition ${
              isCompany ? "left-6" : "left-1"
            }`}
          />
        </button>
      </div>

      {/* 🏢 CÉGES ADATOK */}
      {isCompany && (
        <div className="grid gap-5 mb-8">
          <h3 className="text-sm font-semibold text-gray-700">
            Céges számlázási adatok
          </h3>

          <input
            name="billing_company_name"
            placeholder="Cégnév *"
            value={form.billing_company_name}
            onChange={handleChange}
            className={inputClass}
          />

          <input
            name="billing_tax_number"
            placeholder="Adószám *"
            value={form.billing_tax_number}
            onChange={handleChange}
            maxLength={13}
            className={inputClass}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              name="billing_company_zip"
              placeholder="Cég irányítószáma *"
              value={form.billing_company_zip}
              onChange={handleChange}
              className={inputClass}
            />

            <input
              name="billing_company_city"
              placeholder="Cég városa *"
              value={form.billing_company_city}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <input
            name="billing_company_address"
            placeholder="Cég címe, házszám *"
            value={form.billing_company_address}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      )}

      {error && (
        <div className="mb-6 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-emerald-600 text-white px-10 py-3 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition"
        >
          Tovább a fizetéshez
        </button>
      </div>
    </div>
  );
}
