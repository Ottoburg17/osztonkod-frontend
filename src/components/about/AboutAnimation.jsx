/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import ConnectionLayer from "./ConnectionLayer";
import SignalLayer from "./SignalLayer";
import NeuronLayer from "./NeuronLayer";

export default function AboutAnimation() {
  return (
    <div
      className="
        relative
        h-[420px]
        overflow-hidden
        rounded-3xl

        border border-white/60

        bg-white/60
        backdrop-blur-xl

        shadow-[0_25px_80px_rgba(0,0,0,.12)]
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-emerald-400/10
          via-cyan-300/5
          to-white
        "
      />

      {/* Left Title */}

      <div className="absolute left-12 top-8 text-center z-20">

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">
          Régi minta
        </p>

        <p className="mt-2 text-sm text-gray-600">
          Automatikus reakció
        </p>

      </div>

      {/* Right Title */}

      <div className="absolute right-12 top-8 text-center z-20">

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
          Új minta
        </p>

        <p className="mt-2 text-sm text-gray-600">
          Tudatos válasz
        </p>

      </div>

      {/* Neural Network */}

      <ConnectionLayer />

      <SignalLayer />

      <NeuronLayer />

      {/* Center */}

      <div
        className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          z-30
        "
      >

        <motion.div
          animate={{
            scale: [1, 0.94, 1],
            opacity: [1, 0.85, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            relative

            flex
            h-24
            w-24

            items-center
            justify-center

            rounded-full

            bg-white

            shadow-[0_15px_40px_rgba(16,185,129,.25)]
          "
        >

          {/* Glow */}

          <motion.div
            className="
              absolute

              inset-0

              rounded-full

              bg-emerald-400/20
              blur-xl
            "
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          <span
            className="
              relative

              text-center
              text-sm
              font-semibold

              text-emerald-700
            "
          >
            Felismerés
          </span>

        </motion.div>

      </div>

    </div>
  );
}