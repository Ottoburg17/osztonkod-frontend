/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { neurons } from "./neurons";

export default function NeuronLayer() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {neurons.map((neuron, index) => {
        const duration = 3 + (index % 5) * 0.35;
        const delay = index * 0.08;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${neuron.x}%`,
              top: `${neuron.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [1, 1.18, 1],
              opacity: [0.55, 1, 0.55],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Outer glow */}
            <motion.div
              className="
                absolute
                left-1/2
                top-1/2

                h-6
                w-6

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-emerald-400/25

                blur-lg
              "
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.15, 0.7, 0.15],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Inner glow */}
            <motion.div
              className="
                absolute
                left-1/2
                top-1/2

                h-4
                w-4

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-emerald-300/40

                blur-sm
              "
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Neuron */}
            <div
              className="
                relative

                h-2.5
                w-2.5

                rounded-full

                border
                border-white

                bg-emerald-400

                shadow-[0_0_12px_rgba(16,185,129,.6)]
              "
            />
          </motion.div>
        );
      })}
    </div>
  );
}