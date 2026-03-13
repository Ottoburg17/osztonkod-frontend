import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/useAuth";


export default function PaymentSuccess() {
  const navigate = useNavigate();
  const { refreshAuth } = useAuth();

  useEffect(() => {
    let retries = 0;
    const MAX_RETRIES = 6;
    let timeoutId;

    const checkAccess = async () => {
      try {
        const res = await api.get("/auth/me");

        if (res.data.hasAccess) {
          await refreshAuth(); // 🔑 AUTH STATE FRISSÍTÉS
          navigate("/services", { replace: true });
          return;
        }

        if (retries < MAX_RETRIES) {
          retries++;
          timeoutId = setTimeout(checkAccess, 1500);
        } else {
          navigate("/services", { replace: true });
        }
      } catch {
        navigate("/services", { replace: true });
      }
    };

    checkAccess();
    return () => clearTimeout(timeoutId);
  }, [navigate, refreshAuth]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-2xl shadow text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Fizetés sikeres 🎉
        </h1>
        <p className="text-gray-600">
          Hozzáférés aktiválása folyamatban…
        </p>
      </div>
    </div>
  );
}
