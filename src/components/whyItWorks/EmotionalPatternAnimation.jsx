/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    label: "Helyzet",
    top: "10%",
  },
  {
    id: 2,
    label: "Érzelem",
    top: "35%",
  },
  {
    id: 3,
    label: "Reakció",
    top: "60%",
  },
  {
    id: 4,
    label: "Következmény",
    top: "85%",
  },
];

export default function EmotionalPatternAnimation() {
  return (
    <div
      className="
        relative
        h-72
        overflow-hidden
        rounded-2xl

        border
        border-rose-100

        bg-gradient-to-br
        from-rose-50
        via-white
        to-pink-50
      "
    >
      {/* Vertical line */}

      <div className="absolute left-1/2 top-[14%] h-[60%] w-px bg-rose-200 -translate-x-1/2" />

      {/* Return line */}

      <div className="absolute left-1/2 bottom-[10%] w-24 h-px bg-rose-200" />

      <div className="absolute left-[calc(50%+6rem)] top-[14%] h-[65%] w-px bg-rose-200" />

      {/* Steps */}

      {steps.map((step) => (
        <motion.div
          key={step.id}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            top: step.top,
          }}
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <div
            className="
              rounded-full

              border
              border-white

              bg-white/90

              px-4
              py-2

              text-sm
              font-medium

              shadow-lg
            "
          >
            {step.label}
          </div>
        </motion.div>
      ))}

      {/* Moving Signal */}

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
            "74%",
            "74%",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}