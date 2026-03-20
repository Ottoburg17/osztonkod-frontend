import { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import api from "../api/axios";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const { loginWithToken } = useAuth();

  const [status, setStatus] = useState("loading"); // loading | success | error
  const [message, setMessage] = useState("");

  // 🔥 EZ A FIX (dupla hívás ellen)
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const token = new URLSearchParams(window.location.search).get("token");

    if (!token) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus("error");
      setMessage("Hiányzó vagy érvénytelen token.");
      return;
    }

    const verifyEmail = async () => {
      try {
        const res = await api.get(`/auth/verify-email?token=${token}`);

        // ✅ SIKERES VERIFY
        if (res.data.status === "verified") {
          if (res.data.token) {
            loginWithToken(res.data.token);
            navigate("/dashboard", { replace: true });
            return;
          }

          setStatus("success");
          setMessage(res.data.message || "Email sikeresen megerősítve!");
          return;
        }

        // ❌ NEM VERIFIED
        setStatus("error");
        setMessage(
          res.data.message || "A megerősítő link érvénytelen vagy lejárt."
        );

      } catch (err) {
        const msg =
          err.response?.data?.message ||
          "A megerősítő link érvénytelen vagy lejárt.";

        // 🔥 HA MÁR VERIFY-OLTÁK (fallback)
        if (
          msg.toLowerCase().includes("már megerősítve") ||
          msg.toLowerCase().includes("already")
        ) {
          setStatus("success");
          setMessage("Email már meg volt erősítve.");
          return;
        }

        setStatus("error");
        setMessage(msg);
      }
    };

    verifyEmail();
  }, [loginWithToken, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center border border-emerald-200">

        {status === "loading" && (
          <p className="text-gray-600">
            Email megerősítése folyamatban...
          </p>
        )}

        {status === "success" && (
          <>
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Email megerősítve
            </h2>
            <p className="mb-6">{message}</p>
            <button
              onClick={() => navigate("/")}
              className="bg-green-600 text-white px-6 py-2 rounded-xl"
            >
              Bejelentkezés
            </button>
          </>
        )}

        {status === "error" && (
          <>
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              ❌ Hiba történt
            </h2>
            <p className="mb-4">{message}</p>

            <Link
              to="/resend-verification"
              className="text-green-600 hover:underline text-sm"
            >
              Új megerősítő email kérése
            </Link>
          </>
        )}
      </div>
    </div>
  );
}