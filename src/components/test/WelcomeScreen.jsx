/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import brainImage from "../../assets/images/whyitworks.webp";

export default function WelcomeScreen({ onStart }) {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        py-3 sm:py-6
        bg-gradient-to-br
        from-green-50
        via-emerald-100
        to-green-200
        relative
        overflow-y-auto
      "
    >
      {/* Glow */}

      <div className="absolute top-[-15%] left-[10%] w-[320px] h-[320px] bg-emerald-400/15 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-15%] right-[10%] w-[320px] h-[320px] bg-green-400/15 blur-[140px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          relative
          z-10
          w-full
          max-w-lg
          rounded-3xl
          bg-white/80
          backdrop-blur-xl
          border
          border-white/40
          shadow-2xl
          px-5
          py-5
          sm:px-8
          sm:py-8
          text-center
        "
      >
        {/* Brain */}

        <motion.img
          src={brainImage}
          alt="Brain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="
            w-20
            sm:w-28
            md:w-32
            mx-auto
            mb-6
            drop-shadow-xl
            pointer-events-none
            select-none
          "
        />

        <h1
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-bold
            text-slate-800
            leading-tight
          "
        >
          Önismereti teszt
        </h1>

        <p
          className="
            mt-3
            text-base
            sm:text-base
            leading-relaxed
            text-slate-600
            max-w-lg
            mx-auto
          "
        >
          Fedezd fel, milyen érzelmi minták
          befolyásolják a reakcióidat,
          és ismerd meg önmagad néhány perc alatt.
        </p>

        {/* Features */}

        <div className="mt-5 space-y-3 max-w-sm mx-auto text-left">

          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-slate-700 font-medium">
              10 rövid kérdés
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-slate-700 font-medium">
              Kitöltési idő: kb. 2 perc
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-slate-700 font-medium">
              Nincs szükség regisztrációra
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-slate-700 font-medium">
              Az első elemzés ingyenes
            </span>
          </div>

        </div>

        <p className="mt-6 text-sm text-slate-500">
          Körülbelül <span className="font-semibold">2 perc</span> alatt elkészül.
        </p>

        <button
          onClick={onStart}
          className="
            mt-5
            w-full
            sm:w-auto
            px-10
            py-3
            rounded-2xl
            bg-gradient-to-r
            from-green-500
            to-emerald-600
            hover:from-green-600
            hover:to-emerald-700
            text-white
            text-lg
            font-semibold
            shadow-xl
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Teszt indítása →
        </button>

        <p
          className="
            mt-4
            text-xs
            sm:text-sm
            text-slate-500
            leading-relaxed
          "
        >
          Nincsenek jó vagy rossz válaszok.
          <br />
          Csak válaszolj őszintén.
        </p>
      </motion.div>
    </div>
  );
}


