import { useState } from "react";
import api from "../api/axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("Add meg az email címed.");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/auth/forgot-password", { email });
      setMessage(res.data.message);
    } catch (err) {
      setError(err.response?.data?.error || "Hiba történt. Próbáld újra.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
       min-h-[75vh] flex items-center justify-center px-4 py-16
      "
    >
      <div
        className="
          w-full
          max-w-3xl
          bg-white
          border border-emerald-200
          rounded-3xl
          shadow-2xl
          p-8 sm:p-10 md:p-14
          space-y-8
        "
      >
        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600">
            Elfelejtett jelszó
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Add meg az email címed, és küldünk egy linket az új jelszó beállításához.
          </p>
        </header>

        <form onSubmit={submit} className="space-y-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Email címed"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              w-full
              border border-emerald-200
              rounded-lg
              px-4 py-3 text-base
              focus:outline-none
              focus:ring-2
              focus:ring-emerald-300
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
             block mx-auto
             px-8 py-2.5
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              py-2.5
              text-sm
              rounded-lg
              transition
              disabled:opacity-50
            "
          >
            {loading ? "Küldés..." : "Jelszó-visszaállító link küldése"}
          </button>
        </form>

        {error && (
          <p className="text-center text-red-500 text-sm">{error}</p>
        )}
        {message && (
          <p className="text-center text-green-600 text-sm">{message}</p>
        )}
      </div>
    </div>
  );
}
