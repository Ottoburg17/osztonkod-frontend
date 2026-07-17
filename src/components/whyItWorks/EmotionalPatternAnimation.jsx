/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  TriangleAlert,
  Heart,
  Zap,
  RotateCw,
} from "lucide-react";

const steps = [
  {
    id: 1,
    label: "Helyzet",
    icon: TriangleAlert,
    top: "10%",
  },
  {
    id: 2,
    label: "Érzelem",
    icon: Heart,
    top: "35%",
  },
  {
    id: 3,
    label: "Reakció",
    icon: Zap,
    top: "60%",
  },
  {
    id: 4,
    label: "Következmény",
    icon: RotateCw,
    top: "85%",
  },
];

export default function EmotionalPatternAnimation() {
  return (
    <div
      className="
        relative
        h-80
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
      {/* Ciklus vonalai */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="
            M 50 10
            L 50 85
            L 74 85
            L 74 10
            L 50 10
          "
          fill="none"
          stroke="#fecdd3"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {steps.map((step) => {
        const Icon = step.icon;

        return (
          <motion.div
            key={step.id}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ top: step.top }}
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 rgba(0,0,0,0)",
                "0 0 18px rgba(244,63,94,.18)",
                "0 0 0 rgba(0,0,0,0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: step.id * 0.3,
            }}
          >
            <div
              className="
                flex
                items-center
                gap-3

                rounded-full

                border
                border-white

                bg-white/90

                px-5
                py-3

                shadow-lg
              "
            >
              <Icon
                size={18}
                className="text-rose-500"
              />

              <span className="text-sm font-medium text-gray-700">
                {step.label}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Mozgó jel */}
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
          ease: "linear",
        }}
      />
    </div>
  );
}