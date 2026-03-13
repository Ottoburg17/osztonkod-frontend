import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import StripeCheckout from "../components/StripeCheckout";
import BillingForm from "../components/BillingForm";

import api from "../api/axios";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../context/useAuth";

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const { user, loading: authLoading, refreshAuth  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const checkoutType = location.state?.type ?? "one-time";
  const productSlug = location.state?.productSlug;
  const isSubscription = checkoutType === "subscription";

  const [billing, setBilling] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [acceptedLegal, setAcceptedLegal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /* 🔐 AUTH CHECK */
  useEffect(() => {
    if (!authLoading && !user) {
      window.toggleAuthModal?.("login");
      navigate("/", { replace: true });
    }
  }, [authLoading, user, navigate]);

  if (authLoading || !user) return null;

  if (!isSubscription && cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">Üres kosár.</p>
      </div>
    );
  }

  /* 💳 FIZETÉS INDÍTÁSA */
  const handleStartPayment = async () => {
    if (!acceptedLegal) {
      setErrorMessage("A fizetéshez el kell fogadnod a jogi feltételeket.");
      return;
    }

    if (!billing) {
      setErrorMessage("Hiányzó számlázási adatok.");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      if (isSubscription) {
        const { data } = await api.post("/subscriptions/stripe/start", {
          productSlug,
          billing,
        });

        window.location.href = data.url;
        return;
      }

      const res = await api.post("/orders", {
        items: cart.map((item) => ({
          slug: item.slug,
          quantity: 1,
        })),
        acceptedLegal: true,
        billing,
      });

      setOrderId(res.data.orderId);
    } catch {
      setErrorMessage("Hiba történt a fizetés indításakor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4 flex items-center justify-center">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-6 sm:p-10 space-y-8">

          {/* CÍM */}
          <h1 className="text-3xl sm:text-4xl font-bold text-emerald-600 text-center">
            Biztonságos fizetés
          </h1>
          <p className="text-center text-sm text-gray-500 mt-2">
            Stripe által védett tranzakció
          </p>

          <div className="text-xs text-gray-500 text-center space-y-1">
          <p>🔒 256-bit SSL titkosítás</p>
          <p>💳 Bankkártyaadatokat nem tárolunk</p>
          <p>🧾 A számlát a vásárlást követően e-mailben küldjük </p>
        </div>

          {/* TERMÉK INFO */}
          {!isSubscription && (
            <div className="text-center text-gray-700">
              Termék: <span className="font-semibold">{cart[0].title}</span>
            </div>
          )}

          {isSubscription && (
            <div className="text-center text-sm text-gray-600 space-y-1">
              <p>Előfizetés indítása</p>
              <p className="text-xs text-gray-500">
                Bármikor lemondható · Nincs hűségidő
              </p>
            </div>
          )}

                    

          {/* SZÁMLÁZÁSI ADATOK */}
          {!billing && (
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <BillingForm
                onSuccess={(data) => {
                  setBilling(data);
                }}
              />
            </div>
          )}

          {/* FIZETÉSI BLOKK */}
          {billing && (
            <div className="space-y-6">

              {/* ✅ BILLING OK VISSZAJELZÉS */}
              <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm text-center py-3 rounded-xl">
                ✓ Számlázási adatok rögzítve
              </div>

              {/* JOGI */}
              <div className="p-4 border border-emerald-100 rounded-xl text-sm text-gray-600 bg-emerald-50">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptedLegal}
                    onChange={(e) => setAcceptedLegal(e.target.checked)}
                    className="mt-1"
                  />
                  <span>
                    Elfogadom a{" "}
                    <a
                      href="/felhasznalasi-feltetelek"
                      className="underline hover:text-emerald-700"
                    >
                      Felhasználási feltételeket
                    </a>{" "}
                    és az{" "}
                    <a
                      href="/adatkezeles"
                      className="underline hover:text-emerald-700"
                    >
                      Adatkezelési tájékoztatót
                    </a>.
                  </span>
                </label>
              </div>

              {/* FIZETÉS INDÍTÁSA */}
              {!orderId && (
                <button
                  onClick={handleStartPayment}
                  disabled={loading || !acceptedLegal}
                  className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold 
                             shadow-lg hover:bg-emerald-700 hover:shadow-xl hover:scale-[1.01] transition 
                             disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading
                    ? "Feldolgozás..."
                    : isSubscription
                    ? "Előfizetés indítása"
                    : "Fizetés indítása"}
                </button>
              )}

              {/* STRIPE – EGYSZERI VÁSÁRLÁS */}
              {!isSubscription && orderId && (
                <div className="pt-4">
                  <Elements stripe={stripePromise} options={{ locale: "hu" }}>
                    <StripeCheckout
                      orderId={orderId}
                      billing={{
                        name: billing.billing_name,
                        zip: billing.billing_zip,
                        city: billing.billing_city,
                        address: billing.billing_address,
                      }}
                       onSuccess={async () => {
                          clearCart();
                          await refreshAuth();   
                          navigate("/success", { state: { fromPayment: true } });
                      }}
                      onError={(msg) => setErrorMessage(msg)}
                    />
                  </Elements>
                </div>
              )}
            </div>
          )}

          {/* HIBAÜZENET */}
          {errorMessage && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl text-sm text-center">
              {errorMessage}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
