import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getConsent, setConsent } from "../cookieConsent";
import { loadAnalytics } from "../analytics/loadAnalytics";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  // 🔥 Consent betöltés + analytics indítás
  useEffect(() => {
    if (typeof window === "undefined") return;

    const consent = getConsent();

    if (!consent) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    } else {
      // ha már elfogadta korábban → töltsük az analytics-et
      if (consent.analytics) {
        loadAnalytics();
      }
    }
  }, []);

  const acceptNecessary = () => {
    setConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    });
    setVisible(false);
  };

  const acceptAll = () => {
    setConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    });

    loadAnalytics(); // 🔥 csak elfogadás után töltjük
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[9999] bg-white border-t shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row gap-4 justify-between items-center">

        {/* SZÖVEG */}
        <p className="text-xs sm:text-sm text-gray-600">
        Az oldal működéséhez szükséges sütiket használunk.
        Analitikai sütik (Google Analytics) csak az Ön hozzájárulásával kerülnek alkalmazásra. {" "}
         <Link
            to="/cookie-tajekoztato"
            className="underline hover:text-green-700"
          >
            Cookie tájékoztató
          </Link>
        </p>

        {/* GOMBOK */}
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button
            onClick={acceptNecessary}
            className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100 transition"
          >
            Csak szükséges
          </button>

          <button
            onClick={acceptAll}
            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
          >
            Elfogadom mindet
          </button>
        </div>
      </div>
    </div>
  );
}