import { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import api from "../api/axios";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const { loginWithToken } = useAuth();

  const [status, setStatus] = useState("loading"); // loading | success | error
  const [message, setMessage] = useState("");

  // 🔥 dupla hívás ellen
  const hasRun = useRef(false);

  // 🔥 response guard (race condition ellen)
  const hasHandledResponse = useRef(false);

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
      // 🔥 ha már volt válasz, ne fusson újra
      if (hasHandledResponse.current) return;

      try {
        const res = await api.get(`/auth/verify-email?token=${token}`);

        // 🔥 ha már kezeltük, kilép
        if (hasHandledResponse.current) return;
        hasHandledResponse.current = true;

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

        setStatus("error");
        setMessage(
          res.data.message || "A megerősítő link érvénytelen vagy lejárt."
        );

      } catch (err) {
        if (hasHandledResponse.current) return;
        hasHandledResponse.current = true;

        const msg =
          err.response?.data?.message ||
          "A megerősítő link érvénytelen vagy lejárt.";

        // 🔥 fallback: már verify-olták
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
  }, []);

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