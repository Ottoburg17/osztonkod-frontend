import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import api from "../api/axios";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const { loginWithToken } = useAuth();

  const [status, setStatus] = useState("loading"); // loading | success | error
  const [message, setMessage] = useState("");

  useEffect(() => {
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

        // ✅ AUTOMATIKUS LOGIN
        if (res.data.status === "verified" && res.data.token) {
          loginWithToken(res.data.token);
          navigate("/dashboard", { replace: true });
          return;
        }

        setStatus("success");
        setMessage(res.data.message || "Email sikeresen megerősítve!");

      } catch (err) {
        const msg =
          err.response?.data?.message ||
          "A megerősítő link érvénytelen vagy lejárt.";

        // 🔥 ha már meg volt erősítve
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
          <p className="text-gray-600">Email megerősítése folyamatban...</p>
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