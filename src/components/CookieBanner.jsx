import { useState } from "react";
import { setConsent } from "../cookieConsent";
import { loadAnalytics } from "../analytics/loadAnalytics";



export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("cookie-consent");
  });

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
    setVisible(false);
    loadAnalytics();
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[9999] bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-2 sm:px-6 sm:py-4 flex flex-col sm:flex-row gap-3 justify-between">
        <p className="text-xs sm:text-sm text-gray-600">
          Az oldal működéséhez szükséges sütiket használunk. Statisztikai és
          marketing célú sütik csak az Ön hozzájárulásával kerülnek
          elhelyezésre.{" "}
          <a href="/cookie-tajekoztato" className="underline">
            További információ
          </a>
        </p>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button
            onClick={acceptNecessary}
            className="px-4 py-2 border rounded"
          >
            Csak szükséges
          </button>

          <button
            onClick={acceptAll}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Elfogadom mindet
          </button>
        </div>
      </div>
    </div>
  );
}



