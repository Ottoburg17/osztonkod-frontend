/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const steps = [
  { label: "Helyzet", delay: 0 },
  { label: "Automatikus\ngondolat", delay: 1 },
  { label: "Érzelem", delay: 2 },
  { label: "Reakció", delay: 3 },
];

export default function AutomaticThinkingAnimation() {
  return (
    <div
      className="
        relative
        h-72
        rounded-2xl
        overflow-hidden

        border border-emerald-100

        bg-gradient-to-br
        from-emerald-50
        via-white
        to-cyan-50

        p-6
      "
    >
      <div className="flex flex-col items-center h-full justify-between">
        {steps.map((step, index) => (
          <div key={step.label} className="flex flex-col items-center">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                borderColor: [
                  "rgba(229,231,235,1)",
                  "rgb(16,185,129)",
                  "rgba(229,231,235,1)",
                ],
                boxShadow: [
                  "0 0 0 rgba(0,0,0,0)",
                  "0 0 18px rgba(16,185,129,.35)",
                  "0 0 0 rgba(0,0,0,0)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 0,
                delay: step.delay,
              }}
              className="
                w-48

                rounded-full

                border

                bg-white/90

                px-4
                py-2

                text-center
                text-sm
                font-medium
                text-gray-700

                whitespace-pre-line
              "
            >
              {step.label}
            </motion.div>

            {index !== steps.length - 1 && (
              <motion.div
                className="my-2 h-8 w-px bg-emerald-200"
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: step.delay,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}