import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function StripeSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    let retries = 0;
    const MAX_RETRIES = 5;

    const verify = async () => {
      try {
        const res = await api.get(
          "/subscriptions/has-access/dopamine-cycle"
        );

        if (res.data.hasAccess) {
          navigate("/dashboard/dopamine-cycle", { replace: true });
          return;
        }

        // ⏳ webhook még nem futott le → újrapróba
        if (retries < MAX_RETRIES) {
          retries++;
          setTimeout(verify, 1500);
        } else {
          // fallback
          navigate("/dashboard", { replace: true });
        }
      } catch {
        navigate("/products/dopamine-cycle", { replace: true });
      }
    };

    verify();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
           Előfizetés sikeres
        </h1>

        <p className="text-gray-600 mb-6">
          Az előfizetésed aktiválása folyamatban van.
          Pár másodperc múlva automatikusan belépsz.
        </p>

        <div className="animate-pulse text-sm text-gray-400">
          Jogosultság ellenőrzése…
        </div>
      </div>
    </div>
  );
}
