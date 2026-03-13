import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";

export default function ResetPassword() {
  const [params] = useSearchParams();
  const token = params.get("token");
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("A jelszó legalább 6 karakter legyen.");
      return;
    }

    if (password !== confirmPassword) {
      setError("A két jelszó nem egyezik.");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/auth/reset-password", {
        token,
        password,
      });

      setSuccess(res.data.message);

      setTimeout(() => {
        navigate("/");
        window.toggleAuthModal?.();
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || "Hiba történt.");
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <p className="pt-32 text-center text-red-500">
        Érvénytelen vagy hiányzó token.
      </p>
    );
  }

  return (
    <div
      className="min-h-[75vh] flex items-center justify-center px-4 py-16"
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
        <header className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600">
            Új jelszó beállítása
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Add meg az új jelszavadat.
          </p>
        </header>

        <form onSubmit={submit} className="space-y-5 max-w-xl mx-auto">
          {/* Új jelszó */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Új jelszó"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="
                w-full
                border border-emerald-300
                rounded-xl
                px-4 py-3 pr-12
                text-base
                focus:outline-none
                focus:ring-2
                focus:ring-emerald-400
              "
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              👁️
            </button>
          </div>

          {/* Jelszó megerősítése */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Új jelszó megerősítése"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="
                w-full
                border border-emerald-300
                rounded-xl
                px-4 py-3 pr-12
                text-base
                focus:outline-none
                focus:ring-2
                focus:ring-emerald-300
              "
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              👁️
            </button>
          </div>

          <button
            disabled={loading}
            className="
              block mx-auto
              px-8 py-2.5
              md:px-10 md:py-3
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              text-sm md:text-base
              rounded-lg
              transition
              disabled:opacity-50
            "
          >
            {loading ? "Mentés..." : "Jelszó mentése"}
          </button>
        </form>

        {error && (
          <p className="text-center text-red-500 text-sm">{error}</p>
        )}
        {success && (
          <p className="text-center text-green-600 text-sm">{success}</p>
        )}
      </div>
    </div>
  );
}
