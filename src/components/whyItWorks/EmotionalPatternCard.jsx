/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const steps = [
  { label: "Helyzet", top: "10%", left: "50%" },
  { label: "Érzelem", top: "35%", left: "50%" },
  { label: "Reakció", top: "60%", left: "50%" },
  { label: "Következmény", top: "85%", left: "50%" },
];

export default function EmotionalPatternCard() {
  return (
    <div
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden

        rounded-3xl

        border border-white/60
        bg-white/60
        backdrop-blur-xl

        shadow-[0_20px_60px_rgba(0,0,0,0.12)]

        p-6

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-rose-200
        hover:shadow-[0_35px_90px_rgba(0,0,0,0.16)]
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-rose-300/10
          via-pink-200/5
          to-red-300/10

          pointer-events-none
        "
      />

      {/* Animation */}
      <div
        className="
          relative
          h-64
          overflow-hidden

          rounded-2xl

          border border-rose-100

          bg-gradient-to-br
          from-rose-50
          via-white
          to-pink-50

          p-6
        "
      >
        {/* Vertical line */}
        <div className="absolute left-1/2 top-[14%] h-[64%] w-px -translate-x-1/2 bg-rose-200" />

        {/* Return line */}
        <div className="absolute left-1/2 bottom-[10%] h-px w-28 bg-rose-200" />

        <div className="absolute left-[calc(50%+7rem)] top-[14%] h-[71%] w-px bg-rose-200" />

        {/* Steps */}
        {steps.map((step) => (
          <div
            key={step.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              top: step.top,
              left: step.left,
            }}
          >
            <div
              className="
                rounded-full

                border border-rose-100

                bg-white/90

                px-4
                py-2

                text-sm
                font-medium
                text-gray-700

                shadow-lg
              "
            >
              {step.label}
            </div>
          </div>
        ))}

        {/* Animated signal */}
        <motion.div
          className="
            absolute

            h-3
            w-3

            rounded-full

            bg-emerald-500

            shadow-[0_0_18px_rgba(16,185,129,.8)]
          "
          style={{
            marginLeft: "-6px",
            marginTop: "-6px",
          }}
          animate={{
            top: [
              "10%",
              "35%",
              "60%",
              "85%",
              "85%",
              "10%",
            ],
            left: [
              "50%",
              "50%",
              "50%",
              "50%",
              "78%",
              "78%",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mt-8 flex-1">

        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-rose-100

            bg-rose-50

            px-3
            py-1

            text-xs
            font-medium

            text-rose-700
          "
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-rose-500" />
          Érzelmi ciklusok
        </div>

        <h3 className="mt-5 text-xl font-bold text-gray-900">
          Érzelmi minták
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          Bizonyos élethelyzetek ismétlődően ugyanazokat az érzelmi
          reakciókat indítják el. A minták felismerése segít
          megszakítani ezt az automatikus körforgást, és tudatosabb
          döntéseket hozni.
        </p>
      </div>
    </div>
  );
}

