import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function Success() {
  const navigate = useNavigate();
  const { refreshAuth } = useAuth();

  useEffect(() => {
    const run = async () => {
      await refreshAuth();

      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 2000);
    };

    run();
  }, [navigate, refreshAuth]);

  return (
    <div className="w-full min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="px-6 pt-24 md:pt-32 pb-20 max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-8 sm:p-10 md:p-12 max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-600 mb-6">
            Sikeres vásárlás!
          </h1>

          <p className="text-gray-700 text-lg mb-10">
            Köszönjük a rendelésed! Frissítjük a hozzáférésed…
          </p>

          <Link
            to="/dashboard"
            className="px-8 py-3 rounded-2xl text-lg font-semibold
              bg-green-600 hover:bg-green-700 text-white
              shadow-lg transition transform hover:scale-[1.05]"
          >
            Ugrás a Dashboardra
          </Link>
        </div>
      </div>
    </div>
  );
}