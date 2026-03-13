import React from "react";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50/40">
      <div className="px-6 pt-24 md:pt-32 pb-40 max-w-3xl mx-auto">

        {/* CÍM */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-600 text-center mb-12">
          Kosár
        </h1>

        {/* ÜRES KOSÁR */}
        {cart.length === 0 && (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-5">
            <div className="text-6xl">🛒</div>

            <p className="text-lg text-gray-600">
              A kosarad jelenleg üres.
            </p>

            <p className="text-gray-500 text-sm mt-2 max-w-sm">
              Válassz egy programot vagy szolgáltatást, és azonnali hozzáférést kapsz a tartalomhoz.
            </p>

            <Link
              to="/services"
              className="
                mt-4 px-8 py-3 rounded-xl text-base font-semibold
                bg-emerald-600 hover:bg-emerald-700 text-white
                shadow-md transition hover:scale-[1.04]
              "
            >
              Szolgáltatások megtekintése
            </Link>

            <p className="text-xs text-gray-500 mt-4">
            ✔ Azonnali hozzáférés • ✔ Egyszeri fizetés • ✔ Biztonságos fizetés
            </p>

            <p className="text-sm text-gray-500 mt-4">
              Már van fiókod?
              <button
                onClick={() => window.toggleAuthModal?.()}
                className="ml-2 text-emerald-600 font-semibold hover:underline"
              >
                Bejelentkezés
              </button>
            </p>
          </div>
        )}

        {/* KOSÁR TARTALOM */}
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
              bg-white
              rounded-3xl
              shadow-xl
              border border-emerald-200
              p-8 md:p-10
              space-y-8
            "
          >
            {/* TERMÉKEK */}
            {cart.map((item) => (
              <div
                key={item.slug}
                className="flex justify-between items-start gap-4 border-b last:border-b-0 pb-4"
              >
                <div>
                  <h2 className="font-semibold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Digitális termék • Azonnali hozzáférés
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-gray-800">
                    {item.price} Ft
                  </p>
                  <button
                    onClick={() => removeFromCart(item.slug)}
                    className="text-xs text-red-500 hover:underline mt-1"
                  >
                    Törlés
                  </button>
                </div>
              </div>
            ))}

            {/* ÖSSZESÍTÉS */}
            <div className="flex justify-between items-center text-lg font-bold pt-4">
              <span>Összesen</span>
              <span>{total} Ft</span>
            </div>

            {/* BIZALMI BADGE SOR */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 pt-4">
              <span className="flex items-center gap-2">✔ Egyszeri vásárlás</span>
              <span className="flex items-center gap-2">✔ Azonnali hozzáférés</span>
              <span className="flex items-center gap-2">✔ Biztonságos fizetés</span>
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden md:flex justify-center pt-6">
              <Link
                to="/checkout"
                className="
                  bg-emerald-600 hover:bg-emerald-700
                  text-white font-semibold text-lg
                  px-8 py-3 rounded-xl
                  shadow-md
                  transition hover:scale-[1.03]
                "
              >
                Tovább a fizetéshez →
              </Link>
            </div>
          </motion.div>
        )}

        {/* OLDAL LEZÁRÁS */}
        {cart.length > 0 && (
          <div className="mt-24 text-center text-base text-gray-500">
            A vásárlás után azonnali hozzáférést kapsz a digitális tartalomhoz.
          </div>
        )}
      </div>

      {/* STICKY MOBIL CHECKOUT */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 inset-x-0 md:hidden bg-white/95 backdrop-blur-md bg-white/95 border-t border-emerald-200 px-6 py-4 shadow-lg">
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm">
              <p className="text-gray-500">Összesen</p>
              <p className="font-bold text-gray-900">{total} Ft</p>
            </div>

            <Link
              to="/checkout"
              className="
                bg-emerald-600 hover:bg-emerald-700
                text-white font-semibold
                px-6 py-3 rounded-xl
                shadow-md
                transition active:scale-[0.97]
              "
            >
              Fizetés →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
