// src/pages/ProductDetail.jsx

import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import productsData from "../data/productsData";
import { useCart } from "../hooks/useCart";
import { useToast } from "../context/ToastContext";
import { useAuth } from "../context/useAuth";
import { Helmet } from "react-helmet";





export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const { user } = useAuth();

  const [showDetails, setShowDetails] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const product = productsData.find((p) => p.slug === slug);
  if (!product) return null;

  const isSubscription = product.billing === "subscription";

  const handleBuy = () => {
    // 🔐 AUTH
    if (!user) {
      showToast("A vásárláshoz regisztráció szükséges.");
      window.toggleAuthModal?.("register");
      return;
    }

    // 🟣 ELŐFIZETÉS → CHECKOUT (NINCS STRIPE ITT)
    if (isSubscription) {
      navigate("/checkout", {
        state: {
          type: "subscription",
          productSlug: product.slug,
        },
      });
      return;
    }

    // 🟢 EGYSZERI TERMÉK → KOSÁR + CHECKOUT
    addToCart(product);
    navigate("/checkout");
  };

  return (

    <div className="bg-white px-6 py-24">
 
       <Helmet>
      <title>{product.title} | Ösztönkód</title>

      <meta
        name="description"
        content={product.description}
      />

      <link
        rel="canonical"
        href={`https://osztonkod.hu/products/${product.slug}`}
      />

      <meta property="og:title" content={`${product.title} | Ösztönkód`} />
      <meta property="og:description" content={product.description} />
      <meta property="og:type" content="product" />
      <meta property="og:url" content={`https://www.osztonkod.hu/products/${product.slug}`} />
      <meta property="og:image" content="https://www.osztonkod.hu/og-image.jpg" />
      <meta property="og:site_name" content="Ösztönkód" />
      <meta property="og:locale" content="hu_HU" />

      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
     
     
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-200">
        <Link to="/services" className="text-green-600 underline">
          ← Vissza
        </Link>

        {isSubscription && (
          <span className="block mt-4 text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full w-fit">
            Előfizetés
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl font-extrabold text-green-600 mt-4 mb-6 text-center sm:text-left">
          {product.title}
        </h1>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 mb-6">
          <p className="text-gray-800 leading-relaxed max-w-3xl">
            {product.description}
          </p>
        </div>

        {/* 📖 RÉSZLETES LEÍRÁS */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowDetails((prev) => !prev)}
            className="flex items-center gap-2 text-green-700 bg-green-50 hover:bg-green-100 px-4 py-2 rounded-xl font-medium transition"
          >
            {showDetails
              ? "▾ Részletes leírás elrejtése"
              : "▸ Részletes leírás megnyitása"}
          </button>
        </div>

        {showDetails && (
          <div className="bg-gray-50 rounded-2xl px-6 py-6 text-gray-800 whitespace-pre-line leading-relaxed mb-12 border border-gray-200">
            {product.longDescription}
          </div>
        )}

         {/* ✅ BENEFIT LISTA */}
          <div className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
               Mit kapsz a hozzáféréssel?
            </h3>
            
            <ul className="space-y-3 text-gray-800 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✔</span>
                <span>Automatikus reakciók és működésminták felismerése</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✔</span>
                <span>Interaktív, vizuális önreflexiós rendszer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✔</span>
                <span>Korlátlan használat – egyszeri fizetéssel</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✔</span>
                <span>Azonnali hozzáférés vásárlás után</span>
              </li>
            </ul>
          </div>



        {/* 💳 VÁSÁRLÁS */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="text-center mb-4">
              {isSubscription ? (
                <>
                <p className="text-base text-gray-400 line-through">
                  4 990 Ft / hó
                </p>

                <p className="text-4xl font-extrabold text-green-600">
                  {product.price} Ft / hó
                </p>

                <div className="mt-2 flex flex-col items-center gap-1">
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
                    Early member ár – 2026. április 11-ig
                  </span>

                  <span className="text-xs text-gray-500">
                    Az ár ezt követően 4 990 Ft / hó
                  </span>
                </div>
              </>
                          
              ) : (
                <p className="text-3xl font-bold text-green-600">
                  {product.price} Ft
                </p>
              )}
            </div>

          {/* ⚖️ ELŐFIZETÉSI TÁJÉKOZTATÓ */}
          {isSubscription && (
            <div className="max-w-xl text-sm text-gray-600 flex items-start gap-3">
              <input
                type="checkbox"
                id="subscription-consent"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label htmlFor="subscription-consent" className="leading-relaxed">
                Tudomásul veszem, hogy az előfizetés megkötésével azonnali
                hozzáférést kapok digitális tartalomhoz, ezért az elállási jog
                megszűnik. Az előfizetés automatikusan megújul, és bármikor
                lemondható a felhasználói fiókban.
              </label>
            </div>
          )}

          <button
            onClick={handleBuy}
            disabled={isSubscription && !accepted}
            className={`px-10 py-4 sm:px-8 sm:py-3 rounded-2xl text-lg font-semibold shadow-md hover:scale-[1.02] transition
              ${
                !isSubscription || accepted
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            {isSubscription ? "Előfizetek" : "Megvásárolom"}
          </button>

          <p className="text-xs text-gray-500 mt-1">
            Biztonságos vásárlás • Azonnali hozzáférés
          </p>
        </div>
      </div>
    </div>
  );
}
