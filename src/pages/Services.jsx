// src/pages/Services.jsx

import React, { useState } from "react";
import { Helmet } from "react-helmet";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import productsData from "../data/productsData";

import emotionalBrainMapImg from "../assets/images/emotional-brainmap.webp";
import brainmap from "../assets/images/brainmap.webp";
import perception from "../assets/images/perception.webp";
import fullmap from "../assets/images/fullmap.webp";
import reactionprogram from "../assets/images/reactionprogram.webp";
import thinking from "../assets/images/thinking.webp";
import emotionalrelease from "../assets/images/emotionalrelease.webp";
import strugglebreaker from "../assets/images/strugglebreaker.webp";




export default function Services() {
  const [filter, setFilter] = useState("all");
  const { user, loading } = useAuth();

  const categories = [
    { key: "all", label: "Összes" },
    { key: "elemzes", label: "Elemzések" },
    { key: "csomag", label: "Csomagok" },
    { key: "program", label: "Programok" },
  ];

  const productImages = {
    "emotional-brainmap": emotionalBrainMapImg,
    brainmap,
    perception,
    "full-map": fullmap,
    "reaction-program": reactionprogram,
    "automatic-thinking": thinking,
    "emotional-release-program": emotionalrelease,
    "struggle-breaker": strugglebreaker,
  };

  const filteredProducts =
    filter === "all"
      ? productsData
      : productsData.filter((p) => p.category === filter);

  // 🔑 HOZZÁFÉRÉS LOGIKA
  const hasProductAccess = (product) => {
    if (product.billing === "subscription") {
      return user?.hasAccess === true;
    }

    // később ide jöhet egyszeri vásárlás logika
    return false;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <Helmet>

          <title>
          Önismereti programok és elemzések – Érzelmi Ösztönkód
          </title>

          <meta
          name="description"
          content="Fedezd fel az Érzelmi Ösztönkód önismereti programjait és elemzéseit. Eszközök az érzelmi minták felismeréséhez és a tudatos működés kialakításához."
          />

          <link rel="canonical" href="https://osztonkod.hu/services" />

          <meta property="og:title" content="Önismereti programok – Érzelmi Ösztönkód" />
          <meta property="og:description" content="Programok és eszközök az érzelmi minták felismeréséhez és a tudatos működéshez." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://osztonkod.hu/services" />
          <meta property="og:image" content="https://osztonkod.hu/og-image.jpg" />
          <meta property="og:site_name" content="Érzelmi Ösztönkód" />
          <meta property="og:locale" content="hu_HU" />
        
        </Helmet>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold text-green-600 text-center mb-12"
        >
          Szolgáltatások
        </motion.h1>

        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center mb-12">
          <h3 className="text-lg font-semibold text-emerald-700">
             🔥 Bevezető előfizetői ár
          </h3>
          <p className="text-sm text-gray-600 mt-2">
           Csatlakozz most kedvezményes bevezető áron, és szerezz élethosszig tartó hozzáférést az egyszeri vásárlással elérhető programokhoz.
          </p>
        </div>


        {/* SZŰRŐK */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === c.key
                  ? "bg-green-600 text-white"
                  : "bg-white border hover:bg-green-50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* TERMÉKEK */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            const hasAccess = hasProductAccess(product);

            return (
              <div
                key={product.slug}
                className="bg-white border border-emerald-200 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                {/* BADGE */}
                {product.billing === "subscription" && (
                  <span
                    className={`inline-block mb-2 text-xs px-3 py-1 rounded-full ${
                      hasAccess
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {hasAccess ? "✔ Elérhető" : "🔒 Előfizetés"}
                  </span>
                )}

                {/* KÉP */}
                {productImages[product.slug] && (
                  <img
                    src={productImages[product.slug]}
                    alt={product.title}
                    className="h-40 w-full object-cover rounded-xl mb-4"
                  />
                )}

                {/* CÍM */}
                <h2 className="text-xl font-bold text-green-600 mb-2">
                  {product.title}
                </h2>

                {/* LEÍRÁS */}
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>

                {/* ÁR */}
                 <div className="mb-4">
                  {product.billing === "subscription" && (
                    <>
                     <p className="text-lg font-bold text-green-600">
                        {product.price} Ft / hó
                      </p>
                      <p className="text-sm text-emerald-600 font-medium">
                        🔥 Korlátozott idejű előfizetői ár
                      </p>
                      <p className="text-[11px] text-gray-500">
                        Normál ár: 4 990 Ft / hó
                      </p>
                    </>
                  )}

                  {product.billing !== "subscription" && product.launchOffer && (
                    <>
                      <p className="text-xs text-gray-400 line-through">
                        {product.originalPrice} Ft
                      </p>
                      <p className="text-lg font-bold text-green-600">
                        {product.price} Ft
                      </p>
                      <p className="text-xs text-emerald-600 font-medium">
                         🔥 Bevezető ár • Élethosszig tartó hozzáférés
                      </p>
                     
                    </>
                  )}

                  {product.billing !== "subscription" && !product.launchOffer && (
                    <p className="text-lg font-semibold text-green-600">
                      {product.price} Ft
                    </p>
                  )}
                </div>


                {/* CTA */}
                {!loading && hasAccess ? (
                  <Link
                    to={`/${product.slug}`}
                    className="inline-block text-green-600 font-semibold hover:underline"
                  >
                    Megnyitás →
                  </Link>
                ) : (
                  <Link
                    to={`/products/${product.slug}`}
                    className="inline-block text-green-600 font-medium hover:underline"
                  >
                    Részletek →
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <p className="mt-12 pb-24 text-center text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
      Az itt bemutatott programok és eszközök önreflexiós és edukációs jellegűek.
      Nem nyújtanak diagnózist vagy terápiás ellátást,
      és nem helyettesítik egészségügyi vagy pszichológiai szakember felkeresését.
    </p>
    </div>
  );
}
