/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Flag,
  BrainCircuit,
  Heart,
  Zap,
} from "lucide-react";

const steps = [
  {
    label: "Helyzet",
    icon: Flag,
    delay: 0,
  },
  {
    label: "Automatikus\ngondolat",
    icon: BrainCircuit,
    delay: 1,
  },
  {
    label: "Érzelem",
    icon: Heart,
    delay: 2,
  },
  {
    label: "Reakció",
    icon: Zap,
    delay: 3,
  },
];

export default function AutomaticThinkingAnimation() {
  return (
    <div
      className="
        relative
        h-full
        overflow-hidden
        rounded-2xl

        border border-emerald-100

        bg-gradient-to-br
        from-emerald-50
        via-white
        to-cyan-50

        p-6
      "
    >
      <div className="flex h-full flex-col items-center justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.label}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  borderColor: [
                    "#E5E7EB",
                    "#10B981",
                    "#E5E7EB",
                  ],
                  boxShadow: [
                    "0 0 0 rgba(0,0,0,0)",
                    "0 0 20px rgba(16,185,129,.25)",
                    "0 0 0 rgba(0,0,0,0)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: step.delay,
                }}
                className="
                  flex
                  w-52
                  items-center
                  gap-3

                  rounded-full

                  border

                  bg-white/90

                  px-5
                  py-2

                  shadow-sm
                "
              >
                <Icon
                  size={18}
                  className="text-emerald-600"
                />

                <span
                  className="
                    whitespace-pre-line
                    text-sm
                    font-medium
                    text-gray-700
                  "
                >
                  {step.label}
                </span>
              </motion.div>

              {index !== steps.length - 1 && (
                <motion.div
                  className="
                    my-1
                    h-6
                    w-px
                    bg-emerald-200
                  "
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
          );
        })}
      </div>
    </div>
  );
}