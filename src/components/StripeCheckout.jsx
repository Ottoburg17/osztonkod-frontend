import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import api from "../api/axios";

export default function StripeCheckout({
  orderId,
  billing,
  onSuccess,
  onError,
}) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    try {
      // ✅ 1️⃣ PaymentIntent létrehozása (egyszeri vásárlás)
      const { data } = await api.post(
        "/payments/stripe/create-intent",
        { orderId }
      );

      if (!data?.clientSecret) {
        throw new Error("Hiányzó Stripe clientSecret");
      }

      // ✅ 2️⃣ Kártyás fizetés megerősítése
      const result = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: billing?.name || "",
              address: {
                postal_code: billing?.zip || "",
                city: billing?.city || "",
                line1: billing?.address || "",
                country: "HU",
              },
            },
          },
        }
      );

      if (result.error) {
        onError?.(result.error.message);
        return;
      }

      // ✅ 3️⃣ Sikeres fizetés
      if (result.paymentIntent?.status === "succeeded") {
        onSuccess?.();
      }
    } catch (err) {
      onError?.(
        err?.response?.data?.error ||
          err?.message ||
          "Ismeretlen Stripe hiba"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement
        options={{
          hidePostalCode: true,
          style: {
            base: {
              fontSize: "16px",
              color: "#111827",
               fontFamily: "system-ui, sans-serif",
              "::placeholder": { color: "#9ca3af" },
            },
            invalid: { color: "#dc2626" },
          },
        }}
        className="p-4 border border-gray-300 rounded-xl bg-white focus-within:ring-2 focus-within:ring-[#635BFF]"
      />

      <button
        type="submit"
        disabled={!stripe}
        className="w-full py-3 rounded-xl text-white font-semibold transition 
             bg-[#635BFF] hover:bg-[#4F46E5] shadow-lg hover:shadow-xl active:scale-[0.99] transition disabled:opacity-50 "
      >
        Fizetés bankkártyával 
      </button>
    </form>
  );
}
