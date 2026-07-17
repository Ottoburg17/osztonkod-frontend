/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

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
      {/* Glow */}
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

      {/* Titles */}
      <div className="absolute top-8 left-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">
          Régi minta
        </p>

        <p className="mt-2 text-sm text-gray-600">
          Automatikus reakció
        </p>
      </div>

      <div className="absolute top-8 right-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
          Új minta
        </p>

        <p className="mt-2 text-sm text-gray-600">
          Tudatos válasz
        </p>
      </div>

      {/* Old Network */}

      <div className="absolute left-12 top-24">

        <div className="relative w-56 h-56">

          {[

            [40,40],
            [120,70],
            [80,140],
            [170,160],
            [180,50],
            [35,180],

          ].map(([x,y],index)=>(

            <motion.div
              key={index}
              className="absolute h-4 w-4 rounded-full bg-rose-400 shadow-[0_0_18px_rgba(251,113,133,.7)]"

              style={{
                left:x,
                top:y
              }}

              animate={{
                scale:[1,1.4,1],
                opacity:[.7,1,.7]
              }}

              transition={{
                duration:2,
                repeat:Infinity,
                delay:index*.2
              }}
            />

          ))}

        </div>

      </div>

      {/* Center */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

        <motion.div

          animate={{
            scale:[1,.92,1],
            opacity:[1,.8,1]
          }}

          transition={{
            duration:2,
            repeat:Infinity
          }}

          className="
            flex
            h-24
            w-24
            items-center
            justify-center

            rounded-full

            bg-white

            shadow-xl
          "
        >

          <span className="text-center text-sm font-semibold text-emerald-600">
            Felismerés
          </span>

        </motion.div>

      </div>

      {/* New Network */}

      <div className="absolute right-12 top-24">

        <div className="relative w-56 h-56">

          {[

            [35,60],
            [110,30],
            [160,90],
            [60,170],
            [160,180],
            [110,120],

          ].map(([x,y],index)=>(

            <motion.div
              key={index}
              className="absolute h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_22px_rgba(16,185,129,.9)]"

              style={{
                left:x,
                top:y
              }}

              animate={{
                scale:[1,1.45,1],
                opacity:[.8,1,.8]
              }}

              transition={{
                duration:2,
                repeat:Infinity,
                delay:index*.25
              }}
            />

          ))}

        </div>

      </div>

    </div>
  );
}