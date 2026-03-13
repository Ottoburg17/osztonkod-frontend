import api from "../api/axios";

export default function SubscriptionCheckout({ onError }) {
  const handleSubscribe = async () => {
    try {
      // ✅ Stripe subscription indítása backendről
      const { data } = await api.post(
        "/subscriptions/stripe/start"
      );

      if (!data?.url) {
        throw new Error("Hiányzó Stripe redirect URL");
      }

      // 🔁 Átirányítás Stripe Checkout / Customer Portal oldalra
      window.location.href = data.url;

    } catch (err) {
      console.error("❌ Subscription checkout error:", err);

      onError?.(
        err?.response?.data?.error ||
        err?.message ||
        "Előfizetés indítása sikertelen"
      );
    }
  };

  return (
    <button
      onClick={handleSubscribe}
      className="bg-amber-300 hover:bg-amber-400 text-black w-full py-3 rounded-xl font-semibold transition"
    >
      Előfizetés indítása
    </button>
  );
}
