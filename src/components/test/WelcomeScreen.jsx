/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { CircleHelp } from "lucide-react";


export default function WelcomeScreen({ onStart }) {
  return (
    <div className="w-full min-h-screen bg-white px-4 py-24">

      <div className="max-w-2xl mx-auto">

        {/* CÍM */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-green-600 text-center tracking-tight mb-10"
        >
          Önismereti teszt
        </motion.h1>

        {/* LEÍRÁS */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-600 text-center max-w-xl mx-auto mb-10"
        >
          Fedezd fel, milyen érzelmi minták befolyásolják a reakcióidat,
          és ismerd meg önmagad néhány perc alatt.
        </motion.p>

        {/* FŐ KÁRTYA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            bg-white/90
            backdrop-blur-xl
            border
            border-green-200
            shadow-xl
            rounded-3xl
            p-8
          "
        >
          {/* KÉP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center border border-green-200 shadow-sm">
              <CircleHelp
                size={52}
                strokeWidth={2.2}
                className="text-green-600"
              />
            </div>
          </motion.div>
          

          {/* LISTA */}
          <div className="space-y-4 max-w-md mx-auto">

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-700">
                18 rövid kérdés
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-700">
                Kitöltési idő: kb. 3 perc
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-700">
                Nincs szükség regisztrációra
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-700">
                Az első elemzés ingyenes
              </span>
            </div>

          </div>

          {/* INFORMÁCIÓ */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Körülbelül <span className="font-semibold">3 perc</span> alatt elkészül.
          </p>

          {/* GOMB */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={onStart}
              className="
                px-10
                py-3
                rounded-2xl
                bg-green-600
                hover:bg-green-700
                text-white
                font-semibold
                transition
                shadow-lg
              "
            >
              Teszt indítása →
            </button>
          </div>

          {/* ALSÓ SZÖVEG */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Nincsenek jó vagy rossz válaszok.
            <br />
            Csak válaszolj őszintén.
          </p>

        </motion.div>

      </div>

    </div>
  );
}

