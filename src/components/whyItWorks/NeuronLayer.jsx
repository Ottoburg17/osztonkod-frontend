/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { neurons } from "./neurons";

export default function NeuronLayer() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {neurons.map((neuron, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${neuron.x}%`,
            top: `${neuron.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.55, 1, 0.55],
          }}
          transition={{
            duration: 2.8 + (index % 4) * 0.4,
            delay: index * 0.12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Glow */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/30 blur-md"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.25, 0.8, 0.25],
            }}
            transition={{
              duration: 2.8 + (index % 4) * 0.4,
              delay: index * 0.12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Neuron */}
          <div className="relative h-2.5 w-2.5 rounded-full border border-white bg-emerald-400 shadow-lg" />
        </motion.div>
      ))}
    </div>
  );
}