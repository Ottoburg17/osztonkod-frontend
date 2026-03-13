import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import ProtectedRoute from "../components/ProtectedProductRoute.jsx";

function ContentPageInner() {
  const { slug } = useParams();
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/orders/has-product/${slug}`)
      .then((res) => {
        setAllowed(res.data.hasAccess);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <p className="pt-32 text-center">Betöltés...</p>;
  }

  if (!allowed) {
    return (
      <div className="pt-32 text-center text-red-600 text-xl">
        ❌ Nincs hozzáférés ehhez a tartalomhoz.
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-bold text-emerald-600 mb-6">
          Tartalom: {slug}
        </h1>

        <p className="text-gray-700 text-lg">
          Itt jelenik meg a tényleges tananyag, videó, PDF vagy szöveg,
          ami ehhez a termékhez tartozik.
        </p>
      </div>
    </div>
  );
}

export default function ContentPage() {
  return (
    <ProtectedRoute>
      <ContentPageInner />
    </ProtectedRoute>
  );
}
